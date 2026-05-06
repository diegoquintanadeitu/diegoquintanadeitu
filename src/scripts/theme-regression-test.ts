import { chromium, type Browser, type Page } from "playwright";

type ThemeName = "light" | "dark" | "sepia";

interface ThemeSnapshot {
  theme: ThemeName;
  htmlDataTheme: string | null;
  bodyDataTheme: string | null;
  htmlHasDarkClass: boolean;
  bodyBackground: string;
  heroTitleColor: string;
  footerBackground: string;
  footerTextColor: string;
  darkOptionColor: string;
  sepiaOptionColor: string;
}

const rgbFromCss = (value: string): { r: number; g: number; b: number } => {
  const match = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!match) {
    return { r: 0, g: 0, b: 0 };
  }

  return {
    r: Number.parseInt(match[1], 10),
    g: Number.parseInt(match[2], 10),
    b: Number.parseInt(match[3], 10),
  };
};

const luminance = ({
  r,
  g,
  b,
}: {
  r: number;
  g: number;
  b: number;
}): number => {
  const channel = (v: number): number => {
    const n = v / 255;
    return n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
  };

  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

const applyTheme = async (page: Page, theme: ThemeName): Promise<void> => {
  await page.evaluate(`(() => {
      localStorage.setItem("portfolio-theme", ${JSON.stringify(theme)});
    })()`);
  await page.reload({ waitUntil: "networkidle" });
};

const captureThemeSnapshot = async (
  page: Page,
  theme: ThemeName,
): Promise<ThemeSnapshot> => {
  return page.evaluate(`(() => {
      const themeValue = ${JSON.stringify(theme)};
      const pick = (selector) => document.querySelector(selector);

      const body = document.body;
      const root = document.documentElement;
      const heroTitle = pick("h1");
      const footer = pick("footer");
      const footerText = pick("footer p");
      const darkOption = pick("#theme-dark span");
      const sepiaOption = pick("#theme-sepia span");

      return {
        theme: themeValue,
        htmlDataTheme: root.getAttribute("data-theme"),
        bodyDataTheme: body.getAttribute("data-theme"),
        htmlHasDarkClass: root.classList.contains("dark"),
        bodyBackground: getComputedStyle(body).backgroundColor,
        heroTitleColor: heroTitle ? getComputedStyle(heroTitle).color : "",
        footerBackground: footer ? getComputedStyle(footer).backgroundColor : "",
        footerTextColor: footerText ? getComputedStyle(footerText).color : "",
        darkOptionColor: darkOption ? getComputedStyle(darkOption).color : "",
        sepiaOptionColor: sepiaOption ? getComputedStyle(sepiaOption).color : "",
      };
    })()`);
};

const fail = (message: string): never => {
  throw new Error(message);
};

const run = async (): Promise<void> => {
  const port = process.env.PORT || process.env.ASTRO_PORT || "4321";
  const baseUrl = `http://localhost:${port}`;

  console.log(`🧪 Theme regression test contra ${baseUrl}`);

  const browser: Browser = await chromium.launch();
  const page: Page = await browser.newPage();

  try {
    await page.goto(baseUrl, { waitUntil: "networkidle" });

    await applyTheme(page, "light");
    await page.waitForTimeout(150);
    const light = await captureThemeSnapshot(page, "light");

    await applyTheme(page, "dark");
    await page.waitForTimeout(150);
    const dark = await captureThemeSnapshot(page, "dark");

    await applyTheme(page, "sepia");
    await page.waitForTimeout(150);
    const sepia = await captureThemeSnapshot(page, "sepia");

    console.log("\n📊 Snapshot light:", light);
    console.log("\n📊 Snapshot dark:", dark);
    console.log("\n📊 Snapshot sepia:", sepia);

    if (dark.htmlDataTheme !== "dark" || dark.bodyDataTheme !== "dark") {
      fail("Dark no se refleja en data-theme de html/body");
    }

    if (!dark.htmlHasDarkClass) {
      fail("Dark no activa la clase dark en html");
    }

    const lightBodyLum = luminance(rgbFromCss(light.bodyBackground));
    const darkBodyLum = luminance(rgbFromCss(dark.bodyBackground));
    if (darkBodyLum >= lightBodyLum) {
      fail(
        `El fondo del body no se oscurece en dark (light=${light.bodyBackground}, dark=${dark.bodyBackground})`,
      );
    }

    const lightFooterLum = luminance(rgbFromCss(light.footerBackground));
    const darkFooterLum = luminance(rgbFromCss(dark.footerBackground));
    if (darkFooterLum >= lightFooterLum) {
      fail(
        `El footer no se oscurece en dark (light=${light.footerBackground}, dark=${dark.footerBackground})`,
      );
    }

    if (light.darkOptionColor !== "rgb(55, 65, 81)") {
      fail(
        `En light, Tema Oscuro debe verse gris y se obtuvo ${light.darkOptionColor}`,
      );
    }

    if (dark.sepiaOptionColor !== "rgb(255, 255, 255)") {
      fail(
        `En dark, Tema Sepia debe verse blanco y se obtuvo ${dark.sepiaOptionColor}`,
      );
    }

    if (sepia.darkOptionColor !== "rgb(55, 65, 81)") {
      fail(
        `En sepia, Tema Oscuro debe verse gris y se obtuvo ${sepia.darkOptionColor}`,
      );
    }

    console.log(
      "\n✅ Test OK: dark aplica en root/fondo/footer y el selector respeta los colores por tema",
    );
  } finally {
    await browser.close();
  }
};

run().catch((error) => {
  console.error("❌ Theme regression test falló:", error.message);
  process.exit(1);
});

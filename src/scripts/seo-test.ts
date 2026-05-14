import { chromium, type Browser, type Page } from "playwright";

interface SeoResult {
  url: string;
  pass: boolean;
  checks: SeoCheck[];
}

interface SeoCheck {
  name: string;
  pass: boolean;
  value?: string;
  message?: string;
}

const PAGES = ["/", "/curriculum-vitae"];

const MIN_DESCRIPTION_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 160;
const MIN_TITLE_LENGTH = 10;
const MAX_TITLE_LENGTH = 60;

const checkMeta = async (page: Page, url: string): Promise<SeoResult> => {
  const checks: SeoCheck[] = [];

  // --- lang ---
  const lang = await page.evaluate(() =>
    document.documentElement.getAttribute("lang"),
  );
  checks.push({
    name: "html[lang] definido",
    pass: Boolean(lang && lang.length > 0),
    value: lang ?? undefined,
    message: lang ? undefined : "Falta el atributo lang en <html>",
  });
  checks.push({
    name: "html[lang] es español (es / es-*)",
    pass: Boolean(lang?.startsWith("es")),
    value: lang ?? undefined,
    message: lang?.startsWith("es")
      ? undefined
      : `lang="${lang}" no es español`,
  });

  // --- title ---
  const title = await page.title();
  checks.push({
    name: "title presente",
    pass: title.length > 0,
    value: title,
  });
  checks.push({
    name: `title entre ${MIN_TITLE_LENGTH} y ${MAX_TITLE_LENGTH} chars`,
    pass: title.length >= MIN_TITLE_LENGTH && title.length <= MAX_TITLE_LENGTH,
    value: `${title.length} chars`,
    message:
      title.length < MIN_TITLE_LENGTH
        ? "Title demasiado corto"
        : title.length > MAX_TITLE_LENGTH
          ? "Title demasiado largo (puede truncarse en Google)"
          : undefined,
  });

  // --- meta description ---
  const description = await page.evaluate(
    () =>
      document
        .querySelector('meta[name="description"]')
        ?.getAttribute("content") ?? "",
  );
  checks.push({
    name: "meta description presente",
    pass: description.length > 0,
    value: description.slice(0, 80) + (description.length > 80 ? "…" : ""),
  });
  checks.push({
    name: `description entre ${MIN_DESCRIPTION_LENGTH} y ${MAX_DESCRIPTION_LENGTH} chars`,
    pass:
      description.length >= MIN_DESCRIPTION_LENGTH &&
      description.length <= MAX_DESCRIPTION_LENGTH,
    value: `${description.length} chars`,
    message:
      description.length < MIN_DESCRIPTION_LENGTH
        ? "Description muy corta"
        : description.length > MAX_DESCRIPTION_LENGTH
          ? "Description muy larga (puede truncarse en Google)"
          : undefined,
  });

  // --- canonical ---
  const canonical = await page.evaluate(
    () =>
      document.querySelector('link[rel="canonical"]')?.getAttribute("href") ??
      "",
  );
  checks.push({
    name: "canonical presente",
    pass: canonical.length > 0,
    value: canonical,
    message: canonical ? undefined : "Falta <link rel='canonical'>",
  });

  // --- Open Graph ---
  const ogChecks: Array<{ property: string; label: string }> = [
    { property: "og:title", label: "og:title" },
    { property: "og:description", label: "og:description" },
    { property: "og:url", label: "og:url" },
    { property: "og:type", label: "og:type" },
  ];
  for (const { property, label } of ogChecks) {
    const val = await page.evaluate(
      (prop) =>
        document
          .querySelector(`meta[property="${prop}"]`)
          ?.getAttribute("content") ?? "",
      property,
    );
    checks.push({
      name: `${label} presente`,
      pass: val.length > 0,
      value: val.slice(0, 60) || undefined,
      message: val ? undefined : `Falta <meta property="${property}">`,
    });
  }

  // --- robots ---
  const robots = await page.evaluate(
    () =>
      document.querySelector('meta[name="robots"]')?.getAttribute("content") ??
      "",
  );
  checks.push({
    name: "meta robots presente",
    pass: robots.length > 0,
    value: robots,
    message: robots ? undefined : "Falta <meta name='robots'>",
  });
  checks.push({
    name: "meta robots no bloquea indexación",
    pass: !robots.includes("noindex"),
    message: robots.includes("noindex") ? "noindex detectado" : undefined,
  });

  // --- h1 ---
  const h1Count = await page.evaluate(
    () => document.querySelectorAll("h1").length,
  );
  checks.push({
    name: "exactamente 1 <h1>",
    pass: h1Count === 1,
    value: `${h1Count} h1`,
    message:
      h1Count === 0
        ? "No hay h1"
        : h1Count > 1
          ? `${h1Count} h1 encontrados`
          : undefined,
  });

  // --- imágenes con alt ---
  const imagesWithoutAlt = await page.evaluate(
    () =>
      Array.from(document.querySelectorAll("img")).filter(
        (img) => !img.getAttribute("alt") && img.getAttribute("alt") !== "",
      ).length,
  );
  checks.push({
    name: "todas las imágenes tienen alt",
    pass: imagesWithoutAlt === 0,
    value: `${imagesWithoutAlt} sin alt`,
    message:
      imagesWithoutAlt > 0
        ? `${imagesWithoutAlt} imagen(es) sin atributo alt`
        : undefined,
  });

  return {
    url,
    pass: checks.every((c) => c.pass),
    checks,
  };
};

const printResult = (result: SeoResult): void => {
  const icon = result.pass ? "✅" : "❌";
  console.log(`\n${icon} ${result.url}`);
  for (const check of result.checks) {
    const mark = check.pass ? "  ✓" : "  ✗";
    const detail = check.value ? ` → ${check.value}` : "";
    const msg = check.message ? ` (${check.message})` : "";
    console.log(`${mark} ${check.name}${detail}${msg}`);
  }
};

const run = async (): Promise<void> => {
  const port = process.env.PORT || process.env.ASTRO_PORT || "4321";
  const baseUrl = `http://localhost:${port}`;
  console.log(`\n🔍 SEO test contra ${baseUrl}\n${"─".repeat(50)}`);

  const browser: Browser = await chromium.launch();
  const page: Page = await browser.newPage();
  const allResults: SeoResult[] = [];
  let totalChecks = 0;
  let passedChecks = 0;

  try {
    for (const path of PAGES) {
      await page.goto(`${baseUrl}${path}`, { waitUntil: "networkidle" });
      const result = await checkMeta(page, path);
      allResults.push(result);
      printResult(result);
    }

    for (const r of allResults) {
      totalChecks += r.checks.length;
      passedChecks += r.checks.filter((c) => c.pass).length;
    }

    const score = Math.round((passedChecks / totalChecks) * 100);
    const allPassed = allResults.every((r) => r.pass);

    console.log(`\n${"─".repeat(50)}`);
    console.log(`📊 Score: ${passedChecks}/${totalChecks} (${score}%)`);

    if (allPassed) {
      console.log("🎉 Todos los checks SEO pasaron correctamente.\n");
    } else {
      process.exitCode = 1;
    }
  } finally {
    await browser.close();
  }
};

run().catch((err) => {
  console.error("Error inesperado:", err);
  process.exit(1);
});

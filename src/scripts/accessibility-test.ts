import { chromium, type Browser, type Page } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import type { AxeResults, Result } from "axe-core";

interface ViolationSummary {
  critical: number;
  serious: number;
  moderate: number;
  minor: number;
}

interface ContrastIssue {
  selector: string;
  text: string;
  contrastRatio: number;
  requiredRatio: number;
  foreground: string;
  background: string;
}

interface ThemeResult {
  theme: string;
  homepage: AxeResults;
  contrastIssues: ContrastIssue[];
}

const analyzeAccessibility = async (): Promise<void> => {
  console.log("🔍 Iniciando análisis de accesibilidad del portfolio...\n");

  // Configurar puerto dinámicamente
  const port = process.env.PORT || process.env.ASTRO_PORT || "4321";
  const baseUrl = `http://localhost:${port}`;

  console.log(`🌐 Usando servidor en: ${baseUrl}`);

  const browser: Browser = await chromium.launch();
  const context = await browser.newContext();
  const page: Page = await context.newPage();

  const themes = ["light", "dark", "sepia"] as const;
  const allResults: ThemeResult[] = [];

  try {
    for (const theme of themes) {
      console.log(`\n🎨 === PROBANDO TEMA: ${theme.toUpperCase()} ===`);

      // Test homepage with theme
      console.log(`📄 Analizando página principal (tema ${theme})...`);
      await page.goto(baseUrl);
      await page.waitForLoadState("networkidle");

      // Set theme via localStorage
      await page.evaluate((themeValue) => {
        localStorage.setItem("portfolio-theme", themeValue);
        document.body.setAttribute("data-theme", themeValue);
        document.documentElement.classList.toggle(
          "dark",
          themeValue === "dark",
        );
      }, theme);

      // Wait a bit for theme to apply
      await page.waitForTimeout(500);

      const homepageResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();

      const contrastIssues = await collectContrastIssues(page);

      console.log(
        `✅ Página principal (${theme}): ${homepageResults.violations.length} violaciones encontradas`,
      );

      console.log(
        `🎯 Contraste (${theme}): ${contrastIssues.length} problemas encontrados`,
      );

      if (homepageResults.violations.length > 0) {
        console.log(
          `\n🚨 VIOLACIONES EN PÁGINA PRINCIPAL (${theme.toUpperCase()}):`,
        );
        displayViolations(homepageResults.violations);
      }

      if (contrastIssues.length > 0) {
        console.log(`\n🌓 PROBLEMAS DE CONTRASTE (${theme.toUpperCase()}):`);
        displayContrastIssues(contrastIssues);
      }

      allResults.push({
        theme,
        homepage: homepageResults,
        contrastIssues,
      });
    }

    // Display comprehensive summary
    displayComprehensiveSummary(allResults);
  } catch (error) {
    console.error("❌ Error durante el análisis:", (error as Error).message);
    process.exit(1);
  } finally {
    await browser.close();
  }

  // Exit with error if any violations found
  const totalViolations = allResults.reduce(
    (total, result) =>
      total + result.homepage.violations.length + result.contrastIssues.length,
    0,
  );

  if (totalViolations > 0) {
    process.exit(1);
  }
};

const displayViolations = (violations: Result[]): void => {
  violations.forEach((violation, index) => {
    console.log(
      `\n${index + 1}. ${violation.id} (Impacto: ${violation.impact})`,
    );
    console.log(`   📝 ${violation.description}`);
    console.log(`   🎯 Elementos afectados: ${violation.nodes.length}`);

    if (violation.helpUrl) {
      console.log(`   📚 Más info: ${violation.helpUrl}`);
    }

    violation.nodes.slice(0, 3).forEach((node, nodeIndex) => {
      console.log(`   • Elemento ${nodeIndex + 1}: ${node.target.join(", ")}`);
      if (node.failureSummary) {
        console.log(`     ❌ ${node.failureSummary.split("\\n")[0]}`);
      }
    });

    if (violation.nodes.length > 3) {
      console.log(`   ... y ${violation.nodes.length - 3} elementos más`);
    }
  });
};

const displayContrastIssues = (issues: ContrastIssue[]): void => {
  issues.slice(0, 8).forEach((issue, index) => {
    console.log(
      `\n${index + 1}. ${issue.selector} → ratio ${issue.contrastRatio.toFixed(2)}:1 (mínimo ${issue.requiredRatio}:1)`,
    );
    console.log(`   📝 Texto: ${issue.text}`);
    console.log(`   🎨 FG ${issue.foreground} / BG ${issue.background}`);
  });

  if (issues.length > 8) {
    console.log(`\n   ... y ${issues.length - 8} problemas más`);
  }
};

const collectContrastIssues = async (page: Page): Promise<ContrastIssue[]> => {
  return page.evaluate(`(() => {
    const parseColor = (value) => {
      if (!value || value === 'transparent') return null;

      if (value.startsWith('#')) {
        const hex = value.slice(1);
        const normalized = hex.length === 3
          ? hex.split('').map((char) => char + char).join('')
          : hex;

        if (normalized.length !== 6) return null;

        return {
          r: Number.parseInt(normalized.slice(0, 2), 16),
          g: Number.parseInt(normalized.slice(2, 4), 16),
          b: Number.parseInt(normalized.slice(4, 6), 16),
          a: 1,
        };
      }

      const match = value.match(/rgba?\\(([^)]+)\\)/i);
      if (!match) return null;
      const parts = match[1].split(',').map((part) => Number.parseFloat(part.trim()));
      if (parts.length < 3) return null;

      return { r: parts[0], g: parts[1], b: parts[2], a: parts[3] ?? 1 };
    };

    const blend = (fg, bg) => {
      const alpha = fg.a + bg.a * (1 - fg.a);
      if (alpha === 0) return { r: 255, g: 255, b: 255, a: 0 };

      return {
        r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
        g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
        b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
        a: alpha,
      };
    };

    const luminance = (rgb) => {
      const channel = (value) => {
        const normalized = value / 255;
        return normalized <= 0.03928
          ? normalized / 12.92
          : ((normalized + 0.055) / 1.055) ** 2.4;
      };

      return 0.2126 * channel(rgb.r) + 0.7152 * channel(rgb.g) + 0.0722 * channel(rgb.b);
    };

    const contrastRatio = (fg, bg) => {
      const light = Math.max(luminance(fg), luminance(bg));
      const dark = Math.min(luminance(fg), luminance(bg));
      return (light + 0.05) / (dark + 0.05);
    };

    const isVisible = (element) => {
      const styles = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return !element.hidden && styles.display !== 'none' && styles.visibility !== 'hidden' && Number.parseFloat(styles.opacity) > 0 && rect.width > 0 && rect.height > 0;
    };

    const elementSelector = (element) => {
      if (element.id) return '#' + element.id;
      const className = String(element.className || '')
        .split(' ')
        .filter(Boolean)
        .slice(0, 3)
        .join('.');
      return element.tagName.toLowerCase() + (className ? '.' + className : '');
    };

    const getEffectiveBackground = (element) => {
      const ancestry = [];
      let current = element;
      while (current) {
        ancestry.unshift(current);
        current = current.parentElement;
      }

      let background = { r: 255, g: 255, b: 255, a: 1 };
      ancestry.forEach((node) => {
        const parsed = parseColor(getComputedStyle(node).backgroundColor);
        if (parsed && parsed.a > 0) background = blend(parsed, background);
      });

      return background;
    };

    const issues = Array.from(document.querySelectorAll('body *'))
      .filter((element) => isVisible(element))
      .filter((element) => Array.from(element.childNodes).some((node) => node.nodeType === Node.TEXT_NODE && node.textContent && node.textContent.trim()))
      .map((element) => {
        const style = getComputedStyle(element);
        if (style.backgroundClip === 'text' || style.webkitBackgroundClip === 'text') {
          return null;
        }
        const fg = parseColor(style.color);
        if (!fg) return null;
        const bg = getEffectiveBackground(element);
        const ratio = contrastRatio(fg, bg);
        const fontSize = Number.parseFloat(style.fontSize);
        const fontWeight = Number.parseInt(style.fontWeight, 10) || 400;
        const isLargeText = fontSize >= 24 || (fontSize >= 18.66 && fontWeight >= 700);
        const requiredRatio = isLargeText ? 3 : 4.5;
        if (ratio >= requiredRatio) return null;

        return {
          selector: elementSelector(element),
          text: (element.textContent || '').trim().slice(0, 80),
          contrastRatio: Number(ratio.toFixed(2)),
          requiredRatio,
          foreground: 'rgb(' + Math.round(fg.r) + ', ' + Math.round(fg.g) + ', ' + Math.round(fg.b) + ')',
          background: 'rgb(' + Math.round(bg.r) + ', ' + Math.round(bg.g) + ', ' + Math.round(bg.b) + ')',
        };
      })
      .filter(Boolean);

    const deduped = new Map();
    issues.forEach((issue) => {
      const key = issue.selector + '-' + issue.text;
      if (!deduped.has(key)) deduped.set(key, issue);
    });

    return Array.from(deduped.values());
  })()`);
};

const displayComprehensiveSummary = (allResults: ThemeResult[]): void => {
  console.log("\n" + "=".repeat(80));
  console.log("📊 RESUMEN COMPLETO DE ACCESIBILIDAD - PORTFOLIO");
  console.log("=".repeat(80));

  const totalViolations = allResults.reduce(
    (total, result) =>
      total + result.homepage.violations.length + result.contrastIssues.length,
    0,
  );

  console.log(
    `🎨 Temas analizados: ${allResults.length} (${allResults
      .map((r) => r.theme)
      .join(", ")})`,
  );
  console.log(
    `📄 Páginas analizadas: 1 (Principal con ${allResults.length} temas)`,
  );
  console.log(`🔍 Total tests ejecutados: ${allResults.length}`);
  console.log(`🚨 Total de violaciones: ${totalViolations}`);

  // Resumen por tema
  console.log("\n📋 RESUMEN POR TEMA:");
  allResults.forEach((result) => {
    const themeViolations =
      result.homepage.violations.length + result.contrastIssues.length;
    const status = themeViolations === 0 ? "✅" : "⚠️";
    console.log(
      `   ${status} ${result.theme.toUpperCase()}: ${themeViolations} problemas (${result.homepage.violations.length} axe + ${result.contrastIssues.length} contraste)`,
    );
  });

  if (totalViolations === 0) {
    console.log(
      "\n🎉 ¡EXCELENTE! Tu portfolio cumple con los estándares WCAG 2.1 AA",
    );
    console.log(
      "✅ Todos los temas (Light, Dark, Sepia) pasan las pruebas de accesibilidad",
    );
    console.log(
      "🏆 Portfolio completamente accesible en todas las configuraciones visuales",
    );
  } else {
    console.log(
      "\n⚠️  Se encontraron problemas de accesibilidad que deben corregirse:",
    );

    // Agrupar todas las violaciones de todos los temas
    const allViolations: Result[] = [];
    allResults.forEach((result) => {
      allViolations.push(...result.homepage.violations);
    });

    const summary: ViolationSummary = {
      critical: allViolations.filter((v) => v.impact === "critical").length,
      serious: allViolations.filter((v) => v.impact === "serious").length,
      moderate: allViolations.filter((v) => v.impact === "moderate").length,
      minor: allViolations.filter((v) => v.impact === "minor").length,
    };

    if (summary.critical > 0)
      console.log(`   🔴 Críticas: ${summary.critical}`);
    if (summary.serious > 0) console.log(`   🟠 Serias: ${summary.serious}`);
    if (summary.moderate > 0)
      console.log(`   🟡 Moderadas: ${summary.moderate}`);
    if (summary.minor > 0) console.log(`   🟢 Menores: ${summary.minor}`);

    console.log("\n💡 Próximos pasos:");
    console.log("   • Revisar las violaciones por tema específico");
    console.log("   • Verificar contrastes en Light, Dark y Sepia");
    console.log("   • Asegurar elementos focusables en todos los temas");
  }

  console.log("\n🛠️  Herramientas recomendadas:");
  console.log("   • Chrome DevTools > Lighthouse (probar cada tema)");
  console.log("   • axe DevTools extension");
  console.log("   • WAVE Web Accessibility Evaluator");
  console.log("   • Color contrast analyzers para todos los temas");

  console.log(
    "\n🎨 Nota: Se prueban los tres temas del portfolio (Light/Dark/Sepia)",
  );
  console.log(
    "   • Los temas afectan colores, contrastes y elementos visuales",
  );
  console.log("   • Ambos deben cumplir estándares WCAG 2.1 AA");
};

// Ejecutar el análisis
analyzeAccessibility().catch((error) => {
  console.error("💥 Error fatal:", error);
  process.exit(1);
});

import { chromium, type Browser, type Page } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import type { AxeResults, Result } from "axe-core";

interface ViolationSummary {
  critical: number;
  serious: number;
  moderate: number;
  minor: number;
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

  const themes = ["light", "dark"];
  const allResults: { theme: string; homepage: AxeResults }[] = [];

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
      }, theme);

      // Wait a bit for theme to apply
      await page.waitForTimeout(500);

      const homepageResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();

      console.log(
        `✅ Página principal (${theme}): ${homepageResults.violations.length} violaciones encontradas`,
      );

      if (homepageResults.violations.length > 0) {
        console.log(
          `\n🚨 VIOLACIONES EN PÁGINA PRINCIPAL (${theme.toUpperCase()}):`,
        );
        displayViolations(homepageResults.violations);
      }

      allResults.push({
        theme,
        homepage: homepageResults,
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
    (total, result) => total + result.homepage.violations.length,
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

const displayComprehensiveSummary = (
  allResults: { theme: string; homepage: AxeResults }[],
): void => {
  console.log("\n" + "=".repeat(80));
  console.log("📊 RESUMEN COMPLETO DE ACCESIBILIDAD - PORTFOLIO");
  console.log("=".repeat(80));

  const totalViolations = allResults.reduce(
    (total, result) => total + result.homepage.violations.length,
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
    const themeViolations = result.homepage.violations.length;
    const status = themeViolations === 0 ? "✅" : "⚠️";
    console.log(
      `   ${status} ${result.theme.toUpperCase()}: ${themeViolations} violaciones`,
    );
  });

  if (totalViolations === 0) {
    console.log(
      "\n🎉 ¡EXCELENTE! Tu portfolio cumple con los estándares WCAG 2.1 AA",
    );
    console.log(
      "✅ Todos los temas (Light, Dark) pasan las pruebas de accesibilidad",
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
    console.log("   • Verificar contrastes en modo Dark");
    console.log("   • Asegurar elementos focusables en todos los temas");
  }

  console.log("\n🛠️  Herramientas recomendadas:");
  console.log("   • Chrome DevTools > Lighthouse (probar cada tema)");
  console.log("   • axe DevTools extension");
  console.log("   • WAVE Web Accessibility Evaluator");
  console.log("   • Color contrast analyzers para todos los temas");

  console.log("\n🎨 Nota: Se prueban ambos temas del portfolio (Light/Dark)");
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

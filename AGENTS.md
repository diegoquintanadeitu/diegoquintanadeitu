# AGENTS - diegoquintanadeitu

Project context
- Product: Astro portfolio with quality checks (a11y/seo/type safety).
- Stack: Astro 6, Tailwind 4, TypeScript, Playwright, axe-core.
- Runtime: Node + npm.

Source of truth
- Product map: ../workspace_summary.md
- Package scripts: package.json
- Contribution flow: docs/CONTRIBUTING.md
- Main code: src/pages, src/components, src/layouts, src/services

Operating rules for agents
1. Work only inside `diegoquintanadeitu`.
2. Respect existing quality workflow; do not bypass checks.
3. Keep portfolio accessibility/SEO constraints in scope.

Allowed commands
- npm install
- npm run dev
- npm run type-check
- npm run build
- npm run a11y:quick
- npm run test:seo
- npm run test:full

Required validation before completion
1. Run npm run type-check.
2. Run npm run build.
3. For UI/content structure changes, run npm run a11y:quick.

Definition of done
1. Type-check and build pass.
2. Accessibility quick check passes for affected pages.
3. Any SEO/content impact is explicitly documented.

Known risks
- CI/deploy rules are stricter than other repos.
- Portfolio regressions can affect public pages directly.

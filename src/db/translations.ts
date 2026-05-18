/**
 * English translations for the CV page.
 * Arrays are ordered to match the corresponding arrays in data.ts.
 */
export const cvTranslationsEn = {
  bio: [
    `8 years of experience in product teams, from startups to fintechs like Ualá, delivering features with quality, on time, and within an agile team.
My main stack is TypeScript + React + Next.js, with experience in backend for frontend, relational databases, and modern deployment. Currently expanding into AWS to achieve end-to-end mastery of the full lifecycle of a production application.`,
    `I use AI as a development copilot, a practice that accelerates delivery, improves code quality, and lets me focus on what generates value.`,
    `I bring a product mindset, move fast, and take ownership end-to-end — from frontend UX to backend integrations and infrastructure.`,
    `Looking for remote projects where I can contribute from day one. Open to remote opportunities in LATAM.`,
  ],

  timeline: [
    // 0: Ualá
    {
      description: `I worked in agile and multidisciplinary teams developing production web applications with React. I implemented CI/CD pipelines with GitHub Actions, reducing the deploy process from 15-minute manual meetings to an automated 5-minute action — and actively drove the adoption of new technologies within the team.`,
      achievements: [
        "Integrated **Auth0** with universal login — eliminating custom authentication flows and improving security and UX",
        "Automated the deploy pipeline with **GitHub Actions** — reducing the process from 15 manual minutes to 5 minutes without human intervention",
        "Migrated class to functional components in React, reducing complexity and leaving the codebase ready for modern hooks",
        "Added unit tests with **Vitest**, raising code quality before each release",
        "Integrated the **MercadoPago** SDK for recurring subscriptions — enabling a billing model that previously didn't exist in the product",
        "Audited and cleaned up project dependencies — eliminating vulnerabilities detected by GitHub and reducing the attack surface",
        "Gave internal talks on design system and best practices — accelerating adoption of standards and reducing visual inconsistencies across teams",
        "Mentored developers, sharing technical judgment and helping raise the team's overall level",
      ],
    },
    // 1: Globant
    {
      description: `**Successful transition** to modern web technologies, **advanced specialization** in JavaScript/TypeScript. Development of components for the **design system** of a major international airline in **React and React Native** — impacting millions of users.`,
      achievements: [
        "**Technical leadership**: delivered internal talks on hooks and React best practices",
        "**Successful migration** of legacy products to the design system, improving consistency",
        "**Effective mentoring** of junior developers, implementing best practices",
        "**Strategic communication** with multidisciplinary teams — ensuring quality and consistency in the **design system** through collaboration with designers, developers and stakeholders — improving user experience and development efficiency",
      ],
    },
    // 2: Equipo médico
    {
      description: `Developed and maintained internal applications with **C# and .NET** in a Microsoft environment, managing databases in **SQL Server** and migrating critical modules for continuous improvement.`,
      achievements: [
        "Automated internal manual processes with scripts and stored procedures in **SQL Server** — eliminating repetitive tasks for operational staff",
        "Developed new modules integrated into the existing management system, covering specific business needs not contemplated in the original software",
      ],
    },
    // 3: INNEW
    {
      description: `First professional role developing and maintaining business management applications with **Visual Basic 6** and **MS Access**, incorporating **SQL Server** for more complex operations. Participated in the full cycle: new module development, support, bug fixing, and end-user training.`,
      achievements: [
        "Developed a new module integrated into the existing system to cover an operational need that was being managed manually",
        "Created reports with **Crystal Reports** for data analysis and internal management tracking",
        "Implemented and maintained **stored procedures** in SQL Server for critical business operations",
        "Resolved data synchronization between branches and central server during MSSQL replication failures — applying manual migrations by query",
        "Trained end users in system usage and provided ongoing support, reducing technical team dependency for day-to-day operations",
        "Migrated modules from **Visual Basic 6** to **C# .NET + Vue.js** — reducing technical debt and facilitating long-term maintenance",
      ],
    },
  ],

  softSkills: {
    Adaptabilidad: {
      name: "Adaptability",
      description:
        "Fast learning of new technologies and flexibility in the face of technological changes",
    },
    "Comunicación efectiva": {
      name: "Effective Communication",
      description:
        "Ability to convey complex technical concepts clearly and facilitate dialogue between teams",
    },
    "Trabajo en equipo": {
      name: "Teamwork",
      description:
        "Active and constructive participation in multidisciplinary teams, promoting collective growth and clarity in advancement and completion criteria",
    },
    "Liderazgo técnico": {
      name: "Technical Leadership",
      description:
        "I drive technical teams combining strategic vision, mentoring and collaboration to achieve ambitious goals",
    },
    "Resolución de problemas": {
      name: "Problem Solving",
      description:
        "Methodical approach to complex challenges, validating hypotheses with proof of concepts and technical exploration. Implementation of robust and scalable solutions",
    },
    "Gestión de proyectos": {
      name: "Project Management",
      description:
        "Planning and tracking of technical objectives with efficient management of resources and timelines",
    },
    "Pensamiento analítico": {
      name: "Analytical Thinking",
      description:
        "Deep evaluation of technical solutions and data-driven decision making",
    },
    Mentoring: {
      name: "Mentoring",
      description:
        "Guidance and development of junior technical talent, sharing knowledge and best practices",
    },
  } as Record<string, { name: string; description: string }>,

  projects: [
    // 0: Portfolio Profesional
    {
      title: "Professional Portfolio",
      description:
        "Modern and responsive website built with Astro, TypeScript and Tailwind CSS. Includes CalVer versioning system and CI/CD.",
    },
  ],

  education: [
    // 0: Autoformación Continua
    {
      title: "Continuous Self-Training in Web Technologies",
      description:
        "Progressive self-directed learning: from vanilla JavaScript to React and TypeScript, then Next.js for full-stack. Mastery of modern tools (**Vercel, GitHub Actions, Tailwind CSS, Astro**) through official documentation, specialized courses and real project development. Successful migration from legacy stack to modern architectures, applying new knowledge in professional roles and personal projects.",
    },
    // 1: Licenciatura
    {
      title: "Bachelor's Degree in Information Systems",
      description:
        "Comprehensive technical education in programming fundamentals, systems analysis and software development. Emphasis on programming logic, data structures and development methodologies.",
    },
  ],
};

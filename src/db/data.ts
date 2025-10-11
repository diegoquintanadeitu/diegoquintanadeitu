import type { Profile, SkillCategories, TimelineItem, Project } from "@/types";

export type Theme = "light" | "dark";

export type ThemeColors = {
  [key in Theme]: {
    primary: string;
    secondary: string;
    accent: string;
  };
};

export const data = {
  profile: {
    name: "Diego Daniel Martin Quintana",
    role: "Desarrollador Full Stack",
    bio: [
      "Sólida experiencia en evolución tecnológica continua. Mi trayectoria abarca desde Visual Basic 6 y C# hasta tecnologías modernas como TypeScript, React y Astro, adaptándome constantemente a las mejores prácticas del desarrollo actual.",
      "Me especializo en crear soluciones eficientes y escalables, optimizando el rendimiento de aplicaciones y manteniendo un enfoque profesional en cada proyecto. Mi experiencia incluye tanto desarrollo backend como frontend, con dominio en bases de datos y deployment moderno.",
    ],
  } as Profile,

  skillCategories: {
    technical: [
      "Git",
      "HTML",
      "CSS",
      "React",
      "Vitest",
      "TypeScript",
      "Design System",
      "SQL",
    ],
    frameworks: ["Astro", "Next.js", "Tailwind CSS"],
    tools: ["npm", "Figma", "Vercel", "Postman", "VS Code + copilot"],
    soft: {
      Adaptabilidad:
        "Rápido aprendizaje de nuevas tecnologías y flexibilidad ante cambios tecnológicos",
      "Comunicación efectiva":
        "Habilidad para transmitir conceptos técnicos complejos de manera clara y facilitar el diálogo entre equipos",
      "Trabajo en equipo":
        "Participación activa y constructiva en equipos multidisciplinarios, promoviendo el crecimiento colectivo y la claridad en los criterios de avance y finalización.",
      "Liderazgo técnico":
        "Impulso equipos técnicos combinando visión estratégica, mentoreo y colaboración para alcanzar objetivos ambiciosos",
      "Resolución de problemas":
        "Abordaje metódico de desafíos complejos, validando hipótesis con pruebas de concepto y exploración técnica. Implementación de soluciones robustas y escalables.",
      "Gestión de proyectos":
        "Planificación y seguimiento de objetivos técnicos con gestión eficiente de recursos y tiempos",
      "Pensamiento analítico":
        "Evaluación profunda de soluciones técnicas y toma de decisiones basada en datos",
      Mentoring:
        "Guía y desarrollo de talento técnico junior, compartiendo conocimientos y mejores prácticas",
    },
  } as SkillCategories,

  timeline: [
    {
      period: "2022 - 2025",
      title: "Web Developer",
      description:
        "Formo parte de un equipo de desarrollo ágil, multidisciplinario, donde colaboro en la creación de aplicaciones web modernas y escalables. Mi enfoque está en la implementación de soluciones eficientes utilizando TypeScript + Next.js, asegurando un alto rendimiento y la excelencia en la experiencia de usuario. Este es el 3er equipo en el que participo, y he contribuido significativamente a la mejora de procesos (CI/CD) y la adopción de nuevas tecnologías.",
      technologies: [
        "TypeScript",
        "React",
        "Vercel",
        "Github actions",
        "tailwind",
        "Next.js",
      ],
      achievements: [
        "Implementación de universal login con Auth0",
        "Automatización de deploys con github actions",
        "Migración de componentes de clase a funcional",
        "Implementación de pruebas unitarias con Vitest",
        "Uso del sdk de mercadopago, funcionalidad suscripcciones",
        "Actualización, limpieza de dependencias y disminución de vulnerabilidades",
      ],
    },
    {
      period: "2020 - 2022",
      title: "Frontend Developer",
      description:
        "Transición hacia tecnologías web modernas, especialización en JavaScript/TypeScript, desarrollo de componentes del design system de importante aerolinea en react y react native",
      technologies: ["JavaScript", "React Native", "React", "Node.js"],
      achievements: [
        "Migración exitosa de productos legacy a componentes del design system",
        "Comunicación efectiva con equipos multidisciplinarios para asegurar la calidad y consistencia del producto final durante la adopción o la colaboración en el sistema de diseño",
        "Mentoría de desarrolladores junior y acompañamiento en la implementación de mejores prácticas",
      ],
    },
    {
      period: "2018 - 2020",
      title: "Desarrollador de Aplicaciones Empresariales",
      description:
        "Desarrollo en entorno Microsoft con C# y .NET, gestión de bases de datos SQL Server y mantenimiento de sistemas legacy en Visual Basic 6.",
      technologies: [
        "C#",
        ".NET",
        "SQL Server",
        "Visual Basic 6",
        "Windows Forms",
        "Javascript",
        "vuejs",
      ],
      achievements: [
        "Modernización de sistemas legacy y automatización de procesos",
        "Migración e integración de módulo nuevo de gestión de caja desde vb6 a vuejs",
        "Implementación de nuevas funcionalidades en sistemas existentes, mejorando la eficiencia operativa",
        "Migración de datos mediante consultas, ante la eventual caida en la conexión de una replica en mssql, que se realizaba desde los servidores de las sucursales hacia el servidor central",
      ],
    },
    {
      period: "2017 - 2018",
      title: "Programador Junior",
      description:
        "Inicio profesional desarrollando aplicaciones de gestión empresarial en Visual Basic 6, bases de datos Access y primeros pasos en SQL Server.",
      technologies: [
        "Visual Basic 6",
        "MS Access",
        "SQL Server",
        "Crystal Reports",
      ],
      achievements: [
        "Desarrollo de módulos críticos para gestión de inventarios",
        "Creación de reportes personalizados para análisis de datos",
        "Manejo e implementación de procedimientos almacenados en SQL Server",
      ],
    },
  ] as TimelineItem[],

  projects: [
    {
      title: "Portfolio Profesional",
      description:
        "Sitio web moderno y responsivo construido con Astro, TypeScript y Tailwind CSS. Incluye sistema de versionado CalVer y CI/CD.",
      technologies: ["Astro", "TypeScript", "Tailwind CSS", "GitHub Actions"],
      link: "https://github.com/diegoquintanadeitu/diegoquintanadeitu",
      year: 2025,
    },
  ] as Project[],

  techEvolution: [
    "VB6",
    "C#",
    "SQL",
    "JavaScript",
    "React Native",
    "TypeScript",
    "Astro",
    "Vercel",
  ] as string[],

  themeColors: {
    light: {
      primary: "#ffffff",
      secondary: "#f0f0f0",
      accent: "#007acc",
    },
    dark: {
      primary: "#1a1a1a",
      secondary: "#333333",
      accent: "#1e90ff",
    },
  } as ThemeColors,

  games: [
    {
      name: "Mario Kart 64 (Retrogames)",
      url: "46341-mario-kart-64-amped-up-v2-98.html",
      type: "external",
    },
    {
      name: "Killer Instinct (Retrogames)",
      url: "17355-killer-instinct-usa.html",
      type: "external",
    },
    {
      name: "🎮 Emulador Local (Sin CORS)",
      url: "/emulator",
      type: "local",
    },
  ],
};

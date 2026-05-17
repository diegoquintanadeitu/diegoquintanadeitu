import type {
  Profile,
  TechBadge,
  SkillCategories,
  TimelineItem,
  Project,
  Education,
  RoadmapProject,
} from "@/types";

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
    techStack: [
      { name: "TypeScript", color: "#3178c6", textColor: "#ffffff" },
      { name: "React", color: "#20232a", textColor: "#61dafb" },
      { name: "Next.js", color: "#000000", textColor: "#ffffff" },
      { name: "Tailwind CSS", color: "#0f172a", textColor: "#38bdf8" },
      { name: "AI ✦", color: "#7c3aed", textColor: "#ffffff" },
    ] as TechBadge[],
    bio: [
      `8 años de experiencia en equipos de producto, desde startups hasta fintechs como Ualá, entregando features con calidad, en tiempo y dentro de un equipo ágil.
Mi stack principal es TypeScript + React + Next.js, con experiencia en backend for frontend, bases de datos relacionales y deployment moderno. Actualmente expandiendo hacia AWS para tener dominio end-to-end del ciclo de vida de una aplicación en producción.`,
      `Trabajo con IA como copiloto de desarrollo, práctica que acelera la entrega, mejora la calidad del código y me permite enfocarme en lo que genera valor.`,
      `En proceso de formación en inglés técnico para colaborar con equipos regionales sin fricción.`,
      `Busco proyectos remotos donde pueda contribuir desde el entendimiento del contexto y aportar valor desde el inicio. Abierto a oportunidades remotas en LATAM.`,
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
      company: "Ualá",
      description:
        "Trabajé en equipos ágiles y multidisciplinarios desarrollando aplicaciones web con React en producción. Implementé pipelines de CI/CD con GitHub Actions, reduciendo el proceso de deploy de reuniones manuales de 15 minutos a una action automatizada de 5 minutos — y fui parte activa en la adopción de nuevas tecnologías dentro del equipo.",
      technologies: [
        "React",
        "Redux",
        "Vercel",
        "Next.js",
        "Zustand",
        "TypeScript",
        "Tailwind CSS",
        "Github Actions",
      ],
      achievements: [
        "Integré **Auth0** con universal login — eliminando flujos de autenticación custom y mejorando seguridad y UX",
        "Automaticé el pipeline de deploy con **GitHub Actions** — bajando el proceso de 15 minutos manuales a 5 minutos sin intervención humana",
        "Migré componentes de clase a funcional en React, reduciendo complejidad y dejando la codebase lista para hooks modernos",
        "Sumé pruebas unitarias con **Vitest**, elevando la calidad antes de cada release",
        "Integré el SDK de **MercadoPago** para suscripciones recurrentes — habilitando un modelo de facturación que antes no existía en el producto",
        "Audité y limpié dependencias del proyecto — eliminando vulnerabilidades detectadas por GitHub y reduciendo la superficie de ataque",
        "Di charlas internas sobre design system y buenas prácticas — acelerando la adopción de estándares y reduciendo inconsistencias visuales entre equipos",
        "Mentoreé desarrolladores, compartiendo criterio técnico y ayudando a subir el nivel general del equipo",
      ],
    },
    {
      period: "2020 - 2022",
      title: "Frontend Developer",
      company: "Globant",
      description:
        "**Transición exitosa** hacia tecnologías web modernas, **especialización avanzada** en JavaScript/TypeScript. Desarrollo de componentes del **design system** de importante aerolínea internacional en **React y React Native** - impactando millones de usuarios.",
      technologies: ["React", "Node.js", "JavaScript", "React Native"],
      achievements: [
        "**Liderazgo técnico**: presentación de charlas internas sobre hooks y mejores prácticas de React",
        "**Migración exitosa** de productos legacy al design system, mejorando consistencia",
        "**Mentoría efectiva** de desarrolladores junior, implementando mejores prácticas",
        "**Comunicación estratégica** con equipos multidisciplinarios - asegurando calidad y consistencia en el **design system** a través de la colaboración con diseñadores, desarrolladores y stakeholders - mejorando la experiencia del usuario y la eficiencia del desarrollo",
      ],
    },
    {
      period: "2018 - 2020",
      title: "Desarrollador de Aplicaciones Empresariales",
      company: "Equipo médico de emergencias Chaco SA",
      description:
        "Desarrollé y mantuve aplicaciones internas con **C# y .NET** en un entorno Microsoft, gestionando bases de datos en **SQL Server** y migrando módulos críticos en post de su mejora continua.",
      technologies: ["C#", ".NET", "SQL Server", "Windows Forms"],
      achievements: [
        "Automaticé procesos manuales internos con scripts y procedimientos almacenados en **SQL Server** — eliminando tareas repetitivas del personal operativo",
        "Desarrollé nuevos módulos integrados al sistema de gestión existente, cubriendo necesidades específicas del negocio que no estaban contempladas en el software original",
      ],
    },
    {
      period: "2017 - 2018",
      title: "Programador Junior",
      company: "INNEW",
      description:
        "Primer rol profesional desarrollando y manteniendo aplicaciones de gestión empresarial con **Visual Basic 6** y **MS Access**, incorporando **SQL Server** para operaciones más complejas. Participé en el ciclo completo: desarrollo de nuevos módulos, soporte, corrección de bugs y capacitación a usuarios finales.",
      technologies: [
        "Visual Basic 6",
        "MS Access",
        "SQL Server",
        "Crystal Reports",
        "JavaScript",
        "Vue.js",
      ],
      achievements: [
        "Desarrollé un módulo nuevo integrado al sistema existente para cubrir una necesidad operativa que se gestionaba manualmente",
        "Creé reportes con **Crystal Reports** para análisis de datos y seguimiento de gestión interna",
        "Implementé y mantuve **procedimientos almacenados** en SQL Server para operaciones críticas del negocio",
        "Resolví la sincronización de datos entre sucursales y servidor central ante caídas en la réplica MSSQL — aplicando migraciones manuales por consulta",
        "Capacité a usuarios finales en el uso del sistema y brindé soporte continuo, reduciendo la dependencia del equipo técnico para operaciones cotidianas",
        "Migré módulos de **Visual Basic 6** a **C# .NET + vue.js** — reduciendo deuda técnica y facilitando el mantenimiento a largo plazo",
      ],
    },
  ] as TimelineItem[],

  projects: [
    {
      title: "Portfolio Profesional",
      description:
        "Sitio web moderno y responsivo construido con Astro, TypeScript y Tailwind CSS. Incluye sistema de versionado CalVer y CI/CD.",
      technologies: ["Astro", "TypeScript", "Tailwind CSS", "GitHub Actions"],
      link: "https://github.com/diegoquintanadeitu/",
      year: 2025,
    },
  ] as Project[],

  education: [
    {
      period: "2016 - Actualidad",
      title: "Autoformación Continua en Tecnologías Web",
      description:
        "Aprendizaje autodidacta progresivo: desde JavaScript vanilla hacia React y TypeScript, luego Next.js para full-stack. Dominio de herramientas modernas (**Vercel, GitHub Actions, Tailwind CSS, Astro**) a través de documentación oficial, cursos especializados y construcción de proyectos reales. Migración exitosa del stack legacy hacia arquitecturas actuales, aplicando nuevos conocimientos en roles profesionales y proyectos personales.",
    },
    {
      period: "2010 - 2018",
      title: "Licenciatura en Sistemas de Información",
      institution: "**Universidad Nacional del Nordeste**",
      description:
        "Formación técnica integral en fundamentos de programación, análisis de sistemas y desarrollo de software. Énfasis en lógica de programación, estructuras de datos y metodologías de desarrollo.",
    },
  ] as Education[],

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

  roadmap: [
    {
      id: "vst-eq-caraduras-v2",
      title: "EQ Caraduras v2.0 - Advanced Features",
      description:
        "Expansión del plugin VST3 actual con características avanzadas: filtros adicionales, presets, análisis de espectro en tiempo real y optimizaciones de performance.",
      category: "audio",
      technologies: [
        "Rust",
        "nih-plug",
        "Vizia",
        "DSP",
        "JUCE (research)",
        "CLAP",
      ],
      status: "in-progress",
      priority: "high",
      estimatedDuration: "3-4 meses",
      startDate: "2025-01-15",
      repository: "https://github.com/diegoquintanadeitu/vst-eq-caraduras",
      learningGoals: [
        "Dominar algoritmos DSP avanzados en Rust",
        "Implementar análisis FFT en tiempo real",
        "Optimización de performance para low-latency",
        "Sistema de presets y persistencia",
        "Interfaz gráfica más compleja con Vizia",
      ],
      milestones: [
        {
          title: "Sistema de Presets",
          description: "Implementar guardado/carga de configuraciones de EQ",
          completed: false,
          dueDate: "2025-02-01",
        },
        {
          title: "Filtros Adicionales",
          description: "Agregar filtros high-pass, low-pass y notch",
          completed: false,
          dueDate: "2025-02-15",
        },
        {
          title: "Analizador de Espectro",
          description: "Visualización FFT en tiempo real",
          completed: false,
          dueDate: "2025-03-15",
        },
        {
          title: "Optimización Performance",
          description: "Reducir latencia y uso de CPU",
          completed: false,
          dueDate: "2025-04-01",
        },
      ],
    },
    {
      id: "vst-synthesizer",
      title: "Sintetizador VST3 - Caraduras Synth",
      description:
        "Desarrollo de un sintetizador virtual desde cero con osciladores, filtros, envolventes ADSR y efectos. Expandir conocimientos de síntesis de audio.",
      category: "audio",
      technologies: ["Rust", "nih-plug", "Vizia", "DSP", "MIDI"],
      status: "not-started",
      priority: "high",
      estimatedDuration: "4-5 meses",
      startDate: "2025-04-15",
      dependencies: ["vst-eq-caraduras-v2"],
      learningGoals: [
        "Síntesis de audio (osciladores, filtros)",
        "Procesamiento MIDI en tiempo real",
        "Envolventes ADSR y modulación",
        "Arquitectura de sintetizadores",
        "Efectos de audio (reverb, delay, chorus)",
      ],
      milestones: [
        {
          title: "Osciladores Básicos",
          description:
            "Implementar formas de onda: sine, saw, square, triangle",
          completed: false,
          dueDate: "2025-05-01",
        },
        {
          title: "Filtros y Envolventes",
          description: "Sistema ADSR y filtros resonantes",
          completed: false,
          dueDate: "2025-06-01",
        },
        {
          title: "Procesamiento MIDI",
          description: "Manejo completo de eventos MIDI",
          completed: false,
          dueDate: "2025-07-01",
        },
        {
          title: "Efectos Integrados",
          description: "Reverb, delay y modulación",
          completed: false,
          dueDate: "2025-08-15",
        },
      ],
    },
    {
      id: "audio-workstation",
      title: "Mini DAW - Estación de Audio Web",
      description:
        "Aplicación web para grabación, edición y mezcla de audio usando Web Audio API. Integrar conocimientos de audio con desarrollo web avanzado.",
      category: "web",
      technologies: [
        "TypeScript",
        "React",
        "Web Audio API",
        "WebRTC",
        "Tauri",
        "Rust",
      ],
      status: "not-started",
      priority: "medium",
      estimatedDuration: "5-6 meses",
      startDate: "2025-09-01",
      dependencies: ["vst-synthesizer"],
      learningGoals: [
        "Web Audio API avanzada",
        "WebRTC para colaboración en tiempo real",
        "Tauri para aplicaciones desktop híbridas",
        "Manejo de archivos de audio grandes",
        "Sincronización de audio precisa",
      ],
      milestones: [
        {
          title: "Reproductor/Grabador Básico",
          description: "Funcionalidad core de audio",
          completed: false,
          dueDate: "2025-10-01",
        },
        {
          title: "Editor de Forma de Onda",
          description: "Visualización y edición de audio",
          completed: false,
          dueDate: "2025-11-01",
        },
        {
          title: "Mezclador Virtual",
          description: "Múltiples tracks y efectos",
          completed: false,
          dueDate: "2025-12-01",
        },
      ],
    },
    {
      id: "ai-audio-assistant",
      title: "Asistente IA para Producción Musical",
      description:
        "Sistema de IA que analiza audio y sugiere ajustes de EQ, compresión y efectos. Combinar machine learning con processing de audio.",
      category: "ai",
      technologies: [
        "Python",
        "TensorFlow",
        "librosa",
        "FastAPI",
        "Rust (FFI)",
      ],
      status: "not-started",
      priority: "medium",
      estimatedDuration: "6-8 meses",
      startDate: "2026-01-01",
      dependencies: ["audio-workstation"],
      learningGoals: [
        "Machine Learning para análisis de audio",
        "Procesamiento de señales con Python",
        "Modelos de deep learning para música",
        "APIs REST para servicios de IA",
        "Integración Rust-Python (FFI)",
      ],
      milestones: [
        {
          title: "Análisis de Frecuencias",
          description: "Modelo para detectar características tonales",
          completed: false,
          dueDate: "2026-03-01",
        },
        {
          title: "Sugerencias de EQ",
          description: "IA que recomienda ajustes de ecualización",
          completed: false,
          dueDate: "2026-05-01",
        },
        {
          title: "API de Servicios",
          description: "Backend para integración con DAWs",
          completed: false,
          dueDate: "2026-07-01",
        },
      ],
    },
    {
      id: "cross-platform-vst",
      title: "VST Cross-Platform Suite",
      description:
        "Suite completa de plugins VST3/AU/CLAP para Windows, macOS y Linux. Distribución comercial y open-source.",
      category: "audio",
      technologies: ["Rust", "JUCE", "CMake", "GitHub Actions", "Installer"],
      status: "not-started",
      priority: "low",
      estimatedDuration: "4-5 meses",
      startDate: "2026-08-01",
      dependencies: ["vst-synthesizer", "vst-eq-caraduras-v2"],
      learningGoals: [
        "Build systems cross-platform",
        "Distribución y packaging comercial",
        "Testing automatizado en múltiples OS",
        "Optimización para diferentes arquitecturas",
        "Documentación y marketing técnico",
      ],
      milestones: [
        {
          title: "Windows + Linux Support",
          description: "Builds automatizados para múltiples plataformas",
          completed: false,
          dueDate: "2026-10-01",
        },
        {
          title: "Instaladores Automáticos",
          description: "Setup.exe, .pkg, .deb packages",
          completed: false,
          dueDate: "2026-11-01",
        },
        {
          title: "Release Commercial",
          description: "Primera versión comercial",
          completed: false,
          dueDate: "2026-12-15",
        },
      ],
    },
  ] as RoadmapProject[],
};

import type {
  Profile,
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
    bio: [
      "**8+ años de evolución tecnológica continua**. Mi trayectoria abarca desde Visual Basic 6 y C# hasta tecnologías modernas como **TypeScript, React y Astro**, adaptándome constantemente a las mejores prácticas del desarrollo actual.",
      "Me especializo en **crear soluciones eficientes y escalables**, optimizando el rendimiento de aplicaciones y manteniendo un enfoque profesional en cada proyecto. Mi experiencia incluye tanto **desarrollo backend como frontend**, con dominio en bases de datos y **deployment moderno**.",
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
        "**3 años de crecimiento continuo** en Ualá, participando en **3 equipos diferentes** y evolucionando como profesional. Formé parte de equipos de desarrollo ágil, multidisciplinarios, donde colaboré en la creación de **aplicaciones web modernas y escalables**. Mi enfoque está en la implementación de soluciones eficientes utilizando **TypeScript + Next.js**, asegurando **alto rendimiento** y la **excelencia en UX**. He contribuido **significativamente** a la mejora de procesos **(CI/CD)** y la adopción de nuevas tecnologías.",
      technologies: [
        "TypeScript",
        "React",
        "Redux",
        "Zustand",
        "tailwind",
        "Vercel",
        "Next.js",
        "Github actions",
      ],
      achievements: [
        "**Implementación completa** de universal login con **Auth0** - mejorando la seguridad y UX",
        "**Automatización total** de deploys con **GitHub Actions** - reduciendo tiempo de release",
        "**Migración exitosa** de componentes de clase a funcional - modernizando la codebase",
        "**Implementación estratégica** de pruebas unitarias con **Vitest** - aumentando confiabilidad",
        "**Integración avanzada** del SDK de MercadoPago - funcionalidad de **suscripciones**",
        "**Optimización crítica**: limpieza de dependencias y **reducción significativa de vulnerabilidades**",
      ],
    },
    {
      period: "2020 - 2022",
      title: "Frontend Developer",
      company: "Globant",
      description:
        "**Transición exitosa** hacia tecnologías web modernas, **especialización avanzada** en JavaScript/TypeScript. Desarrollo de componentes del **design system** de importante aerolínea internacional en **React y React Native** - impactando millones de usuarios.",
      technologies: ["JavaScript", "React Native", "React", "Node.js"],
      achievements: [
        "**Liderazgo técnico**: presentación de charlas internas sobre nuevas tecnologías",
        "**Migración exitosa** de productos legacy al design system - mejorando consistencia",
        "**Mentoría efectiva** de desarrolladores junior - implementando mejores prácticas",
        "**Comunicación estratégica** con equipos multidisciplinarios - asegurando calidad y consistencia en el **design system** de alcance internacional",
      ],
    },
    {
      period: "2018 - 2020",
      title: "Desarrollador de Aplicaciones Empresariales",
      company: "Equipo médico de emergencias Chaco SA",
      description:
        "**Desarrollo empresarial robusto** en entorno Microsoft con **C# y .NET**, gestión avanzada de bases de datos **SQL Server** y **modernización crítica** de sistemas legacy en Visual Basic 6.",
      technologies: ["C#", ".NET", "SQL Server", "Windows Forms"],
      achievements: [
        "**Modernización** de sistemas legacy y **automatización estratégica** de procesos críticos",
        "**Implementación exitosa** de módulos integrados con **procesos de negocio clave**",
        "**Desarrollo de funcionalidades innovadoras** - **mejorando significativamente** la eficiencia operativa",
      ],
    },
    {
      period: "2017 - 2018",
      title: "Programador Junior",
      company: "INNEW",
      description:
        "Inicio profesional desarrollando aplicaciones de gestión empresarial en Visual Basic 6, bases de datos Access y primeros pasos en SQL Server.",
      technologies: [
        "Visual Basic 6",
        "MS Access",
        "SQL Server",
        "Crystal Reports",
        "Javascript",
        "vuejs",
      ],
      achievements: [
        "Desarrollo de módulos críticos para **gestión de inventarios**",
        "Creación de reportes personalizados para **análisis de datos**",
        "Manejo e implementación de **procedimientos almacenados** en SQL Server",
        "Migración de datos mediante consultas, ante la eventual caida en la conexión de una replica en mssql, que se realizaba desde los servidores de las sucursales hacia el servidor central",
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

  education: [
    {
      period: "2016 - 2025",
      title: "Autoformación Continua en Tecnologías Web",
      description:
        "Desarrollo profesional autodidacta enfocado en tecnologías web modernas, mejores prácticas de desarrollo y arquitecturas escalables. Constante actualización en frameworks, herramientas y metodologías de la industria a través de cursos online, documentación oficial y proyectos prácticos.",
    },
    {
      period: "2010 - 2018",
      title: "Licenciatura en Sistemas de Información",
      institution: "**Universidad Nacional del Nordeste**",
      description:
        "Formación técnica integral en fundamentos de programación, análisis de sistemas y desarrollo de software. Énfasis en lógica de programación, estructuras de datos y metodologías de desarrollo.",
    },
  ] as Education[],

  roadmap: [
    {
      id: "vst-eq-caraduras-v2",
      title: "EQ Caraduras v2.0 - Advanced Features",
      description: "Expansión del plugin VST3 actual con características avanzadas: filtros adicionales, presets, análisis de espectro en tiempo real y optimizaciones de performance.",
      category: "audio",
      technologies: ["Rust", "nih-plug", "Vizia", "DSP", "JUCE (research)", "CLAP"],
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
        "Interfaz gráfica más compleja con Vizia"
      ],
      milestones: [
        {
          title: "Sistema de Presets",
          description: "Implementar guardado/carga de configuraciones de EQ",
          completed: false,
          dueDate: "2025-02-01"
        },
        {
          title: "Filtros Adicionales",
          description: "Agregar filtros high-pass, low-pass y notch",
          completed: false,
          dueDate: "2025-02-15"
        },
        {
          title: "Analizador de Espectro",
          description: "Visualización FFT en tiempo real",
          completed: false,
          dueDate: "2025-03-15"
        },
        {
          title: "Optimización Performance",
          description: "Reducir latencia y uso de CPU",
          completed: false,
          dueDate: "2025-04-01"
        }
      ]
    },
    {
      id: "vst-synthesizer",
      title: "Sintetizador VST3 - Caraduras Synth",
      description: "Desarrollo de un sintetizador virtual desde cero con osciladores, filtros, envolventes ADSR y efectos. Expandir conocimientos de síntesis de audio.",
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
        "Efectos de audio (reverb, delay, chorus)"
      ],
      milestones: [
        {
          title: "Osciladores Básicos",
          description: "Implementar formas de onda: sine, saw, square, triangle",
          completed: false,
          dueDate: "2025-05-01"
        },
        {
          title: "Filtros y Envolventes",
          description: "Sistema ADSR y filtros resonantes",
          completed: false,
          dueDate: "2025-06-01"
        },
        {
          title: "Procesamiento MIDI",
          description: "Manejo completo de eventos MIDI",
          completed: false,
          dueDate: "2025-07-01"
        },
        {
          title: "Efectos Integrados",
          description: "Reverb, delay y modulación",
          completed: false,
          dueDate: "2025-08-15"
        }
      ]
    },
    {
      id: "audio-workstation",
      title: "Mini DAW - Estación de Audio Web",
      description: "Aplicación web para grabación, edición y mezcla de audio usando Web Audio API. Integrar conocimientos de audio con desarrollo web avanzado.",
      category: "web",
      technologies: ["TypeScript", "React", "Web Audio API", "WebRTC", "Tauri", "Rust"],
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
        "Sincronización de audio precisa"
      ],
      milestones: [
        {
          title: "Reproductor/Grabador Básico",
          description: "Funcionalidad core de audio",
          completed: false,
          dueDate: "2025-10-01"
        },
        {
          title: "Editor de Forma de Onda",
          description: "Visualización y edición de audio",
          completed: false,
          dueDate: "2025-11-01"
        },
        {
          title: "Mezclador Virtual",
          description: "Múltiples tracks y efectos",
          completed: false,
          dueDate: "2025-12-01"
        }
      ]
    },
    {
      id: "ai-audio-assistant",
      title: "Asistente IA para Producción Musical",
      description: "Sistema de IA que analiza audio y sugiere ajustes de EQ, compresión y efectos. Combinar machine learning con processing de audio.",
      category: "ai",
      technologies: ["Python", "TensorFlow", "librosa", "FastAPI", "Rust (FFI)"],
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
        "Integración Rust-Python (FFI)"
      ],
      milestones: [
        {
          title: "Análisis de Frecuencias",
          description: "Modelo para detectar características tonales",
          completed: false,
          dueDate: "2026-03-01"
        },
        {
          title: "Sugerencias de EQ",
          description: "IA que recomienda ajustes de ecualización",
          completed: false,
          dueDate: "2026-05-01"
        },
        {
          title: "API de Servicios",
          description: "Backend para integración con DAWs",
          completed: false,
          dueDate: "2026-07-01"
        }
      ]
    },
    {
      id: "cross-platform-vst",
      title: "VST Cross-Platform Suite",
      description: "Suite completa de plugins VST3/AU/CLAP para Windows, macOS y Linux. Distribución comercial y open-source.",
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
        "Documentación y marketing técnico"
      ],
      milestones: [
        {
          title: "Windows + Linux Support",
          description: "Builds automatizados para múltiples plataformas",
          completed: false,
          dueDate: "2026-10-01"
        },
        {
          title: "Instaladores Automáticos",
          description: "Setup.exe, .pkg, .deb packages",
          completed: false,
          dueDate: "2026-11-01"
        },
        {
          title: "Release Commercial",
          description: "Primera versión comercial",
          completed: false,
          dueDate: "2026-12-15"
        }
      ]
    }
  ] as RoadmapProject[],

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
      description: "Expansión del plugin VST3 actual con características avanzadas: filtros adicionales, presets, análisis de espectro en tiempo real y optimizaciones de performance.",
      category: "audio",
      technologies: ["Rust", "nih-plug", "Vizia", "DSP", "JUCE (research)", "CLAP"],
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
        "Interfaz gráfica más compleja con Vizia"
      ],
      milestones: [
        {
          title: "Sistema de Presets",
          description: "Implementar guardado/carga de configuraciones de EQ",
          completed: false,
          dueDate: "2025-02-01"
        },
        {
          title: "Filtros Adicionales",
          description: "Agregar filtros high-pass, low-pass y notch",
          completed: false,
          dueDate: "2025-02-15"
        },
        {
          title: "Analizador de Espectro",
          description: "Visualización FFT en tiempo real",
          completed: false,
          dueDate: "2025-03-15"
        },
        {
          title: "Optimización Performance",
          description: "Reducir latencia y uso de CPU",
          completed: false,
          dueDate: "2025-04-01"
        }
      ]
    },
    {
      id: "vst-synthesizer",
      title: "Sintetizador VST3 - Caraduras Synth",
      description: "Desarrollo de un sintetizador virtual desde cero con osciladores, filtros, envolventes ADSR y efectos. Expandir conocimientos de síntesis de audio.",
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
        "Efectos de audio (reverb, delay, chorus)"
      ],
      milestones: [
        {
          title: "Osciladores Básicos",
          description: "Implementar formas de onda: sine, saw, square, triangle",
          completed: false,
          dueDate: "2025-05-01"
        },
        {
          title: "Filtros y Envolventes",
          description: "Sistema ADSR y filtros resonantes",
          completed: false,
          dueDate: "2025-06-01"
        },
        {
          title: "Procesamiento MIDI",
          description: "Manejo completo de eventos MIDI",
          completed: false,
          dueDate: "2025-07-01"
        },
        {
          title: "Efectos Integrados",
          description: "Reverb, delay y modulación",
          completed: false,
          dueDate: "2025-08-15"
        }
      ]
    },
    {
      id: "audio-workstation",
      title: "Mini DAW - Estación de Audio Web",
      description: "Aplicación web para grabación, edición y mezcla de audio usando Web Audio API. Integrar conocimientos de audio con desarrollo web avanzado.",
      category: "web",
      technologies: ["TypeScript", "React", "Web Audio API", "WebRTC", "Tauri", "Rust"],
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
        "Sincronización de audio precisa"
      ],
      milestones: [
        {
          title: "Reproductor/Grabador Básico",
          description: "Funcionalidad core de audio",
          completed: false,
          dueDate: "2025-10-01"
        },
        {
          title: "Editor de Forma de Onda",
          description: "Visualización y edición de audio",
          completed: false,
          dueDate: "2025-11-01"
        },
        {
          title: "Mezclador Virtual",
          description: "Múltiples tracks y efectos",
          completed: false,
          dueDate: "2025-12-01"
        }
      ]
    },
    {
      id: "ai-audio-assistant",
      title: "Asistente IA para Producción Musical",
      description: "Sistema de IA que analiza audio y sugiere ajustes de EQ, compresión y efectos. Combinar machine learning con processing de audio.",
      category: "ai",
      technologies: ["Python", "TensorFlow", "librosa", "FastAPI", "Rust (FFI)"],
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
        "Integración Rust-Python (FFI)"
      ],
      milestones: [
        {
          title: "Análisis de Frecuencias",
          description: "Modelo para detectar características tonales",
          completed: false,
          dueDate: "2026-03-01"
        },
        {
          title: "Sugerencias de EQ",
          description: "IA que recomienda ajustes de ecualización",
          completed: false,
          dueDate: "2026-05-01"
        },
        {
          title: "API de Servicios",
          description: "Backend para integración con DAWs",
          completed: false,
          dueDate: "2026-07-01"
        }
      ]
    },
    {
      id: "cross-platform-vst",
      title: "VST Cross-Platform Suite",
      description: "Suite completa de plugins VST3/AU/CLAP para Windows, macOS y Linux. Distribución comercial y open-source.",
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
        "Documentación y marketing técnico"
      ],
      milestones: [
        {
          title: "Windows + Linux Support",
          description: "Builds automatizados para múltiples plataformas",
          completed: false,
          dueDate: "2026-10-01"
        },
        {
          title: "Instaladores Automáticos",
          description: "Setup.exe, .pkg, .deb packages",
          completed: false,
          dueDate: "2026-11-01"
        },
        {
          title: "Release Commercial",
          description: "Primera versión comercial",
          completed: false,
          dueDate: "2026-12-15"
        }
      ]
    }
  ] as RoadmapProject[],
};

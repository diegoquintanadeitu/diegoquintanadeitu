# 🤝 Guía de Contribución

## 🎯 Areas de Contribución

### 💻 **Portfolio y Desarrollo General**

Contribuye al desarrollo del portfolio personal y sus funcionalidades.

---

## ⚡ Scripts de Desarrollo Principales

### **Lo Más Usado**

```bash
# Desarrollo diario
npm run dev                  # Servidor de desarrollo
npm run test:full           # Test completo (build + a11y)
npm run build               # Build para producción

# Type checking
npm run type-check          # Verificación de tipos
npm run type-check:all      # Incluye scripts
```

## 🛠️ Desarrollo del Portfolio

### 🚀 **Comandos Principales**

```bash
# Desarrollo
npm run dev              # Portfolio en localhost:4321
npm run build            # Build para producción
npm run preview          # Preview del build

# Testing y Quality
npm run type-check       # Verificación de tipos
npm run type-check:all   # Incluye scripts
npm run a11y             # Tests de accesibilidad
npm run test:build       # Test del build
npm run test:full        # Test completo
```

### 📁 **Estructura del Proyecto**

```
diegoquintanadeitu.github.io/
├── src/
│   ├── components/      # Componentes Astro
│   ├── layouts/         # Layouts base
│   ├── pages/           # Páginas del sitio
│   ├── assets/          # Assets estáticos
│   └── types/           # Tipos TypeScript
├── public/              # Assets públicos
├── scripts/             # Scripts de utilidad
├── docs/               # Documentación
├── package.json        # Dependencias
├── astro.config.mjs    # Config Astro
├── tsconfig.json       # Config TypeScript
└── tailwind.config.js  # Config Tailwind
```

## 🎯 Flujos Típicos

### Desarrollo normal:

```bash
npm run dev
```

### Antes de commit:

```bash
npm run test:full
```

### Si algo falla:

```bash
npm run server:stop
npm run clean
npm install
npm run dev
```

## 🎨 Sistema de Temas

El portfolio tiene 3 temas que se prueban automáticamente:

- **Light** (por defecto)
- **Dark**
- **Print** (para CV)

El test `a11y:quick` verifica accesibilidad WCAG 2.1 AA en los 3 temas.

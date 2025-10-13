# Design System Documentation

## 📋 Overview

Este directorio contiene la documentación completa del sistema de diseño del portfolio, preparada para futuras integraciones con **Docusaurus** y **Storybook**.

## 🎯 Philosophy

El sistema de diseño está construido siguiendo principios de:
- **Consistency** - Patrones visuales unificados
- **Scalability** - Fácil extensión y mantenimiento  
- **Accessibility** - Inclusivo por diseño
- **Performance** - Optimizado para web

## 📚 Documentation Structure

```
docs/design-system/
├── README.md                 # Este archivo
├── animations.md            # Sistema de animaciones ✅
├── colors.md               # Paleta de colores (próximo)
├── typography.md           # Sistema tipográfico (próximo)
├── spacing.md              # Espaciado y layout (próximo)
├── components/             # Documentación de componentes
│   ├── buttons.md          # Sistema de botones (próximo)
│   ├── cards.md            # Componentes de tarjetas (próximo)
│   └── navigation.md       # Elementos de navegación (próximo)
└── tokens/                 # Design tokens
    ├── primitives.md       # Tokens primitivos (próximo)
    └── semantic.md         # Tokens semánticos (próximo)
```

## 🎨 Current Implementation

### ✅ Completed
- [**Animations**](./animations.md) - Sistema completo de animaciones para botones

### 🔄 In Progress
- **Colors** - Paleta de temas claro/oscuro
- **Typography** - Jerarquía tipográfica
- **Components** - Documentación de BackButton, ThemeSelector

### 📋 Planned
- **Spacing System** - Grid y espaciado consistente
- **Iconography** - Sistema de iconos SVG
- **Layout Patterns** - Templates y layouts reutilizables

## 🛠️ Integration Roadmap

### Phase 1: Documentation Foundation ✅
- [x] Crear estructura de documentación
- [x] Documentar sistema de animaciones
- [x] Establecer patrones de documentación

### Phase 2: Docusaurus Setup 🔄
- [ ] Configurar Docusaurus para documentación
- [ ] Migrar documentación Markdown
- [ ] Configurar deployment automático

### Phase 3: Storybook Integration 📋
- [ ] Configurar Storybook para Astro
- [ ] Crear stories para componentes existentes
- [ ] Implementar visual regression testing

### Phase 4: Design Tokens 🚀
- [ ] Implementar design tokens JSON
- [ ] Automatizar generación de CSS variables
- [ ] Integrar con build process

## 🧩 Component Inventory

### Interactive Elements
- [x] **BackButton** - Navegación con animaciones
- [x] **ThemeSelector** - Cambio de tema con dropdown
- [ ] **Button System** - Variantes y estados (documentar)

### Layout Components  
- [ ] **Timeline** - Experiencia profesional
- [ ] **SkillCard** - Tarjetas de habilidades
- [ ] **ProjectCard** - Showcase de proyectos

### Utility Classes
- [x] **btn-scale-animation** - Animación de escala para botones
- [x] **btn-scale-animation-full** - Animación completa con transiciones
- [ ] **Spacing utilities** - Margins y padding sistemáticos

## 📖 Documentation Standards

Cada documento del sistema de diseño debe incluir:

### 📋 Required Sections
- **Overview** - Propósito y filosofía
- **Specifications** - Detalles técnicos
- **Usage Guidelines** - Cuándo y cómo usar
- **Examples** - Implementaciones reales
- **Accessibility** - Consideraciones a11y
- **Testing** - Criterios de QA

### 🎨 Visual Documentation
- **Code Examples** - Snippets funcionales
- **Do's and Don'ts** - Patrones y anti-patrones
- **Implementation Notes** - Consideraciones técnicas
- **Future Roadmap** - Evolución planificada

## 🔗 External Resources

### Design References
- [Material Design 3](https://m3.material.io/) - Sistema de Google
- [Human Interface Guidelines](https://developer.apple.com/design/) - Sistema de Apple
- [Atlassian Design System](https://atlassian.design/) - Referencias enterprise

### Technical References  
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Astro Component Guidelines](https://docs.astro.build/en/core-concepts/astro-components/)

---

**Next Steps**: 
1. Documentar sistema de colores y temas
2. Crear documentación de componentes individuales  
3. Preparar configuración de Docusaurus

**Maintainer**: Diego Quintana  
**Created**: 2025-10-13  
**Last Updated**: 2025-10-13
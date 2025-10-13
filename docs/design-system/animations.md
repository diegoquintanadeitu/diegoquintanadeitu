# Animations Design System

## Overview

Este documento define las animaciones y transiciones del sistema de diseño del portfolio, estableciendo patrones consistentes para interacciones de usuario y feedback visual.

## Philosophy

Las animaciones siguen los principios de **Material Design** y **Human Interface Guidelines**:
- **Purposeful**: Cada animación tiene un propósito claro
- **Quick**: Respuesta rápida (200ms) para mantener fluidez
- **Subtle**: Elegantes sin ser distractivas
- **Consistent**: Mismo comportamiento en toda la aplicación

---

## Button Scale Animation

### 🎯 **Propósito**
Proporcionar feedback visual inmediato en interacciones con botones, comunicando que el elemento es interactivo y respondiendo al estado del usuario.

### 📐 **Especificaciones Técnicas**

#### **Clase Base: `.btn-scale-animation`**
```css
.btn-scale-animation {
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-scale-animation:hover {
  transform: scale(1.05);
}

.btn-scale-animation:active {
  transform: scale(0.95);
}
```

#### **Clase Extendida: `.btn-scale-animation-full`**
```css
.btn-scale-animation-full {
  transition: 
    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-scale-animation-full:hover {
  transform: scale(1.05);
}

.btn-scale-animation-full:active {
  transform: scale(0.95);
}
```

### 🎨 **Estados de Interacción**

| Estado | Transform | Duración | Easing |
|--------|-----------|----------|---------|
| **Rest** | `scale(1)` | - | - |
| **Hover** | `scale(1.05)` | 200ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| **Active** | `scale(0.95)` | 200ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| **Focus** | `scale(1)` + focus ring | 200ms | `cubic-bezier(0.4, 0, 0.2, 1)` |

### 🔧 **Cuándo Usar Cada Variante**

#### **`.btn-scale-animation`** - Botones Simples
- **Uso**: Botones con cambios simples de color/fondo
- **Ejemplos**: 
  - Enlaces de contacto (Email, LinkedIn, GitHub)
  - Botones call-to-action principales
  - Enlaces de navegación

```html
<!-- ✅ Correcto -->
<a href="/contact" class="btn-primary btn-scale-animation">
  Contactar
</a>
```

#### **`.btn-scale-animation-full`** - Botones Complejos
- **Uso**: Botones con múltiples propiedades que cambian
- **Ejemplos**:
  - BackButton (shadow + background + transform)
  - ThemeSelector (múltiples estados visuales)
  - Botones con efectos de sombra complejos

```html
<!-- ✅ Correcto -->
<button class="theme-toggle btn-scale-animation-full">
  <svg>...</svg>
</button>
```

---

## Implementation Guidelines

### 📋 **Checklist de Implementación**

- [ ] **Accesibilidad**: Respetar `prefers-reduced-motion`
- [ ] **Performance**: Usar `transform` (GPU) en lugar de cambiar `width/height`
- [ ] **Consistencia**: Aplicar la misma animación a elementos similares
- [ ] **Feedback**: Estados hover/active/focus claramente definidos

### 🚫 **Anti-patterns**

```css
/* ❌ Evitar - Inconsistente */
.custom-button:hover {
  transform: scale(1.1); /* Valor diferente */
  transition: all 0.5s ease; /* Duración muy larga */
}

/* ❌ Evitar - Performance problemático */
.bad-button:hover {
  width: 110%; /* Causa reflow */
  height: 110%; /* Causa repaint */
}
```

### ✅ **Best Practices**

```css
/* ✅ Correcto - Uso de clases utilitarias */
.my-button {
  /* Estilos específicos del componente */
  background: var(--primary-color);
  padding: 0.5rem 1rem;
}

/* Agregar animación via clase utilitaria */
<button class="my-button btn-scale-animation">Click me</button>
```

---

## Easing Functions

### 🎭 **Cubic Bezier: `cubic-bezier(0.4, 0, 0.2, 1)`**

Esta función de aceleración está optimizada para interacciones UI:
- **Aceleration**: Inicio suave (0.4, 0)
- **Deceleration**: Final suave (0.2, 1)
- **Feel**: Natural y responsivo
- **Inspiration**: Material Design "Standard curve"

### 📊 **Comparación de Easings**

| Easing | Caso de Uso | Sensación |
|--------|-------------|-----------|
| `ease-in-out` | Transiciones suaves | Simétrico |
| `ease-out` | Apariciones | Rebote suave |
| `cubic-bezier(0.4, 0, 0.2, 1)` | **Interacciones UI** | **Responsivo** |
| `ease-in` | Desapariciones | Aceleración |

---

## Accessibility

### ♿ **Reduced Motion Support**

```css
@media (prefers-reduced-motion: reduce) {
  .btn-scale-animation,
  .btn-scale-animation-full {
    transition: none;
  }
  
  .btn-scale-animation:hover,
  .btn-scale-animation-full:hover {
    transform: none;
  }
}
```

### 🎯 **Focus Management**

Las animaciones no deben interferir con la navegación por teclado:
- Focus rings mantienen su posición
- Estados de focus son independientes de hover
- Active states proporcionan feedback táctil

---

## Usage Examples

### 🏠 **Homepage Buttons**
```astro
<!-- CV Button -->
<a href="/cv" class="btn-primary btn-scale-animation">
  Curriculum Vitae
</a>

<!-- Contact Links -->
<a href="mailto:..." class="btn-secondary btn-scale-animation">
  Email
</a>
```

### 🧩 **Components**
```astro
<!-- BackButton Component -->
<a href="/" class="back-button btn-scale-animation-full">
  <svg>...</svg>
  Volver
</a>

<!-- ThemeSelector -->
<button class="theme-toggle btn-scale-animation-full">
  <svg>...</svg>
</button>
```

---

## Testing & Quality Assurance

### 🧪 **Manual Testing Checklist**

- [ ] **Desktop**: Hover/click funcionan correctamente
- [ ] **Mobile**: Touch feedback apropiado
- [ ] **Keyboard**: Focus states visibles
- [ ] **Reduced Motion**: Animaciones deshabilitadas cuando se requiere
- [ ] **Performance**: 60fps en dispositivos de gama media

### 📱 **Cross-Device Testing**

| Device Type | Considerations |
|-------------|----------------|
| **Desktop** | Hover states prominentes |
| **Tablet** | Touch targets de 44px mínimo |
| **Mobile** | Feedback táctil inmediato |
| **High-DPI** | Escalado correcto en pantallas Retina |

---

## Future Considerations

### 🚀 **Roadmap**

1. **Phase 1** ✅ - Implementación básica de button animations
2. **Phase 2** 🔄 - Expansión a card hover effects
3. **Phase 3** 📋 - Page transition animations
4. **Phase 4** 🎨 - Complex micro-interactions

### 🔮 **Storybook Integration**

```javascript
// Futura implementación en Storybook
export default {
  title: 'Design System/Animations/Button Scale',
  component: ButtonScale,
  parameters: {
    docs: {
      description: {
        component: 'Scale animation for interactive elements'
      }
    }
  }
};

export const Default = {
  args: {
    variant: 'primary',
    animation: 'btn-scale-animation'
  }
};

export const Complex = {
  args: {
    variant: 'secondary',
    animation: 'btn-scale-animation-full'
  }
};
```

---

## Changelog

### Version 1.0.0 (2025-10-13)
- ✅ Initial implementation of button scale animations
- ✅ Created utility classes for consistency
- ✅ Applied across all interactive elements
- ✅ Added accessibility considerations
- ✅ Documented implementation guidelines

---

**Maintainers**: Diego Quintana  
**Last Updated**: 2025-10-13  
**Next Review**: 2025-11-13
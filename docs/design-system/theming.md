# Sistema de Temas - Guía de Implementación

## Variables CSS Disponibles

### Variables Principales
```css
:root {
  /* Backgrounds */
  --bg-primary: Color de fondo principal
  --bg-secondary: Color de fondo secundario
  --bg-accent: Color de fondo para elementos destacados
  --bg-gradient-primary: Gradiente principal para fondos

  /* Text Colors */
  --text-primary: Color de texto principal
  --text-secondary: Color de texto secundario
  --text-accent: Color de texto para enlaces y elementos destacados
  --text-accent-rgb: Valores RGB del color accent (para usar con rgba())

  /* Borders & Shadows */
  --border-color: Color de bordes
  --shadow-color: Color de sombras (rgba format)
}
```

## Cómo Integrar un Componente con el Sistema de Temas

### 1. **Usar Variables CSS en lugar de colores hardcodeados**

❌ **Malo:**
```css
.mi-componente {
  background: #ffffff;
  color: #1e293b;
  border: 1px solid #e2e8f0;
}
```

✅ **Bueno:**
```css
.mi-componente {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 2. **Agregar Transiciones para Cambios Suaves**
```css
.elemento-tematizable {
  background: var(--bg-primary);
  color: var(--text-primary);
  border-color: var(--border-color);
  
  /* Transición suave entre temas */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 3. **Usar Colores con Transparencia**
```css
.elemento-semitransparente {
  /* Usar variables RGB para transparencias */
  background: rgba(var(--text-accent-rgb), 0.1);
  border: 1px solid rgba(var(--text-accent-rgb), 0.2);
}

.elemento-con-shadow {
  box-shadow: 0 4px 6px var(--shadow-color);
}
```

## Ejemplo Completo: Componente Card

```astro
---
// Card.astro
interface Props {
  title: string;
  description: string;
  variant?: 'default' | 'accent';
}

const { title, description, variant = 'default' } = Astro.props;
---

<div class={`card card--${variant}`}>
  <h3 class="card__title">{title}</h3>
  <p class="card__description">{description}</p>
  <button class="card__button">Ver más</button>
</div>

<style>
  .card {
    /* Layout */
    padding: 1.5rem;
    border-radius: 0.75rem;
    
    /* Theming */
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 6px var(--shadow-color);
    
    /* Transitions */
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 12px var(--shadow-color);
  }

  .card--accent {
    background: var(--bg-accent);
    border-color: var(--text-accent);
  }

  .card__title {
    color: var(--text-primary);
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card__description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card__button {
    background: var(--text-accent);
    color: var(--bg-primary);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card__button:hover {
    background: rgba(var(--text-accent-rgb), 0.8);
    transform: scale(1.05);
  }
</style>
```

## Testing de Temas

### Manual Testing
1. Abrir la aplicación
2. Usar el ThemeSelector para cambiar entre tema claro y oscuro
3. Verificar que todos los elementos cambien de color suavemente
4. Comprobar que no hay elementos con colores hardcodeados

### Automated Testing (Futuro)
```javascript
// theme.test.js
describe('Theme System', () => {
  test('should apply dark theme variables correctly', () => {
    document.body.setAttribute('data-theme', 'dark');
    const computedStyle = getComputedStyle(document.body);
    expect(computedStyle.getPropertyValue('--bg-primary')).toBe('#0f172a');
  });

  test('should transition smoothly between themes', async () => {
    const element = document.querySelector('.themed-element');
    // Test transition properties...
  });
});
```

## Mejores Prácticas

### ✅ Do's:
- Usar siempre variables CSS para colores
- Agregar transiciones suaves (0.3s cubic-bezier(0.4, 0, 0.2, 1))
- Testear componentes en ambos temas
- Mantener consistencia en naming de variables
- Usar fallbacks para mayor compatibilidad: `var(--bg-primary, #ffffff)`

### ❌ Don'ts:
- Hardcodear colores en CSS
- Olvidar agregar transiciones
- Crear variables específicas por componente (usar las globales)
- Usar !important para sobrescribir temas
- Mezclar sistemas de colores (usar solo el sistema de temas)

## Variables por Contexto de Uso

### Para Backgrounds:
```css
background: var(--bg-primary);     /* Fondo principal de página */
background: var(--bg-secondary);   /* Cards, modales, elementos destacados */
background: var(--bg-accent);      /* Elementos de énfasis, highlights */
```

### Para Textos:
```css
color: var(--text-primary);    /* Títulos, texto importante */
color: var(--text-secondary);  /* Texto descriptivo, subtítulos */
color: var(--text-accent);     /* Enlaces, CTAs, elementos interactivos */
```

### Para Bordes y Sombras:
```css
border: 1px solid var(--border-color);
box-shadow: 0 4px 6px var(--shadow-color);
```

---

**Status**: ✅ Implementado y funcionando
**Components Using Theme System**: Footer, ThemeSelector  
**Next Steps**: Migrar BackButton y otros componentes al sistema
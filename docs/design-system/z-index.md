# Z-Index Management System

## Layer Structure

Para mantener un orden visual consistente, usamos los siguientes niveles de z-index:

```css
/* Z-Index Layers */
--z-base: 0;           /* Contenido normal */
--z-footer: 10;        /* Footer */
--z-header: 20;        /* Headers, navegación */
--z-dropdown: 30;      /* Dropdowns, menus */
--z-modal: 40;         /* Modales */
--z-overlay: 50;       /* Overlays, backdrops */
--z-tooltip: 60;       /* Tooltips */
--z-notification: 70;  /* Notifications, toasts */
--z-theme-selector: 9999; /* Theme selector - siempre visible */
```

## Componentes Actuales

### ThemeSelector
```css
.theme-selector {
  position: fixed;
  z-index: 9999; /* Máxima prioridad - always on top */
}
```
**Razón**: El selector de tema debe estar siempre accesible, sin importar qué otros elementos estén en pantalla.

### Footer
```css
.footer-container {
  position: relative;
  z-index: 10; /* Nivel footer */
}
```
**Razón**: El footer debe estar por encima del contenido base pero por debajo de elementos interactivos.

## Mejores Prácticas

### ✅ Do's:
- Usar las variables CSS de z-index cuando estén disponibles
- Documentar el z-index usado en comentarios CSS
- Usar z-index en incrementos de 10 para permitir elementos intermedios
- Testear la superposición con otros componentes

### ❌ Don'ts:
- Usar z-index extremadamente altos sin justificación (excepto theme-selector)
- Crear z-index wars (incrementar indefinidamente)
- Olvidar documentar por qué se usa un z-index específico

## Implementación Futura

Cuando tengamos más componentes, podemos crear variables CSS globales:

```css
:root {
  --z-base: 0;
  --z-footer: 10;
  --z-header: 20;
  --z-dropdown: 30;
  --z-modal: 40;
  --z-overlay: 50;
  --z-tooltip: 60;
  --z-notification: 70;
  --z-theme-selector: 9999;
}
```

Y usarlas en los componentes:

```css
.modal {
  z-index: var(--z-modal);
}

.tooltip {
  z-index: var(--z-tooltip);
}
```

## Testing Z-Index

Para verificar que los z-index funcionan correctamente:

1. **Manual Testing**:
   - Abrir todos los elementos interactivos a la vez
   - Verificar que el theme-selector siempre esté visible
   - Comprobar que no hay elementos ocultos inadvertidamente

2. **Visual Regression Testing** (futuro):
   ```javascript
   // Ejemplo de test
   describe('Z-Index Layers', () => {
     test('theme-selector should always be on top', () => {
       // Test implementation
     });
   });
   ```

---
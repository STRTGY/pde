# STRTGY - Sistema de Presentaciones Reveal.js
## Guía Rápida de Uso

---

## 📁 Estructura de Carpetas

```
presentaciones/
├── shared/
│   └── css/
│       └── strtgy-reveal-theme.css    # Tema STRTGY para todos los decks
├── pitch-deck-ejecutivo/
│   └── index.html                      # Deck principal de ventas (12 slides)
├── deck-analisis-vocacion/
│   └── index.html                      # Deck producto geoestadístico (14 slides)
├── deck-softlanding/
│   └── index.html                      # Deck producto internacional (14 slides)
├── deck-content-engine/
│   └── index.html                      # Deck Content Engine IA (15 slides)
└── plan2026/
    ├── index.html                      # Kick-off interno 2026
    ├── reveal.js/                      # Framework Reveal.js
    ├── assets/
    │   ├── logo-strtgy-white.png
    │   └── logo-strtgy-black.png
    └── css/
        └── strtgy-theme.css            # Tema original plan2026
```

---

## 🚀 Cómo Usar las Presentaciones

### Opción 1: Abrir Directamente
Abre el archivo `index.html` de cualquier deck en tu navegador.

### Opción 2: Servidor Local (Recomendado)
```bash
# Desde la carpeta presentaciones/
npx live-server pitch-deck-ejecutivo/
```

### Opción 3: VS Code Live Server
1. Instala la extensión "Live Server"
2. Click derecho en `index.html` → "Open with Live Server"

---

## ⌨️ Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| `→` / `Space` | Siguiente slide |
| `←` | Slide anterior |
| `S` | **Abrir Speaker Notes** (¡Importante!) |
| `O` | Vista general (overview) |
| `F` | Pantalla completa |
| `B` | Pantalla negra (blackout) |
| `Esc` | Salir de modo especial |
| `?` | Ver todos los atajos |

---

## 📊 Decks Disponibles

### 1. Pitch Deck Ejecutivo
**Archivo:** `pitch-deck-ejecutivo/index.html`
**Slides:** 12
**Duración:** 15-20 minutos
**Uso:** Primera reunión con prospectos enterprise

**Estructura:**
1. Portada Hero
2. Declaración de marca
3. El problema (stats de impacto)
4. Diferenciadores VCA
5. Comparativa STRTGY vs Tradicional
6. Portafolio de servicios
7. Caso: Pastes Kikos
8. Caso: GWM México
9. Logos de clientes
10. Métricas de impacto
11. Próximos pasos
12. CTA final

---

### 2. Deck Análisis de Vocación
**Archivo:** `deck-analisis-vocacion/index.html`
**Slides:** 14
**Duración:** 20-25 minutos
**Uso:** Venta específica de análisis geoestadístico

**Estructura:**
1. Portada
2. El problema (costo de equivocarse)
3. La promesa
4. Diferenciadores VCA
5. Motor de inteligencia
6. Metodología (4 componentes)
7. Entregables
8. Caso: Pastes Kikos
9. Caso: Retail Enterprise
10. Paquetes y precios
11. Comparativa
12. Clientes
13. Próximos pasos
14. CTA final

---

### 3. Deck Softlanding Internacional
**Archivo:** `deck-softlanding/index.html`
**Slides:** 14
**Duración:** 20-25 minutos
**Uso:** Venta de servicios de expansión internacional

**Estructura:**
1. Portada
2. El problema (riesgo de expansión)
3. Quote de impacto
4. 4 componentes overview
5. Componente 1: Blindaje Regulatorio
6. Componente 2: Ubicación Alto Potencial
7. Componente 3: Radar de Competencia
8. Componente 4: Protocolo de Despliegue
9. Caso: Pastes Kikos Houston
10. Caso: Wellness Club El Paso
11. Mercados destino
12. Inversión y timeline
13. Próximos pasos
14. CTA final

---

### 4. Deck Content Engine
**Archivo:** `deck-content-engine/index.html`
**Slides:** 15
**Duración:** 15-20 minutos
**Uso:** Presentación interna del sistema de generación de contenido IA
**Audiencia:** Mariana (Marketing), Arturo (CEO), Jacky (Sales Ops)

---

### 5. Deck FCarnes - Censo Estratégico Nacional (NUEVO)
**Archivo:** `deck-fcarnes/index.html`
**Slides:** 14
**Duración:** 25-30 minutos
**Uso:** Presentación de resultados del proyecto de inteligencia geoespacial
**Audiencia:** Dueño de FCarnes, Encargado de Inteligencia de Negocios

**Estructura:**
1. Portada Hero (Censo Estratégico Nacional)
2. El Reto (79K establecimientos, 4.2% penetración)
3. La Solución (Pipeline de 8 etapas)
4. Fuentes de Datos Integradas (DENUE, Google, HERE, GPT-4o)
5. Resultados del Análisis (8,761 verificados, 3,690 cadenas)
6. Filtros de Calidad (7 criterios)
7. Scoring Diferenciado por Zona
8. Cadenas Detectadas (El Florido, Las Nenas, Omerca)
9. Oportunidad por Macro-Región (recomendación BAJÍO)
10. Costos Logísticos (semáforo de rentabilidad)
11. Dashboard Interactivo (preview de features)
12. Análisis GPT-4o Vision
13. Próximos Pasos
14. CTA Final

**Features especiales:**
- Colores FCarnes integrados (rojo corporativo)
- Speaker notes para cada slide
- Métricas reales del proyecto
- Recomendaciones estratégicas

**Estructura:**
1. Portada Hero
2. El problema (volumen de contenido 2026)
3. La solución Content Engine
4. Flujo de trabajo (Engine → Mariana → HubSpot)
5. Arquitectura multiagente
6. Ciclo iterativo (Plan → Generate → Critique → Refine)
7. Tech stack (Gemini 3, Imagen 4.0)
8. Ejemplo de output
9. Roles del equipo
10. Semana típica
11. Carpeta /publicar/
12. Comparativa tiempo (antes vs ahora)
13. Loop de mejora (feedback)
14. Próximos pasos
15. CTA final

**Features especiales:**
- Partículas de red neural animadas (tema IA)
- Diagramas de flujo interactivos
- Cards de roles con responsabilidades
- Timeline semanal visual

---

## 🎨 Sistema de Diseño

### Colores Principales
```css
--strtgy-navy:    #1E3A5F    /* Confianza */
--strtgy-dark:    #0A0F1C    /* Fondos */
--strtgy-accent:  #00D4AA    /* CTAs, highlights */
--strtgy-danger:  #FF6B6B    /* Alertas, dolor */
```

### Framework VCA (Diferenciadores)
Usar en TODOS los decks:
- ⚡ **Velocidad Radical** - "Horas, no meses"
- 🎯 **Certeza** - "Datos, no opiniones"
- 🛠️ **Activos** - "Sistemas, no PDFs"

### Stats Hero de Marca
Usar consistentemente:
- **500M+** data points procesados
- **15+** marcas enterprise
- **9,000+** competidores analizados por proyecto
- **2-4** semanas de entrega

---

## 📤 Exportar a PDF

1. Abrir la presentación con `?print-pdf` en la URL:
   ```
   file:///ruta/pitch-deck-ejecutivo/index.html?print-pdf
   ```

2. Presionar `Ctrl+P` (o `Cmd+P` en Mac)

3. Configurar:
   - Layout: Landscape
   - Margins: None
   - Background graphics: ON

4. Guardar como PDF

---

## 🛠️ Personalización

### Modificar Tema Global
Editar: `shared/css/strtgy-reveal-theme.css`

### Agregar Nuevo Deck
1. Crear carpeta en `presentaciones/`
2. Copiar estructura de `pitch-deck-ejecutivo/`
3. Modificar contenido en `index.html`
4. Actualizar rutas a reveal.js y CSS

---

## 📝 Speaker Notes

Cada slide tiene notas del presentador con:
- Puntos clave a mencionar
- Preguntas para hacer al prospecto
- Objeciones comunes y respuestas

Para ver las notas: Presionar **S** durante la presentación.

---

## 🔗 Documentación Relacionada

- `09-Materiales-Visuales-RevealJS.md` - Especificaciones completas
- `04-Productos-Playbook-Procesos.md` - Contenido de productos
- `01-Plan-Estrategico-2026.md` - Contexto estratégico

---

**Versión:** 2.0  
**Framework:** Reveal.js 5.x  
**Última actualización:** Enero 2026


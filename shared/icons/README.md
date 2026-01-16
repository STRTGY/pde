# STRTGY Icon System

Sistema de iconos SVG para presentaciones Reveal.js de STRTGY.

## Estructura de Carpetas

```
icons/
├── strategy/           # Estrategia y planificación
│   ├── icon-target.svg
│   └── icon-hexagonal-portal.svg
├── analytics/          # Análisis y datos
│   ├── icon-dashboard.svg
│   ├── icon-dashboard-vector.svg
│   └── icon-predictive-wave.svg
├── growth/             # Crecimiento e innovación
│   ├── icon-rocket.svg
│   └── icon-lightning-network.svg
├── risk/               # Gestión de riesgos
│   └── icon-warning.svg
└── positioning/        # Posicionamiento geográfico
    └── icon-location-pin.svg
```

## Uso Básico

```html
<!-- Icono de tamaño mediano -->
<div class="strtgy-icon strtgy-icon--lightning strtgy-icon--md"></div>

<!-- Icono grande con animación -->
<div class="strtgy-icon strtgy-icon--rocket strtgy-icon--lg strtgy-icon--animated"></div>

<!-- Icono centrado con margen -->
<div class="strtgy-icon strtgy-icon--target strtgy-icon--xl strtgy-icon--centered strtgy-icon--mb"></div>
```

## Clases Disponibles

### Iconos

| Clase | Descripción | Archivo SVG |
|-------|-------------|-------------|
| `strtgy-icon--target` | Mira de objetivo | `strategy/icon-target.svg` |
| `strtgy-icon--portal` | Portal hexagonal | `strategy/icon-hexagonal-portal.svg` |
| `strtgy-icon--dashboard` | Dashboard modular | `analytics/icon-dashboard.svg` |
| `strtgy-icon--dashboard-vector` | Dashboard vectorial | `analytics/icon-dashboard-vector.svg` |
| `strtgy-icon--predictive` | Ondas predictivas | `analytics/icon-predictive-wave.svg` |
| `strtgy-icon--rocket` | Cohete/Lanzamiento | `growth/icon-rocket.svg` |
| `strtgy-icon--lightning` | Red eléctrica | `growth/icon-lightning-network.svg` |
| `strtgy-icon--warning` | Alerta/Riesgo | `risk/icon-warning.svg` |
| `strtgy-icon--location` | Pin de ubicación | `positioning/icon-location-pin.svg` |

### Tamaños

| Clase | Dimensiones |
|-------|-------------|
| `strtgy-icon--sm` | 48px x 48px |
| `strtgy-icon--md` | 80px x 80px |
| `strtgy-icon--lg` | 120px x 120px |
| `strtgy-icon--xl` | 180px x 180px |
| `strtgy-icon--hero` | 280px x 280px |
| `strtgy-icon--responsive` | 100% (se ajusta al contenedor) |

### Animaciones

| Clase | Efecto |
|-------|--------|
| `strtgy-icon--animated` | Flotación suave (3s) |
| `strtgy-icon--pulse` | Pulso de opacidad (2s) |
| `strtgy-icon--spin` | Rotación continua (8s) |

### Modificadores Visuales

| Clase | Efecto |
|-------|--------|
| `strtgy-icon--glow` | Brillo cyan STRTGY |
| `strtgy-icon--hoverable` | Escala al hover |
| `strtgy-icon--muted` | Opacidad 50% |
| `strtgy-icon--inverted` | Colores invertidos |

### Helpers de Layout

| Clase | Efecto |
|-------|--------|
| `strtgy-icon--centered` | Centrado horizontal |
| `strtgy-icon--mb` | Margen inferior (1em) |

## Mapeo Icono-Servicio STRTGY

| Servicio/Concepto | Icono Recomendado |
|-------------------|-------------------|
| **Velocidad Radical** | `strtgy-icon--lightning` |
| **Certeza / KPIs** | `strtgy-icon--target` |
| **Activos / Dashboards** | `strtgy-icon--dashboard` |
| **Análisis de Vocación** | `strtgy-icon--location` |
| **Inteligencia Comercial** | `strtgy-icon--dashboard-vector` |
| **Lanzamiento / GTM** | `strtgy-icon--rocket` |
| **Transformación Digital** | `strtgy-icon--portal` |
| **EVA Pronósticos** | `strtgy-icon--predictive` |
| **Gestión de Riesgos** | `strtgy-icon--warning` |
| **Softlanding / Expansión** | `strtgy-icon--location` |

## Ejemplo: Reemplazar Emojis

**Antes (emoji):**
```html
<div class="diff-card">
    <div class="diff-icon">⚡</div>
    <h3>VELOCIDAD RADICAL</h3>
    <p>Estrategias completas en 2-4 semanas</p>
</div>
```

**Después (SVG icon):**
```html
<div class="diff-card">
    <div class="strtgy-icon strtgy-icon--lightning strtgy-icon--lg strtgy-icon--mb"></div>
    <h3>VELOCIDAD RADICAL</h3>
    <p>Estrategias completas en 2-4 semanas</p>
</div>
```

## Ejemplo: Cards de Servicios

```html
<div class="services-grid">
    <div class="service-card">
        <div class="strtgy-icon strtgy-icon--location strtgy-icon--md strtgy-icon--mb"></div>
        <h4>Análisis de Vocación</h4>
        <p>Ubicación óptima con IA geoestadística</p>
    </div>
    <div class="service-card">
        <div class="strtgy-icon strtgy-icon--dashboard strtgy-icon--md strtgy-icon--mb"></div>
        <h4>Inteligencia Comercial</h4>
        <p>Dashboards de decisión en tiempo real</p>
    </div>
    <div class="service-card">
        <div class="strtgy-icon strtgy-icon--rocket strtgy-icon--md strtgy-icon--mb"></div>
        <h4>Lanzamiento</h4>
        <p>Go-to-Market validado con datos</p>
    </div>
</div>
```

## Paleta de Colores de los Iconos

Los iconos utilizan colores coherentes con la marca STRTGY:

- **Azul STRTGY**: `#066FD1` (Lightning Network)
- **Turquesa/Teal**: `#04BFA2`, `#0CC2A9` (Target, Dashboard)
- **Cian**: `#5EC2C6`, `#59D3DD` (Predictive Wave)
- **Verde Crecimiento**: `#AADCA8`, `#A6E885` (Rocket)
- **Naranja/Amarillo**: `#EB8D24`, `#FFD02D` (Location Pin)
- **Neutros**: `#E2E2E1` (Warning, fondos)

## Notas Técnicas

- Los iconos son SVG vectoriales de 1024x1024px
- Escalan sin pérdida de calidad a cualquier tamaño
- El CSS usa `background-image` para máxima compatibilidad con Reveal.js
- Los iconos están optimizados para fondos oscuros (tema STRTGY)

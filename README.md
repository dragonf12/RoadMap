# PATH — Roadmap de Backend a Cloud & Security

**[Abrir la web del roadmap](https://dragonf12.github.io/RoadMap/)** · [Leer la guía completa](ROADMAP.md) · [Versión en ChatGPT](https://david-cloud-roadmap.dragn-12.chatgpt.site)

Una página web visual en español para David: Java y Backend como base, después Linux, redes, Docker, AWS, CI/CD, Terraform, Kubernetes, observabilidad y seguridad. Contiene el roadmap completo y tres rutas: DevOps/SRE/Platform, Cloud Security y DevSecOps.

## Abrir la página

Clona este repositorio y abre `dist/index.html` en el navegador.

```bash
git clone https://github.com/dragonf12/RoadMap.git
cd RoadMap
```

No requiere instalación, servidor de backend ni claves de API. También puedes ejecutar:

```bash
python3 -m http.server 8000 --directory dist
```

Visita `http://localhost:8000`. Las interacciones funcionan localmente; el portapapeles depende de los permisos del navegador. Los recursos externos requieren conexión.

## Qué incluye

- 12 etapas explicadas con conocimientos, ejercicios, proyectos, ejemplos y 60 criterios de avance.
- Mapa temporal, búsqueda de temas y explorador con pestañas accesibles por teclado.
- Comparación de especialidades y selección de una ruta de interés.
- Cuatro proyectos de portafolio basados en KAABLAB y una arquitectura de referencia.
- Puestos de entrada y con experiencia, certificaciones y 32 recursos oficiales.
- Plan semanal ajustable entre 4 y 16 horas.
- Progreso guardado en `localStorage`, exportación e importación JSON y reinicio.
- Guía completa para imprimir, diseño responsive y respeto a movimiento reducido.

El progreso pertenece a este navegador y origen; no se sincroniza entre dispositivos. Exporta `path-progreso.json` para conservarlo o trasladarlo. La página no envía tu progreso a un servidor.

## Archivos

| Archivo | Función |
|---|---|
| `index.html` | Entrada de GitHub Pages; abre el sitio de `dist/` |
| `.nojekyll` | Publicación estática sin procesamiento Jekyll |
| `dist/index.html` | Estructura y secciones de la web |
| `dist/styles.css` | Diseño responsive y versión para imprimir |
| `dist/content.js` | Todo el contenido editorial |
| `dist/logic.js` | Reglas de progreso e importación |
| `dist/app.js` | Renderizado e interacciones |
| `ROADMAP.md` | Contenido completo en Markdown |
| `scripts/check.mjs` | Verificación de contenido, estado y archivos |
| `.github/workflows/check.yml` | Verificación automática en GitHub Actions |

## Comprobar y editar

Requiere Node.js 18 o posterior y no instala dependencias:

```bash
node scripts/check.mjs
```

Para regenerar el documento después de editar `dist/content.js`:

```bash
node scripts/check.mjs --write-docs
```

Los checks verifican la integridad de las 12 etapas, sus referencias, enlaces internos y sintaxis JavaScript. También prueban avance parcial y completo, recuperación al desmarcar, importaciones inválidas, exportación/importación y distribución de horas.

## Alojamiento

La página es estática. GitHub Pages ya puede servirla con esta configuración en **Settings → Pages**:

- **Source:** Deploy from a branch.
- **Branch:** main.
- **Folder:** /(root).

Abre **https://dragonf12.github.io/RoadMap/**. El `index.html` de la raíz te lleva a `dist/` y conserva los parámetros y enlaces a secciones. La aplicación y sus recursos se mantienen juntos en esa carpeta. `.nojekyll` permite publicarlos como archivos estáticos.

GitHub Pages solo permite seleccionar la raíz o `/docs` al publicar desde una rama; `dist/` no aparece en ese menú. Esta estructura funciona con `/(root)` y las actualizaciones de `main` se publican automáticamente mediante Pages. El workflow `check.yml` comprueba el código; GitHub administra por separado el flujo de publicación de Pages.

Referencia: [Configurar el origen de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Para otro proveedor compatible, sirve directamente el contenido de `dist/`. La disponibilidad de Pages para repositorios privados depende del plan.

`.openai/hosting.json` vincula esta copia al alojamiento de Sites. Conserva su ID para editar ese mismo sitio; si reutilizas el código para un sitio independiente, elimina esa vinculación antes de registrarlo.

## Sobre el roadmap

Los 18–24 meses son orientativos. Los criterios prácticos tienen prioridad sobre las fechas y no garantizan empleo. La seguridad comienza en los fundamentos y se profundiza más adelante. Consulta requisitos, disponibilidad y costos actuales antes de elegir herramientas o certificaciones.

Los fragmentos de código son ejemplos educativos, no implementaciones completas de los proyectos. Las métricas ilustrativas están señaladas. Todos los recursos enlazados conservan las condiciones de sus proveedores.

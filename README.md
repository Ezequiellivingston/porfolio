# Portfolio · Pablo Livingston

Portfolio personal y profesional construido con **Nuxt 4 (Vue 3) + TypeScript**, según el spec en `spec.md` y los datos reales de `CV.md`.

## Características

- **Secciones**: Hero, Experiencia, Proyectos, Skills, Contacto.
- **Proyectos reales** (basados en el CV) con formato problema → solución → stack → resultado.
- **Skills agrupadas** en tarjetas (sin pared de logos).
- **Modo oscuro / claro** con `@nuxtjs/color-mode` (respeta `prefers-color-scheme`, sin flash al cargar).
- **SEO**: meta tags, Open Graph, datos estructurados JSON-LD (Person), HTML semántico y accesible (skip link, ARIA, `:focus-visible`).
- **Accesibilidad**: mobile-first/responsive, contraste, `prefers-reduced-motion` respetado.
- **Animaciones sutiles** con un `v-reveal` propio (IntersectionObserver) en lugar de librerías pesadas.
- **Artículos técnicos** vía `@nuxt/content` (`/articulos`), listo para ampliar.
- **CTA de descarga de CV** (archivo en `public/CV.md`; podés reemplazarlo por `public/CV.pdf`).

## Estructura

```
app/
  assets/css/main.css        → tokens de diseño + estilos base
  components/                → AppHeader, Hero, Experience, Projects, Skills, Contact, ...
  data/portfolio.ts          → toda la data del portfolio (extraída de CV.md)
  directives/reveal.ts       → directiva de animación on-scroll
  layouts/default.vue
  pages/
    index.vue                → portada
    articulos/               → blog (índice + [slug])
  plugins/directives.ts
content/articles/            → artículos en Markdown
public/CV.md                 → CV descargable
nuxt.config.ts
```

Para cambiar el contenido del sitio, editá `app/data/portfolio.ts`. Para publicar un artículo, agregá un `.md` en `content/articles/`.

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo
npm run lint       # eslint
npm run typecheck  # vue-tsc / nuxt typecheck
npm run build      # build SSR + prerender
npm run generate   # sitio 100% estático (output public/ en .output/public)
npm run preview    # previsualizar el build
```

## Deploy

- **Vercel**: conectá el repo; Vercel detecta Nuxt automáticamente (`npm run build`).
- **Cloudflare Pages**: build command `npm run build`, output directory `.output/public`, o para SSR estático: `npm run generate` con `.output/public`.

> Nota: para un sitemap.xml dinámico, sumá el módulo `@nuxtjs/sitemap` y configurá la URL del sitio en `app.head`/`site.url`.
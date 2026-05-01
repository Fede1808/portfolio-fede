# portfolio-fede

Portfolio personal de Federico Lopez Costanzo — Astro 5 + Tailwind CSS v4 + GSAP.

## Desarrollo local

```bash
npm install
npm run dev
```

El dev server corre en `http://localhost:4321`.

## Build y deploy

```bash
npm run build    # genera dist/
npm run preview  # previsualización local del build
```

Deploy en Vercel: conectar el repo o usar `vercel` CLI desde la raíz.

## TODO: REVIEW — items pendientes antes de publicar

- [ ] `public/cv-federico-lopez-costanzo.pdf` — subir PDF del CV
- [ ] `public/og.png` — imagen OpenGraph 1200×630 (fondo dark, nombre + título)
- [ ] `public/projects/azul/` — agregar screenshots de la app (PNG/WebP)
- [ ] `src/data/projects.ts` — completar `links.appStore` y `links.googlePlay` con URLs reales
- [ ] `src/data/projects.ts` — completar `links.demo` y `links.github` de Prode en Familia
- [ ] `astro.config.mjs` — confirmar URL del sitio (`site:` field)
- [ ] `src/layouts/BaseLayout.astro` — actualizar URL en schema.org JSON-LD

## Cómo editar proyectos

Editar `src/data/projects.ts`. Cada objeto `Project` tiene:
- `description.es` / `description.en` — texto en ambos idiomas
- `highlights` — lista de puntos clave
- `stack` — tecnologías usadas
- `links` — URLs de App Store, Google Play, demo, GitHub
- `screenshots` — rutas de imágenes en `/public/projects/{id}/`

## Cómo editar traducciones

Editar `src/i18n/es.json` y `src/i18n/en.json`. Las claves deben coincidir en ambos archivos.

## Stack

- [Astro 5](https://astro.build)
- [Tailwind CSS v4](https://tailwindcss.com)
- [GSAP](https://gsap.com)
- [Fontsource Geist](https://fontsource.org/fonts/geist)

# portfolio-fede

Portfolio personal de Federico López Costanzo.
Sitio estático, sin build y sin dependencias: se publica tal como está en el repo.

En producción: https://portfolio-fede-alpha.vercel.app

## Cómo está armado

El diseño se hizo en Claude Design y se bajó como bundle. Acá vive ya desempaquetado:

```
public/
  index.html     todo el sitio: markup, CSS y la lógica en un solo archivo
  assets/        React (2 chunks), el runtime del diseño y las Geist en woff2
  cv.pdf         el CV que se descarga desde Contacto
  og.png         preview 1200×630 para LinkedIn / WhatsApp
  favicon.svg
```

Tiene **dos formatos** que se alternan con las teclas `1` y `2`:

- **Interfaz** — cinco vistas (Perfil, Experiencia, Proyectos, Formación, Contacto).
  Se navegan con `↑` `↓` o con `j` / `k`.
- **Consola** — una terminal que responde comandos: `help`, `whoami`, `exp`,
  `proyectos`, `azul`, `datafut`, `pregon`, `prode`, `stack`, `formacion`,
  `contacto`, `clear`. Tiene historial con flechas y autocompletado con `Tab`.

## Desarrollo local

No hay `npm install` ni build. Alcanza con servir `public/`:

```bash
npx serve public
```

Abrir con doble clic también funciona, pero por `file://` el navegador bloquea
algunos `fetch` y aparecen errores en consola que no son reales.

## Cómo editar

Todo el contenido vive en `public/index.html`, en el `<script type="text/x-dc">`
del final: los arrays `exp`, `projects`, `edu` y `skills`. El markup y el CSS
están arriba, en el mismo archivo, con estilos inline.

Los ajustes propios (responsive, metadatos, foto, botón de CV) están marcados
con comentarios. El bloque `<style id="responsive-fede">` es agregado nuestro:
el diseño original venía maquetado sólo para desktop.

> **Ojo:** si el diseño se regenera desde Claude Design, sobreescribe este
> archivo y se pierden esos ajustes. Conviene rehacerlos sobre el bundle nuevo.

## Pendientes

- [ ] Link de Google Play de App Azul (hoy dice "falta link de Google Play")
- [ ] Demo desplegada de datafut (hoy dice "demo pendiente de deploy")
- [ ] Guardar la fuente del CV (`cv.html` + `gen-cv.mjs`) para poder regenerarlo

---
type: session
date: 26-10-2026
tags: [claude/session]
---

# Session 26-10-2026 — Seguridad y clickjacking para hosting

Context: [[CLAUDE]]

## Request

Revisión de seguridad del sitio antes de publicar. Atender riesgos de clickjacking y agregar headers de seguridad para Netlify, Vercel o GitHub Pages.

## What was done

- Revisión estática de seguridad de index.html, css/style.css, js/main.js.
- Sitio estático sin PHP, sin backend, sin base de datos, sin formularios de envío: no hay riesgo de vulnerabilidades PHP ni exposición de credenciales de servidor.
- Editó index.html:
  - Corregido cierre mal escrito de <summary> en la FAQ (cerraba con </h2>).
  - Eliminada hoja de estilos duplicada en <head>.
  - Agregada meta referrer policy strict-origin-when-cross-origin.
  - Agregada meta Content-Security-Policy con frame-ancestors 'none' para prevenir clickjacking.
- Creado _headers para Netlify / GitHub Pages: X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy, CSP.
- Creado vercel.json para Vercel con headers equivalentes.
- Staged y commiteó index.html, _headers y vercel.json en la raíz del proyecto: sha be6c4fb, 3 files changed, 38 insertions, 2 deletions.
- Actualizó obsidian-vault/CLAUDE.md: commit sha be6c4fb y notas de seguridad.

## Decisions and why

- El sitio es estático: los problemas de seguridad de PHP no aplican.
- Se agregó protección contra clickjacking tanto en HTML (meta CSP) como en archivos de hosting (_headers, vercel.json) para cubrir los tres proveedores recomendados.
- El teléfono de WhatsApp permanece visible en el código por ser el canal de ventas intencional.

## Files created/changed

- index.html — modificado (CSP meta, referrer policy, summary cierre, estilos duplicados eliminados).
- _headers — nuevo (Netlify/GitHub Pages security headers).
- vercel.json — nuevo (Vercel security headers).
- obsidian-vault/daily/26-10-2026/session-XXhXX.md — este archivo (sesión).
- obsidian-vault/CLAUDE.md — actualizado con commit sha be6c4fb y notas de seguridad.

## Where it stopped / next steps

- Cambios de seguridad aplicados y commiteados (sha be6c4fb).
- Pendiente: guardar sesión en vault con `vault save`.
- Pendiente: definir dominio y publicar en Netlify, Vercel o GitHub Pages.
- Pendiente: revisar enlaces de WhatsApp y redes sociales.
- Pendiente: revisar imágenes de productos.

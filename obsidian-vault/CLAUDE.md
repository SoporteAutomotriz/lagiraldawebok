# Project

Un sitio web one-page para **La giralda**, dulces artesanales (polvorones sevillanos) para regalo, eventos y temporada navideña en Puebla y todo México. Objetivo: vender online y recibir pedidos por WhatsApp.

## Tech Stack

| Layer | Tool |
|---|---|
| HTML | HTML5 semántico |
| CSS | CSS3 (mobile-first, responsive, sin frameworks) |
| JavaScript | JS vanilla (menú móvil y accesibilidad) |
| Imágenes | `/assets/logo/logo.png` y `assets/productos/` |

## Current State

> Update this section every time you return after a break. Thirty seconds here saves five minutes of re-orientation.

**Last updated:** 24-10-2026

### Working
- `obsidian-vault/` creado (git + Obsidian habilitados), commit sha e6448a2, registrado y abierto en Obsidian (id b0c66247ccf1100d)
- Sitio web one-page de La giralda creado y commiteado: HTML + CSS + JS, versión móvil y estilos artesanales terminados, commit sha be6c4fb
- Protección contra clickjacking agregada: CSP meta tag (frame-ancestors 'none'), archivos _headers (Netlify/GitHub Pages) y vercel.json (Vercel) con X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy y CSP
- Logo de 'Nuestra historia' reducido a la mitad de su ancho original (css/style.css)

### Broken / Blocked
- Ninguno

### Focus right now
- Guardar esta sesión en el vault con `vault save`
- Definir dominio y publicar en Netlify, Vercel o GitHub Pages
- Revisar que los enlaces de WhatsApp y redes sociales funcionen
- Revisar que las imágenes de productos se vean bien

## Key Decisions Made

These are settled. Do not reopen them without a good reason (details in `decisions/`).

- **Vault versioning:** git → [[decisions/0001-vault-git]]
- **Vault browsing:** Obsidian → [[decisions/0002-vault-obsidian]]
- **Web stack:** HTML + CSS + JavaScript simple → [[decisions/0003-stack-html-css-js]]
- **Paleta y tipografía:** terracota/ocre cálido, fondo crema, serif para títulos → [[decisions/0004-diseno-visual]]

## File Map

```
project/
├── CLAUDE.md                 # Imports @obsidian-vault/CLAUDE.md (native loading)
├── obsidian-vault/           # Obsidian knowledge base
│   ├── CLAUDE.md             # ← AI context file (you are here)
│   ├── _index.md             # Generated index of every note
│   ├── 00-inbox.md           # Unprocessed notes and quick captures
│   ├── daily/                # One folder per day (dd-mm-yyyy), one file per session
│   ├── specs/                # Feature specs before coding starts
│   ├── plans/                # Implementation plans and roadmaps
│   ├── processes/            # Processes, runbooks, recurring procedures
│   ├── decisions/            # Architectural decisions (ADRs)
│   ├── bugs/                 # Bug reports and investigation notes
│   └── retro/                # Retrospectives and lessons learned
├── CLAUDE.md                 # Importa @obsidian-vault/CLAUDE.md (nativa)
├── assets/
│   ├── logo/logo.png         # Logo de La giralda
│   └── productos/            # Fotos de productos (1, 2 y 3)
├── CLAUDE.md                 # Importa @obsidian-vault/CLAUDE.md (nativa loading)
├── obsidian-vault/           # Obsidian knowledge base
│   ├── CLAUDE.md             # ← AI context file (you are here)
│   ├── _index.md             # Generated index of every note
│   ├── 00-inbox.md           # Unprocessed notes and quick captures
│   ├── daily/                # One folder per day (dd-mm-yyyy), one file per session
│   ├── specs/                # Feature specs before coding starts
│   ├── plans/                # Implementation plans and roadmaps
│   ├── processes/            # Processes, runbooks, recurring procedures
│   ├── decisions/            # Architectural decisions (ADRs)
│   ├── bugs/                 # Bug reports and investigation notes
│   └── retro/                # Retrospectives and lessons learned
```

## Do Not

**Stop. Read the linked decision record before suggesting any change in these areas.**

- **Do not push vault commits.** Versioning is local only; nothing is ever pushed. /obsidian-memory:vault rules

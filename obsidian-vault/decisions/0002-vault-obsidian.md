---
type: decision
status: done
date: 24-10-2026
tags: [claude/decision]
---
# Vault opened in Obsidian

Context: [[CLAUDE]]

## Context

Obsidian is installed at `C:\Users\Soporte\AppData\Local\Programs\Obsidian\Obsidian.exe` and the user approved opening the vault in Obsidian for browsing.

## Decision

Register and open `obsidian-vault/` as an Obsidian vault. The vault is registered under id `b0c66247ccf1100d` and opened on `CLAUDE.md`.

## Alternatives considered

- Plain Markdown only (no Obsidian): rejected because the user wants to browse the vault in Obsidian.

## Consequences

- Obsidian's `.obsidian/` config (core plugins, daily notes, templates) is created in the vault.
- Templates are copied into `obsidian-vault/templates/`.
- The root CLAUDE.md imports `@obsidian-vault/CLAUDE.md` so Claude Code loads project memory natively.

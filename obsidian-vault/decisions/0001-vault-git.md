---
type: decision
status: done
date: 24-10-2026
tags: [claude/decision]
---
# Vault versioned with git

Context: [[CLAUDE]]

## Context

The obsidian-memory vault needed versioning. Git is installed locally, Git Bash is available, and the user approved versioning `obsidian-vault/` with local-only commits (never pushed).

## Decision

Version the vault with git. Commits are local only, of `obsidian-vault/` only, never pushed. The user's staged work in the project is never touched.

## Alternatives considered

- Plain Markdown only (no git): rejected because the user wants session history archived/committed locally.

## Consequences

- Session transcripts and notes can be committed via `save`.
- The vault's `.gitignore` keeps transcripts, memory snapshots and Obsidian workspace/cache out of git.

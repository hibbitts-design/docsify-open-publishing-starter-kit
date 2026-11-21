# Docsify-This for Instant Publishing

[Docsify-This](https://docsify-this.net) solves a specific problem: you have a Markdown file in a public repository and you want to share it as a readable, styled web page – right now.

## How It Works

Paste any public Markdown file URL into Docsify-This and it returns a styled page at a shareable URL:

```
https://docsify-this.net/?basePath=https://raw.githubusercontent.com/
  user/repo/main&homepage=README.md
```

No account. No configuration. No deployment. The Markdown file is the source – Docsify-This renders it on the fly.

## Use Cases alongside Grav

Docsify-This and a Grav reader complement each other:

| Use case | Better fit |
|----------|-----------|
| Full structured reader with sidebar nav | Grav, or a Docsify site like this one |
| Quick share of a single page or handout | Docsify-This |
| Embedding one page into an LMS | Either (both support `?chromeless=true`) |
| Multi-author, Admin Panel editing | Grav |
| Zero-infrastructure publishing | Docsify-This |

## Combining the Two

A practical workflow: maintain all content as Markdown files in a GitHub repository (synced to Grav via Git Sync). Any individual file can be shared instantly via Docsify-This, while the full reader experience lives on the Grav site.

This means your content is accessible in multiple forms from the same source – without duplicating or converting anything.

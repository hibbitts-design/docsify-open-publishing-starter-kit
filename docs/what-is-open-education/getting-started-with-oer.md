# Getting Started with OER

You don't need to build a complete open textbook to get started with OER. The most sustainable approach is to start small, build habits, and expand from there.

## Three Entry Points

**1. Adopt existing OER.** Before creating anything, check whether something already exists. Repositories like [OER Commons](https://www.oercommons.org), [MERLOT](https://www.merlot.org), and [OpenStax](https://openstax.org) contain peer-reviewed open materials across most disciplines.

**2. Adapt existing OER.** Find an open resource that's close to what you need, then revise it for your context. This is often faster than creating from scratch and models good open practice – attributing the source and publishing your adaptation openly.

**3. Create and publish.** If nothing suitable exists, create it. Even a single openly licensed syllabus or lab guide is a contribution to the OER ecosystem.

Choosing between them comes down to two questions:

```mermaid
flowchart TD
    accTitle: Choosing an entry point for OER
    accDescr: A decision chart. If an open resource already exists and fits your course as it is, adopt it. If one exists but needs changes, adapt it. If nothing suitable exists, create and publish your own.

    EXISTS("`Does an open resource exist?`") -->|Yes| FITS("`Does it fit as it is?`")
    EXISTS -->|No| CREATE["`**3. Create** and publish`"]
    FITS -->|Yes| ADOPT["`**1. Adopt** as it is`"]
    FITS -->|No| ADAPT["`**2. Adapt** for your context`"]
```

> [!IMPORTANT]
> **Adapting an OpenStax Textbook**
>
> An instructor teaching introductory biology finds that [OpenStax Biology 2e](https://openstax.org/details/books/biology-2e) covers most of their course but includes two chapters irrelevant to their program. They download the source files, remove those chapters, add a locally written lab guide under CC BY, and publish the combined resource on a Grav-based reader synced to a public GitHub repository. The result is a customised OER that attributes the original, carries a compatible license, and is itself freely adaptable by others.

## The Minimal Viable Open Resource

A minimal OER is:
- Written in a portable format (Markdown, plain text, HTML)
- Published at a stable public URL
- Carrying a CC license statement
- Attributing any sources it draws from

A Markdown site published from a Git repository, like this one, satisfies all four criteria by default.

## Building the Habit

The most effective habit is to write course materials in a format you own from the start – Markdown files in a Git repository – rather than migrating from a proprietary format later. Every piece of content you create in that format is one less conversion to make.

# Tools for Open Course Design

Section 2

> [!TIP]
> **By the end of this section you will be able to**
>
> - Compare Grav and Docsify-based approaches for open course content
> - Explain how Git Sync enables version-controlled course content
> - Embed a Grav or Docsify page into an LMS using a URL parameter
Building open course content doesn't require learning a new authoring system from scratch. The tools covered here are designed to layer on top of workflows you likely already use.

## A Full Site with Grav

[Grav](https://getgrav.org) is a flat-file CMS – all content is stored as Markdown files, with no database required. Pair it with the Git Sync plugin and every save is automatically committed to a GitHub or Codeberg repository.

**Best for:** Educators who want a full-featured course or reader site with an Admin Panel, multi-contributor support, and rich theming.

## A Single Page with Docsify-This

[Docsify-This](https://docsify-this.net) takes a different approach – paste the URL of any public Markdown file and get back a styled, shareable web page instantly. No account, no configuration, nothing to install.

**Best for:** Sharing a single page or section instantly, or publishing a reading without setting up a full site.

## Showing Only the Content

Both Grav and Docsify support clean content-only views via a URL parameter:

```
https://yoursite.com/open-education-essentials/what-is-open-education?chromeless=true
```

Adding `?chromeless=true` removes the header, sidebar, and footer – leaving only the content for embedding in an iFrame inside Canvas, Moodle, or Brightspace.

> [!IMPORTANT]
> **Tip for Canvas Users**
>
> Use the **External Tool** option (not iFrame embed) for the best accessibility and mobile experience when embedding open content in Canvas.

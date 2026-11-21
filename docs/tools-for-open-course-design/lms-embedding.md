# LMS Embedding

One of the practical advantages of web-first course content is the ability to embed it directly inside your LMS – without giving up ownership of the content or the URL.

## The Chromeless Parameter

Both Grav and Docsify support a URL parameter that strips the page down to content only, removing the header, sidebar, and footer:

```
https://yoursite.com/open-education-essentials/what-is-open-education?chromeless=true
```

The result is a clean content view suitable for embedding in an iFrame inside Canvas, Moodle, or Brightspace.

## iFrame Embedding in Canvas

In Canvas, use the **External Tool** option rather than a raw iFrame embed for the best accessibility and mobile experience. If your institution hasn't enabled external tool embedding, a standard iFrame in a Page editor still works for most use cases.

## Keeping the URL

The key advantage of this approach over uploading a PDF or pasting content into the LMS directly: the content lives at a stable, citable URL. Students can bookmark it. You can update it without touching the LMS. And when you move institutions, the content moves with you.

# Maintaining an Open Reader

Publishing a reader is a beginning, not an end. The durability of open content comes from treating it as a living document – updated regularly, improved by its readers, and versioned transparently.

## A Lightweight Update Workflow

Because your reader content lives in Markdown files in a Git repository, updates follow a simple pattern:

1. Edit the Markdown file – in the Grav Admin Panel, in your text editor, or directly on GitHub
2. Commit the change (happens automatically with Git Sync, or manually via the repository)
3. The update is live immediately – no rebuild, no deployment step

> [!CAUTION]
> **BCcampus Open Textbook Project**
>
> BCcampus has maintained a collection of openly licensed textbooks for BC post-secondary institutions since 2012. Each textbook lives in a public GitHub repository, is built from Pressbooks source files exported as Markdown, and receives ongoing contributions from faculty across multiple institutions. Semester-based review cycles are tracked as GitHub milestones. Minor corrections are merged within days; major revisions are tagged as new editions. After more than a decade of active maintenance, several titles have accumulated hundreds of community-contributed improvements – none of which required the original author to remain involved.

## Handling Contributed Changes

When a reader submits a pull request with a correction or suggestion:

1. Review the diff in the GitHub pull request interface
2. If the change is good, merge it – Grav picks up the update via the Git Sync webhook
3. Credit the contributor in the page's revision history or a dedicated acknowledgements section

> [!IMPORTANT]
> **Correcting a Formula**
>
> A student notices that the sample mean in a statistics chapter divides by the wrong value. Because the formula is written as text, their pull request changes one line, just like a typo fix:
>
> ~~~diff
> - $\bar{x} = \frac{1}{n-1} \sum_{i=1}^{n} x_i$
> + $\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i$
> ~~~
>
> Once merged, the page shows the corrected formula:
>
> $$
> \bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i
> $$

## Versioning Major Revisions

For significant updates – a new edition, a substantial restructure – consider tagging a release in the repository before making changes. This preserves the previous version at a stable URL (via the tag) while the live site moves forward.

```bash
git tag v1.0 -m "First edition"
git push origin v1.0
```

## Keeping Dependencies Current

Periodically update the Grav core, theme, and plugins via the Admin Panel → Updates. The Quark Open Publishing theme and its plugins follow semantic versioning – minor updates are safe to apply; check release notes before major version upgrades.

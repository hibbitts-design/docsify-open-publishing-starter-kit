# Docsify Open Publishing Starter Kit

[![Docsify](https://img.shields.io/npm/v/docsify?label=docsify)](https://docsify.js.org/)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/blob/main/LICENSE)
<a href="https://discord.gg/zT8eS8ZG">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Docsify Discord Chat" />
</a>

> This is a starter kit to create a [Docsify](https://docsify.js.org) open publishing site. Global navigation elements can be hidden for seamlessly embedding pages into other platforms. Includes a pre-configured "Edit this Page on GitHub" link.

📸 Docsify Open Publishing Screenshot
---
![ Docsify Open Publishing Starter Kit](screenshot.jpg)
_Figure 1. Docsify Open Publishing Starter Kit. Explore a demo at [hibbitts-design.github.io/docsify-open-publishing-starter-kit/](https://hibbitts-design.github.io/docsify-open-publishing-starter-kit/)_

🚀 GitHub Pages Quickstart
---
**Pre-flight Checklist**  

1. GitHub account

**Installation and Deployment**

1. Tap **Use this template** on the source repository (upper-right green button)
2. Choose the name for your new repository to contain the copied site files and then tap **Create repository from template**
3. Go to **Settings** of your newly created repository, tap the **Pages** tab (on the left-hand side), choose **main branch/docs folder** and finally tap the **Save** button (see more details in the [Docsify documentation](https://docsify.js.org/#/deploy?id=github-pages))
4. And you're done! (view your new site using the provided URL on the **Pages** tab - it can take up to 20 minutes for your site to be initially available)

**Editing Your Docsify Site Pages on GitHub**

1. Go to the Docsify Markdown (.md) page in the `docs` folder of your repository you want to edit
2. Tap the **Pencil Icon** (top left-hand toolbar area) to start the editor
3. Scroll down to the bottom of the page and tap the **Commit changes** button to save your changes

[Learn more about pages in Docsify.](https://docsify.js.org/#/more-pages)

📝 Activating the “Edit this Page” Link
---   

1. Go to the file index.html in the `docs` folder of your repository
2. Tap the **Pencil Icon** (top left-hand toolbar area) to start the editor
3. Find the line `var yourRepoURL = '';` and enter the URL of your own GitHub Repository in between the two quotes. For example, `var yourRepoURL = 'https://github.com/YourGitHubUsername/YourRepositoryName/tree/main/docs'`.
4. Scroll down to the bottom of the page and tap the **Commit changes** button to save your changes

[Learn more about Docsify's configuration options.](https://docsify.js.org/#/configuration?id=configuration)

💻 Locally Editing your Docsify Site Pages
---  

**Editing Your Docsify Site Pages on Your Desktop**
1. Tap **Clone** on your repository page
2. Choose **Open Desktop** and follow the prompts, installing [GitHub Desktop](https://desktop.github.com/) if not already present
3. You will now be able to edit your Docsify site (in the `docs` folder) using the desktop editor of your choice (e.g. atom.io)
4. Use GitHub Desktop to push any changes to your repository.  

[Learn more about using GitHub Desktop](https://help.github.com/en/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project).

You can also clone (i.e download) a copy of your repository to your computer and [run Docsify locally](https://docsify.js.org/#/quickstart) to preview your site. See the below video for details.

Do you use GitLab? You can also use Docsify with [GitLab Pages](https://docsify.js.org/#/deploy?id=gitlab-pages)!

🧩 Embedding Docsify Page Content into Other Systems
---  

![ Docsify Open Publishing Page Ready for Embedding](screenshot-2.jpg)
_Figure 2. Docsify Open Publishing page ready for embedding_

The optional ‘embedded’ (all lowercase) URL parameter hides a site’s sidebar and optional navbar for seamlessly embedding Docsify page content within another platform such as Canvas LMS, Moodle, Microsoft Teams etc.

To only display Docsify page content, add the following to a Docsify page URL:

`?embedded=true`

For example, https://hibbitts-design.github.io/docsify-open-publishing-starter-kit/#/chapter-1/introduction would display a standard Docsify page while https://hibbitts-design.github.io/docsify-open-publishing-starter-kit/#/chapter-1/introduction?embedded=true would only display page content (i.e. no sidebar or optional navbar is shown).

To optionally hide the 'Edit this Page on GitHub' link, use the following:

`?embedded=true&hidegitlink=true`

For example, https://hibbitts-design.github.io/docsify-open-publishing-starter-kit/#/chapter-1/introduction would display a standard Docsify page while https://hibbitts-design.github.io/docsify-open-publishing-starter-kit/#/chapter-1/introduction?embedded=true&hidegitlink=true would only display page content (i.e. no sidebar or optional navbar is shown) and also hide the 'Edit this Page on GitHub' link.

📚 Docsify and Markdown Resources
---
**Docsify**  
[Docsify Documentation](https://docsify.js.org/#/?id=docsifyg)  
[Docsify Basics by MichaelCurrin](https://michaelcurrin.github.io/docsify-js-tutorial/#/?id=docsify-basics)  

**Markdown**  
[Markdown Cheat Sheet](https://warpedvisions.org/projects/markdown-cheat-sheet/)  
[Markdown Guide](https://www.markdownguide.org/)  

📼 Video Walkthrough of Local Docsify Install/Config
---
[![Generating Documentation Sites with GitHub and Docsify - Alysson Alvaran](youtube.png)](https://www.youtube.com/watch?v=TV88lp7egMw)  
_Video 1. Generating Documentation Sites with GitHub and Docsify - Alysson Alvaran_

🙇‍Credits and Special Thanks
---
[Docsify Themeable](https://github.com/jhildenbiddle/docsify-themeable)  

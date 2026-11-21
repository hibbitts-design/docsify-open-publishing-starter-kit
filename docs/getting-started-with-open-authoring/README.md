# Getting Started with Open Authoring

Section 3

> [!TIP]
> **Learning Objectives**
>
> - Set up an edit link to invite reader contributions
> - Compare how GitHub, Codeberg and GitLab handle proposed changes
> - Describe the fork-and-propose workflow for GitHub visitors

Open authoring closes the loop between publishing content openly and actively inviting others to improve it. The goal isn't just making content readable – it's making it editable.

## The Edit Link

This site adds an **Edit this Page** link to each page that connects visitors directly to its source Markdown file in your Git repository. Set your repository's address in `index.html` (`gitLinkRepoURL`), and choose where the link appears (`editThisPageLinkPosition`, the top or bottom of the page).

A single link serves two audiences:

- **Contributors with repository access** can edit the file directly
- **Everyone else** sees the file in the repository viewer, where they can fork it and propose changes

## Proposing Changes on Different Platforms

| Platform | Visitors without repository access |
| --- | --- |
| GitHub | Sign in, then select the edit (pencil) button – GitHub forks the repository and guides them through opening a pull request |
| Codeberg | Sign in, fork the repository, then open a pull request |
| GitLab | Sign in, fork the repository, then open a merge request |

GitHub handles visitors without repository access most smoothly, making it well suited for open authoring workflows.

## Asking Readers to Help

The simplest invitation is a single sentence at the top of your reader home page:

> Found an error or want to suggest an improvement? Use the link on any page to view the source and propose a change.

Readers who are comfortable with GitHub can open a pull request. Those who aren't can email you the suggested change. Either way, the source file is visible and accessible.

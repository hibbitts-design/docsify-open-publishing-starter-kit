# Git Sync – Version-Controlled Content

Git Sync turns your Grav pages folder into a version-controlled repository. Every save in the Admin Panel becomes a commit. Every commit in your repository becomes a page update.

## How It Works

The [Git Sync plugin](https://github.com/trilbymedia/grav-plugin-git-sync) connects Grav to a remote Git repository via a webhook. When you save a page, Grav commits and pushes the change. When you push to the repository directly, a webhook triggers a pull.

The result: your content lives simultaneously on your web server and in your Git repository, kept in sync automatically.

## Setting Up Git Sync

1. Create a repository on GitHub or Codeberg
2. Install and enable the Git Sync plugin
3. Run the Git Sync wizard – it generates the webhook URL and walks through the authentication setup
4. Set the sync folder to `pages` (the default)

Once configured, any page you save in the Admin Panel appears in your repository within seconds.

## Why This Matters for OER

A Git-backed reader is:
- **Portable** – clone the repository to move to a new host
- **Recoverable** – every version is preserved in history
- **Collaborative** – contributors can fork and propose changes
- **Citable** – specific versions can be tagged and linked permanently

The repository becomes the authoritative source. The Grav site is one way to render it.

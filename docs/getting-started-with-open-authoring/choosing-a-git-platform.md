# Choosing a Git Platform

The Git platform you choose affects how contributors interact with your reader and how your content is discovered. All three major platforms support the fork-and-propose workflow, but with meaningful differences.

## Platform Comparison

| Feature | GitHub | Codeberg | GitLab |
|---------|--------|----------|--------|
| Fork-and-propose for unauthenticated users | ✓ (edit mode) | Login required | Login required |
| Open source platform | ✗ (Microsoft) | ✓ (Gitea-based) | Partial (CE edition) |
| Discoverability | Highest | Growing | Moderate |
| Free private repositories | ✓ | ✓ | ✓ |
| Built-in CI/CD | ✓ (Actions) | ✓ (Forgejo Actions) | ✓ (Pipelines) |

## For Open Authoring: GitHub

GitHub's edit mode redirects unauthenticated visitors to a fork-and-propose flow automatically – no account required on your repository, just a GitHub account for the contributor. This makes GitHub the lowest-friction choice for open authoring with a public audience.

## For Values Alignment: Codeberg

[Codeberg](https://codeberg.org) is a non-profit, open-source Git hosting platform based on Forgejo. It's a strong choice for educators who want their entire toolchain – not just their content – to reflect open values. The Helios Open Reader plugin supports Codeberg natively via the Repository Host setting.

## Recommendation

For most educators starting out: use GitHub for its discoverability and contributor-friendly edit mode. If open-source infrastructure matters to your practice, Codeberg is a principled alternative with full plugin support.

> [!TIP]
> **Choosing Your Platform**
>
> Consider your own teaching context before deciding. Ask yourself:
>
> - How likely are your readers to already have a GitHub account?
> - Does it matter to you that your entire workflow – not just your content – is built on open-source tools?
> - Would you want contributors to be able to propose changes without contacting you first?
>
> There is no universally correct answer. The right platform is the one that fits your readers, your values, and your willingness to maintain it.

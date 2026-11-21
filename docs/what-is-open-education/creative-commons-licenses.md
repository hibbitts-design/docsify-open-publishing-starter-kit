# Creative Commons Licenses

Creative Commons licenses are the practical mechanism behind most open educational resources. They let you specify exactly which permissions you're granting – without requiring individual negotiations with each user.

## The Six Licenses

All CC licenses require attribution. The other conditions – NonCommercial, NoDerivatives, ShareAlike – combine to form six licenses:

| License | Free to share | Free to adapt | Commercial use |
|---------|:---:|:---:|:---:|
| CC BY | ✓ | ✓ | ✓ |
| CC BY-SA | ✓ | ✓ (same license) | ✓ |
| CC BY-NC | ✓ | ✓ | ✗ |
| CC BY-NC-SA | ✓ | ✓ (same license) | ✗ |
| CC BY-ND | ✓ | ✗ | ✓ |
| CC BY-NC-ND | ✓ | ✗ | ✗ |

## Which License to Choose

For educational materials intended to be remixed and adapted by other educators, **CC BY** or **CC BY-SA** are the most open choices. CC BY places the fewest restrictions and is compatible with the widest range of other OER.

If you want to ensure that adaptations are always shared under the same terms, **CC BY-SA** (ShareAlike) creates that expectation – similar to how open-source copyleft licenses work.

![A chart of the Creative Commons licenses, from most open at the top to least open at the bottom: public domain and CC0, then CC BY and CC BY-SA, which allow sharing, remixing and commercial use; CC BY-NC and CC BY-NC-SA, which allow sharing and remixing; CC BY-ND and CC BY-NC-ND, which allow sharing only; and all rights reserved](creative-commons-license-spectrum.webp)

*[Creative Commons license spectrum](https://commons.wikimedia.org/wiki/File:Creative_commons_license_spectrum.svg) by Shaddim (original CC license symbols by Creative Commons), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), via Wikimedia Commons*

> [!NOTE]
> The NonCommercial condition is often misunderstood. "Commercial use" covers a wide range of activities, and its meaning is context-dependent. When in doubt, CC BY is simpler and more reusable.

## Applying a License

To apply a license to your reader, add the license name and URL to the reader home page frontmatter:

```yaml
license: CC BY 4.0
license_url: https://creativecommons.org/licenses/by/4.0/
attribution_text: 'This work by Jane Smith is licensed under CC BY 4.0.'
```

Turn on **Show OER Attribution Block** in the reader home page's **Attribution** tab to display this at the bottom of every page.

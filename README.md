# camino-docs

Camino Messenger documentation for Travel Token Marketplace, built with
[Docusaurus](https://docusaurus.io/) and forked from the `camino-messenger`
section of [chain4travel/camino-docs](https://github.com/chain4travel/camino-docs).

The original Docusaurus-flavored content (admonitions, MDX, custom
components) is kept as-is rather than converted to plain Markdown.

## Local development

```bash
npm install
npm start
```

Starts a local dev server at `http://localhost:3000/camino-docs/` with hot reload.

## Build

```bash
npm run build
```

Outputs static files to `build/`. Always run this before pushing to catch
broken links early — `onBrokenLinks` is set to `throw`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it via GitHub Pages (Actions-based deployment).

One-time setup in the repo: **Settings → Pages → Source: "GitHub Actions"**.

Once enabled, the site is published at:
`https://travel-token-marketplace.github.io/camino-docs/`

## Structure

```
docs/
  camino-messenger/
    _category_.json
    introduction.md
    cancellation.md
    messenger-fees.md
    sdk.md
    bot/
      _category_.json
      index.md
      installation.mdx
      configuration.mdx
      partner-plugin.md
static/
  img/messenger/        - images referenced by the docs above
src/
  components/
    AsciinemaScriptInjector.js   - renders embedded terminal recordings
  pages/
    index.js             - redirects "/" to the introduction page
```

## Known quirks carried over from the source content

- **Admonitions** (`:::info`, `:::caution`, `:::note`, `:::warning`,
  `:::tip`) require `future.v4` to be `false` in `docusaurus.config.js`.
  Docusaurus 3.10.1's experimental "Faster" build pipeline (enabled by
  `future.v4: true`, which turns on `fasterByDefault`) does not wire the
  admonitions remark plugin into its MDX compiler, so admonitions render as
  literal `:::info` text instead of styled boxes under that pipeline. If a
  future Docusaurus release fixes this, `future.v4` can likely be re-enabled.
- **Images** must use Markdown syntax (`![alt](/img/messenger/x.png)`), not
  raw HTML `<img>` tags. Docusaurus's `transformImage` remark plugin, which
  rewrites image paths to include the site's `baseUrl` and content hash,
  only processes Markdown-syntax image nodes — raw HTML `<img src="...">`
  tags pass through untouched and will 404 once the site is served from a
  subpath like `/camino-docs/`. A handful of images in the original content
  were converted from raw `<img>` to Markdown syntax for this reason.
- **MDX component imports**: `installation.mdx` and `configuration.mdx`
  import `AsciinemaEmbed` from `/src/components/AsciinemaScriptInjector` to
  embed terminal recordings. This component injects a `<script>` tag
  client-side on mount, so it won't appear in the static-rendered HTML —
  that's expected, not a bug; it renders correctly once loaded in a browser.

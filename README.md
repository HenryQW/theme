# @henryqw/theme

Henry style for Henry Wang's sites: color tokens, base styles, and Astro components.
Used by [henry.wang](https://henry.wang) and [pi.henry.wang](https://pi.henry.wang).

## Files

| Import | Use |
| --- | --- |
| `@henryqw/theme/tokens.css` | `--ui-*` custom properties. Safe in any site. |
| `@henryqw/theme/base.css` | Element rules (body, links, focus ring). Standalone sites only. |
| `@henryqw/theme/components.css` | Styles for the components below, scoped to their classes. |
| `@henryqw/theme/blume.css` | Maps the tokens to Blume `--blume-*` variables (light and dark). |
| `@henryqw/theme/tokens` | The same colors as strings, for config files such as `blume.config.ts`. |
| `@henryqw/theme/fonts` | `geist`, the Geist entry for the Astro `fonts` config. |

Components (`@henryqw/theme/components/*.astro`): `SiteHeader`, `Footer`, `SocialLinks`,
`ExternalLink`, `Icon`, `Reveal`, `RowReveal`.

## Standalone Astro site

```css
@import "tailwindcss";
@import "@henryqw/theme/tokens.css";
@import "@henryqw/theme/base.css";
@import "@henryqw/theme/components.css";
```

```js
// astro.config.mjs
import { geist } from "@henryqw/theme/fonts";
export default defineConfig({ fonts: [geist] });
```

Render `<Font cssVariable="--font-geist" preload />` from `astro:assets` in the page head.

## Blume site

```css
/* theme.css */
@import "@henryqw/theme/tokens.css";
@import "@henryqw/theme/blume.css";
```

```ts
// blume.config.ts
import { colors } from "@henryqw/theme/tokens";
```

## Reveal

`Reveal` and `RowReveal` animate with CSS. A "view" reveal starts hidden only when scripts
run and the reader allows motion, so content stays visible without JavaScript.

## Development

```bash
npm test
```

To try a change in a site before a release, link the local copy from the site:
`pnpm link /path/to/theme`, then remove the link when done.

## Release

1. Update `version` in `package.json` and commit.
2. `npm publish` (scoped package; `publishConfig.access` is `public`).
3. `git tag v<version> && git push --tags`.

## License

MIT

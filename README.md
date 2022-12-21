# VedArc Astro/TypeScript proof of concept

**For a comparison of the two approaches &ndash; Astro/TypeScript vs.
React/ReactRouter/MUI &ndash; see [Comparison](./docs/comparison.md).**

Recommended: Install the latest Node and [pnpm](https://pnpm.io/installation).

- `pnpm i` installs dev dependencies. There are no runtime dependencies.
- `pnpm dev` runs the app in developer mode on port 3000. Add `--port <PORT>` to
  use a different port.
- `pnpm lint` runs the linter (uses
  [Deno lint](https://deno.land/manual@v1.29.1/tools/linter) and
  [Deno](https://deno.land/manual@v1.29.1/getting_started/installation)).
- `pnpm fmt` formats the code (requires [Dprint](https://dprint.dev/install/)
  and [Deno](https://deno.land/manual@v1.29.1/getting_started/installation).
- `pnpm check:exports` finds unused exports (will falsely flag the astro config
  file).
- `pnpm check:packages` finds dependencies that need updating.
- `pnpm build` builds the app into a `dist` folder.
- `pnpm preview` previews the built app (prod). Add `--port <PORT>` to use a
  different port.
- `pnpm start` is the same as `pnpm dev` for those who prefer "start".
- `pnpm test` runs all the tests.
- `pnpm test:cov` runs all the unit/integration tests and checks coverage.
- `pnpm test:e2e` runs all the Playwright end-to-end tests.
- `pnpm test:int` runs all the unit/integration tests, but not the coverage.

This uses [Astro](https://astro.build/) to provide component structure for easy
reuse, and [TypeScript](https://www.typescriptlang.org/) to provide static
typing.

The style is functional, so `type` is used in all cases instead of `interface`,
which is mutable.

## Routing

Pages can be found in `src/pages`. The folder name is the path. For example:

- `pages/index.astro` is served at `/`.
- `pages/about/index.astro` is served at `/about`.

This is a multi-page, static app, so there is no router. To link to a page,
simply use the anchor element:

```html
<a href="/about">About</a>
```

## CSS

CSS for a component is in an `index.css` file in the component's folder. It is
not namespaced, so use enough specificity to make sure you get the right
element. This file is imported into the component's `index.astro` file at the
very top.

## Components

The components are in the `app` folder and nested properly. That means that if a
component only appears as a subcomponent of the `<Header/>` component, then its
folder is nested in the `src/app/Header` folder, e.g., `src/app/Header/Nav` is
where you'll find the header's navigation menu.

As the nesting of components follows the nesting of the elements in the page, it
is easy to find what you're looking for. Also, if part of the page is deleted,
then everything that is unique to that component (all its subcomponents) are
deleted simultaneously. This is also true for moves.

If a component is reused elsewhere, simply move its folder up to immediately
above the branches in which it is used.

The global CSS stylesheets are in the `src/layouts/styles` folder. Astro
combines all the stylesheets and injects them into the HTML in the `<head>`. The
global CSS could be moved to external files. Which is more performant depends on
the version of HTTP and the browser. Can experiment and optimize.

The components take advantage of semantic HTML and are chosen for maximum
accessibility.

## Tests

Currently, there is no JavaScript so there are no unit or integration tests.
There is an example end-to-end test that can be run with `pnpm test:e2e`.

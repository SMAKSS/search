# Playground

This Vite app imports @smakss/search through the local pnpm workspace, so you can try changes without publishing a package version.

From the package root:

```sh
pnpm install
pnpm run dev:playground
```

The root script builds the package before starting Vite. To build the playground app for preview, run:

```sh
pnpm run build:playground
```

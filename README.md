# nyyx

An offline solution for writing articles, recipes, etc... and publishing them.

This monorepo (via turborepo) include:

- apps/desktop: offline app with Electron/Vite and Vue.
- packages/database: offline db with SQLite and Prisma for the apps/desktop.

## More used commands

```bash
turbo build
turbo dev
```

## Leftover

Trying other desktop generator (wails, tauri, electrobun) with no success (dependencies, blank app, etc)... Electron has the advantage to be more portable.

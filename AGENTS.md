# AGENTS.md - Developer Guidelines

## Project Overview

This is an Astro + React + Tailwind CSS v4 portfolio website. It uses TypeScript, with React components hydrated via `client:*` directives.

---

## Build Commands

```bash
npm run dev       # Start development server (astro dev)
npm run build     # Production build (astro build)
npm run preview   # Preview production build locally
npm run astro     # Run Astro CLI commands
```

### Running Biome (Linting & Formatting)

Biome is configured for this project. Run these commands:

```bash
npx biome check .        # Check all files
npx biome check --write . # Fix issues automatically
npx biome format .        # Format files
```

---

## Code Style Guidelines

### Formatting
- **Indentation**: Tabs (not spaces) - configured in `biome.json`
- **Quotes**: Double quotes for JavaScript/TypeScript
- **Line endings**: Unix-style (LF)

### File Naming
- **React/TypeScript components**: PascalCase (e.g., `ModeToggle.tsx`, `Header.tsx`)
- **Astro pages**: kebab-case (e.g., `index.astro`, `ThisSite.astro`)
- **UI components**: PascalCase in `src/components/ui/` folder

### Imports & Path Aliases
- Use `@/` alias for imports (configured in Astro/Vite)
- Example: `import { Button } from "@/components/ui/button"`
- Group imports: external packages first, then `@/` aliases, then relative imports
- Use `import * as React from "react"` for React namespace

### TypeScript
- Use explicit return types for functions when beneficial
- Use `type` over `interface` for simple object types
- Enable strict null checking

### React Components
- Use functional components with arrow functions or `function` keyword
- Prefer `React.useState` over hooks imported directly
- Use `client:load` or `client:visible` for interactive React components in Astro
- Avoid inline event handlers on child elements (Sun/Moon icons in ModeToggle)

### CSS & Tailwind
- Use Tailwind CSS v4 with `@theme` for custom properties
- Use `cn()` utility from `src/lib/utils.ts` for conditional class merging
- Custom variant: `@custom-variant dark (&:is(.dark *));` for dark mode

### Astro Components
- Use `<script is:inline>` for scripts that must run immediately (theme handling)
- Use `transition:animate` directives for page transitions
- ClientRouter imported from `astro:transitions` for view transitions

---

## Common Patterns

### Theme Toggle (Dark Mode)
The theme is controlled via:
- CSS class `.dark` on `<html>` element
- localStorage key `'theme'`
- Script in `Layout.astro` handles `astro:before-swap` and `astro:after-swap` events

### Utility Function
```typescript
// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Error Handling

- Let errors bubble up to Astro's error boundary
- Use TypeScript for type safety
- Check with Biome before committing

---

## Before Committing

Run Biome to check for issues:

```bash
npx biome check --write . && npx biome format .
```

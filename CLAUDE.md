# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Steam-inspired portfolio website built with React 19, TypeScript, and Vite. Styled to look like a Steam profile page, displaying developer info, GitHub stats, projects, achievements, and skills. Deployed on Vercel.

## Commands

- `npm run dev` — start dev server
- `npm run build` — typecheck (`tsc`) then build with Vite
- `npm run test` — run tests with Vitest (watch mode)
- `npm run test:coverage` — run tests with coverage
- `npx vitest run src/services/achievementService.test.ts` — run single test file

## Architecture

- **Config-driven**: Portfolio content is defined in `src/config/portfolio.config.ts` (personal info, social links, projects, achievements, skills, hobbies). Types in `src/types/index.ts`.
- **GitHub integration**: `src/services/github.ts` fetches user/repo/event data from GitHub API. Results cached via `src/utils/cache.ts`.
- **i18n**: `src/contexts/LanguageContext.tsx` provides translations via React context. Translations in `src/locales/translations.ts`, language service in `src/services/languageService.ts`.
- **Achievement system**: Visitor achievements tracked in `src/services/achievementService.ts`, configured in `src/config/achievements.config.ts`. Uses localStorage for persistence.
- **Styling**: Component-scoped CSS files alongside each component (no CSS modules or CSS-in-JS). Global styles in `src/styles/`.
- **Steam theming utilities**: `src/utils/steamLevelColors.ts` (level badge colors), `src/utils/steamXP.ts` (XP calculations).

## Skills

Read `.claude/fe.md` and apply its rules when the task involves any of:
- Keywords: "layout", "responsive", "mobile", "overflow", "UI", "UX", "animation", "CSS", "component", "design", "hydration", "CLS", "LCP", "INP", "a11y", "accessibility"
- Files: anything in `src/components/`, `src/styles/`, or `*.css`
- Phrases: "looks off", "broken on mobile", "fix the UI", "not responsive", "layout shift"

## Key Config Files

- `src/config/portfolio.config.ts` — main content configuration (personal info, projects, skills)
- `src/config/projectShowcase.config.ts` — project data loaded at runtime from CDN (`cdn.jsdelivr.net/gh/dtduong30/rich-content@master/projects.json`), not bundled
- `src/config/achievements.config.ts` — visitor achievement definitions
- `src/config/steamNotifications.config.ts` — Steam-style notification config
- `src/config/media.config.ts` — media/asset configuration

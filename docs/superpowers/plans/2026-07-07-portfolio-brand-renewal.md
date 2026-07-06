# Portfolio Brand Renewal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Renew the portfolio copy and section structure so it matches the resume-aligned brand around maintainable frontend structure for multi-brand, multilingual services.

**Architecture:** Keep the existing Vite + React + TypeScript + Tailwind app. Update static data first, then adjust section components to render the new brand hierarchy, key outcomes, project narrative fields, open source ordering, and practical skill grouping.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, lucide-react.

## Global Constraints

- Preserve the current single-page portfolio structure and GitHub Pages deployment settings.
- Use Korean copy with a grounded resume tone.
- Remove `Learning. Building. Growing.` and `성능과 사용자 경험을 설계하는 프론트엔드 개발자`.
- Use only reliable metrics: `3개 브랜드`, `50개국`, `40개 언어`, `2MD -> 1시간`, `10MD 내 9개 메뉴`, `React Hook Form Top 20 Contributor`, `주 1회 기술공유회`.
- Do not emphasize Next.js or Tailwind CSS as primary skills.
- Verify with `npm run build`.

---

### Task 1: Brand Data

**Files:**
- Modify: `src/types/user.ts`
- Modify: `src/data/userData.ts`

**Interfaces:**
- Produces: `userData.highlights`, `brandOutcomes`, and revised profile paragraphs consumed by `Hero`, `About`, and `Skills`.

- [ ] Add optional type support for brand highlights and outcome cards.
- [ ] Rewrite `userData.description`, `stats`, `interests`, and `aboutContent.paragraphs`.
- [ ] Add `brandOutcomes` with six card entries.
- [ ] Run `npm run build` and fix type errors.

### Task 2: About and Hero Presentation

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/About.tsx`

**Interfaces:**
- Consumes: `userData`, `aboutContent`, `brandOutcomes`.

- [ ] Replace Hero badge and supporting copy with the new brand message.
- [ ] Remove the old About subtitle.
- [ ] Render six key outcome cards in About.
- [ ] Keep responsive layout and existing animation patterns.

### Task 3: Project Narrative

**Files:**
- Modify: `src/types/project.ts`
- Modify: `src/data/projectData.ts`
- Modify: `src/components/Projects.tsx`

**Interfaces:**
- Produces: `Project.problem`, `Project.decision`, `Project.result`, and optional `Project.role`.
- Consumes: project narrative fields in project cards and modal.

- [ ] Extend `Project` with narrative fields.
- [ ] Reorder and rewrite priority projects: Back Office, Front Office, Global Insight Admin, PixEngine.
- [ ] Change card summary and modal detail from feature list first to problem/decision/result first.
- [ ] Preserve tech stack display as secondary context.

### Task 4: Open Source Narrative

**Files:**
- Modify: `src/data/opensourceData.ts`
- Modify: `src/components/OpenSource.tsx`

**Interfaces:**
- Consumes: existing `OpenSourceContribution` shape.

- [ ] Reorder contributions to PixEngine, React Hook Form, Gemini CLI.
- [ ] Rewrite descriptions and PR entries to match the requested tone.
- [ ] Emphasize React Hook Form Top 20 Contributor.

### Task 5: Skills Rebalance and Verification

**Files:**
- Modify: `src/components/Skills.tsx`
- Verify: `src/**/*`

**Interfaces:**
- Consumes no external API.

- [ ] Replace current skill list with practical main stack.
- [ ] Keep Next.js/Tailwind out of primary skill display.
- [ ] Search for removed copy and metrics with `rg`.
- [ ] Run `npm run build`.

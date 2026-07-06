# Portfolio Brand Renewal Design

## Goal

Renew the portfolio so it reads like a resume-aligned frontend engineer brand: a developer who designs maintainable structures for multi-brand, multilingual services and makes technical decisions that improve productivity and stability.

## Brand Message

Primary message:

> 멀티 브랜드와 다국어 서비스의 복잡성을 단순하고 안정적인 구조로 설계합니다.

Supporting message:

> 기술적 의사결정으로 개발 생산성과 유지보수성을 높이는 프론트엔드 개발자입니다.

The page should leave the impression that the developer designs structures that respond well to changing requirements, not merely that they know many technologies.

## Content Requirements

- Remove `Learning. Building. Growing.` and the existing performance/UX centered tagline.
- Rewrite Hero and About/Profile in a grounded resume style.
- Use only reliable metrics:
  - 3개 브랜드
  - 50개국
  - 40개 언어
  - 2MD → 1시간
  - 10MD 내 9개 메뉴
  - React Hook Form Top 20 Contributor
  - 주 1회 기술공유회
- Avoid or remove unverifiable metrics:
  - 폼 코드 60% 감소
  - 페이지 로딩 시간 5초 -> 2초
  - 결제 완료율 60% 증가
  - 온보딩 2주 -> 3일
  - 프로젝트 완주율 100%
  - 성능 개선 60%+

## Section Design

### Hero

Hero uses the primary brand message as the first readable statement. The supporting text explains maintainable frontend architecture, multi-brand/multilingual complexity, and practical collaboration.

### About/Profile

About becomes a profile section. It explains:

- Designing structures that adapt to changing requirements.
- Preferring technical decisions based on maintainability and extensibility.
- Choosing intentional duplication when unconditional abstraction would increase maintenance cost.
- Reducing requirement response time from 2MD to about 1 hour through structure.
- Collaborating with backend, mobile, PM, and planning teams.
- Sharing knowledge and valuing team growth.

### Key Outcomes

Add or convert a visible card grid with six outcomes:

- 멀티 브랜드·다국어 서비스
- 유지보수 가능한 구조 설계
- Open Source
- 기술적 의사결정 및 협업
- 장애 대응
- 기술 공유

### Projects

Project copy changes from technology listing to problem -> decision -> result. Priority order:

1. KIA/HYUNDAI/GENESIS ONE APP - Back Office
2. Global Insight Admin
3. KIA/HYUNDAI/GENESIS ONE APP - Front Office
4. PixEngine

Each card and modal should emphasize why the design decision was made and what changed as a result.

### Open Source

Open Source order:

1. React Hook Form
2. Gemini CLI

React Hook Form highlights Top 20 Contributor, `Object.is()` deepEqual fix, and core utility tests. Gemini CLI highlights parser modularization, API mock structure improvement, and MCP Client Manager unhandled promise rejection handling.

### Skills

Main skills focus on practical work:

- React
- TypeScript
- JavaScript
- TanStack Query
- React Hook Form
- Zustand
- MUI
- SCSS
- Node.js
- Spring Boot
- MySQL

Next.js and Tailwind CSS should not appear as primary skills; they can remain in side project tech stacks.

## Visual Direction

Keep the existing React/Tailwind implementation and restrained portfolio layout. Shift emphasis through hierarchy, cards, and copy rather than a full visual redesign. Use the current glass/card language but make the information denser and more resume-like.

## Verification

- Run `npm run build`.
- Confirm TypeScript passes.
- Confirm no old tagline remains.
- Confirm no removed unverifiable metrics remain in active content.

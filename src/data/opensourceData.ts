import { OpenSourceContribution } from "../types/opensource";

export const opensourceContributions: OpenSourceContribution[] = [
  {
    id: 1,
    project: "react-hook-form",
    description:
      "Performance-focused React form library with minimal re-renders",
    prs: [
      {
        number: 12932,
        title: "Added unit tests for internal utility functions",
        description:
          "Added unit tests for internal utility functions (e.g., live). Focused on ensuring type safety with Ref and HTMLElement handling.",
        status: "merged",
        link: "https://github.com/react-hook-form/react-hook-form/pull/12932",
      },
      {
        number: 12934,
        title: "Comprehensive unit tests for hasValidation function",
        description:
          "Added comprehensive unit tests for hasValidation, covering all validation rule branches and edge cases. Improved type safety by eliminating as any and using type-safe test field definitions.",
        status: "merged",
        link: "https://github.com/react-hook-form/react-hook-form/pull/12934",
      },
      {
        number: 13120,
        title:
          "fix(deepEqual): handle NaN comparison correctly using Object.is",
        description:
          "Fixed an issue where deepEqual would incorrectly handle NaN comparisons. Implemented Object.is to ensure correct equality checks for NaN values.",
        status: "merged",
        link: "https://github.com/react-hook-form/react-hook-form/pull/13120",
      },
      {
        number: 12940,
        title: "Unit tests for utility functions",
        description:
          "Added unit tests for unsetEmptyArray, isWeb, and getValidationModes utility functions. Verified their behaviors to ensure reliability across different use cases.",
        status: "merged",
        link: "https://github.com/react-hook-form/react-hook-form/pull/12940",
      },
      {
        number: 12967,
        title: "Unit tests for convertToArrayPayload function",
        description:
          "Added unit tests for convertToArrayPayload to verify handling of both array and non-array inputs. Ensures correct wrapping logic and structural equality using toStrictEqual.",
        status: "merged",
        link: "https://github.com/react-hook-form/react-hook-form/pull/12967",
      },
      {
        number: 13184,
        title: "fix: prevent infinite recursion in getDirtyFields",
        description:
          "Fixed a stack overflow issue caused by infinite recursion in getDirtyFields when handling circular references in form data.",
        status: "open",
        link: "https://github.com/react-hook-form/react-hook-form/pull/13184",
      },
    ],
    techStack: ["React", "TypeScript", "Testing", "Form Validation"],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    project: "gemini-cli",
    description: "AI-powered CLI tool for Google's Gemini API",
    prs: [
      {
        number: 4287,
        title: "Enhanced loadCodeAssist test with realistic mock data",
        description:
          "Replaced the TODO in loadCodeAssist test with a realistic LoadCodeAssistResponse mock. Added assertions to validate key response fields like currentTier and allowedTiers.",
        status: "merged",
        link: "https://github.com/google-gemini/generative-ai-js/pull/4287",
      },
      {
        number: 4575,
        title: "Unified partToString function for better maintainability",
        description:
          "Unified partToString to handle both plain text and verbose summary modes, replacing partListUnionToString with a thin wrapper. Consolidated related tests into partUtils.test.ts, removing redundancy and improving maintainability.",
        status: "merged",
        link: "https://github.com/google-gemini/generative-ai-js/pull/4575",
      },
      {
        number: 14701,
        title:
          "fix(core): handle unhandled promise rejection in mcp-client-manager",
        description:
          "Implemented proper error handling for promise rejections in the MCP client manager to prevent application crashes and improve stability.",
        status: "open",
        link: "https://github.com/google-gemini/gemini-cli/pull/14701",
      },
    ],
    techStack: ["TypeScript", "Node.js", "Testing", "API Integration"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    project: "TanStack/query",
    description: "Powerful asynchronous state management for TS/JS",
    prs: [
      {
        number: 9959,
        title: "fix(query-core): prevent duplicate abort event listeners",
        description:
          "Fixed a potential memory leak by preventing duplicate abort signal event listeners in infinite query observers.",
        status: "open",
        link: "https://github.com/TanStack/query/pull/9959",
      },
    ],
    techStack: ["TypeScript", "Query Core", "State Management"],
    color: "from-red-500 to-orange-500",
  },
  {
    id: 4,
    project: "shadcn-ui",
    description:
      "Beautifully designed components built with Radix UI and Tailwind CSS",
    prs: [
      {
        number: 8985,
        title: "refactor(migrations): optimize icon migration performance",
        description:
          "Optimized the performance of the icon migration script, significantly reducing execution time for large projects.",
        status: "open",
        link: "https://github.com/shadcn-ui/ui/pull/8985",
      },
    ],
    techStack: ["React", "TypeScript", "CLI", "Tailwind CSS"],
    color: "from-slate-800 to-black",
  },
];

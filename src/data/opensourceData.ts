import { OpenSourceContribution } from "../types/opensource";

export const opensourceContributions: OpenSourceContribution[] = [
  {
    id: 1,
    project: "react-hook-form",
    description:
      "Performance-focused React form library with minimal re-renders",
    repoUrl: "https://github.com/react-hook-form/react-hook-form",
    stars: 41200,
    weeklyDownloads: "8.5M",
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
    project: "google-gemini/gemini-cli",
    description: "Official CLI for Google's Gemini AI - Build AI-powered applications from the command line",
    repoUrl: "https://github.com/google-gemini/gemini-cli",
    stars: 87100,
    weeklyDownloads: "300K",
    prs: [
      {
        number: 4287,
        title: "Enhanced loadCodeAssist test with realistic mock data",
        description:
          "Replaced the TODO in loadCodeAssist test with a realistic LoadCodeAssistResponse mock. Added assertions to validate key response fields like currentTier and allowedTiers.",
        status: "merged",
        link: "https://github.com/google-gemini/gemini-cli/pull/4287",
      },
      {
        number: 4575,
        title: "Unified partToString function for better maintainability",
        description:
          "Unified partToString to handle both plain text and verbose summary modes, replacing partListUnionToString with a thin wrapper. Consolidated related tests into partUtils.test.ts, removing redundancy and improving maintainability.",
        status: "merged",
        link: "https://github.com/google-gemini/gemini-cli/pull/4575",
      },
      {
        number: 14701,
        title:
          "fix(core): handle unhandled promise rejection in mcp-client-manager",
        description:
          "Implemented proper error handling for promise rejections in the MCP client manager to prevent application crashes and improve stability.",
        status: "merged",
        link: "https://github.com/google-gemini/gemini-cli/pull/14701",
      },
    ],
    techStack: ["TypeScript", "Node.js", "Testing", "API Integration"],
    color: "from-blue-500 to-cyan-500",
  },
  // {
  //   id: 3,
  //   project: "TanStack/query",
  //   description: "Powerful asynchronous state management for TS/JS",
  //   repoUrl: "https://github.com/TanStack/query",
  //   stars: 42800,
  //   weeklyDownloads: "12M",
  //   prs: [
  //     {
  //       number: 9959,
  //       title: "fix(query-core): prevent duplicate abort event listeners",
  //       description:
  //         "Fixed a potential memory leak by preventing duplicate abort signal event listeners in infinite query observers.",
  //       status: "open",
  //       link: "https://github.com/TanStack/query/pull/9959",
  //     },
  //   ],
  //   techStack: ["TypeScript", "Query Core", "State Management"],
  //   color: "from-red-500 to-orange-500",
  // },
  {
    id: 3,
    project: "shadcn-ui",
    description:
      "Beautifully designed components built with Radix UI and Tailwind CSS",
    repoUrl: "https://github.com/shadcn-ui/ui",
    stars: 78500,
    weeklyDownloads: "2.8M",
    prs: [
      {
        number: 9184,
        title: "fix(cli): add cache to getTargetStyleFromConfig",
        description:
          "Implemented caching for getTargetStyleFromConfig function to prevent redundant calls to getProjectInfo(). Eliminates redundant operations and improves overall CLI performance by returning cached results when available.",
        status: "open",
        link: "https://github.com/shadcn-ui/ui/pull/9184",
      },
      {
        number: 9188,
        title: "feat(ui): add Timeline component",
        description:
          "Introduced a new Timeline component to shadcn/ui v4 with multiple layout positions (left, right, alternate, center), flexible marker variants, icon support, and full accessibility. Includes comprehensive documentation and four example implementations.",
        status: "open",
        link: "https://github.com/shadcn-ui/ui/pull/9188",
      },
    ],
    techStack: ["React", "TypeScript", "CLI", "Tailwind CSS"],
    color: "from-slate-800 to-black",
  },
];

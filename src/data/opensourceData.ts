import { OpenSourceContribution } from "../types/opensource";

export const opensourceContributions: OpenSourceContribution[] = [
  {
    id: 1,
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
    ],
    techStack: ["TypeScript", "Node.js", "Testing", "API Integration"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    project: "react-hook-form",
    description: "Performance-focused React form library with minimal re-renders",
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
    ],
    techStack: ["React", "TypeScript", "Testing", "Form Validation"],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 3,
    project: "date-fns",
    description: "Modern JavaScript date utility library",
    prs: [
      {
        number: 4049,
        title: "Improved type safety in setDefaultOptions",
        description:
          "Improved type safety in setDefaultOptions by eliminating as any casts and assigning properties explicitly",
        status: "in-progress",
        link: "https://github.com/date-fns/date-fns/pull/4049",
      },
    ],
    techStack: ["JavaScript", "TypeScript", "Date Utilities", "Type Safety"],
    color: "from-green-500 to-emerald-500",
  },
];

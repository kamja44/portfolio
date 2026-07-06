import { OpenSourceContribution } from "../types/opensource";

export const opensourceContributions: OpenSourceContribution[] = [
  {
    id: 1,
    project: "PixEngine",
    description:
      "서비스 정책에 따라 이미지 최적화 방식을 선언적으로 제어하는 정책 기반 이미지 최적화 엔진",
    repoUrl: "https://github.com/pixengine/pixengine",
    prs: [
      {
        number: 1,
        title: "정책 기반 이미지 최적화 파이프라인 설계",
        description:
          "서비스 요구사항에 따라 포맷, 크기, 품질, 저장 위치를 명시적으로 제어할 수 있는 정책 우선 구조를 설계했습니다.",
        status: "in-progress",
        link: "https://github.com/pixengine/pixengine",
      },
      {
        number: 2,
        title: "교체 가능한 처리 엔진과 스토리지 어댑터 구조",
        description:
          "Sharp 기반 처리 엔진과 S3, R2, GCS, Azure Blob Storage를 교체 가능한 모듈로 분리했습니다.",
        status: "in-progress",
        link: "https://github.com/pixengine/pixengine",
      },
      {
        number: 3,
        title: "Express Middleware와 responsive picture helper 제공",
        description:
          "애플리케이션에서 최적화 정책을 쉽게 적용할 수 있도록 Express Middleware와 반응형 picture 헬퍼를 제공합니다.",
        status: "in-progress",
        link: "https://github.com/pixengine/pixengine",
      },
    ],
    techStack: ["TypeScript", "Node.js", "Sharp", "Express.js", "Storage Adapter"],
    color: "from-violet-500 to-blue-500",
  },
  {
    id: 2,
    project: "react-hook-form",
    description:
      "React Hook Form Top 20 Contributor로서 폼 라이브러리의 안정성과 테스트 커버리지 개선에 기여",
    repoUrl: "https://github.com/react-hook-form/react-hook-form",
    prs: [
      {
        number: 13120,
        title: "fix(deepEqual): handle NaN comparison correctly using Object.is",
        description:
          "Object.is()를 활용해 deepEqual이 NaN 비교를 올바르게 처리하지 못하던 문제를 수정했습니다.",
        status: "merged",
        link: "https://github.com/react-hook-form/react-hook-form/pull/13120",
      },
      {
        number: 12934,
        title: "Comprehensive unit tests for hasValidation function",
        description:
          "hasValidation의 주요 분기와 예외 상황을 검증하는 단위 테스트를 추가해 핵심 유틸리티 안정성을 높였습니다.",
        status: "merged",
        link: "https://github.com/react-hook-form/react-hook-form/pull/12934",
      },
      {
        number: 12932,
        title: "Added unit tests for internal utility functions",
        description:
          "내부 유틸리티 함수의 타입 안전성과 DOM 참조 처리 동작을 검증하는 테스트를 추가했습니다.",
        status: "merged",
        link: "https://github.com/react-hook-form/react-hook-form/pull/12932",
      },
    ],
    techStack: ["React", "TypeScript", "Testing", "Form Validation"],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 3,
    project: "google-gemini/gemini-cli",
    description:
      "Google Gemini CLI의 파서 구조, API Mock, MCP Client Manager 안정성 개선에 기여",
    repoUrl: "https://github.com/google-gemini/gemini-cli",
    prs: [
      {
        number: 4575,
        title: "Unified partToString function for better maintainability",
        description:
          "Parser 로직을 독립적으로 다룰 수 있도록 관련 변환 로직을 정리하고 테스트 구조를 개선했습니다.",
        status: "merged",
        link: "https://github.com/google-gemini/gemini-cli/pull/4575",
      },
      {
        number: 4287,
        title: "Enhanced loadCodeAssist test with realistic mock data",
        description:
          "API Mock 데이터를 실제 응답 구조에 가깝게 개선해 테스트가 검증하는 필드를 명확히 했습니다.",
        status: "merged",
        link: "https://github.com/google-gemini/gemini-cli/pull/4287",
      },
      {
        number: 14701,
        title: "fix(core): handle unhandled promise rejection in mcp-client-manager",
        description:
          "MCP Client Manager에서 unhandled promise rejection이 발생할 수 있는 경로에 오류 처리를 추가했습니다.",
        status: "merged",
        link: "https://github.com/google-gemini/gemini-cli/pull/14701",
      },
    ],
    techStack: ["TypeScript", "Node.js", "Testing", "MCP"],
    color: "from-blue-500 to-cyan-500",
  },
];

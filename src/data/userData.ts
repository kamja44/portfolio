import { User } from "../types/user";

export const userData: User = {
  name: "전형호",
  email: "gudgh5007@gmail.com",
  location: "서울, 대한민국",
  github: "https://github.com/kamja44",
  jobTitle: "프론트엔드 개발자",
  description:
    "React와 TypeScript로 사용자 중심의 웹 경험을 만듭니다. 복잡한 UI/UX 문제를 해결하고, 성능 최적화와 개발자 경험 개선에 집중합니다. 프론트엔드 아키텍처 설계부터 성능 최적화까지, 기술의 깊이를 더하며 성장하는 개발자입니다.",
  greeting: "안녕하세요! 저는 전형호입니다.",
  stats: [
    { number: "3+", label: "년간 개발 경험" },
    { number: "6+", label: "프론트엔드 프로젝트" },
    { number: "60%+", label: "성능 개선 달성" },
    { number: "100%", label: "프로젝트 완주율" },
  ],
  interests: [
    "React/TypeScript",
    "성능 최적화",
    "UI/UX Design",
    "컴포넌트 아키텍처",
    "웹 접근성 준수",
    "DX 개선",
  ],
};

export const aboutContent = {
  paragraphs: [
    "프론트엔드 개발자로서 사용자 경험을 최우선으로 생각하며, React와 TypeScript를 기반으로 확장 가능하고 유지보수하기 쉬운 웹 애플리케이션을 만듭니다. 단순히 기능을 구현하는 것을 넘어, 성능 최적화, 개발자 경험(DX) 개선, 재사용 가능한 컴포넌트 설계에 집중합니다.",
    "현재 Genesisnest에서 KIA/HYUNDAI/GENESIS ONE APP의 프론트엔드 개발을 담당하고 있습니다. React Hook Form 도입으로 팀의 폼 관리 코드를 60% 감소시켰고, TanStack Query 최적화로 페이지 로딩 시간을 5초에서 2초로 단축했습니다. 20개 이상의 공통 컴포넌트를 설계하여 신규 메뉴 개발 속도를 60% 향상시켰으며, 40개 언어를 지원하는 글로벌 i18n 시스템을 구축했습니다.",
    "복잡한 UI/UX 문제 해결에 강점을 가지고 있습니다. 40개 언어 다국어 폼에서 유효성 검증 실패 시 자동으로 해당 탭으로 이동하는 UX 시스템을 구현해 탭 탐색 횟수를 97.5% 감소시켰습니다(최대 40번 → 1번). Google Analytics 데이터 기반으로 전기차 충전 결제 플로우를 4단계에서 2단계로 축약하여 결제 완료율을 60% 증가시켰습니다(55% → 88%).",
    "팀 내에서 기술 리더십을 발휘하며 코드 리뷰와 기술 토론을 주도하고 있습니다. React Hook Form을 팀 표준으로 확립하여 신규 팀원의 온보딩 기간을 2주에서 3일로 단축했으며, WCAG/EAA 접근성 표준을 준수하는 실시간 폼 검증 시스템을 구축하여 글로벌 규제에 대응했습니다.",
    "최신 프론트엔드 기술 트렌드(React 19, Next.js 16, Tailwind CSS v4)를 적극적으로 학습하고 도입하며, 더 나은 사용자 경험과 개발 효율성을 위해 끊임없이 고민합니다. 웹 성능 최적화와 웹 접근성 향상에 깊은 관심을 가지고 있으며, 모든 사용자가 불편함 없이 사용할 수 있는 웹 서비스를 만드는 것을 목표로 하고 있습니다.",
  ],
};

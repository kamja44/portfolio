export const projects = [
  {
    id: 1,
    title: "세계자연유산 모니터링 시스템",
    description: "HTML, CSS, JavaScript(ES5)",
    stack: "Front-End",
    image: `${process.env.PUBLIC_URL}/image/jeju.webp`, // 이미지 경로 설정
    // image: `${process.env.PUBLIC_URL}/image/3월.png`, // 이미지 경로 설정
    techStack: ["HTML", "CSS", "JavaScript(ES5)", "REST API", "Canvas JS"],
    progressRate: "Front-End 100%",
    duration: "2021.09 - 2022.04",
    link: "",
    features: [
      "기존 모니터링 사이트 통합",
      "센서 데이터 및 기상 데이터 시각화",
      "Flex와 Grid를 이용하여 반응형 웹 사이트개발",
      "카카오맵 API를 이용하여 카카오 지도에 센서 위치 시각화",
      "API 데이터 수신 실패 시 에러 제어",
    ],
    // team: [""],
  },
  {
    id: 2,
    title: "제주도청 전기차 충전기 시스템",
    description: "JavaScript(ES6+), Spring, Node.JS",
    stack: "Full-Stack",
    image: `${process.env.PUBLIC_URL}/image/jeju.webp`, // 이미지 경로 설정
    // image: `${process.env.PUBLIC_URL}/image/3월.png`, // 이미지 경로 설정
    techStack: ["JavaScript(ES6+)", "Spring", "MariaDB", "Node.JS", "REST API"],
    progressRate: "Front-End 80% Back-End 20%",
    duration: "2022.01 - 2023.08",
    link: "",
    features: [
      "ES5, jQuery로 작성된 코드를 ES6+로 리팩토링하여 구조 개선 및 가독성 향상",
      "DB쿼리문을 재작성하여 성능 최적화 및 데이터 처리 속도 10% 향상",
      "REST API를 이용하여 충전기의 충전량, 충전시간, 지역별 충전량등의 데이터를 시각화",
      "카카오맵 API를 이용하여 카카오 지도에 충전기 위치 시각화",
      "로딩 애니메이션을 구현하여 데이터 로딩 중 사용자 경험 향상",
      "페이지네이션을 구현하여 초기 로딩 시간 및 서버 부담 감소",
      "충전기 일괄제어 기능 개발",
      "충전기 단가관리 기능 개발",
      "충전기 덤프데이터 자동 관리 도구를 개발하여 덤프 데이터 관리 시간 60% 감소",
    ],
    // team: ["홍길동", "이몽룡"],
  },
  {
    id: 3,
    title: "카카오톡 클론코딩",
    description: "HTML, CSS, JavaScript(ES6+)",
    stack: "Front-End",
    image: `${process.env.PUBLIC_URL}/image/kakaotalk.webp`, // 이미지 경로 설정
    // image: `${process.env.PUBLIC_URL}/image/3월.png`, // 이미지 경로 설정
    techStack: ["HTML", "CSS", "JavaScript(ES6+)"],
    progressRate: "Front-End 100%",
    duration: "2021.01 - 2021.03",
    link: "https://kamja44.github.io/kokoa-clone-2021/",
    features: [
      "Media Query를 이용하여 모바일 화면에서만 로그인 기능 구현",
      "프로필, 친구목록, 채팅 화면 구현",
    ],
    // team: [""],
  },
  {
    id: 4,
    title: "유튜브 클론코딩",
    description: "Node.JS, MongoDB, Express",
    stack: "Full-Stack",
    image: `${process.env.PUBLIC_URL}/image/youtube.webp`, // 이미지 경로 설정
    // image: `${process.env.PUBLIC_URL}/image/3월.png`, // 이미지 경로 설정
    techStack: ["Node.JS", "MongoDB", "JavaScript(ES6+)", "Express", "AWS S3"],
    progressRate: "Front-End 100% Back-End 100%",
    duration: "2023.01 - 2024.08",
    link: "https://wetubechallenge2024-kamja.fly.dev/",
    features: [
      "로그인 기능 구현",
      "소셜 로그인 기능 구현(깃허브 로그인)",
      "PUG와 SCSS를 이용하여 프론트엔드 구현",
      "Node.js의 Express를 이용하여 백엔드 구현",
      "MongoDB와 mongoose를 이용하여 데이터베이스 구현",
      "AWS S3를 이용하여 데이터 저장",
      "Fly.io를 이용하여 웹페이지 배포",
    ],
    team: [""],
  },
  {
    id: 5,
    title: "MBIT 테스트 페이지",
    description: "JavaScript(ES6+), Django",
    stack: "Full-Stack",
    image: `${process.env.PUBLIC_URL}/image/mbit.webp`, // 이미지 경로 설정
    // image: `${process.env.PUBLIC_URL}/image/3월.png`, // 이미지 경로 설정
    techStack: ["HTML", "CSS", "JavaScript(ES6+)", "Django"],
    progressRate: "Front-End 100% Back-End 100%",
    duration: "2022.06 - 2022.07",
    link: "https://mbittest-apjcd.run.goorm.site/",
    features: [
      "설문조사 페이지 구현",
      "CSS를 이용하여 화면이 이동하는 애니메이션 구현",
      "Django를 이용하여 백엔드 구현",
      "goorm 컨테이너를 이용하여 웹페이지 배포",
    ],
    team: [""],
  },
  {
    id: 6,
    title: "트위터(X) 클론코딩",
    description: "ReactJS, TypeScript, Firebase",
    stack: "Full-Stack",
    image: `${process.env.PUBLIC_URL}/image/twitter.webp`, // 이미지 경로 설정
    // image: `${process.env.PUBLIC_URL}/image/3월.png`, // 이미지 경로 설정
    techStack: ["JavaScript(ES6+)", "TypeScript", "ReactJS", "Firebase"],
    progressRate: "Front-End 100% Back-End 100%",
    duration: "2024.05 - 2024.05",
    link: "https://twitter-challenge-67593.web.app/",
    features: [
      "로그인 기능 구현",
      "소셜 로그인 기능 구현",
      "실시간 피드 기능 구현",
    ],
    team: [""],
  },
  {
    id: 7,
    title: "영화 웹 만들기",
    description: "React",
    stack: "Front-End",
    image: `${process.env.PUBLIC_URL}/image/movie-app.webp`, // 이미지 경로 설정
    // image: `${process.env.PUBLIC_URL}/image/3월.png`, // 이미지 경로 설정
    techStack: ["JavaScript(ES6+)", "ReactJS", "REST API"],
    progressRate: "Front-End 100%",
    duration: "2024.05 - 2024.05",
    link: "https://kamja44.github.io/movie-app/",
    features: [
      "REST API를 이용하여 영화 데이터 요청 ",
      "웹 프론트엔드 페이지 제작",
    ],
    team: [""],
  },
  {
    id: 8,
    title: "암호화폐 시세 트래커",
    description: "React, TypeScript, React Query",
    stack: "Front-End",
    image: `${process.env.PUBLIC_URL}/image/movie-app.webp`, // 이미지 경로 설정
    // image: `${process.env.PUBLIC_URL}/image/3월.png`, // 이미지 경로 설정
    techStack: [
      "JavaScript(ES6+)",
      "TypeScript",
      "ReactJS",
      "REST API",
      "React Query",
      "React-Router V6",
    ],
    progressRate: "Front-End 100%",
    duration: "2024.05 - 2024.07",
    link: "https://kamja44.github.io/coin-tracker/",
    features: [
      "REST API를 이용하여 암호화폐 데이터를 요청하여 처리 ",
      "웹 프론트엔드 페이지 제작",
      "React Router Dom V6를 이용하여 라우팅 시스템 구현",
      "암호화폐 가격 ApexChart를 이용하여 시각화",
      "다크모드, 라이트모드 기능 구현",
    ],
    team: [""],
  },
  {
    id: 9,
    title: "트렐로 클론코딩",
    description: "React, TypeScript, Recoil ",
    stack: "Front-End",
    image: `${process.env.PUBLIC_URL}/image/trello.png`, // 이미지 경로 설정
    // image: `${process.env.PUBLIC_URL}/image/3월.png`, // 이미지 경로 설정
    techStack: [
      "JavaScript(ES6+)",
      "TypeScript",
      "ReactJS",
      "React Hook Form",
      "recoil",
      "Beautiful DnD",
    ],
    progressRate: "Front-End 100%",
    duration: "2024.05 - 2024.07",
    link: "https://kamja44.github.io/movie-app/",
    features: [
      "웹 프론트엔드 페이지 제작",
      "React Hook Form을 이용하여 입력폼 빌드 및 검증",
      "recoil을 이용하여 상태 관리",
      "Beautiful DnD를 이용하여 드래그 앤 드롭 애니메이션 구현",
    ],
    team: [""],
  },
  {
    id: 10,
    title: "pomodoro App",
    description: "Flutter, Dart",
    stack: "Front-End",
    image: `${process.env.PUBLIC_URL}/image/pomodoro.png`, // 이미지 경로 설정
    // image: `${process.env.PUBLIC_URL}/image/3월.png`, // 이미지 경로 설정
    techStack: ["Flutter", "Dart"],
    progressRate: "Front-End 100%",
    duration: "2024.07 - 2024.07",
    link: "https://kamja44.github.io/pomodoro/",
    features: [
      "웹 프론트엔드 페이지 제작",
      "Flutter를 이용하여 pomodoro App 기능 구현",
    ],
    team: [""],
  },
  {
    id: 11,
    title: "Jeju-deers 웹페이지",
    description: "React, TypeScript, Node.js, MongoDB, Express",
    stack: "Full-Stack",
    image: `${process.env.PUBLIC_URL}/image/misike.webp`, // 이미지 경로 설정
    // image: `${process.env.PUBLIC_URL}/image/3월.png`, // 이미지 경로 설정
    techStack: ["React", "TypeScript", "Node.Js"],
    progressRate: "Front-End 10% Back-End 90%",
    duration: "2024.04 - 진행중",
    link: "",
    features: ["로그인 및 회원가입 기능 구현"],
    team: [""],
  },
];

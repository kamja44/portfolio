import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Building, Award } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Genesisnest",
      position: "Frontend Developer",
      period: "2024.09 - 현재",
      location: "경기도 용인",
      type: "Full-time",
      description: "웹 애플리케이션 프론트엔드 개발 및 UI/UX 개선 담당",
      achievements: [
        "멀티 브랜드·다국어 구조 설계: 현대·기아·제네시스 3개 브랜드, 50개국·40개 언어를 지원하는 콘텐츠 등록 구조와 상태 관리 방식을 설계 및 운영",
        "AHA 원칙 적용: 무리한 공통화를 줄이고 도메인별 책임을 분리해 신규 요구사항 대응 시간을 평균 2MD에서 1시간 수준으로 단축",
        "다국어 폼 구조 설계: React Hook Form 기반으로 언어별 입력값, 검증 상태, 저장 데이터를 안정적으로 관리하는 구조 구현",
        "상태 책임 분리: TanStack Query와 Zustand를 활용해 서버 상태와 화면 상태의 책임을 분리하고 유지보수성을 개선",
        "기술적 의사결정 및 협업: PM·기획·BE·FE 간 공수, 일정, 개발 방향을 조율하며 프로젝트 리스크를 사전에 정리",
        "장애 대응: 배포 후 차량 등록 장애 원인을 분석하고 대응 방안을 제안해 서비스 안정성 확보에 기여",
        "기술 공유: 주 1회 사내 기술공유회를 운영하며 실무 경험, LLM, 컴퓨터 비전, OSS 기여 사례를 공유",
      ],
      technologies: [
        "React",
        "TypeScript",
        "JavaScript(ES6+)",
        "MUI",
        "TanStack Query",
        "React Hook Form",
        "Zustand",
        "i18n(Locales)",
        "Froala Editor",
      ],
    },
    {
      company: "(주)진우소프트이노베이션",
      position: "소프트웨어 엔지니어",
      period: "2021.09 - 2023.08",
      location: "제주 제주시",
      type: "Full-time",
      description: "웹 애플리케이션 및 시스템 구축 담당",
      achievements: [
        "프론트엔드 아키텍처 개선: ES5 → ES6+ 리팩토링을 진행하여 코드 품질과 유지보수성을 향상",
        "DB 조회 구조 개선: MariaDB 쿼리와 화면 조회 흐름을 정리해 운영자가 필요한 데이터를 더 안정적으로 확인할 수 있도록 개선",
        "업무 효율화: Node.js 기반 운영 데이터 관리 자동화 도구를 개발해 반복 확인 작업을 줄임",
        "백엔드 연계 경험: Spring 기반 REST API를 활용하여 프론트엔드·백엔드 간 통신 구조를 개선",
        "UI 개발: HTML/CSS 및 JavaScript로 반응형 인터페이스를 구축하여 다양한 디바이스 접근성과 크로스 브라우저 호환성을 강화",
      ],
      technologies: [
        "JavaScript(ES6+)",
        "HTML/CSS",
        "Spring",
        "MariaDB",
        "Node.js",
        "REST API",
      ],
    },
  ];

  const education = [
    {
      school: "광운대학교 대학원",
      degree: "컴퓨터공학과 석사과정",
      period: "2023.09 - 2024.08",
      location: "서울 노원구",
      description:
        "rPPG(Remote Photoplethysmography)를 활용한 생체신호 측정 및 분석 연구를 수행하며, AI/ML 기반 신호 처리와 모델링 기법을 탐구. 실험 설계부터 데이터 처리, 모델 학습까지 전 과정을 경험하였으며, FastAPI를 활용해 백엔드 서버를 구축하고 Flutter를 이용해 크로스 플랫폼 프론트엔드를 개발하여 rPPG 기반 생체신호 시스템을 연동·구현함. 이를 통해 인공지능·헬스케어 융합 기술과 풀스택 개발 역량을 동시에 강화함.",
    },
    {
      school: "광운대학교 정보과학교육원",
      degree: "컴퓨터공학과 학사",
      period: "2021.02 - 2023.02",
      location: "서울 노원구",
      description:
        "컴퓨터공학의 기초 이론(알고리즘, 자료구조, 운영체제, 데이터베이스 등)을 학습하고 소프트웨어 개발 프로젝트 경험을 통해 문제 해결 능력과 실무 역량을 함양함.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20">
      <div className="container-center section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">경력 & 학력</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              실무와 연구로 성장하며, 웹 개발과 AI 기술 기반을 다져왔습니다.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Experience Section */}
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center">
                <Building
                  className="mr-3 text-primary-600 dark:text-primary-400"
                  size={24}
                />
                경력
              </h3>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className={`relative pl-8 border-l-4 border-primary-500 ${
                      index > 0 ? "mt-8" : ""
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900"></div>

                    <div className="glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            {exp.position}
                          </h4>
                          <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>

                        <div className="flex flex-col md:items-end text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                          <div className="flex items-center mb-1">
                            <Calendar size={16} className="mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                          <Award size={18} className="mr-2 text-yellow-500" />
                          주요 성과
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">
                                •
                              </span>
                              <span className="text-gray-700 dark:text-gray-300">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          사용 기술
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center">
                <Award
                  className="mr-3 text-primary-600 dark:text-primary-400"
                  size={24}
                />
                학력
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="relative pl-8 border-l-4 border-purple-500"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full border-4 border-white dark:border-dark-900"></div>

                    <div className="glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            {edu.degree}
                          </h4>
                          <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                            {edu.school}
                          </p>
                        </div>

                        <div className="flex flex-col md:items-end text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                          <div className="flex items-center mb-1">
                            <Calendar size={16} className="mr-1" />
                            {edu.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {edu.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div variants={itemVariants} className="mt-16 text-center">
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  지속적인 성장과 도전
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  웹 개발로 커리어를 시작하여 기초적인 소프트웨어 역량을 쌓은
                  후, 대학원에서는 rPPG 기반 생체신호 연구와 인공지능(AI/ML)을
                  심도 있게 탐구하며 데이터 처리와 모델링 경험을 확장했습니다.
                  이후 프론트엔드 개발자로 자리잡아, 연구에서 익힌 문제 해결
                  능력과 사용자 중심의 기술 적용 역량을 결합해 더욱 완성도 높은
                  서비스를 만들어가고 있습니다. 지속적인 학습과 도전을 통해 한
                  단계 더 발전하는 개발자가 되겠습니다.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

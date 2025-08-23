import React from "react";
import { motion } from "framer-motion";
import { Code2, Rocket, Users, Trophy } from "lucide-react";

const About: React.FC = () => {
  const stats = [
    { icon: Code2, number: "3+", label: "년간 개발 경험" },
    { icon: Rocket, number: "12+", label: "완성된 프로젝트" },
    { icon: Users, number: "2+", label: "팀 프로젝트 경험" },
    { icon: Trophy, number: "100%", label: "프로젝트 완주율" },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-dark-800/50">
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
              <span className="gradient-text">저에 대해서</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Learning. Building. Growing.
              <br /> 웹과 AI를 잇는 프론트엔드 개발자
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  안녕하세요! 저는 전형호입니다.
                </h3>

                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p>
                    진우소프트이노베이션에서 소프트웨어 엔지니어로 근무하며 웹
                    시스템 개발과 데이터 처리 자동화 도구를 직접 구현한 경험을
                    통해 실무 역량을 쌓았습니다. 이 시기에는 프론트엔드와 백엔드
                    모두를 아우르는 풀스택 개발을 경험하며, 레거시 코드
                    리팩토링과 데이터베이스 최적화를 통해 성능 개선과 업무
                    효율화를 이루어냈습니다.
                  </p>

                  <p>
                    이후 광운대학교 대학원 컴퓨터공학과 석사과정에서 rPPG(Remote
                    Photoplethysmography)를 활용한 생체 신호 측정 및 분석 연구를
                    진행했습니다. 이 과정에서 AI/ML 기반의 신호 처리, 모델링
                    기법, 실험 설계 및 데이터 분석까지 전 과정을 경험하며
                    헬스케어와 인공지능 기술 융합에 대한 깊이 있는 이해를 쌓을
                    수 있었습니다. 또한, 연구를 실무화하기 위해 FastAPI 기반
                    백엔드 서버 구축과 Flutter 기반 크로스 플랫폼 프론트엔드
                    개발을 직접 진행하여, 학문적 연구와 실무 개발을 유기적으로
                    연결하는 역량을 확보했습니다.
                  </p>

                  <p>
                    2024년부터는 Genesisnest 프론트엔드 개발자로 합류하여,
                    React, TypeScript, MUI, Zustand, TanStack Query 등 최신 웹
                    기술 스택을 기반으로 한 대규모 프론트엔드 아키텍처 설계 및
                    UI/UX 개선을 담당하고 있습니다. 특히 다국어(i18n) 지원,
                    WYSIWYG 에디터 연동, 공통 컴포넌트 아키텍처 구축 등 복잡한
                    요구사항을 해결하며, 사용자 경험을 높이는 동시에 개발
                    생산성과 유지보수성을 크게 향상시켰습니다.
                  </p>

                  <p>
                    웹 개발 분야에서는 React와 TypeScript를 활용한 사용자 중심의
                    직관적 인터페이스 구현에 집중하고 있으며, 동시에 Node.js,
                    Express, Django 등 다양한 백엔드 기술에도 익숙합니다. 또한
                    Python, TensorFlow, PyTorch를 활용한 AI/ML 프로젝트에도
                    적극적으로 참여하여, 소프트웨어 엔지니어로서의 범위를
                    프론트엔드와 백엔드를 넘어 인공지능 기반 서비스 개발로
                    확장하고 있습니다.
                  </p>

                  <p>
                    최근에는 LLM과 생성형 AI 기술에 깊은 관심을 가지고 있으며,
                    이를 실무에 적용하기 위한 다양한 시도를 진행하고 있습니다.
                    RAG(Retrieval-Augmented Generation), 프롬프트 엔지니어링,
                    LLM 기반 애플리케이션 아키텍처 설계 등을 탐구하며,
                    궁극적으로는 웹 서비스와 AI 기술을 결합한 지능형 사용자
                    경험(UX) 제공을 목표로 하고 있습니다.
                  </p>
                </div>

                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      document
                        .querySelector("#contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="btn-primary"
                  >
                    이력서 다운로드
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass p-6 rounded-2xl text-center group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 glass rounded-2xl"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  주요 관심 분야
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React/TypeScript",
                    "AI/ML (Python)",
                    "LLM & 생성형 AI",
                    "Node.js/Spring Boot",
                    "UI/UX Design",
                    "Open Source",
                  ].map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const mainSkills = [
    { name: "React", color: "text-blue-500" },
    { name: "TypeScript", color: "text-blue-600" },
    { name: "JavaScript", color: "text-yellow-500" },
    { name: "TanStack Query", color: "text-red-500" },
    { name: "React Hook Form", color: "text-pink-500" },
    { name: "Zustand", color: "text-purple-500" },
    { name: "MUI", color: "text-blue-400" },
    { name: "SCSS", color: "text-rose-500" },
    { name: "Node.js", color: "text-green-500" },
    { name: "Spring Boot", color: "text-emerald-600" },
    { name: "MySQL", color: "text-cyan-600" },
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
    <section id="skills" className="py-20">
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
              <span className="gradient-text">기술 스택</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              실무에서 유지보수 가능한 구조를 만들기 위해 반복적으로 사용해온
              기술입니다
            </p>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              실무 중심 스택
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {mainSkills.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass px-6 py-3 rounded-full cursor-default group hover:shadow-lg transition-all duration-300"
                >
                  <span
                    className={`font-semibold ${tech.color} group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors`}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              메인 경험은 React 기반 업무 시스템에서 복잡한 입력 흐름, 서버
              상태, 화면 상태를 유지보수 가능한 구조로 분리하는 데 집중되어
              있습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

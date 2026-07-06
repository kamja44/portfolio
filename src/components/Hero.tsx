import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Mail, ExternalLink } from "lucide-react";
import { userData } from "../data/userData";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-4000"></div>
      </div>

      <div className="container-center section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-100/50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium backdrop-blur-sm border border-primary-200/30 dark:border-primary-700/30">
              Frontend Engineer · Structure & Collaboration
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            멀티 브랜드와 다국어 서비스의 복잡성을{" "}
            <span className="gradient-text">안정적인 구조</span>로
            설계합니다
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-8"
          >
            {userData.name} · {userData.jobTitle}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {userData.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary group flex items-center gap-2"
            >
              프로젝트 보기
              <ExternalLink
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-secondary"
            >
              연락하기
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-16"
          >
            <motion.a
              href={userData.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>

            <motion.a
              href={`mailto:${userData.email}`}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:shadow-lg"
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.button
            variants={itemVariants}
            onClick={scrollToAbout}
            className="group flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            whileHover={{ y: -2 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm font-medium mb-2">더 알아보기</span>
            <ChevronDown
              size={24}
              className="group-hover:translate-y-1 transition-transform"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

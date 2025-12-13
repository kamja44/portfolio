import React from "react";
import { motion } from "framer-motion";
import { Code2, Rocket, Users, Trophy } from "lucide-react";
import { userData, aboutContent } from "../data/userData";

const About: React.FC = () => {
  const statIcons = [Code2, Rocket, Users, Trophy];
  const stats = userData.stats.map((stat, index) => ({
    ...stat,
    icon: statIcons[index],
  }));

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
              <br /> 성능과 사용자 경험을 설계하는 프론트엔드 개발자
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {userData.greeting}
                </h3>

                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {aboutContent.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
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
                {stats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass p-6 rounded-2xl text-center group hover:shadow-xl transition-all duration-300"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {Icon ? <Icon className="w-8 h-8 text-white" /> : null}
                      </div>

                      <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
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
                  {userData.interests.map((interest, index) => (
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

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  GitPullRequest,
  Globe2,
  Layers,
  Presentation,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { userData, aboutContent, brandOutcomes } from "../data/userData";

const About: React.FC = () => {
  const statIcons = [Globe2, Globe2, Globe2, Wrench];
  const stats = userData.stats.map((stat, index) => ({
    ...stat,
    icon: statIcons[index],
  }));
  const outcomeIcons = [
    Globe2,
    Layers,
    GitPullRequest,
    Users,
    ShieldCheck,
    Presentation,
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
    <section id="about" className="py-20">
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
              <span className="gradient-text">Profile</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              변화하는 요구사항에도 쉽게 대응할 수 있는 구조를 설계합니다
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

          <motion.div variants={itemVariants} className="mt-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                핵심 성과
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                만들었다는 결과보다, 왜 그렇게 설계했고 어떤 변화가 있었는지에
                집중합니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandOutcomes.map((outcome, index) => {
                const Icon = outcomeIcons[index] ?? Code2;

                return (
                  <motion.div
                    key={outcome.title}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                        {outcome.metric}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
                      {outcome.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {outcome.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

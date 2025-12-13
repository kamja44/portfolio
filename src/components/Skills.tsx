import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TanStack Query", level: 85 },
        { name: "Zustand / Recoil", level: 85 },
        { name: "React Hook Form", level: 85 },
      ],
    },
    {
      title: "Backend & Tools",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js / Express", level: 80 },
        { name: "NestJS", level: 75 },
        { name: "REST API", level: 85 },
        { name: "Git / GitHub", level: 90 },
        { name: "Vite / Webpack", level: 75 },
      ],
    },
    {
      title: "AI & ML",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python (Data Analysis)", level: 80 },
        { name: "LLM (OpenAI, LangChain)", level: 75 },
        { name: "TensorFlow / PyTorch", level: 70 },
        { name: "FastAPI", level: 75 },
      ],
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
              다양한 기술을 활용해 웹 애플리케이션을 개발합니다
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-4 h-4 bg-gradient-to-r ${category.color} rounded-full mr-3`}
                  ></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {skill.name}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              주요 기술 스택
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "React", color: "text-blue-500" },
                { name: "TypeScript", color: "text-blue-600" },
                { name: "Next.js", color: "text-gray-900 dark:text-gray-100" },
                { name: "TanStack Query", color: "text-red-500" },
                { name: "Tailwind CSS", color: "text-cyan-500" },
                { name: "MUI", color: "text-blue-400" },
                { name: "NestJS", color: "text-red-600" },
                { name: "Node.js", color: "text-green-500" },
              ].map((tech, index) => (
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

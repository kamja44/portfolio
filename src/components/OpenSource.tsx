import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitPullRequest, CheckCircle, Clock } from "lucide-react";

const OpenSource: React.FC = () => {
  const contributions = [
    {
      id: 1,
      project: "gemini-cli",
      description: "AI-powered CLI tool for Google's Gemini API",
      prs: [
        {
          number: 4287,
          title: "Enhanced loadCodeAssist test with realistic mock data",
          description: "Replaced the TODO in loadCodeAssist test with a realistic LoadCodeAssistResponse mock. Added assertions to validate key response fields like currentTier and allowedTiers.",
          status: "merged",
          link: "https://github.com/google-gemini/generative-ai-js/pull/4287"
        },
        {
          number: 4575,
          title: "Unified partToString function for better maintainability",
          description: "Unified partToString to handle both plain text and verbose summary modes, replacing partListUnionToString with a thin wrapper. Consolidated related tests into partUtils.test.ts, removing redundancy and improving maintainability.",
          status: "merged",
          link: "https://github.com/google-gemini/generative-ai-js/pull/4575"
        }
      ],
      techStack: ["TypeScript", "Node.js", "Testing", "API Integration"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      project: "react-hook-form",
      description: "Performance-focused React form library with minimal re-renders",
      prs: [
        {
          number: 12932,
          title: "Added unit tests for internal utility functions",
          description: "Added unit tests for internal utility functions (e.g., live). Focused on ensuring type safety with Ref and HTMLElement handling.",
          status: "merged",
          link: "https://github.com/react-hook-form/react-hook-form/pull/12932"
        },
        {
          number: 12934,
          title: "Comprehensive unit tests for hasValidation function",
          description: "Added comprehensive unit tests for hasValidation, covering all validation rule branches and edge cases. Improved type safety by eliminating as any and using type-safe test field definitions.",
          status: "merged",
          link: "https://github.com/react-hook-form/react-hook-form/pull/12934"
        },
        {
          number: 12940,
          title: "Unit tests for utility functions",
          description: "Added unit tests for unsetEmptyArray, isWeb, and getValidationModes utility functions. Verified their behaviors to ensure reliability across different use cases.",
          status: "merged",
          link: "https://github.com/react-hook-form/react-hook-form/pull/12940"
        },
        {
          number: 12967,
          title: "Unit tests for convertToArrayPayload function",
          description: "Added unit tests for convertToArrayPayload to verify handling of both array and non-array inputs. Ensures correct wrapping logic and structural equality using toStrictEqual.",
          status: "merged",
          link: "https://github.com/react-hook-form/react-hook-form/pull/12967"
        }
      ],
      techStack: ["React", "TypeScript", "Testing", "Form Validation"],
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 3,
      project: "date-fns",
      description: "Modern JavaScript date utility library",
      prs: [
        {
          number: 4049,
          title: "Improved type safety in setDefaultOptions",
          description: "Improved type safety in setDefaultOptions by eliminating as any casts and assigning properties explicitly",
          status: "in-progress",
          link: "https://github.com/date-fns/date-fns/pull/4049"
        }
      ],
      techStack: ["JavaScript", "TypeScript", "Date Utilities", "Type Safety"],
      color: "from-green-500 to-emerald-500"
    }
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "merged":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "in-progress":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <GitPullRequest className="w-4 h-4 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "merged":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
      case "in-progress":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
      default:
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
    }
  };

  return (
    <section id="opensource" className="py-20">
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
              <span className="gradient-text">Open Source</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              오픈소스 프로젝트에 기여하며 개발 생태계 발전에 참여하고 있습니다
            </p>
          </motion.div>

          {/* Contributions Grid */}
          <div className="space-y-8">
            {contributions.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {project.project}
                      </h3>
                      <div className={`w-3 h-3 bg-gradient-to-r ${project.color} rounded-full`}></div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, techIndex) => (
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

                {/* Pull Requests */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Pull Requests ({project.prs.length})
                  </h4>
                  {project.prs.map((pr, prIndex) => (
                    <motion.div
                      key={pr.number}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + prIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="border border-gray-200/30 dark:border-gray-700/30 rounded-xl p-4 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(pr.status)}
                          <span className="font-semibold text-gray-900 dark:text-gray-100">
                            PR #{pr.number}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(pr.status)}`}>
                            {pr.status === "merged" ? "Merged" : pr.status === "in-progress" ? "In Progress" : "Open"}
                          </span>
                        </div>
                        <motion.a
                          href={pr.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                          title="View PR"
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      </div>
                      <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                        {pr.title}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {pr.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 glass rounded-2xl">
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {contributions.length}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Projects Contributed
                </div>
              </div>
              <div className="text-center p-6 glass rounded-2xl">
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {contributions.reduce((total, project) => total + project.prs.length, 0)}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Pull Requests
                </div>
              </div>
              <div className="text-center p-6 glass rounded-2xl">
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {contributions.reduce((total, project) => 
                    total + project.prs.filter(pr => pr.status === "merged").length, 0
                  )}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Merged PRs
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;
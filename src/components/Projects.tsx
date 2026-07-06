import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Search, X } from "lucide-react";
import { projects } from "../data/projectData";
import { Project, ProjectFilter } from "../types/project";

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: ProjectFilter[] = [
    "All",
    "Front-End",
    "Full-Stack",
    "Back-End",
    "Open Source",
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.problem.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.decision.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.result.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.impact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.role?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      project.features.some((feature) =>
        feature.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesFilter =
      selectedFilter === "All" || project.stack === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const getStackColor = (stack: string) => {
    switch (stack) {
      case "Front-End":
        return "from-blue-500 to-cyan-500";
      case "Full-Stack":
        return "from-purple-500 to-pink-500";
      case "Back-End":
        return "from-green-500 to-emerald-500";
      case "Open Source":
        return "from-orange-500 to-red-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section id="projects" className="py-20">
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
              <span className="gradient-text">프로젝트</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              다양한 기술을 활용해 개발한 프로젝트들을 소개합니다
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              {/* Search */}
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="프로젝트 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-2 flex-wrap justify-center">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`filter-button ${
                      selectedFilter === filter
                        ? "filter-button-active"
                        : "filter-button-inactive"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${selectedFilter}-${project.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                className="project-card"
              >
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300"></div>
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                        project.projectType === "Company"
                          ? "bg-gradient-to-r from-indigo-500 to-blue-500"
                          : "bg-gradient-to-r from-orange-500 to-pink-500"
                      }`}
                    >
                      {project.projectType === "Company"
                        ? "회사 프로젝트"
                        : "사이드 프로젝트"}
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getStackColor(
                        project.stack
                      )}`}
                    >
                      {project.stack}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {project.problem}
                  </p>

                  {project.role && (
                    <p className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                      {project.role}
                    </p>
                  )}

                  <div className="inline-flex w-fit items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                    {project.impact}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="tech-badge-more">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200/30 dark:border-gray-700/30">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.duration}
                    </span>
                    <div className="flex gap-2">
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-200"
                          title="GitHub"
                        >
                          <Github size={16} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                검색 결과가 없습니다
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                다른 키워드로 검색해보시거나 필터를 변경해주세요.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="project-modal"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                      {selectedProject.title}
                    </h2>
                    {selectedProject.link && (
                      <motion.a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors"
                        title="Open Live Demo"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                        selectedProject.projectType === "Company"
                          ? "bg-gradient-to-r from-indigo-500 to-blue-500"
                          : "bg-gradient-to-r from-orange-500 to-pink-500"
                      }`}
                    >
                      {selectedProject.projectType === "Company"
                        ? "회사 프로젝트"
                        : "사이드 프로젝트"}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getStackColor(
                        selectedProject.stack
                      )}`}
                    >
                      {selectedProject.stack}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="relative group">
                    <img
                      src={`${import.meta.env.BASE_URL}${
                        selectedProject.image
                      }`}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover rounded-xl mb-6"
                    />
                    {selectedProject.link && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl mb-6 flex items-center justify-center">
                        <motion.a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink size={24} />
                        </motion.a>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        기술 스택
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map(
                          (tech: string, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        개발 기간
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {selectedProject.duration}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        역할
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {selectedProject.progressRate}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    문제와 의사결정
                  </h4>
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-1">
                        Problem
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-1">
                        Decision
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {selectedProject.decision}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-1">
                        Result
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {selectedProject.result}
                      </p>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    주요 작업
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {selectedProject.features.map(
                      (feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 dark:text-primary-400 mr-2">
                            •
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>

                  <div className="flex gap-4">
                    {selectedProject.link && (
                      <motion.a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center gap-2"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    )}
                    {selectedProject.github && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary flex items-center gap-2"
                      >
                        <Github size={18} />
                        Source Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

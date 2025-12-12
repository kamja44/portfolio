import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github } from "lucide-react";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "gudgh5007@gmail.com",
      href: "mailto:gudgh5007@gmail.com",
      color: "text-red-500",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "서울, 대한민국",
      href: "#",
      color: "text-blue-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/kamja44",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
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
    <section id="contact" className="py-20 bg-white/50 dark:bg-dark-800/50">
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
              <span className="gradient-text">연락하기</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              새로운 기회와 협업에 언제나 열려있습니다. 언제든지 연락주세요!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="contact-card"
                >
                  <div
                    className={`p-4 ${info.color} bg-gray-100 dark:bg-gray-800 rounded-2xl mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <info.icon size={32} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {info.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {info.content}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                소셜 미디어
              </h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 glass rounded-2xl text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:shadow-xl`}
                    title={social.name}
                  >
                    <social.icon size={28} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Resume Download & Call to Action */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  함께 일해요!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  새로운 프로젝트나 협업 기회가 있으시면 언제든지 연락주세요.
                  흥미로운 아이디어를 실현하는 것을 좋아합니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.a
                    href="mailto:gkahslgml@naver.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Mail size={18} />
                    이메일 보내기
                  </motion.a>
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <Download size={18} />
                    이력서 다운로드
                  </motion.button> */}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 py-8 border-t border-gray-200/30 dark:border-gray-700/30"
      >
        <div className="container-center section-padding text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 전형호 (HyeongHo Jun). Made with React & TypeScript
          </p>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;

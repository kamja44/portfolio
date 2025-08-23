import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';
import './styles.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen app-background transition-colors duration-300">
        <Header />
        <main>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </motion.div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
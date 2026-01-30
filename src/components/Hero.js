import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaTimes } from 'react-icons/fa';

const Hero = ({ isDarkMode }) => {
  const heroRef = useRef(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useEffect(() => {
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallax = heroRef.current;
      if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCVModal = () => {
    setIsCVModalOpen(true);
  };

  const closeCVModal = () => {
    setIsCVModalOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Manoharan Subasthican_intern_cv.pdf';
    link.download = 'Manoharan_Subasthican_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={heroRef}
        className="absolute inset-0 bg-transparent"
      >
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className={`block drop-shadow-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Manoharan</span>
            <span className="block text-yellow-300 drop-shadow-2xl font-extrabold">Subasthican</span>
          </h1>
          <p className={`text-xl sm:text-2xl mb-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            Undergraduate Data Science Student | Full-Stack Developer | MERN Stack & Python
          </p>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            BSc (Hons) IT student at SLIIT specializing in Data Science, building data-driven web applications with clean, maintainable code.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-accent text-dark-100 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <span>View My Work</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className={`px-8 py-4 font-semibold rounded-full transition-all duration-300 ${
              isDarkMode
                ? 'border-2 border-white text-white hover:bg-white hover:text-primary'
                : 'border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
            }`}
          >
            Get In Touch
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openCVModal}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <FaDownload className="text-lg" />
            <span>View CV</span>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/subasthican"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode
                ? 'text-white hover:text-accent'
                : 'text-gray-900 hover:text-blue-600'
            } transition-colors duration-300`}
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/manoharansubasthican"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode
                ? 'text-white hover:text-blue-400'
                : 'text-gray-900 hover:text-blue-600'
            } transition-colors duration-300`}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDarkMode ? 'border-white' : 'border-gray-900'
          }`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1 h-3 rounded-full mt-2 ${
              isDarkMode ? 'bg-white' : 'bg-gray-900'
            }`}
          />
        </motion.div>
      </motion.div>

      {/* CV Modal */}
      {isCVModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeCVModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-dark-200 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Manoharan Subasthican - CV
                </h3>
                <button
                  onClick={closeCVModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-dark-300 rounded-lg transition-colors"
                >
                  <FaTimes className="text-gray-500 dark:text-gray-400" />
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                BSc (Hons) IT Student | Data Science Undergraduate | SLIIT
              </p>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              {/* CV Page 1 */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Page 1</h4>
                <img
                  src={require("../Manoharan Subasthican_intern_cv_page1.jpg")}
                  alt="CV Page 1"
                  className="w-full h-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
              
              {/* CV Page 2 */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Page 2</h4>
                <img
                  src={require("../Manoharan Subasthican_intern_cv_page2.jpg")}
                  alt="CV Page 2"
                  className="w-full h-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
              
              <div className="text-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={downloadCV}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-400 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-xl edge-glow pulse-glow"
                >
                  <FaDownload className="text-lg mr-2" />
                  Download Full CV
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;

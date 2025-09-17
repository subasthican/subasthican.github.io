import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaCode, FaDatabase, FaMobile } from 'react-icons/fa';

const Modal = ({ project, onClose, isDarkMode }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const getTechIcon = (tech) => {
    const iconMap = {
      'React': <FaCode className="text-blue-500" />,
      'Node.js': <FaCode className="text-green-500" />,
      'MongoDB': <FaDatabase className="text-green-600" />,
      'Express': <FaCode className="text-gray-500" />,
      'PostgreSQL': <FaDatabase className="text-blue-600" />,
      'Vue.js': <FaCode className="text-green-400" />,
      'Firebase': <FaDatabase className="text-yellow-500" />,
      'Mobile': <FaMobile className="text-purple-500" />
    };
    return iconMap[tech] || <FaCode className="text-gray-500" />;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
            isDarkMode ? 'bg-dark-200' : 'bg-white'
          }`}
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center ${
              isDarkMode
                ? 'bg-dark-300 text-white hover:bg-dark-100'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            } transition-colors duration-200`}
            aria-label="Close modal"
          >
            <FaTimes size={16} />
          </motion.button>

          {/* Project Image */}
          <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            {/* Project Links */}
            <div className="absolute top-4 left-4 flex space-x-2">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="View on GitHub"
              >
                <FaGithub size={16} />
              </motion.a>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-6 sm:p-8">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {project.title}
            </h2>
            
            <p className={`text-lg mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                      isDarkMode
                        ? 'bg-dark-300 text-gray-300'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {getTechIcon(tech)}
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Key Features
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center space-x-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-primary transition-all edge-glow pulse-glow"
              >
                <FaGithub />
                View Code on GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;

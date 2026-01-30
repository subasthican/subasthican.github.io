import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = ({ isDarkMode = false }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/subasthican',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/manoharansubasthican',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:manoharansubasthican@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-dark-100 dark:bg-dark-200 text-white' 
        : 'bg-gray-100 text-gray-900'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            data-aos="fade-up"
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Manoharan Subasthican
            </h3>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6 max-w-md`}>
              BSc (Hons) IT undergraduate at SLIIT specializing in Data Science. 
              Building data-driven web applications and showcasing my portfolio projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 ${
                    isDarkMode
                      ? 'bg-dark-300 dark:bg-dark-100 text-gray-300'
                      : 'bg-gray-300 text-gray-900'
                  } rounded-full flex items-center justify-center ${social.color} transition-all duration-300`}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.href)}
                    className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-200`}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              <p>manoharansubasthican@gmail.com</p>
              <p>+94 71 130 0812</p>
              <p>Jaffna, Sri Lanka</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          data-aos="fade-up"
          data-aos-delay="300"
          className={`${isDarkMode ? 'border-gray-700' : 'border-gray-300'} border-t mt-8 pt-8`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm mb-4 md:mb-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              © {currentYear} Manoharan Subasthican. All rights reserved.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`flex items-center space-x-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}
            >
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                <FaHeart />
              </motion.span>
              <span>using React & Tailwind CSS</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

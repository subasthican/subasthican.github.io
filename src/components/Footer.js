import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
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
      url: 'https://linkedin.com/in/subasthican',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:subasthican@example.com',
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
    <footer className="bg-dark-100 dark:bg-dark-200 text-white">
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
            <p className="text-gray-400 mb-6 max-w-md">
              BSc IT Student at SLIIT specializing in MERN stack development. 
              Building innovative web solutions and showcasing my portfolio of projects.
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
                  className={`w-10 h-10 bg-dark-300 dark:bg-dark-100 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
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
                    className="text-gray-400 hover:text-white transition-colors duration-200"
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
            <div className="space-y-2 text-gray-400">
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
          className="border-t border-gray-700 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Manoharan Subasthican. All rights reserved.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-1 text-gray-400 text-sm"
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

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaMobile, FaJava, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiPhp, SiMysql, SiXampp, SiMariadb, SiApachetomcat } from 'react-icons/si';

const Projects = ({ openModal }) => {
  const academicProjects = [
    {
      id: 3,
      title: 'DollarsElectro (MERN Stack Electronic Shop)',
      description: 'Built user management, product catalog, and cart/checkout features with React, Node.js, Express, and MongoDB. Designed a modern responsive UI using Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      video: '/videos/dollers.mp4',
      videoEmbed: null,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/subasthican/DollarsElectro.lk',
      live: null,
      features: ['User Management', 'Product Catalog', 'Cart/Checkout', 'Responsive UI']
    },
    {
      id: 5,
      title: 'Online Tour Guide (SLIIT)',
      description: 'Implemented login/registration, profile management, and user/admin dashboards using HTML, CSS, PHP, and MySQL on XAMPP with a responsive and user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      video: '/videos/online tour.mp4',
      videoEmbed: null,
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'XAMPP'],
      github: 'https://github.com/subasthican/online-tour-guide',
      live: null,
      features: ['User Authentication', 'Profile Management', 'User/Admin Dashboards', 'Responsive Interface']
    },
    {
      id: 4,
      title: 'Construction Management System (SLIIT)',
      description: 'Developed full CRUD functionality for customer management and contributed to workflow design using Java, JSP/Servlets, and SQL.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      video: '/videos/con management.mp4',
      videoEmbed: null,
      technologies: ['Java', 'JSP/Servlets', 'SQL'],
      github: 'https://github.com/subasthican/construction-management-project',
      live: null,
      features: ['Customer Management', 'CRUD Operations', 'Workflow Design']
    },
    {
      id: 1,
      title: 'AquaGlow Wellness App (Android)',
      description: 'Built a wellness app with daily habit tracking, mood journaling, and hydration reminders using Kotlin and Android Studio with SharedPreferences for data saving.',
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Kotlin', 'Android Studio'],
      github: 'https://github.com/subasthican/AquaGlow-SLIIT-Lab3',
      live: null,
      features: ['Habit Tracking', 'Mood Journaling', 'Hydration Reminders', 'SharedPreferences', 'Clean Responsive UI']
    },
    {
      id: 9,
      title: 'TravelGo Android App',
      description: 'A modern Android application showcasing UI design and development skills, built for SLIIT Mobile Application Development Lab Exam.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Kotlin', 'Android Studio'],
      github: 'https://github.com/subasthican/TravelGo-Android-App',
      live: null,
      features: ['Modern UI Design', 'Travel Features', 'Android Development']
    }
  ];

  const personalProjects = [
    {
      id: 2,
      title: 'AquaGlow Wellness App (iOS)',
      description: 'Built the user interface of the AquaGlow wellness app using Swift and Xcode, creating screens for habit tracking, mood journaling, and hydration reminders to mirror the Android app.',
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Swift', 'Xcode'],
      github: 'https://github.com/subasthican/AquaGlow-IOS',
      live: null,
      features: ['iOS UI Design', 'Habit Tracking Interface', 'Mood Journal Screens', 'Hydration Reminders']
    },
    {
      id: 7,
      title: 'UniAccess - Universal Accessibility Platform',
      description: 'Real-time captioning, sign language translation, and color-blind modes platform. Built for Hackathon by NextgenCoders to improve digital accessibility.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Node.js', 'AI/ML'],
      github: 'https://github.com/subasthican/UniAccess',
      live: null,
      features: ['Real-time Captioning', 'Sign Language Translation', 'Color-blind Modes', 'Accessibility Features']
    },
    {
      id: 8,
      title: 'Image Converter and Resizer',
      description: 'A neon-themed Python GUI application to convert and resize multiple image formats. Built as a student project with modern UI design.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Python', 'Tkinter', 'PIL'],
      github: 'https://github.com/subasthican/image-converter-and-resizer',
      live: null,
      features: ['Multiple Format Support', 'Batch Processing', 'Image Resizing', 'Neon-themed UI']
    },
    {
      id: 6,
      title: 'FocusTime (Android)',
      description: 'A beautiful productivity app for Android with task management, customizable timers, lap tracking, and dark mode. Features an elegant Apple-inspired UI built with Kotlin and Material Design 3.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Kotlin', 'Material Design 3', 'Android Studio'],
      github: 'https://github.com/subasthican/FocusTime-Android',
      live: null,
      features: ['Task Management', 'Customizable Timers', 'Lap Tracking', 'Dark Mode', 'Apple-inspired UI']
    }
  ];

  const getTechIcon = (tech) => {
    const iconMap = {
      'React': <FaCode className="text-blue-500" />,
      'Node.js': <FaCode className="text-green-500" />,
      'MongoDB': <FaDatabase className="text-green-600" />,
      'Express': <FaCode className="text-gray-500" />,
      'PostgreSQL': <FaDatabase className="text-blue-600" />,
      'Vue.js': <FaCode className="text-green-400" />,
      'Firebase': <FaDatabase className="text-yellow-500" />,
      'Mobile': <FaMobile className="text-purple-500" />,
      'HTML': <FaHtml5 className="text-orange-500" />,
      'CSS': <FaCss3Alt className="text-blue-500" />,
      'CSS3': <FaCss3Alt className="text-blue-500" />,
      'PHP': <SiPhp className="text-purple-600" />,
      'MySQL': <SiMysql className="text-blue-600" />,
      'JavaScript': <FaJs className="text-yellow-500" />,
      'XAMPP': <SiXampp className="text-orange-600" />,
      'Java': <FaJava className="text-red-500" />,
      'MariaDB': <SiMariadb className="text-blue-500" />,
      'SQL': <FaDatabase className="text-blue-700" />,
      'Tomcat': <SiApachetomcat className="text-red-600" />,
      'Tailwind CSS': <FaCss3Alt className="text-cyan-500" />,
      'Kotlin': <FaCode className="text-purple-500" />,
      'Android Studio': <FaMobile className="text-green-500" />,
      'JSP/Servlets': <FaCode className="text-gray-600" />,
      'Swift': <FaCode className="text-orange-500" />,
      'Xcode': <FaMobile className="text-blue-500" />,
      'Material Design 3': <FaMobile className="text-purple-600" />,
      'AI/ML': <FaCode className="text-pink-500" />,
      'Tkinter': <FaCode className="text-blue-600" />,
      'PIL': <FaCode className="text-yellow-600" />
    };
    return iconMap[tech] || <FaCode className="text-gray-500" />;
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-100"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Featured projects showcasing MERN stack development, mobile app design, and full-stack solutions.
          </p>
        </motion.div>

        {/* Academic Projects Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Academic Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {academicProjects.map((project, index) => (
              <motion.div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { 
                    duration: 0.4,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer edge-glow"
                onClick={() => openModal(project)}
              >
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-accent/10 transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:border-primary/20 dark:group-hover:border-accent/20 glow-effect h-full flex flex-col">
                  {/* Project Image/Video */}
                  <div className="relative overflow-hidden h-48">
                    {project.video ? (
                      <video
                        src={project.video}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Video Badge */}
                    {project.video && (
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded flex items-center gap-1">
                          ▶ Video
                        </span>
                      </div>
                    )}
                    
                    {/* Overlay Icons */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={14} />
                      </motion.a>
                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt size={14} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300 group-hover:translate-x-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-dark-300 text-sm rounded-full text-gray-700 dark:text-gray-300 group-hover:bg-primary/10 group-hover:text-primary dark:group-hover:bg-accent/10 dark:group-hover:text-accent transition-all duration-300"
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <motion.button
                      whileHover={{ 
                        scale: 1.02,
                        y: -2,
                        boxShadow: "0 8px 25px rgba(30, 64, 175, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-2 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25 mt-auto edge-glow pulse-glow"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Projects Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            Personal Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {personalProjects.map((project, index) => (
              <motion.div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { 
                    duration: 0.4,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer edge-glow"
                onClick={() => openModal(project)}
              >
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-accent/10 transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:border-primary/20 dark:group-hover:border-accent/20 glow-effect h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay Icons */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={14} />
                      </motion.a>
                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt size={14} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300 group-hover:translate-x-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-dark-300 text-sm rounded-full text-gray-700 dark:text-gray-300 group-hover:bg-primary/10 group-hover:text-primary dark:group-hover:bg-accent/10 dark:group-hover:text-accent transition-all duration-300"
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <motion.button
                      whileHover={{ 
                        scale: 1.02,
                        y: -2,
                        boxShadow: "0 8px 25px rgba(30, 64, 175, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-2 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25 mt-auto edge-glow pulse-glow"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <motion.div
          data-aos="fade-up"
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/subasthican"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            <FaGithub />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

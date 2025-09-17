import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaMobile, FaJava, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiPhp, SiMysql, SiXampp, SiMariadb, SiApachetomcat } from 'react-icons/si';

const Projects = ({ openModal }) => {
  const projects = [
    {
      id: 1,
      title: 'DollarsElectro.lk (Ongoing)',
      description: 'MERN Stack Electronic Shop Project - Full e-commerce platform for electronics with complete shopping experience',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/subasthican/DollarsElectro.lk',
      live: null,
      features: ['Product Catalog', 'Shopping Cart', 'User Authentication', 'Payment Integration', 'Admin Panel', 'Order Management']
    },
    {
      id: 2,
      title: 'Construction Management System (SLIIT)',
      description: 'Customer management module with full CRUD operations. Team project developed by 5 members using traditional web technologies.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'JavaScript', 'XAMPP'],
      github: 'https://github.com/subasthican/construction-management-project',
      live: null,
      features: ['Customer Management', 'CRUD Operations', 'Team Collaboration', 'Data Visualization', 'Project Tracking', 'Reports Dashboard']
    },
    {
      id: 3,
      title: 'Online Tour Guide (SLIIT)',
      description: 'Tourism platform developed by 4 members using Java backend; contributions: login/register, profile management, dashboards, and CSS styling.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Java', 'MariaDB', 'SQL', 'Tomcat', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/subasthican/online-tour-guide',
      live: null,
      features: ['User Authentication', 'Profile Management', 'Interactive Dashboards', 'Custom CSS Styling', 'Tour Booking', 'Location Services']
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
      'Tomcat': <SiApachetomcat className="text-red-600" />
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
            My top 3 projects showcasing MERN stack expertise, team collaboration, and full-stack development skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
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

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaPython, 
  FaGitAlt, 
  FaGithub,
  FaFigma,
  FaBootstrap,
  FaDatabase,
  FaChartLine
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiR, SiJupyter } from 'react-icons/si';

const Skills = () => {
  const carouselRef = useRef(null);

  const webDevSkills = [
    { name: 'React', icon: FaReact, color: 'text-blue-400', level: 85 },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400', level: 75 },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: 75 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', level: 80 },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-500', level: 75 },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', level: 80 },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-400', level: 90 },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', level: 85 },
    { name: 'Express', icon: SiExpress, color: 'text-gray-400', level: 70 }
  ];

  const dataScienceSkills = [
    { name: 'Python', icon: FaPython, color: 'text-yellow-500', level: 80 },
    { name: 'R', icon: SiR, color: 'text-blue-600', level: 70 },
    { name: 'SQL', icon: FaDatabase, color: 'text-blue-700', level: 75 },
    { name: 'Machine Learning', icon: FaChartLine, color: 'text-purple-600', level: 70 },
    { name: 'Data Analysis', icon: FaChartLine, color: 'text-green-600', level: 80 },
    { name: 'Jupyter', icon: SiJupyter, color: 'text-orange-500', level: 75 }
  ];

  const toolsSkills = [
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-500', level: 80 },
    { name: 'GitHub', icon: FaGithub, color: 'text-gray-400', level: 85 },
    { name: 'Figma', icon: FaFigma, color: 'text-purple-400', level: 65 }
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId;
    let currentRotation = 0;

    const animate = () => {
      currentRotation += 0.5;
      carousel.style.transform = `rotateY(${currentRotation}deg)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-200"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications and solve complex problems.
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="flex justify-center mb-16">
          <div className="relative w-80 h-80 perspective-1000">
            <div
              ref={carouselRef}
              className="relative w-full h-full transform-style-preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {webDevSkills.slice(0, 6).map((skill, index) => {
                const angle = (360 / 6) * index;
                return (
                  <motion.div
                    key={skill.name}
                    className="absolute w-20 h-20 flex items-center justify-center"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(120px)`,
                    }}
                    whileHover={{ scale: 1.2, z: 50 }}
                  >
                    <div className="w-full h-full bg-white dark:bg-dark-300 rounded-xl shadow-lg flex flex-col items-center justify-center p-4 hover:shadow-2xl transition-all duration-300 edge-glow glow-effect">
                      <skill.icon className={`text-3xl ${skill.color} mb-2`} />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {/* Web Development Skills */}
          <motion.div
            data-aos="fade-up"
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              Web Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {webDevSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 10,
                    rotateX: 10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-dark-300 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-700">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4"
                    >
                      <skill.icon className={`text-4xl ${skill.color} mx-auto`} />
                    </motion.div>
                    
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {skill.name}
                    </h4>
                    
                    {/* Skill Level Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 h-2 rounded-full shadow-sm edge-glow pulse-glow"
                      />
                    </div>
                    
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Data Science Skills */}
          <motion.div
            data-aos="fade-up"
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              Data Science & Programming
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {dataScienceSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 10,
                    rotateX: 10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-dark-300 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-700">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4"
                    >
                      <skill.icon className={`text-4xl ${skill.color} mx-auto`} />
                    </motion.div>
                    
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {skill.name}
                    </h4>
                    
                    {/* Skill Level Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 h-2 rounded-full shadow-sm edge-glow pulse-glow"
                      />
                    </div>
                    
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            data-aos="fade-up"
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {toolsSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 10,
                    rotateX: 10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-dark-300 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-700">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4"
                    >
                      <skill.icon className={`text-4xl ${skill.color} mx-auto`} />
                    </motion.div>
                    
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {skill.name}
                    </h4>
                    
                    {/* Skill Level Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 h-2 rounded-full shadow-sm edge-glow pulse-glow"
                      />
                    </div>
                    
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          data-aos="fade-up"
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-dark-300 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Always exploring new technologies and expanding my skill set. 
              Currently learning advanced React patterns, cloud deployment, data science tools, and modern development practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Next.js', 'GraphQL', 'Docker', 'AWS', 'TypeScript', 'TensorFlow', 'Pandas', 'Scikit-learn'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 rounded-full font-medium border border-blue-200 dark:border-blue-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

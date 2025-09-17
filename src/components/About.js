import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-200"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            data-aos="fade-right"
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a dedicated Data Science Intern and full-stack developer with experience in MERN stack 
              and Python for data analysis. I enjoy building data-driven web applications and creating 
              solutions that combine programming, analytics, and user experience.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My passion lies in transforming complex data into actionable insights through innovative 
              web applications. I focus on clean code, user experience, and continuous learning in both 
              web development and data science domains.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently developing DollarsElectro.lk, an e-commerce platform, while contributing to 
              academic projects including Construction Management and Online Tour Guide systems. 
              I'm pursuing BSc IT at SLIIT with a focus on full-stack development and data science.
            </p>

            {/* Skills Preview */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Core Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'MERN Stack Development',
                  'Python & Data Analysis',
                  'Machine Learning',
                  'Database Management',
                  'API Integration',
                  'Team Collaboration'
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            data-aos="fade-left"
            className="flex justify-center lg:justify-end"
          >
            <Tilt
              options={{
                max: 15,
                scale: 1.05,
                speed: 1000,
                transition: true,
                axis: null,
                reset: true,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
              }}
            >
              <div className="relative">
                {/* Profile Image Container */}
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-purple-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 relative">
                    {/* Professional Profile Image */}
                    <img
                      src={require("../myphoto.jpg")}
                      alt="Manoharan Subasthican - Data Science Intern & Full-Stack Developer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback initials if image fails to load */}
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center absolute inset-0" style={{display: 'none'}}>
                      <div className="text-6xl font-bold text-primary dark:text-white">
                        MS
                      </div>
                    </div>
                    
                  </div>
                </div>

                {/* Floating Tech Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl font-bold text-dark-100">💻</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-xl font-bold text-white">📊</span>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-1/2 -left-8 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-lg font-bold text-white">IT</span>
                </motion.div>
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          data-aos="fade-up"
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '5+', label: 'Projects Completed' },
            { number: '8+', label: 'Technologies Mastered' },
            { number: '2+', label: 'Years at SLIIT' },
            { number: '100%', label: 'Passion Driven' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

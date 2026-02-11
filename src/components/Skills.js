import React from 'react';
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
  FaChartLine,
  FaMobile
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiR, SiJupyter, SiPostman, SiKotlin, SiSwift } from 'react-icons/si';
import LogoLoop from './LogoLoop';

const Skills = () => {
  const webDevLogos = [
    { node: <FaReact />, title: "React", href: "https://react.dev" },
    { node: <FaNodeJs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <FaBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <FaJs />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <FaHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <FaCss3Alt />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  ];

  const dataScienceLogos = [
    { node: <FaPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiR />, title: "R", href: "https://www.r-project.org" },
    { node: <FaDatabase />, title: "SQL", href: "https://en.wikipedia.org/wiki/SQL" },
    { node: <FaChartLine />, title: "Machine Learning", href: "https://en.wikipedia.org/wiki/Machine_learning" },
    { node: <SiJupyter />, title: "Jupyter", href: "https://jupyter.org" },
  ];

  const toolsLogos = [
    { node: <FaGitAlt />, title: "Git", href: "https://git-scm.com" },
    { node: <FaGithub />, title: "GitHub", href: "https://github.com" },
    { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
    { node: <FaFigma />, title: "Figma", href: "https://www.figma.com" },
    { node: <FaMobile />, title: "Mobile Dev", href: "https://developer.android.com" },
    { node: <SiKotlin />, title: "Kotlin", href: "https://kotlinlang.org" },
    { node: <SiSwift />, title: "Swift", href: "https://swift.org" },
  ];

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
            Technologies and tools I use to build modern web applications and solve data-driven problems.
          </p>
        </motion.div>

        {/* Web Development Technologies */}
        <motion.div
          data-aos="fade-up"
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Web Development
          </h3>
          <div className="logo-loop-frame">
            <LogoLoop
              logos={webDevLogos}
              speed={80}
              direction="left"
              logoHeight={60}
              gap={40}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="#f3f4f6"
              scaleOnHover
              ariaLabel="Web Development Technologies"
            />
          </div>
        </motion.div>

        {/* Data Science & Programming */}
        <motion.div
          data-aos="fade-up"
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Data Science & Programming
          </h3>
          <div className="logo-loop-frame">
            <LogoLoop
              logos={dataScienceLogos}
              speed={80}
              direction="left"
              logoHeight={60}
              gap={40}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="#f3f4f6"
              scaleOnHover
              ariaLabel="Data Science Technologies"
            />
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          data-aos="fade-up"
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Tools & Technologies
          </h3>
          <div className="logo-loop-frame">
            <LogoLoop
              logos={toolsLogos}
              speed={80}
              direction="left"
              logoHeight={60}
              gap={40}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="#f3f4f6"
              scaleOnHover
              ariaLabel="Tools & Technologies"
            />
          </div>
        </motion.div>

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
              Currently learning advanced React patterns, deployment workflows, and modern data science tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Next.js', 'TypeScript', 'TensorFlow', 'Pandas', 'Scikit-learn', 'Docker'].map((tech) => (
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

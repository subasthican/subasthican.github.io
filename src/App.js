import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Ballpit from './components/Ballpit';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const updatePointer = () => setIsFinePointer(mediaQuery.matches);
    updatePointer();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updatePointer);
      return () => mediaQuery.removeEventListener('change', updatePointer);
    }
    mediaQuery.addListener(updatePointer);
    return () => mediaQuery.removeListener(updatePointer);
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    
    // Save theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-100 text-white' : 'bg-white text-gray-900'
    }`}
    style={{ position: 'relative', backgroundColor: isDarkMode ? '#0b0a1f' : '#ffffff' }}
    >
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <Ballpit
          count={100}
          colors={[0xffffff, 0xe2e8f0, 0xcbd5e1, 0x8b5cf6, 0x4f46e5]}
          ambientColor={0xffffff}
          ambientIntensity={0.6}
          lightIntensity={220}
          materialParams={{ metalness: 0.5, roughness: 0.35, clearcoat: 1, clearcoatRoughness: 0.1 }}
          minSize={0.45}
          maxSize={1.05}
          gravity={0.01}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={isFinePointer}
        />
      </div>

      <div className="relative z-10">
      <Header 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme}
      />
      <Hero isDarkMode={isDarkMode} />
      <About />
      <Projects openModal={openModal} />
      <Skills />
      <Certificates />
      <Contact />
      <Footer isDarkMode={isDarkMode} />
      </div>
      
      {isModalOpen && (
        <Modal 
          project={selectedProject} 
          onClose={closeModal}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
}

export default App;

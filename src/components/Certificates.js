import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaTimes } from 'react-icons/fa';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      date: "2024",
      description: "Professional certification in Python programming for beginners from University of Moratuwa",
      image: require("../Python_for_Beginners_E-Certifice_moratuwa.jpg"),
      linkedin: "https://www.linkedin.com/in/manoharansubasthican",
      category: "Python",
      featured: true
    },
    {
      id: 2,
      title: "Anaconda Python for Data Science Professional Certificate",
      issuer: "LinkedIn Learning",
      date: "2024",
      description: "Professional certificate in Python for Data Science applications and analysis",
      image: require("../CertificateOfCompletion_Anaconda_Python_for_Data_Science_Professional_Certificate_page1.png"),
      linkedin: "https://www.linkedin.com/posts/manoharansubasthican_certificate-of-completion-activity-7372202939513487360-9eSO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFOv8V8BjTtkGWuhy4wNtwJAqpJwXfohZkE",
      category: "Python",
      featured: true
    },
    {
      id: 3,
      title: "Career Essentials in Data Analysis",
      issuer: "LinkedIn Learning",
      date: "2024",
      description: "Comprehensive data analysis skills and career development certification",
      image: require("../CertificateOfCompletion_Career_Essentials_in_Data_Analysis_by_Microsoft_and_LinkedIn_page1.png"),
      linkedin: "https://www.linkedin.com/posts/manoharansubasthican_certificate-of-completion-activity-7370495874940026880-YTEL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFOv8V8BjTtkGWuhy4wNtwJAqpJwXfohZkE",
      category: "Data Analysis",
      featured: true
    },
    {
      id: 4,
      title: "Machine Learning Statistical Foundations Professional Certificate",
      issuer: "LinkedIn Learning",
      date: "2024",
      description: "Advanced statistical foundations for machine learning applications",
      image: require("../CertificateOfCompletion_Machine_Learning_Statistical_Foundations_Professional_Certificate_by_Wolfram_Research_page1.png"),
      linkedin: "https://www.linkedin.com/posts/manoharansubasthican_certificate-of-completion-activity-7371919214418444288-dkFk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFOv8V8BjTtkGWuhy4wNtwJAqpJwXfohZkE",
      category: "Machine Learning",
      featured: false
    },
    {
      id: 5,
      title: "Building Deep Learning Applications with Keras",
      issuer: "LinkedIn Learning",
      date: "2024",
      description: "Professional certificate in deep learning using Keras framework",
      image: require("../CertificateOfCompletion_Building_Deep_Learning_Applications_with_Keras_page1.png"),
      linkedin: "https://www.linkedin.com/in/manoharansubasthican",
      category: "Deep Learning",
      featured: false
    },
    {
      id: 6,
      title: "Next.js: Creating and Hosting a FullStack Site",
      issuer: "LinkedIn Learning",
      date: "2024",
      description: "Full-stack development with Next.js and modern web technologies",
      image: require("../CertificateOfCompletion_Next.js_Creating_and_Hosting_a_FullStack_Site_page1.png"),
      linkedin: "https://www.linkedin.com/in/manoharansubasthican",
      category: "Web Development",
      featured: false
    },
    {
      id: 7,
      title: "Preparing for the Future of Work with AI Agents",
      issuer: "LinkedIn Learning",
      date: "2024",
      description: "Professional insights into AI agents and future of work trends",
      image: require("../CertificateOfCompletion_Preparing_for_the_Future_of_Work_with_AI_Agents_page1.png"),
      linkedin: "https://www.linkedin.com/in/manoharansubasthican",
      category: "Artificial Intelligence",
      featured: false
    }
  ];

  const featuredCerts = certificates.filter(cert => cert.featured);
  const otherCerts = certificates.filter(cert => !cert.featured);

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };


  return (
    <section
      id="certificates"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-200"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Certificates & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements that showcase my continuous learning and expertise.
          </p>
        </motion.div>

        {/* Featured Certificates */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Featured Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-4 items-stretch">
            {featuredCerts.map((cert, index) => (
              <motion.div
                key={cert.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ 
                  scale: 1.02,
                  y: -4,
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer edge-glow relative z-10"
                onClick={() => openModal(cert)}
              >
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-accent/10 transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:border-primary/20 dark:group-hover:border-accent/20 glow-effect h-full flex flex-col">
                  {/* Certificate Preview */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-dark-300 dark:to-dark-400 flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        console.log('Image failed to load:', cert.image, 'for certificate:', cert.title);
                        // Fallback to placeholder if image doesn't exist
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                      onLoad={() => {
                        console.log('Image loaded successfully:', cert.image, 'for certificate:', cert.title);
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Certificate</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20">
                        {cert.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-black/50 text-white rounded-full text-sm font-medium">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  
                  {/* Certificate Details */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
                      {cert.title}
                    </h4>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                      {cert.description}
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(cert);
                      }}
                      className="w-full py-2 px-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-primary transition-all duration-300 flex items-center justify-center gap-2 mt-auto edge-glow pulse-glow"
                    >
                      <FaEye className="text-sm" />
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Certificates */}
        {otherCerts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              Additional Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherCerts.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  whileHover={{ 
                    scale: 1.02,
                    y: -4,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group cursor-pointer"
                  onClick={() => openModal(cert)}
                >
                  <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                    {/* Certificate Preview */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 flex items-center justify-center">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't exist
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-xs font-medium text-gray-600 dark:text-gray-300">Certificate</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-1 bg-black/20 backdrop-blur-sm text-white rounded text-xs font-medium border border-white/20">
                          {cert.category}
                        </span>
                      </div>
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 bg-black/50 text-white rounded text-xs font-medium">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                    
                    {/* Certificate Details */}
                    <div className="p-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
                        {cert.title}
                      </h4>
                      
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                        {cert.issuer}
                      </p>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(cert);
                        }}
                        className="w-full py-1 px-2 bg-gradient-to-r from-primary to-blue-600 text-white rounded text-xs font-medium hover:from-blue-600 hover:to-primary transition-all duration-300 flex items-center justify-center gap-1 edge-glow pulse-glow"
                      >
                        <FaEye className="text-xs" />
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Certificate Modal */}
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
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
                    {selectedCert.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-dark-300 rounded-lg transition-colors"
                  >
                    <FaTimes className="text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>
              
              <div className="p-6">
                {/* Certificate Image in Modal */}
                <div className="mb-6">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto max-h-96 object-contain rounded-lg shadow-lg border-0 mx-auto"
                    onError={(e) => {
                      // Fallback to PDF if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <iframe
                    src={selectedCert.pdf}
                    className="w-full h-96 rounded-lg shadow-lg border-0"
                    title={selectedCert.title}
                    style={{ display: 'none' }}
                  />
                </div>
                
                <div className="bg-gray-100 dark:bg-dark-300 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedCert.description}
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Professional certification from {selectedCert.issuer}
                  </p>
                  <a
                    href={selectedCert.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300 edge-glow pulse-glow"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    View on LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certificates;

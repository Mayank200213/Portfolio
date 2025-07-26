import { useState,useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import ProfileImage from '../assets/images/profile.png';

export default function Home({ id }) {
  const [showModal, setShowModal] = useState(false);

  const handleResumeDownload = () => {
    setShowModal(true);
  };

  const confirmDownload = () => {
    setShowModal(false);
    const link = document.createElement('a');
    link.href = 'public/Mayank-Sangolkar-Resume.pdf';
    link.download = 'Mayank-Sangolkar-Resume.pdf';
    link.click();
  };

  return (
    <section id={id} className="snap-start min-h-screen relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }
            }}
          />
        ))}
      </div>

      <div className="min-h-screen bg-gradient-to-br from-gray-900/95 to-gray-800/95 text-gray-100 relative z-10">
        <div className="py-40 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mayank Sangolkar</span>
              </motion.h1>
              
              <motion.h2 
                className="text-xl md:text-2xl font-semibold text-gray-300 mb-6"
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.3 }}
              >
                MERN Stack Developer | ReactJS Specialist
              </motion.h2>
              
              <motion.p 
                className="text-gray-400 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                I build scalable, high-performance web applications with MongoDB, Express, React, and Node.js. 
                Passionate about creating seamless user experiences with optimized performance.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  onClick={handleResumeDownload}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-lg"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaDownload /> Download Resume
                </motion.button>
                <motion.a
                  href="#projects"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-lg"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiExternalLink /> View Projects
                </motion.a>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { icon: <FaEnvelope className="text-blue-400 text-xl" />, label: 'Email', value: 'mayanksangolkar0713@gmail.com', color: 'blue' },
                    { icon: <FaPhone className="text-green-400 text-xl" />, label: 'Phone', value: '+91 7024694531', color: 'green' },
                    { icon: <FaGithub className="text-gray-300 text-xl" />, label: 'GitHub', value: 'Mayank200213', url: 'https://github.com/Mayank200213', color: 'gray' },
                    { icon: <FaLinkedin className="text-blue-500 text-xl" />, label: 'LinkedIn', value: 'mayank-sangolkar', url: 'https://linkedin.com/in/mayank-sangolkar-3bb737259', color: 'blue' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700/30 transition-colors"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <div className={`p-3 rounded-lg bg-${item.color}-900/20`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        {item.url ? (
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Profile Image */}
            <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="relative"
              >
                <motion.div
                  className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-blue-500/30 shadow-2xl"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img 
                    src={ProfileImage} 
                    alt="Mayank Sangolkar" 
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
                <motion.div
                  className="absolute -bottom-5 -right-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="font-medium">MERN Developer</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Download Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-800 rounded-xl max-w-md w-full p-6 border border-gray-700 shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4">Download Resume</h3>
              <p className="text-gray-300 mb-6">Are you sure you want to download the resume PDF?</p>
              <div className="flex justify-end gap-4">
                <motion.button
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={confirmDownload}
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload /> Download
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
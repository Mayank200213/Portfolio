import { useState,useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const sections = ['home', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Mayank200213' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/mayank-sangolkar-3bb737259' },
    { icon: <HiOutlineMail />, url: 'mailto:mayanksangolkar0713@gmail.com' },
    { icon: <FaFileDownload />, action: () => {
      console.log('Download resume');
    }}
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md py-2 shadow-xl' : 'bg-gray-900/80 backdrop-blur-sm py-3'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo with 3D effect */}
          <motion.div
            whileHover={{ scale: 1.05, rotateZ: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
            className="flex items-center cursor-pointer"
          >
            <motion.div 
              className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mr-3 flex items-center justify-center shadow-lg"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white font-bold">MS</span>
            </motion.div>
            <motion.span 
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Mayank Sangolkar
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 top-full block h-0.5 w-full bg-gradient-to-r from-blue-400 to-purple-500"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <motion.div
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 45, y: 5 },
                  closed: { rotate: 0, y: 0 }
                }}
                className="w-6 h-0.5 bg-white mb-1.5"
              />
              <motion.div
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 }
                }}
                className="w-6 h-0.5 bg-white mb-1.5"
              />
              <motion.div
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: -45, y: -5 },
                  closed: { rotate: 0, y: 0 }
                }}
                className="w-6 h-0.5 bg-white"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-gray-700 text-blue-400' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="flex justify-center space-x-6 pt-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={link.action}
                    whileHover={{ y: -3, scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-300 hover:text-blue-400 text-xl transition-colors"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mb-6 md:mb-0"
          >
            <p className="text-sm">
              &copy; {currentYear} Mayank Sangolkar. All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {[
              { 
                icon: <FaGithub />,
                url: 'https://github.com/Mayank200213',
                color: 'hover:text-gray-300'
              },
              { 
                icon: <FaLinkedin />,
                url: 'https://linkedin.com/in/mayank-sangolkar-3bb737259',
                color: 'hover:text-blue-400'
              },
              { 
                icon: <HiOutlineMail />,
                url: 'mailto:mayanksangolkar0713@gmail.com',
                color: 'hover:text-red-400'
              },
              { 
                icon: <FaTwitter />,
                url: '#',
                color: 'hover:text-blue-400'
              },
              { 
                icon: <FaInstagram />,
                url: '#',
                color: 'hover:text-pink-500'
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl ${social.color} transition-colors`}
                whileHover={{ y: -3, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 mx-auto px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
}
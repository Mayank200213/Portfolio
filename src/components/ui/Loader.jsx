import { motion } from 'framer-motion';
import { useState,useEffect } from 'react';
export default function Loader() {
  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2
      }
    },
    end: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const loadingCircleVariants = {
    start: {
      y: "0%"
    },
    end: {
      y: "100%"
    }
  };

  const loadingCircleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut"
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex justify-around w-24"
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        {[1, 2, 3].map((item) => (
          <motion.span
            key={item}
            className="block w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaServer, FaTools, FaReact,FaDatabase } from 'react-icons/fa';

export default function About({ id }) {
  const skills = [
    {
      title: "Programming Languages",
      icon: <FaCode className="text-blue-400 text-2xl" />,
      items: ["JavaScript (ES6+)", "HTML5 & CSS3", "C / C++", "Java (Basics)"],
      color: "blue"
    },
    {
      title: "Frontend",
      icon: <FaReact className="text-blue-400 text-2xl" />,
      items: ["React.js", "Redux", "Tailwind CSS", "Framer Motion"],
      color: "blue"
    },
    {
      title: "Backend",
      icon: <FaServer className="text-green-400 text-2xl" />,
      items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
      color: "green"
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-purple-400 text-2xl" />,
      items: ["MongoDB", "Mongoose", "Firebase", "MySQL"],
      color: "purple"
    },
    {
      title: "Tools",
      icon: <FaTools className="text-yellow-400 text-2xl" />,
      items: ["Git & GitHub", "VS Code", "Postman", "Agile Methodologies"],
      color: "yellow"
    }
  ];

  return (
    <section id={id} className="snap-start min-h-screen">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
            </h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              MERN Stack Developer specializing in building high-performance web applications with modern technologies.
            </p>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20 bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Profile</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate <span className="text-blue-400">MERN Stack Developer</span> skilled in building scalable and responsive web applications using <span className="font-semibold">MongoDB</span>, <span className="font-semibold">Express.js</span>, <span className="font-semibold">React.js</span>, and <span className="font-semibold">Node.js</span>. With expertise in REST API development, JWT authentication, and state management (Redux), I've developed and deployed 3+ live projects, including an E-commerce platform with payment gateway integration that achieves &lt;2s load times.
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-${skill.color}-500/30 transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`bg-${skill.color}-900/20 p-3 rounded-lg`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className={`w-2 h-2 bg-${skill.color}-400 rounded-full`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20 bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-10 text-center">Professional Experience</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline */}
                <div className="border-l-2 border-blue-500 pl-8 pb-8 relative">
                  {/* Current Job */}
                  <div className="mb-12 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50">
                      <h3 className="text-xl font-semibold">Nagar Software Solution Pvt. Ltd</h3>
                      <p className="text-gray-400 mb-4">Web Development Intern | Nov 2024 - Present | Indore, India</p>
                      <ul className="space-y-3 text-gray-300 ml-4 list-disc">
                        <li>Built responsive UI components in React.js, improving page load time by 25%</li>
                        <li>Integrated REST APIs and reusable components for faster development</li>
                        <li>Collaborated in Agile sprints and used Git for version control</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* College */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-900/20 p-4 rounded-lg">
                      <FaGraduationCap className="text-blue-400 text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Bachelor of Technology</h3>
                      <p className="text-gray-400">Computer Science & Engineering</p>
                    </div>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Mahakal Institute Of Technology</p>
                    <p>Ujjain, India</p>
                    <p>2020 - 2024</p>
                  </div>
                </motion.div>

                {/* School */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-green-900/20 p-4 rounded-lg">
                      <FaBriefcase className="text-green-400 text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Intermediate (12th)</h3>
                      <p className="text-gray-400">PCM - Physics, Chemistry, Mathematics</p>
                    </div>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Ujjain Public Higher Secondary School</p>
                    <p>Ujjain, India</p>
                    <p>Graduated 2020</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
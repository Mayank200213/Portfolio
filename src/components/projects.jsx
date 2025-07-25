import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

// Project images
import CarTradeImg from '../assets/images/cartrade.png';
import EcommerceImg from '../assets/images/ecommerce.png';
import MentorTrackImg from '../assets/images/mentortrack.png';
import PowerTechImg from '../assets/images/powertech.png';

export default function Projects({ id }) {
  const projects = [
    {
      title: "CarTrade",
      description: "A responsive car dealership website with modern UI/UX and interactive features",
      image: CarTradeImg,
      techStack: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "React Router", icon: <FaReact className="text-pink-400" /> },
        { name: "react-slick", icon: <FaReact className="text-green-400" /> }
      ],
      features: [
        "Modular component architecture for scalability",
        "Interactive carousel for vehicle showcases",
        "Responsive design for all device sizes",
        "Optimized performance with lazy loading",
        "Clean UI/UX with intuitive navigation"
      ],
      link: "#",
      github: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with complete shopping functionality",
      image: EcommerceImg,
      techStack: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <FaDatabase className="text-green-400" /> }
      ],
      features: [
        "Product catalog with filtering options",
        "Secure user authentication (JWT)",
        "Dynamic shopping cart management",
        "Payment gateway integration (Razorpay/Stripe)",
        "Achieved <2s page load time",
        "Mobile-first responsive design"
      ],
      link: "#",
      github: "#"
    },
    {
      title: "MentorTrack",
      description: "Admin dashboard for educational institution management",
      image: MentorTrackImg,
      techStack: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "MongoDB", icon: <FaDatabase className="text-green-400" /> }
      ],
      features: [
        "Student enrollment tracking system",
        "Fee management and payment processing",
        "Performance analytics dashboard",
        "Real-time notifications system",
        "Secure role-based authentication",
        "Responsive admin interface"
      ],
      link: "#",
      github: "#"
    },
    {
      title: "PowerTech Industries",
      description: "Company profile website showcasing services and capabilities",
      image: PowerTechImg,
      techStack: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Framer Motion", icon: <FaReact className="text-purple-400" /> }
      ],
      features: [
        "Modern, responsive web design",
        "Reusable component architecture",
        "Optimized for performance and SEO",
        "Smooth animations and transitions",
        "Intuitive navigation structure",
        "Clean codebase with best practices"
      ],
      link: "https://powertechindustries.in",
      github: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id={id} className="snap-start min-h-screen">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
            </h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Here are some of my notable projects showcasing my skills in web development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 shadow-xl group"
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex space-x-4">
                      {project.link && (
                        <motion.a
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-gray-700/80 hover:bg-gray-600/90 text-white p-3 rounded-full transition-all"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiExternalLink className="text-xl" />
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-gray-700/80 hover:bg-gray-600/90 text-white p-3 rounded-full transition-all"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiGithub className="text-xl" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">TECH STACK</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-1.5 bg-gray-700/50 px-3 py-1.5 rounded-full text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech.icon}
                          <span>{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">KEY FEATURES</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-16"
          >
            <p className="text-xl text-gray-400 mb-6">Want to see more of my work?</p>
            <motion.a
              href="https://github.com/Mayank200213"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-3 rounded-lg transition-all"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiGithub /> Visit My GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
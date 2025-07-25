import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa';

export default function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
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
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Touch</span>
            </h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg"
                >
                  <p className="text-green-400">Thank you! Your message has been sent successfully.</p>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg"
                >
                  <p className="text-red-400">Oops! Something went wrong. Please try again later.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name
                    </label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Name"
                      />
                    </motion.div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address
                    </label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="example@gmail.com"
                      />
                    </motion.div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Message
                    </label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Hi Mayank, I'd like to talk about..."
                      ></textarea>
                    </motion.div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all ${
                      isSubmitting
                        ? 'bg-blue-700/50 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-400 mb-8">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-blue-900/20 p-3 rounded-lg">
                    <FaEnvelope className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a 
                      href="mailto:mayanksangolkar0713@gmail.com" 
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      mayanksangolkar0713@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-green-900/20 p-3 rounded-lg">
                    <FaPhone className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a 
                      href="tel:+917024694531" 
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      +91 7024694531
                    </a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-purple-900/20 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-400">Ujjain, Madhya Pradesh, India</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {[
                    { 
                      icon: <FaGithub className="text-xl" />,
                      url: 'https://github.com/Mayank200213',
                      color: 'hover:text-gray-300'
                    },
                    { 
                      icon: <FaLinkedin className="text-xl" />,
                      url: 'https://linkedin.com/in/mayank-sangolkar-3bb737259',
                      color: 'hover:text-blue-400'
                    },
                    { 
                      icon: <FaTwitter className="text-xl" />,
                      url: '#',
                      color: 'hover:text-blue-400'
                    },
                    { 
                      icon: <FaInstagram className="text-xl" />,
                      url: '#',
                      color: 'hover:text-pink-500'
                    }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.color} transition-colors`}
                      whileHover={{ y: -3, scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
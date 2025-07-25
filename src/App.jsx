import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/Footer';
import Loader from './components/ui/Loader';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100">
      <AnimatePresence>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <main className="snap-y snap-mandatory h-screen overflow-y-auto">
              <Home id="home" />
              <About id="about" />
              <Projects id="projects" />
              <Contact id="contact" />
            </main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
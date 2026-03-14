import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-purple-200">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 10 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors flex items-center justify-center group"
      >
        <FaWhatsapp className="text-3xl" />
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          Chat with us
        </span>
      </motion.a>
    </div>
  );
}

export default App;

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Overlay */}
            <div className="absolute inset-0 w-full h-full bg-black/60 z-10"></div>

            {/* Background Image */}
            <motion.img
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                src="/event1.webp"
                alt="Event background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                >
                    Make Your Events <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Unforgettable</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl"
                >
                    Professional event planning and management for weddings, corporate events, parties, and special occasions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Book Event
                    </a>
                    <a
                        href="#gallery"
                        className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        View Gallery
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

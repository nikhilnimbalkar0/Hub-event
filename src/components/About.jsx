import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
                            <video
                                src="/eventvideo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full"
                            />
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                                        10+
                                    </div>
                                    <div className="text-gray-600 text-sm font-medium leading-tight">
                                        Years of <br /> Experience
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 space-y-6"
                    >
                        <div className="mb-2">
                            <span className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 uppercase">
                                Welcome to Eventhub
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            About Eventhub
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>

                        <p className="text-lg text-gray-600 leading-relaxed pt-4">
                            Eventhub is a professional event management company dedicated to creating unforgettable experiences. From majestic weddings to perfectly orchestrated corporate events, our team ensures every detail is flawlessly planned and flawlessly executed.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            We believe that every event has a unique story to tell. Our passionate team of decorators, planners, and coordinators work tirelessly to transform your vision into reality, allowing you to relax and enjoy your special moments.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <a href="#contact" className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-black transition-colors shadow-lg">
                                Talk to an Expert
                            </a>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;

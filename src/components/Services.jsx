import React from 'react';
import { motion } from 'framer-motion';
import { FaRing, FaBriefcase, FaBirthdayCake, FaChair, FaCamera, FaMusic } from 'react-icons/fa';

const services = [
    {
        id: 1,
        title: "Wedding Planning",
        description: "Complete wedding planning, from venue selection to decorations and catering.",
        icon: <FaRing className="text-4xl text-purple-600 mb-4" />
    },
    {
        id: 2,
        title: "Corporate Events",
        description: "Professional setup for conferences, seminars, and corporate parties.",
        icon: <FaBriefcase className="text-4xl text-blue-600 mb-4" />
    },
    {
        id: 3,
        title: "Birthday Parties",
        description: "Themed birthday celebrations for kids and adults that guarantee fun.",
        icon: <FaBirthdayCake className="text-4xl text-pink-500 mb-4" />
    },
    {
        id: 4,
        title: "Stage Decoration",
        description: "Elegant and custom stage designs to elevate your main event.",
        icon: <FaChair className="text-4xl text-indigo-500 mb-4" />
    },
    {
        id: 5,
        title: "Event Photography",
        description: "Capturing your memories with professional photographers and videographers.",
        icon: <FaCamera className="text-4xl text-teal-500 mb-4" />
    },
    {
        id: 6,
        title: "Sound & Lighting",
        description: "High-quality audio visual equipment to keep the party alive.",
        icon: <FaMusic className="text-4xl text-yellow-500 mb-4" />
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const Services = () => {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Our Services
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"
                    ></motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="p-4 bg-gray-50 rounded-full mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;

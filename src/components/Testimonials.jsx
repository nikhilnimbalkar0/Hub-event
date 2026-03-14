import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Aarti Desai",
        role: "Bride",
        text: "Amazing event planning and great management. They made our special day extremely smooth and beautiful. Highly recommend to everyone!",
        rating: 5,
    },
    {
        id: 2,
        name: "Rahul Verma",
        role: "Corporate Manager",
        text: "Everything was perfectly organized. Our annual corporate summit was a huge success thanks to the seamless coordination by Eventhub.",
        rating: 5,
    },
    {
        id: 3,
        name: "Sneha Patel",
        role: "Birthday Host",
        text: "Highly recommended for weddings and parties. The decorations were out of this world, and the lighting set precisely the right mood.",
        rating: 5,
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Client Testimonials
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex text-yellow-500 mb-4 text-sm gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i}>⭐</span>
                                ))}
                            </div>
                            <p className="text-gray-600 mb-8 italic">"{testimonial.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

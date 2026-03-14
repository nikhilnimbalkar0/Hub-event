import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Contact Us
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"
                    ></motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-xl overflow-hidden max-w-6xl mx-auto">

                    {/* Contact Info container */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/3 bg-gradient-to-br from-purple-600 to-blue-600 text-white p-10 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Let's talk about your event</h3>
                            <p className="opacity-80 mb-10 leading-relaxed">
                                Contact us today for a free consultation. Our team is ready to plan your perfect event.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <FaMapMarkerAlt className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Location</h4>
                                        <p className="opacity-80">Jaysingpur, Maharashtra</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <FaPhone className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Phone</h4>
                                        <p className="opacity-80">+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <FaEnvelope className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <p className="opacity-80">hello@eventhub.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition duration-300"
                            >
                                <FaWhatsapp className="text-2xl" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    {/* Form and Map container */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-2/3 p-10"
                    >
                        <form className="space-y-6 mb-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" placeholder="+91 XXXXX XXXXX" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-gray-700">
                                        <option value="">Select Event Type</option>
                                        <option value="wedding">Wedding Planning</option>
                                        <option value="corporate">Corporate Event</option>
                                        <option value="birthday">Birthday Party</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none" placeholder="Tell us about your event..."></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full px-8 py-4 bg-gray-900 hover:bg-black text-white font-bold rounded-xl transition duration-300 shadow-lg"
                            >
                                Send Message
                            </motion.button>
                        </form>

                        <div className="h-64 w-full rounded-2xl overflow-hidden shadow-inner border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.575971556956!2d74.55135111486794!3d16.790696988456073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1230e54cd7fbb%3A0xc0fb13a80806ea9!2sJaysingpur%2C%20Maharashtra%20416101!5e0!3m2!1sen!2sin!4v1689234856754!5m2!1sen!2sin"
                                className="w-full h-full border-0"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Eventhub Location"
                            ></iframe>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;

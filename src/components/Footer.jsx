import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    <div>
                        <a href="#home" className="text-3xl font-bold tracking-tighter text-white block mb-6">
                            Event<span className="text-purple-400">hub</span>
                        </a>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Making your events unforgettable with professional planning and seamless management.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
                            <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
                            <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-6">Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>Wedding Planning</li>
                            <li>Corporate Events</li>
                            <li>Birthday Parties</li>
                            <li>Stage Decoration</li>
                            <li>Photography</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
                        <form className="flex" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 bg-gray-800 border-none rounded-l-lg focus:outline-none focus:ring-1 focus:ring-purple-500 text-white"
                            />
                            <button
                                type="submit"
                                className="px-6 bg-gradient-to-r from-purple-600 to-blue-600 font-semibold rounded-r-lg hover:opacity-90 transition-opacity"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Eventhub. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

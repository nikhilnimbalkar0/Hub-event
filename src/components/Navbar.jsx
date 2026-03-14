import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Gallery", href: "#gallery" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] py-4 border-b border-white/40" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <a
                    href="#home"
                    className={`text-2xl font-bold tracking-tighter ${scrolled ? "text-indigo-600" : "text-white"
                        }`}
                >
                    Event<span className="text-purple-400">hub</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`font-medium transition-colors hover:text-purple-500 line-after ${scrolled ? "text-gray-800" : "text-gray-100"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <FiX className={scrolled ? "text-gray-800" : "text-white"} />
                    ) : (
                        <FiMenu className={scrolled ? "text-gray-800" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl absolute top-full left-0 w-full"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-800 font-medium hover:text-indigo-600 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

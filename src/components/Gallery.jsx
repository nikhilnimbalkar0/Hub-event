import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

import img1 from '../assets/gallery/media__1773481308526.jpg';
import img2 from '../assets/gallery/media__1773481308597.jpg';
import img3 from '../assets/gallery/media__1773481308618.jpg';
import img4 from '../assets/gallery/media__1773481308634.jpg';

const images = [
    img1,
    img2,
    img3,
    img4,
    "/event1.webp",
    "/event2.webp",
    "/event3.webp",
    "/event4.webp"
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="gallery" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Event Gallery
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                            className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-md"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt={`Event ${index + 1}`}
                                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">View Image</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
                    >
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute top-6 right-6 text-white text-4xl p-2 hover:bg-white/10 rounded-full transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <FiX />
                        </motion.button>
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                            src={selectedImage}
                            alt="Enlarged gallery view"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../../data/travelData';
import { IoCloseOutline, IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

export default function Gallery() {
  const [activePhotoIdx, setActivePhotoIdx] = useState(null);

  const openLightbox = (idx) => {
    setActivePhotoIdx(idx);
  };

  const closeLightbox = () => {
    setActivePhotoIdx(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 md:py-32 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-poppins font-bold text-sm tracking-widest uppercase block mb-3">
            Captured Moments
          </span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-text-primary leading-tight mb-6">
            Luxury Travel Photo Gallery
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            Take a visual tour through our exclusive resorts, breath-taking safaris, and custom tours photographed by our elite travellers.
          </p>
        </div>

        {/* Pinterest-style Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryItems.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.8 }}
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-border bg-white cursor-pointer group break-inside-avoid"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8" />
              
              {/* Hover Text Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-350">
                <span className="text-primary font-poppins font-bold text-xs uppercase tracking-widest mb-1">
                  {item.category}
                </span>
                <h3 className="text-white font-poppins font-bold text-xl leading-snug">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 cursor-default"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all duration-200 z-10 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <IoCloseOutline className="text-2xl" />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all duration-200 z-10 cursor-pointer"
              aria-label="Previous Photo"
            >
              <IoChevronBackOutline className="text-xl" />
            </button>

            {/* Photo Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[80vh] flex flex-col items-center gap-4"
            >
              <img
                src={galleryItems[activePhotoIdx].image}
                alt={galleryItems[activePhotoIdx].title}
                className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl border border-white/10"
              />
              <div className="text-center text-white mt-2">
                <span className="text-primary font-poppins font-bold text-xs uppercase tracking-widest block mb-1">
                  {galleryItems[activePhotoIdx].category}
                </span>
                <h3 className="font-poppins font-semibold text-lg md:text-xl">
                  {galleryItems[activePhotoIdx].title}
                </h3>
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all duration-200 z-10 cursor-pointer"
              aria-label="Next Photo"
            >
              <IoChevronForwardOutline className="text-xl" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

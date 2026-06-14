import { motion } from 'framer-motion';
import GallerySection from '../components/sections/Gallery';

export default function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-[72px]"
    >
      {/* Lightbox Gallery */}
      <GallerySection />
    </motion.div>
  );
}

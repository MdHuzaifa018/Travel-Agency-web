import { motion } from 'framer-motion';
import GallerySection from '../components/sections/Gallery';
import { Helmet } from 'react-helmet-async';

export default function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-[72px]"
    >
      <Helmet>
        <title>Travel Gallery | TOUREST - Stunning Travel Photography</title>
        <meta name="description" content="Explore stunning photography from our luxury destinations around the world." />
        <link rel="canonical" href="https://toor-travel-agency-web.vercel.app/gallery" />
      </Helmet>
      {/* Lightbox Gallery */}
      <GallerySection />
    </motion.div>
  );
}

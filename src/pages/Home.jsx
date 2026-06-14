import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Destinations from '../components/sections/Destinations';
import About from '../components/sections/About';
import FeaturedTours from '../components/sections/FeaturedTours';
import TravelExperience from '../components/sections/TravelExperience';
import Statistics from '../components/sections/Statistics';
import Gallery from '../components/sections/Gallery';
import Testimonials from '../components/sections/Testimonials';
import Blog from '../components/sections/Blog';
import Newsletter from '../components/sections/Newsletter';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Hero />
      <Destinations />
      <About />
      <FeaturedTours />
      <TravelExperience />
      <Statistics />
      <Gallery />
      <Testimonials />
      <Blog />
      <Newsletter />
      <Contact />
    </motion.div>
  );
}

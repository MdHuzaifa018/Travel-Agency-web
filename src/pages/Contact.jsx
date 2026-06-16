import { motion } from 'framer-motion';
import ContactSection from '../components/sections/Contact';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-[72px]"
    >

      <Helmet>
        <title>Contact Us | TOUREST - Get in Touch with Our Travel Experts</title>
        <meta name="description" content="Reach out to TOUREST for bookings, inquiries, and personalized travel planning." />
        <link rel="canonical" href="https://toor-travel-agency-web.vercel.app/contact" />
      </Helmet>

      {/* Page Header */}
      <div className="relative py-24 md:py-32 bg-section-bg border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1486916856992-e4db22c8df33?auto=format&fit=crop&w=1920&q=80"
            alt="Contact Us Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-primary font-poppins font-bold text-sm tracking-widest uppercase block mb-3">
            Concierge Desk
          </span>
          <h1 className="text-4xl md:text-6xl font-poppins font-extrabold text-text-primary mb-6">
            Contact Our Advisors
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Begin designing your custom itinerary. Talk to our private booking team or visit our offices.
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <ContactSection />
    </motion.div>
  );
}

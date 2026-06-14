import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BiSearch, BiPlayCircle, BiCalendar, BiUser } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';

export default function Hero() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay was prevented by browser policies:", err);
      });
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/packages?destination=${destination}&date=${date}&guests=${guests}`);
  };

  // Text Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <>
      {/* 
        HERO SECTION / हीरो सेक्शन
        =========================================================
        CUSTOMIZATION GUIDE / कस्टमाइज़ेशन गाइड:
        1. VIDEO SOURCE: To change the background video, replace the `src` attribute of the `<video>` tag below.
           (बैकग्राउंड वीडियो बदलने के लिए नीचे <video> टैग के `src` एट्रिब्यूट को बदलें।)
        2. FALLBACK IMAGE: If the video fails to load (due to network or ISP block), the background image and `poster` will show. 
           Modify the `backgroundImage` URL and `poster` URL below.
           (यदि वीडियो लोड नहीं होता है, तो बैकग्राउंड इमेज दिखेगी। नीचे `backgroundImage` और `poster` URL बदलें।)
      */}
      <section className="relative min-h-screen lg:h-screen w-full flex items-center justify-center overflow-hidden py-24 lg:py-0">
        
        {/* Background Video & Fallback Image Container / बैकग्राउंड वीडियो और इमेज */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            // Poster is displayed while video is downloading or if it fails
            poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover scale-105"
            // Using a highly reliable, globally fast CDN mp4 travel video (Video.js sample)
            src="https://xzwpbkkczcuwriidknxl.supabase.co/storage/v1/object/public/videos/hero.mp4"
          />
          {/* Overlay Gradients to keep white text readable / टेक्स्ट को स्पष्ट दिखाने के लिए डार्क शेड */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/75 z-1" />
        </div>

        {/* Content Container / कंटेंट बॉक्स (Adjusted pt-24/pt-16 for mobile spacing) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center min-h-full pt-20 lg:pt-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Headline and Copy / मुख्य टाइटल */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-8 flex flex-col items-start text-left"
            >
              {/* Badge */}
              <motion.span
                variants={itemVariants}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass-effect-dark text-white/90 text-sm font-semibold mb-6 uppercase tracking-wider border border-white/10"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                World-Class Luxury Awaits
              </motion.span>

              {/* Animated Heading (Resized to text-4xl on mobile to avoid navbar overlap) */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
              >
                Explore The World <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  With Confidence
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-white/80 font-inter text-base md:text-xl leading-relaxed max-w-2xl mb-10"
              >
                Discover breathtaking destinations, unforgettable adventures, and luxury travel experiences custom-tailored for the discerning traveler.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-5 mb-8"
              >
                <button
                  onClick={() => navigate('/packages')}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-poppins font-semibold rounded-full shadow-lg hover:shadow-primary/35 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Explore Tours
                </button>
                
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex items-center gap-3 px-6 py-4 glass-effect-dark hover:bg-white/20 text-white font-poppins font-semibold rounded-full transition-all duration-300 border border-white/10"
                >
                  <BiPlayCircle className="text-2xl text-secondary animate-pulse-slow" />
                  <span>Watch Video</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Floating Cards Side */}
            <div className="hidden lg:block lg:col-span-4 relative h-[400px]">
              {/* Card 1 */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [0, -15, 0], opacity: 1 }}
                transition={{
                  y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                  opacity: { duration: 0.8 }
                }}
                className="absolute top-10 right-4 p-5 rounded-2xl glass-effect-dark border border-white/10 text-white w-64 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                    <span className="text-secondary font-bold">★</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-lg">5.0 Star Rated</h4>
                    <p className="text-white/60 text-xs font-inter">By 15,000+ Luxury Clients</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: [0, 15, 0], opacity: 1 }}
                transition={{
                  y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 },
                  opacity: { duration: 0.8 }
                }}
                className="absolute bottom-12 left-4 p-5 rounded-2xl glass-effect-dark border border-white/10 text-white w-64 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                    <span className="text-primary font-bold">✈</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-lg">VIP Experience</h4>
                    <p className="text-white/60 text-xs font-inter">Personalized 24/7 Concierge</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Floating Search Form / सर्च फॉर्म (Adjusted margins for small screens) */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="w-full mt-8 lg:mt-auto mb-6 lg:mb-8 bg-white rounded-3xl lg:rounded-full p-6 lg:py-4 lg:px-8 shadow-2xl border border-border flex flex-col lg:flex-row items-center gap-4 lg:gap-2 justify-between"
          >
            <form onSubmit={handleSearch} className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-2 justify-between">
              
              {/* Destination Input */}
              <div className="w-full lg:w-[32%] flex items-center gap-3 px-4 py-2 lg:border-r border-border">
                <HiOutlineLocationMarker className="text-primary text-2xl shrink-0" />
                <div className="w-full">
                  <label className="block text-xs font-poppins font-bold text-text-secondary uppercase tracking-wider">Destination</label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where are you going?"
                    className="w-full bg-transparent border-none outline-none text-text-primary text-sm font-semibold placeholder:text-text-secondary/50 focus:ring-0 p-0 mt-0.5"
                    required
                  />
                </div>
              </div>

              {/* Date Input */}
              <div className="w-full lg:w-[28%] flex items-center gap-3 px-4 py-2 lg:border-r border-border">
                <BiCalendar className="text-secondary text-2xl shrink-0" />
                <div className="w-full">
                  <label className="block text-xs font-poppins font-bold text-text-secondary uppercase tracking-wider">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-transparent border-none outline-none text-text-primary text-sm font-semibold focus:ring-0 p-0 mt-0.5"
                    required
                  />
                </div>
              </div>

              {/* Guests Input */}
              <div className="w-full lg:w-[24%] flex items-center gap-3 px-4 py-2">
                <BiUser className="text-accent text-2xl shrink-0" />
                <div className="w-full">
                  <label className="block text-xs font-poppins font-bold text-text-secondary uppercase tracking-wider">Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-transparent border-none outline-none text-text-primary text-sm font-semibold focus:ring-0 p-0 mt-0.5"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="5+ Guests">5+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full lg:w-auto h-14 lg:w-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl shadow-md hover:shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all duration-300"
                aria-label="Search Packages"
              >
                <BiSearch />
              </button>

            </form>
          </motion.div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <div className="flex flex-col items-center gap-1.5 text-white/50 text-[11px] font-poppins tracking-widest uppercase">
            <span>Scroll Down</span>
            <div className="w-5 h-9 border border-white/30 rounded-full relative">
              <div className="w-1.5 h-1.5 bg-primary rounded-full absolute left-1/2 -translate-x-1/2 top-2 animate-scroll-down" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Popup */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all duration-200 z-10"
              >
                <IoCloseOutline className="text-2xl" />
              </button>

              <iframe
                title="Luxury Travel Video"
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/pZ7WLQbLDn8?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

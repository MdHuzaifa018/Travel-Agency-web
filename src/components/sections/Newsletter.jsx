import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail } from 'react-icons/fi';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="relative py-28 md:py-36 font-inter overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80"
          alt="Scenic Mountain Sunset"
          className="w-full h-full object-cover"
        />
        {/* Dark vignette overlay */}
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] z-1" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect-dark p-8 md:p-16 rounded-[40px] border border-white/10 shadow-2xl text-center text-white"
        >
          <span className="text-secondary font-poppins font-bold text-xs uppercase tracking-widest block mb-4">
            Exclusive Circle
          </span>
          
          <h2 className="text-3xl md:text-5xl font-poppins font-bold leading-tight mb-6">
            Get Luxury Travel Inspiration
          </h2>
          
          <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Join our private newsletter list to receive handcrafted travel itineraries, first-class promotions, and curated hotel reviews.
          </p>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3 bg-white/10 p-2 rounded-2xl sm:rounded-full border border-white/20"
              >
                <div className="w-full flex items-center gap-3 px-3 py-2">
                  <FiMail className="text-secondary text-xl shrink-0" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-transparent border-none outline-none text-white text-sm placeholder:text-white/60 focus:ring-0 p-0"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-poppins font-semibold text-sm rounded-xl sm:rounded-full shadow-lg hover:shadow-primary/20 hover:scale-[1.03] active:scale-95 transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-md mx-auto p-6 bg-white/10 border border-white/20 rounded-3xl"
              >
                <span className="text-3xl block mb-2">✨</span>
                <h4 className="font-poppins font-bold text-lg text-white mb-2">Welcome to the Club!</h4>
                <p className="text-white/85 text-sm">
                  You have successfully joined the TOUREST circle. Check your inbox soon for your exclusive travel rewards.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  );
}

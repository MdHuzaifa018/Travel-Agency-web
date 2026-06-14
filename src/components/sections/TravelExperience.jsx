import { motion } from 'framer-motion';
import { FiCompass, FiMap, FiSun, FiAward } from 'react-icons/fi';

export default function TravelExperience() {
  const points = [
    {
      icon: <FiSun className="text-xl text-primary" />,
      title: "Bespoke Resort & Retreat Booking",
      desc: "Instant access to top-tier luxury villas, private islands, and secret boutique resorts worldwide."
    },
    {
      icon: <FiCompass className="text-xl text-secondary" />,
      title: "VIP Local Experiences & Access",
      desc: "Private tours of landmarks after-hours, sold-out dining reservations, and premium tickets."
    },
    {
      icon: <FiMap className="text-xl text-accent" />,
      title: "Elite Concierge & Security Services",
      desc: "Personal travel stewards, luxury car rentals, and private plane charters on demand."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-section-bg font-inter overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div>
              <span className="text-primary font-poppins font-bold text-sm tracking-widest uppercase block mb-3">
                Ultimate Experience
              </span>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-text-primary leading-tight mb-6">
                Our Luxury Travel Experience Is Unmatched
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                We believe travel should be effortless, inspiring, and unique. That is why our custom planning process covers every detail from doorstep to destination. You do the dreaming; we do the rest.
              </p>
            </div>

            {/* Checklist */}
            <div className="flex flex-col gap-8 mt-4">
              {points.map((pt, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shrink-0 shadow-sm">
                    {pt.icon}
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-text-primary text-lg mb-1">
                      {pt.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visuals with Floating Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative flex justify-center"
          >
            {/* Primary Curved Image */}
            <div className="w-[85%] aspect-[3/4] rounded-[60px] overflow-hidden shadow-2xl border border-white relative">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Dining Experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating Element 1: Happy Client Card */}
            <motion.div
              initial={{ y: 10 }}
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-1/4 -left-6 p-4 rounded-2xl glass-effect border border-border shadow-xl flex items-center gap-3 w-56"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                <FiAward className="text-primary text-xl" />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-text-secondary uppercase tracking-wide">Accreditation</span>
                <span className="font-poppins font-bold text-sm text-text-primary">Virtuoso Agency Member</span>
              </div>
            </motion.div>

            {/* Floating Element 2: Private Jet Stat */}
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-1/4 -right-6 p-4 rounded-2xl glass-effect border border-border shadow-xl flex items-center gap-3 w-52"
            >
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center border border-accent/20 shrink-0">
                <span className="text-accent text-xl">★</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-text-secondary uppercase tracking-wide">Elite Score</span>
                <span className="font-poppins font-bold text-sm text-text-primary">99.8% Guest Satisfaction</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

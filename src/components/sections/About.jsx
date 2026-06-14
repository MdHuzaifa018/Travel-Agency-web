import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiAward, FiShield, FiHeart } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';

export default function About() {
  const features = [
    {
      icon: <FiAward className="text-2xl text-primary" />,
      title: "First-Class Premium Luxury",
      desc: "We curate exclusively five-star lodging, elite concierge services, and private transport."
    },
    {
      icon: <FiShield className="text-2xl text-secondary" />,
      title: "Seamless Safety & Security",
      desc: "Your absolute peace of mind is guaranteed with 24/7 global support and fully-insured itineraries."
    },
    {
      icon: <FiHeart className="text-2xl text-accent" />,
      title: "Handcrafted Personalization",
      desc: "No pre-made templates. Every trip is custom-tailored to your unique tastes and pacing."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-section-bg font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Premium Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-white">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Travel Experience"
                className="w-full h-full object-cover"
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Overlapping Floating Image */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-8 -right-8 w-1/2 aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block"
            >
              <img
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=400&q=80"
                alt="Luxury Flight"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-6 -left-6 p-6 rounded-2xl glass-effect border border-border shadow-lg flex flex-col items-center justify-center text-center w-36"
            >
              <span className="text-4xl font-extrabold text-primary font-poppins">12+</span>
              <span className="text-xs font-semibold text-text-secondary mt-1 uppercase tracking-wide">Years Of Luxury</span>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div>
              <span className="text-primary font-poppins font-bold text-sm tracking-widest uppercase block mb-3">
                About Our Agency
              </span>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-text-primary leading-tight mb-6">
                We Craft Unforgettable Journeys
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Founded in 2014, TOUREST is a global leader in elite travel experiences. We exist to provide luxury travelers with highly-curated itineraries, unmatched local access, and elite comforts that cannot be replicated. 
              </p>
            </div>

            {/* Feature List */}
            <div className="flex flex-col gap-6 my-4">
              {features.map((feat, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-text-primary text-base mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-text-primary hover:bg-primary text-white font-poppins font-semibold rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Read Our Full Story</span>
                <BsArrowRight className="text-lg" />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

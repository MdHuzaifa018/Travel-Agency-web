import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiCompass, FiShield, FiHeart } from 'react-icons/fi';
import { RiTwitterFill, RiLinkedinFill, RiInstagramFill } from 'react-icons/ri';
import { Helmet } from 'react-helmet-async';

const teamMembers = [
  {
    name: "Genevieve Beaufort",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=450&q=80",
    bio: "With over 18 years in VIP hospitality, Genevieve founded TOUREST to redefine elite tailored travel.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Harrison Vance",
    role: "Director of Global Operations",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=450&q=80",
    bio: "Harrison manages our international network of elite suppliers, private jet partners, and five-star resorts.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Sayaka Tanaka",
    role: "Lead Destination Specialist - Asia",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=450&q=80",
    bio: "Born in Kyoto, Sayaka designs our award-winning cultural immersions, tea house rituals, and private guide bookings.",
    linkedin: "#",
    twitter: "#"
  }
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-[72px] font-inter"
    >
      <Helmet>
        <title>About Us | TOUREST - Our Story & Mission</title>
        <meta name="description" content="Learn about TOUREST's mission to deliver unforgettable luxury travel experiences." />
        <link rel="canonical" href="https://toor-travel-agency-web.vercel.app/about" />
      </Helmet>
      

      {/* Header Banner */}
      <div className="relative py-24 md:py-32 bg-section-bg border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80"
            alt="Swiss Alps Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-primary font-poppins font-bold text-sm tracking-widest uppercase block mb-3">
            Our Heritage
          </span>
          <h1 className="text-4xl md:text-6xl font-poppins font-extrabold text-text-primary mb-6">
            About TOUREST
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Crafting unique and exceptional itineraries for high-net-worth travellers since 2014.
          </p>
        </div>
      </div>

      {/* Story & Split Layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6">
            <span className="text-primary font-poppins font-bold text-xs uppercase tracking-widest block mb-2">
              Our Beginnings
            </span>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-6 leading-tight">
              A New Era of Curated Luxury Travel
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              TOUREST was born out of a simple realization: the modern luxury traveler does not want pre-packaged vacations. They crave authenticity, seamless transitions, privacy, and curated access to the extraordinary.
            </p>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              What started as a boutique private concierge in California has grown into a globally recognized luxury agency. Today, we work with private flight networks, Michelin-starred culinary teams, and Virtuoso-accredited hotels to build bespoke, dreamlike itineraries.
            </p>
            
            {/* Mission / Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-section-bg p-6 rounded-2xl border border-border">
                <FiTarget className="text-primary text-2xl mb-3" />
                <h4 className="font-poppins font-bold text-text-primary text-base mb-2">Our Mission</h4>
                <p className="text-text-secondary text-xs leading-relaxed">
                  To provide seamless, bespoke travel planning that satisfies the traveler's curiosity and desire for premium comfort.
                </p>
              </div>
              <div className="bg-section-bg p-6 rounded-2xl border border-border">
                <FiEye className="text-secondary text-2xl mb-3" />
                <h4 className="font-poppins font-bold text-text-primary text-base mb-2">Our Vision</h4>
                <p className="text-text-secondary text-xs leading-relaxed">
                  To shape the future of high-end travel by blending absolute environmental conservation with ultra-luxury.
                </p>
              </div>
            </div>
          </div>

          {/* Collage Gallery Side */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-xl border border-border mb-6">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Yacht Meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-md border border-border">
                <img
                  src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&w=400&q=80"
                  alt="Coastal Positano"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-md border border-border">
                <img
                  src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80"
                  alt="Maldives Resort"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Team Section */}
      <div className="bg-section-bg py-20 md:py-28 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-poppins font-bold text-sm tracking-widest uppercase block mb-3">
              The Advisors
            </span>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
              Meet Our Travel Curators
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              Our experts spend months visiting each destination, verifying rooms, dining with chefs, and establishing local roots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                key={member.name}
                className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm group hover:shadow-lg transition-all duration-350"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  
                  {/* Social hover panel */}
                  <div className="absolute inset-0 bg-black/45 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={member.linkedin} className="w-10 h-10 rounded-full bg-white hover:bg-primary hover:text-white text-text-primary flex items-center justify-center transition-colors">
                      <RiLinkedinFill className="text-lg" />
                    </a>
                    <a href={member.twitter} className="w-10 h-10 rounded-full bg-white hover:bg-primary hover:text-white text-text-primary flex items-center justify-center transition-colors">
                      <RiTwitterFill className="text-lg" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <h4 className="font-poppins font-bold text-text-primary text-lg mb-1">{member.name}</h4>
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider block mb-4">{member.role}</span>
                  <p className="text-text-secondary text-xs leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Trust & Accreditations Banner */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h4 className="font-poppins font-bold text-xs text-text-secondary uppercase tracking-widest mb-10">
            Certified Members & Partners
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-60">
            <span className="font-poppins font-extrabold text-2xl tracking-widest text-text-secondary">VIRTUOSO</span>
            <span className="font-poppins font-extrabold text-2xl tracking-widest text-text-secondary">ASTA</span>
            <span className="font-poppins font-extrabold text-2xl tracking-widest text-text-secondary">CLIA</span>
            <span className="font-poppins font-extrabold text-2xl tracking-widest text-text-secondary">IATA</span>
          </div>
        </div>
      </div>

    </motion.div>
  );
}

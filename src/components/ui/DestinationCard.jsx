import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';

export default function DestinationCard({ destination }) {
  const { id, name, country, image, rating, price, tag, desc } = destination;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col h-full"
    >
      {/* Image Wrapper */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        />
        {/* Luxury Tag overlay */}
        {tag && (
          <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-text-primary font-poppins font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
            {tag}
          </span>
        )}
        {/* Rating overlay */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
          <AiFillStar className="text-accent text-sm" />
          <span className="text-text-primary font-poppins font-bold text-xs">{rating.toFixed(1)}</span>
        </div>
        
        {/* Soft bottom vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Details Section */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        {/* Location Row */}
        <div className="flex items-center gap-1.5 text-text-secondary text-sm mb-3">
          <HiOutlineLocationMarker className="text-primary" />
          <span className="font-medium">{country}</span>
        </div>

        {/* Title */}
        <h3 className="font-poppins font-bold text-2xl text-text-primary mb-3 group-hover:text-primary transition-colors duration-350">
          {name}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
          {desc}
        </p>

        {/* Pricing and Action Divider */}
        <div className="h-[1px] bg-border w-full mb-6" />

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-text-secondary text-xs block font-medium">Starting from</span>
            <span className="text-text-primary font-poppins font-extrabold text-2xl">
              ${price.toLocaleString()}
            </span>
          </div>
          <Link
            to={`/booking?destination=${name}`}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 text-text-primary"
            aria-label={`Book tour to ${name}`}
          >
            <BsArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

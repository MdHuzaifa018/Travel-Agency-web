import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiCheckCircle } from 'react-icons/fi';

export default function TourCard({ tour }) {
  const { id, title, destination, duration, rating, reviews, price, originalPrice, image, highlights, location, category } = tour;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row lg:flex-col xl:flex-row h-full group"
    >
      {/* Image Block */}
      <div className="relative w-full md:w-2/5 lg:w-full xl:w-2/5 aspect-[4/3] md:aspect-auto lg:aspect-[4/3] xl:aspect-auto min-h-[240px] md:min-h-full lg:min-h-[240px] xl:min-h-full overflow-hidden shrink-0">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.6 }}
        />
        {category && (
          <span className="absolute top-4 left-4 bg-primary text-white font-poppins font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
            {category}
          </span>
        )}
      </div>

      {/* Content Block */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
        <div>
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            {/* Duration */}
            <div className="flex items-center gap-1.5 text-text-secondary text-sm font-medium">
              <BiTimeFive className="text-primary text-lg" />
              <span>{duration}</span>
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-1">
              <AiFillStar className="text-accent text-sm" />
              <span className="text-text-primary font-poppins font-bold text-sm">{rating.toFixed(1)}</span>
              <span className="text-text-secondary text-xs">({reviews} Reviews)</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-poppins font-bold text-xl text-text-primary mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-text-secondary text-sm mb-4">
            <HiOutlineLocationMarker className="text-secondary shrink-0" />
            <span>{location}</span>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-text-secondary text-xs">
                <FiCheckCircle className="text-secondary shrink-0" />
                <span className="truncate">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Row */}
        <div>
          <div className="h-[1px] bg-border w-full mb-6" />
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {/* Pricing */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-text-primary font-poppins font-extrabold text-2xl">
                  ${price.toLocaleString()}
                </span>
                {originalPrice && (
                  <span className="text-text-secondary line-through text-sm">
                    ${originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <span className="text-text-secondary text-[11px] block font-medium">per traveler • all taxes incl.</span>
            </div>

            {/* Button */}
            <Link
              to={`/booking?package=${title}&price=${price}`}
              className="inline-flex items-center justify-center px-5 py-3 bg-text-primary hover:bg-primary text-white font-poppins font-semibold text-sm rounded-full transition-all duration-300 shadow-md shadow-text-primary/5 hover:shadow-primary/20"
            >
              Book Package
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

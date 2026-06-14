import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { destinations } from '../../data/travelData';
import DestinationCard from '../ui/DestinationCard';

export default function Destinations() {
  return (
    <section className="py-24 md:py-32 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Title Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-poppins font-bold text-sm tracking-widest uppercase block mb-3">
              Dream Destinations
            </span>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-text-primary leading-tight">
              Explore the World's Most Popular Places
            </h2>
          </div>
          <p className="text-text-secondary text-base md:text-lg max-w-md leading-relaxed">
            Handpicked luxury getaways. Immersive culture, spectacular wilderness, and breathtaking oceanside views crafted for memories of a lifetime.
          </p>
        </div>

        {/* Swiper Slider Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative px-2 py-4"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="pb-16"
          >
            {destinations.map((dest) => (
              <SwiperSlide key={dest.id} className="h-auto">
                <DestinationCard destination={dest} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}

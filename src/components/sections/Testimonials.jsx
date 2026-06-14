import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/travelData';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { AiFillStar } from 'react-icons/ai';

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-section-bg font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-poppins font-bold text-sm tracking-widest uppercase block mb-3">
            Guest Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-text-primary leading-tight mb-6">
            What Our Premium Travelers Say
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            Read stories of absolute satisfaction and curated luxury from our upscale clientele who have experienced our unique travels.
          </p>
        </div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white rounded-[40px] border border-border shadow-xl p-8 md:p-16 relative overflow-hidden"
        >
          {/* Quote Mark Watermark */}
          <RiDoubleQuotesR className="absolute -top-4 right-10 text-primary/[0.04] text-[180px] pointer-events-none" />

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {testimonials.map((testi) => (
              <SwiperSlide key={testi.id}>
                <div className="flex flex-col items-center text-center">
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-6 text-accent">
                    {[...Array(testi.rating)].map((_, i) => (
                      <AiFillStar key={i} className="text-xl" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-poppins font-semibold text-lg md:text-2xl text-text-primary leading-relaxed mb-8 max-w-2xl italic">
                    "{testi.quote}"
                  </p>

                  {/* Customer Avatar & Bio */}
                  <div className="flex items-center gap-4 mt-2">
                    <img
                      src={testi.image}
                      alt={testi.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-md"
                    />
                    <div className="text-left">
                      <h4 className="font-poppins font-bold text-text-primary text-base md:text-lg">
                        {testi.name}
                      </h4>
                      <span className="text-text-secondary text-xs md:text-sm font-medium">
                        {testi.role}
                      </span>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}

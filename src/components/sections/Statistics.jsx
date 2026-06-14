import { useState } from 'react';
import { motion } from 'framer-motion';
import useCountUp from '../../hooks/useCountUp';

export default function Statistics() {
  const [trigger, setTrigger] = useState(false);

  const travelersCount = useCountUp(15, 2, trigger);
  const toursCount = useCountUp(500, 2, trigger);
  const destinationsCount = useCountUp(120, 2, trigger);
  const experienceCount = useCountUp(12, 2, trigger);

  const statsData = [
    { value: travelersCount, suffix: "K+", label: "Happy Travelers" },
    { value: toursCount, suffix: "+", label: "Luxury Tours Done" },
    { value: destinationsCount, suffix: "+", label: "Unique Destinations" },
    { value: experienceCount, suffix: "+", label: "Years of Excellence" },
  ];

  return (
    <motion.section
      onViewportEnter={() => setTrigger(true)}
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 md:py-24 bg-white border-y border-border font-inter"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 text-center">
          {statsData.map((stat, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              key={idx}
              className="flex flex-col items-center justify-center p-6 bg-section-bg rounded-3xl border border-border/50 hover:border-primary/20 transition-colors duration-300"
            >
              <div className="flex items-baseline font-poppins font-extrabold text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-2">
                <span>{stat.value}</span>
                <span className="text-primary font-bold">{stat.suffix}</span>
              </div>
              <span className="text-text-secondary text-sm md:text-base font-semibold uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

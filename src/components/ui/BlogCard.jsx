import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { BiCalendar, BiTimeFive } from 'react-icons/bi';

export default function BlogCard({ blog }) {
  const { id, title, category, date, image, excerpt, readTime } = blog;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Block */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.6 }}
        />
        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-text-primary font-poppins font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
          {category}
        </span>
      </div>

      {/* Details Block */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-4 text-text-secondary text-xs font-medium mb-4">
            <div className="flex items-center gap-1">
              <BiCalendar className="text-primary text-sm" />
              <span>{date}</span>
            </div>
            <div className="h-3 w-[1px] bg-border" />
            <div className="flex items-center gap-1">
              <BiTimeFive className="text-primary text-sm" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-poppins font-bold text-xl text-text-primary mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
            <Link to={`/blog/${id}`}>{title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            {excerpt}
          </p>
        </div>

        {/* Action button */}
        <div>
          <div className="h-[1px] bg-border w-full mb-6" />
          <Link
            to={`/blog/${id}`}
            className="inline-flex items-center gap-2 text-text-primary group-hover:text-primary font-poppins font-bold text-sm transition-colors duration-300"
          >
            <span>Read Article</span>
            <motion.span
              animate={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="inline-block"
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '../../data/travelData';
import BlogCard from '../ui/BlogCard';
import { BsArrowRight } from 'react-icons/bs';

export default function Blog() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 md:py-32 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-poppins font-bold text-sm tracking-widest uppercase block mb-3">
              Travel Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-text-primary leading-tight">
              Latest Insights & News
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 group text-primary hover:text-primary-dark font-poppins font-bold text-base transition-colors duration-200"
          >
            <span>Read All Articles</span>
            <BsArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Blog Post Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.div key={blog.id} variants={itemVariants}>
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

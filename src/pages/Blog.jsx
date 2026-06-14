import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { blogs } from '../data/travelData';
import BlogCard from '../components/ui/BlogCard';
import { BiSearch } from 'react-icons/bi';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = blogs.map(post => post.category);
    return ['All', ...new Set(cats)];
  }, []);

  // Filter blog posts
  const filteredBlogs = useMemo(() => {
    return blogs.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-[72px] font-inter"
    >
      {/* Header Banner */}
      <div className="relative py-24 md:py-32 bg-section-bg border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80"
            alt="Travel Diary Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-primary font-poppins font-bold text-sm tracking-widest uppercase block mb-3">
            Journal & Insights
          </span>
          <h1 className="text-4xl md:text-6xl font-poppins font-extrabold text-text-primary mb-6">
            The Luxury Travel Blog
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Tips, guides, and stories straight from our private coordinators and experienced travellers worldwide.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        
        {/* Search and Categories row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-section-bg p-6 rounded-3xl border border-border">
          {/* Search Input */}
          <div className="w-full md:w-96 flex items-center gap-3 bg-white border border-border rounded-full px-5 py-3 shadow-sm focus-within:border-primary transition-colors">
            <BiSearch className="text-text-secondary text-xl" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-transparent border-none outline-none text-text-primary text-sm focus:ring-0 p-0"
            />
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-poppins text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                  selectedCategory === cat
                    ? 'bg-primary border-primary text-white shadow-md'
                    : 'bg-white border-border text-text-secondary hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Metadata */}
        <div className="mb-8">
          <p className="text-text-secondary text-sm font-medium">
            Showing {filteredBlogs.length} article{filteredBlogs.length !== 1 && 's'}
          </p>
        </div>

        {/* Articles Grid */}
        {filteredBlogs.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredBlogs.map((blog) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={blog.id}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-section-bg rounded-3xl border border-border/50">
            <span className="text-4xl block mb-4">📝</span>
            <h3 className="font-poppins font-bold text-xl text-text-primary mb-2">No Articles Found</h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto leading-relaxed">
              We couldn't find any articles matching your search criteria. Please check your spelling or choose a different category.
            </p>
          </div>
        )}

      </div>
    </motion.div>
  );
}

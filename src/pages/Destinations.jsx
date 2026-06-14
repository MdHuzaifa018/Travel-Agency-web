import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { destinations } from '../data/travelData';
import DestinationCard from '../components/ui/DestinationCard';
import { BiSearch } from 'react-icons/bi';

export default function Destinations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  // Extract all unique tags
  const tags = useMemo(() => {
    const allTags = destinations.map(dest => dest.tag);
    return ['All', ...new Set(allTags)];
  }, []);

  // Filter destinations based on search query and selected tag
  const filteredDestinations = useMemo(() => {
    return destinations.filter(dest => {
      const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            dest.country.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag === 'All' || dest.tag === selectedTag;
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-[72px]"
    >
      {/* Page Header */}
      <div className="relative py-24 md:py-32 bg-section-bg border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80"
            alt="World Map Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-primary font-poppins font-bold text-sm tracking-widest uppercase block mb-3">
            Luxury Getaways
          </span>
          <h1 className="text-4xl md:text-6xl font-poppins font-extrabold text-text-primary mb-6">
            Explore Destinations
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Browse our handpicked list of world-class locations. Sort by category or search by country to find your next adventure.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-section-bg p-6 rounded-3xl border border-border">
          {/* Search Box */}
          <div className="w-full md:w-96 flex items-center gap-3 bg-white border border-border rounded-full px-5 py-3 shadow-sm focus-within:border-primary transition-colors">
            <BiSearch className="text-text-secondary text-xl" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or country..."
              className="w-full bg-transparent border-none outline-none text-text-primary text-sm focus:ring-0 p-0"
            />
          </div>

          {/* Tags Filter */}
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-5 py-2.5 rounded-full font-poppins text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                  selectedTag === tag
                    ? 'bg-primary border-primary text-white shadow-md'
                    : 'bg-white border-border text-text-secondary hover:border-primary hover:text-primary'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8">
          <p className="text-text-secondary text-sm font-medium">
            Showing {filteredDestinations.length} luxury destination{filteredDestinations.length !== 1 && 's'}
          </p>
        </div>

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredDestinations.map((dest) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={dest.id}
              >
                <DestinationCard destination={dest} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-section-bg rounded-3xl border border-border/50">
            <span className="text-4xl block mb-4">🔍</span>
            <h3 className="font-poppins font-bold text-xl text-text-primary mb-2">No Destinations Found</h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto leading-relaxed">
              We couldn't find any destinations matching "{searchQuery}" under category "{selectedTag}". Please try adjusting your filters.
            </p>
          </div>
        )}

      </div>
    </motion.div>
  );
}

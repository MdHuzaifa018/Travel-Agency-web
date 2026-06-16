import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { packages } from '../data/travelData';
import TourCard from '../components/ui/TourCard';
import { BiSearch } from 'react-icons/bi';
import { Helmet } from 'react-helmet-async';

export default function Packages() {
  const [searchParams] = useSearchParams();
  const urlDestination = searchParams.get('destination') || '';

  const [searchQuery, setSearchQuery] = useState(urlDestination);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(5000);

  // Synchronize search query if URL parameter changes
  useEffect(() => {
    if (urlDestination) {
      setSearchQuery(urlDestination);
    }
  }, [urlDestination]);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = packages.map(pkg => pkg.category);
    return ['All', ...new Set(cats)];
  }, []);

  // Filter packages based on query, category, and budget
  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            pkg.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || pkg.category === selectedCategory;
      const matchesPrice = pkg.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, maxPrice]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-[72px]"
    >
      <Helmet>
        <title>Tour Packages | TOUREST - Luxury Travel Deals</title>
        <meta name="description" content="Browse our exclusive collection of premium tour packages for every traveler." />
        <link rel="canonical" href="https://toor-travel-agency-web.vercel.app/packages" />
      </Helmet>
      {/* Header Banner */}
      <div className="relative py-24 md:py-32 bg-section-bg border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80"
            alt="Travel Tour Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-primary font-poppins font-bold text-sm tracking-widest uppercase block mb-3">
            Handcrafted Tours
          </span>
          <h1 className="text-4xl md:text-6xl font-poppins font-extrabold text-text-primary mb-6">
            Tour & Travel Packages
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Unpack exclusive privileges, private transport guides, and Michelin star culinary journeys in our handpicked signature packages.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        
        {/* Filters Sidebar/Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          
          {/* Search Box */}
          <div className="lg:col-span-4 bg-section-bg p-6 rounded-3xl border border-border flex flex-col gap-4">
            <h3 className="font-poppins font-bold text-lg text-text-primary">Search Packages</h3>
            <div className="flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3 shadow-sm focus-within:border-primary transition-colors">
              <BiSearch className="text-text-secondary text-xl" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Where would you like to go?"
                className="w-full bg-transparent border-none outline-none text-text-primary text-sm focus:ring-0 p-0"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="lg:col-span-5 bg-section-bg p-6 rounded-3xl border border-border flex flex-col gap-4">
            <h3 className="font-poppins font-bold text-lg text-text-primary">Travel Themes</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl font-poppins text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                    selectedCategory === cat
                      ? 'bg-primary border-primary text-white'
                      : 'bg-white border-border text-text-secondary hover:border-primary hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Range Filter */}
          <div className="lg:col-span-3 bg-section-bg p-6 rounded-3xl border border-border flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="font-poppins font-bold text-lg text-text-primary">Max Budget</h3>
              <span className="font-poppins font-extrabold text-primary">${maxPrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={5000}
              step={100}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-text-secondary font-medium">
              <span>$1,000</span>
              <span>$5,000</span>
            </div>
          </div>

        </div>

        {/* Results Metadata */}
        <div className="mb-8 flex justify-between items-center">
          <p className="text-text-secondary text-sm font-medium">
            Found {filteredPackages.length} premium package{filteredPackages.length !== 1 && 's'}
          </p>
        </div>

        {/* Tour Cards Grid */}
        {filteredPackages.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredPackages.map((tour) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                key={tour.id}
              >
                <TourCard tour={tour} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-section-bg rounded-3xl border border-border/50">
            <span className="text-4xl block mb-4">✈</span>
            <h3 className="font-poppins font-bold text-xl text-text-primary mb-2">No Packages Found</h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto leading-relaxed">
              We couldn't find any tour packages matching your description or budget. Try resetting your search terms or increasing your budget slider.
            </p>
          </div>
        )}

      </div>
    </motion.div>
  );
}

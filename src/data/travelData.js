export const destinations = [
  {
    id: 1,
    name: "Maldives",
    country: "Indian Ocean",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 142,
    price: 2490,
    tag: "Luxury Escape",
    desc: "Turquoise lagoons, overwater villas, and pristine coral reefs await you in this tropical paradise."
  },
  {
    id: 2,
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 98,
    price: 3100,
    tag: "Culture & History",
    desc: "Explore historic temples, serene bamboo forests, and witness traditional geisha districts."
  },
  {
    id: 3,
    name: "Swiss Alps",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 120,
    price: 2850,
    tag: "Scenic Adventure",
    desc: "Majestic snow-capped peaks, scenic train rides, and charming alpine villages."
  },
  {
    id: 4,
    name: "Amalfi Coast",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1486916856992-e4db22c8df33?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 86,
    price: 1950,
    tag: "Romance & Coast",
    desc: "Stunning cliffside villages, crystal clear Mediterranean waters, and exceptional Italian cuisine."
  },
  {
    id: 5,
    name: "Masai Mara",
    country: "Kenya",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 112,
    price: 4200,
    tag: "Wild Safari",
    desc: "Experience the grand migration, luxury tented camps, and close encounters with the Big Five."
  },
  {
    id: 6,
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 165,
    price: 2150,
    tag: "Sunset Capital",
    desc: "Volcanic views, whitewashed buildings, and the world's most famous caldera sunsets."
  },
  {
    id: 7,
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 194,
    price: 1390,
    tag: "Wellness & Spa",
    desc: "Lush rice terraces, spiritual temples, surf beaches, and holistic wellness sanctuaries."
  },
  {
    id: 8,
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 210,
    price: 1850,
    tag: "Art & Romance",
    desc: "World-class art galleries, iconic landmarks, haute couture, and romantic Seine cruises."
  }
];

export const packages = [
  {
    id: 1,
    title: "Luxury Maldives Overwater Escape",
    destination: "Maldives",
    duration: "7 Days, 6 Nights",
    rating: 4.9,
    reviews: 110,
    price: 2490,
    originalPrice: 3200,
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80",
    highlights: ["Overwater Pool Villa", "All-Inclusive Dining", "Private Yacht Sunset Cruise", "Snorkeling Tour"],
    location: "Male, Maldives",
    category: "Luxe Beach"
  },
  {
    id: 2,
    title: "Cultural Wonders of Japan",
    destination: "Kyoto & Tokyo",
    duration: "10 Days, 9 Nights",
    rating: 4.8,
    reviews: 74,
    price: 3100,
    originalPrice: 3600,
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    highlights: ["Bullet Train Tickets", "5-Star Ryokan Stay", "Private Geisha Dinner", "Mount Fuji Tour"],
    location: "Kyoto, Japan",
    category: "Heritage"
  },
  {
    id: 3,
    title: "Alpine Splendor & Scenic Railways",
    destination: "Swiss Alps",
    duration: "8 Days, 7 Nights",
    rating: 4.9,
    reviews: 95,
    price: 2850,
    originalPrice: 3300,
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
    highlights: ["Glacier Express Passes", "Interlaken Chateau Stay", "Jungfraujoch Summit Access", "Private Guide"],
    location: "Zermatt, Switzerland",
    category: "Mountain Adventure"
  },
  {
    id: 4,
    title: "Amalfi Coast & Capri Private Yacht Tour",
    destination: "Amalfi Coast",
    duration: "6 Days, 5 Nights",
    rating: 4.7,
    reviews: 63,
    price: 1950,
    originalPrice: 2400,
    image: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&w=800&q=80",
    highlights: ["Cliffside Suite Stay", "Private Boat to Capri", "Michelin-starred Dining", "Lemon Grove Tasting"],
    location: "Positano, Italy",
    category: "Romantic Coastal"
  },
  {
    id: 5,
    title: "Ultimate Masai Mara Wildlife Safari",
    destination: "Kenya",
    duration: "9 Days, 8 Nights",
    rating: 4.9,
    reviews: 82,
    price: 4200,
    originalPrice: 4800,
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=80",
    highlights: ["Luxury Luxury Tent Villa", "Hot Air Balloon Flight", "Daily Private Game Drives", "Maasai Interaction"],
    location: "Masai Mara, Kenya",
    category: "Wildlife Safari"
  },
  {
    id: 6,
    title: "Greek Odyssey: Santorini & Mykonos",
    destination: "Greece",
    duration: "8 Days, 7 Nights",
    rating: 4.8,
    reviews: 105,
    price: 2150,
    originalPrice: 2700,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    highlights: ["Infinity Pool Suite Stay", "Catamaran Cruise", "Winery Tour & Tasting", "Airport Helicopter Transfer"],
    location: "Santorini, Greece",
    category: "Island Hopping"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Victoria Sterling",
    role: "Luxury Travel Journalist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    quote: "Our Maldives honeymoon was nothing short of perfection. Every detail, from the private seaplane transfer to the gourmet dining on the beach, was orchestrated flawlessly by the concierge. Truly a five-star experience."
  },
  {
    id: 2,
    name: "Arthur Pendelton",
    role: "Hedge Fund Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    quote: "I have booked safari excursions in Africa through multiple luxury agencies, but Tourest provided unmatched exclusivity. The private rangers knew exactly where to track the leopards, and the luxury lodge was spectacular."
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Fashion Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    quote: "The Japan Ryokan tour was an aesthetic and cultural masterpiece. Tourest curated an itinerary that blended high-end fashion districts in Tokyo with ancient, mystical tea houses in Kyoto. Highly recommended!"
  },
  {
    id: 4,
    name: "Dr. Marcus Brody",
    role: "University Professor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    quote: "Switzerland’s Alpine Scenic trip was beautifully organized. Even with train connections and private drivers, the transitions were seamless. The hotels chosen had the best mountain vistas."
  }
];

export const blogs = [
  {
    id: 1,
    title: "Unveiling the World's Most Exclusive Luxury Eco-Resorts",
    category: "Luxe Travel",
    date: "June 12, 2026",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=800&q=80",
    excerpt: "Discover the remote destinations combining ultra-luxury hospitality with pristine conservation. From private island eco-lodges in Fiji to carbon-neutral camps in Antarctica.",
    readTime: "6 Min Read"
  },
  {
    id: 2,
    title: "A Food Connoisseur's Guide to Kyoto's Ancient Tea Houses",
    category: "Gastronomy",
    date: "May 28, 2026",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    excerpt: "Unlocking the doors to centennial restaurants that serve multi-course Kaiseki feasts, hidden inside the historical geisha districts of Gion.",
    readTime: "8 Min Read"
  },
  {
    id: 3,
    title: "10 Essential Luxury Travel Accessories You Need in 2026",
    category: "Smart Gear",
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    excerpt: "Make your long-haul journeys a breeze with these highly-curated luxury accessories—from custom noise-isolation tech to cashmere travel sets.",
    readTime: "4 Min Read"
  }
];

export const galleryItems = [
  {
    id: 1,
    title: "Overwater Villas, Maldives",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    cols: 1,
    rows: 1
  },
  {
    id: 2,
    title: "Shinto Shrine, Kyoto",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
    cols: 1,
    rows: 2
  },
  {
    id: 3,
    title: "Fuji Summit, Japan",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    cols: 2,
    rows: 1
  },
  {
    id: 4,
    title: "Positano Cliffside, Italy",
    category: "Coastal",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    cols: 1,
    rows: 1
  },
  {
    id: 5,
    title: "Masai Mara Cheetah, Kenya",
    category: "Wildlife",
    image: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=800&q=80",
    cols: 1,
    rows: 1
  },
  {
    id: 6,
    title: "Chateau in Interlaken, Switzerland",
    category: "Mountain",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    cols: 2,
    rows: 2
  },
  {
    id: 7,
    title: "Santorini Caldera View, Greece",
    category: "Coastal",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    cols: 1,
    rows: 1
  },
  {
    id: 8,
    title: "Gondola in Venice, Italy",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80",
    cols: 1,
    rows: 1
  }
];

export const statistics = [
  { value: 15000, suffix: "+", label: "Premium Travelers" },
  { value: 500, suffix: "+", label: "Curated Luxury Tours" },
  { value: 120, suffix: "+", label: "Exclusive Destinations" },
  { value: 12, suffix: "+", label: "Years Experience" }
];

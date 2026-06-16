import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { packages } from '../data/travelData';
import { FiCheckCircle, FiInfo, FiCalendar, FiUsers, FiTag } from 'react-icons/fi';
import { RiCompassDiscoverFill } from 'react-icons/ri';
import { Helmet } from 'react-helmet-async';
export default function Booking() {
  const [searchParams] = useSearchParams();
  const initialPackage = searchParams.get('package') || '';
  const initialDestination = searchParams.get('destination') || '';
  const initialPrice = searchParams.get('price') || '';

  const [selectedPackage, setSelectedPackage] = useState(initialPackage || 'custom');
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [bookingId, setBookingId] = useState('');

  // Calculate pricing based on selected package and guests
  const packageDetails = useMemo(() => {
    if (selectedPackage === 'custom') {
      return { title: 'Bespoke Custom Itinerary', price: 2500 }; // base price for custom
    }
    const found = packages.find(pkg => pkg.title === selectedPackage);
    return found ? { title: found.title, price: found.price } : { title: 'Bespoke Custom Itinerary', price: 2500 };
  }, [selectedPackage]);

  const totalPrice = packageDetails.price * guests;

  // Handle auto-population from URL
  useEffect(() => {
    if (initialPackage) {
      setSelectedPackage(initialPackage);
    } else if (initialDestination) {
      setSelectedPackage('custom');
      setNotes(`Interested in custom itinerary to: ${initialDestination}`);
    }
  }, [initialPackage, initialDestination]);

  const handleBookSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);



    // WhatsApp number (without + or 0, with country code)
    const myPhoneNumber = "918434890116"; 
    
    // Format the message in English
    const message = `*New Booking Request!*\n\n` +
                    `👤 *Name:* ${name}\n` +
                    `✉️ *Email:* ${email}\n` +
                    `📞 *Phone:* ${phone}\n` +
                    `🗺️ *Package:* ${packageDetails.title}\n` +
                    `📅 *Date:* ${date}\n` +
                    `👥 *Travelers:* ${guests}\n` +
                    `💵 *Estimated Total:* $${totalPrice.toLocaleString()}\n` +
                    `📝 *Special Requests:* ${notes || 'None'}`;
    
    // Make the message URL-friendly
    const encodedMessage = encodeURIComponent(message);
    
    // Create the WhatsApp Link (Using api.whatsapp.com handles emojis and special characters much more reliably)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${918434890116}&text=${encodedMessage}`;

    // Simulate booking process
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `TRV-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingId(generatedId);
      setIsBooked(true);
      window.open(whatsappUrl, '_blank');
    }, 1000); 
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-[72px] font-inter bg-section-bg min-h-screen"
    >
      <Helmet>
        <title>Booking | TOUREST - Luxury Travel Deals</title>
        <meta name="description" content="Book your dream luxury vacation with TOUREST's easy booking system." />
        <link rel="canonical" href="https://toor-travel-agency-web.vercel.app/booking" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        
        <AnimatePresence mode="wait">
          {!isBooked ? (
            <motion.div
              key="booking-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              
              {/* Form Side */}
              <div className="lg:col-span-8 bg-white border border-border rounded-[32px] p-8 md:p-12 shadow-sm">
                <div className="mb-10">
                  <span className="text-primary font-poppins font-bold text-xs uppercase tracking-widest block mb-2">
                    Secured Booking
                  </span>
                  <h1 className="text-3xl md:text-4xl font-poppins font-extrabold text-text-primary">
                    Book Your Next Journey
                  </h1>
                </div>

                <form onSubmit={handleBookSubmit} className="flex flex-col gap-8">
                  
                  {/* Step 1: Trip Preferences */}
                  <div>
                    <h3 className="font-poppins font-bold text-lg text-text-primary mb-5 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">1</span>
                      Trip Selection
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Package Dropdown */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-poppins font-bold text-text-secondary uppercase tracking-wider">Select Package</label>
                        <div className="relative">
                          <select
                            value={selectedPackage}
                            onChange={(e) => setSelectedPackage(e.target.value)}
                            className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                          >
                            <option value="custom">Bespoke Custom Itinerary</option>
                            {packages.map((pkg) => (
                              <option key={pkg.id} value={pkg.title}>
                                {pkg.title}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Travel Date */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-poppins font-bold text-text-secondary uppercase tracking-wider">Departure Date</label>
                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Personal Details */}
                  <div>
                    <h3 className="font-poppins font-bold text-lg text-text-primary mb-5 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-xs">2</span>
                      Personal Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      {/* Full Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-poppins font-bold text-text-secondary uppercase tracking-wider">Full Name</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      {/* Email Address */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-poppins font-bold text-text-secondary uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone Number */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-poppins font-bold text-text-secondary uppercase tracking-wider">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Enter phone number"
                          className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      {/* Number of Guests */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-poppins font-bold text-text-secondary uppercase tracking-wider">Number of Guests</label>
                        <input
                          type="number"
                          min={1}
                          max={10}
                          required
                          value={guests}
                          onChange={(e) => setGuests(Number(e.target.value))}
                          className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Special Requests */}
                  <div>
                    <h3 className="font-poppins font-bold text-lg text-text-primary mb-5 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">★</span>
                      Special Requests
                    </h3>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-poppins font-bold text-text-secondary uppercase tracking-wider">Notes & Requests (Optional)</label>
                      <textarea
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Dietary requests, room configurations, private flight bookings..."
                        className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 mt-4 bg-gradient-to-r from-primary to-secondary text-white font-poppins font-semibold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Confirming Reservation...</span>
                    ) : (
                      <span>Submit Booking Reservation</span>
                    )}
                  </button>

                </form>
              </div>

              {/* Sidebar Summary Side */}
              <div className="lg:col-span-4 bg-white border border-border rounded-[32px] p-8 shadow-sm flex flex-col gap-8 sticky top-24">
                <h3 className="font-poppins font-bold text-xl text-text-primary">Trip Estimate</h3>

                <div className="flex flex-col gap-5">
                  {/* Selected Item */}
                  <div className="flex gap-3">
                    <FiTag className="text-primary text-xl shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-text-secondary block font-medium">Selected Package</span>
                      <span className="text-text-primary font-poppins font-bold text-sm leading-tight">
                        {packageDetails.title}
                      </span>
                    </div>
                  </div>

                  {/* Departure Date */}
                  <div className="flex gap-3">
                    <FiCalendar className="text-secondary text-xl shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-text-secondary block font-medium">Departure Date</span>
                      <span className="text-text-primary font-poppins font-bold text-sm">
                        {date || 'Not selected yet'}
                      </span>
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="flex gap-3">
                    <FiUsers className="text-accent text-xl shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-text-secondary block font-medium">Traveler Count</span>
                      <span className="text-text-primary font-poppins font-bold text-sm">
                        {guests} Traveler{guests !== 1 && 's'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-border w-full" />

                {/* Calculation */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm text-text-secondary font-medium">
                    <span>Rate per Traveler</span>
                    <span>${packageDetails.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-text-secondary font-medium">
                    <span>Number of Guests</span>
                    <span>x {guests}</span>
                  </div>
                  <div className="flex justify-between items-baseline mt-4 border-t border-dashed border-border pt-4">
                    <span className="text-text-primary font-poppins font-bold text-base">Estimated Total</span>
                    <span className="text-text-primary font-poppins font-extrabold text-2xl">
                      ${totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-section-bg rounded-2xl flex items-start gap-3 border border-border/50">
                  <FiInfo className="text-primary text-lg shrink-0 mt-0.5" />
                  <p className="text-[11px] text-text-secondary leading-relaxed">
                    This is an initial reservation estimate. A private advisor will call you to finalize dates, dietary requirements, and flight connections before charging payment.
                  </p>
                </div>
              </div>

            </motion.div>
          ) : (
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-2xl mx-auto bg-white border border-border rounded-[40px] p-8 md:p-16 text-center shadow-xl flex flex-col items-center gap-6"
            >
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center border border-green-200">
                <FiCheckCircle className="text-green-500 text-4xl" />
              </div>

              <div className="flex items-center gap-2">
                <RiCompassDiscoverFill className="text-3xl text-primary" />
                <span className="font-poppins font-extrabold text-xl text-text-primary">TOUREST</span>
              </div>

              <div>
                <h2 className="text-3xl font-poppins font-bold text-text-primary mb-3">Booking Requested!</h2>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  Your luxury travel reservation request has been received. A dedicated travel advisor has been assigned to your booking.
                </p>
              </div>

              {/* Booking Receipt Summary Card */}
              <div className="w-full bg-section-bg p-6 rounded-3xl border border-border flex flex-col gap-4 text-left my-4">
                <div className="flex justify-between items-center text-xs border-b border-border pb-3">
                  <span className="text-text-secondary font-semibold uppercase tracking-wider">Booking ID</span>
                  <span className="font-poppins font-bold text-primary text-sm">{bookingId}</span>
                </div>
                
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary font-medium">Itinerary:</span>
                    <span className="text-text-primary font-bold text-right">{packageDetails.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary font-medium">Traveler Name:</span>
                    <span className="text-text-primary font-semibold">{name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary font-medium">Departure Date:</span>
                    <span className="text-text-primary font-semibold">{date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary font-medium">Traveler Count:</span>
                    <span className="text-text-primary font-semibold">{guests} Traveler{guests !== 1 && 's'}</span>
                  </div>
                  <div className="flex justify-between border-t border-dashed border-border pt-3 mt-2 items-baseline">
                    <span className="text-text-secondary font-bold">Estimated Cost:</span>
                    <span className="text-text-primary font-poppins font-extrabold text-xl">${totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed max-w-md">
                An email receipt has been sent to <span className="text-text-primary font-semibold">{email}</span>. Our advisor will reach out to you via phone at <span className="text-text-primary font-semibold">{phone}</span> within the next 4 hours to review your preferences.
              </p>

              <button
                onClick={() => setIsBooked(false)}
                className="mt-6 px-8 py-3.5 bg-text-primary hover:bg-primary text-white font-poppins font-semibold text-sm rounded-full transition-colors duration-300"
              >
                Book Another Trip
              </button>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}

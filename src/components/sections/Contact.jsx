import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', msg: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate sending message
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: '', email: '', phone: '', msg: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-24 md:py-32 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-poppins font-bold text-sm tracking-widest uppercase block mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-text-primary leading-tight mb-6">
            We Would Love to Hear From You
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            Ready to design your ultimate itinerary? Contact our private concierges to start planning your luxury custom getaway today.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-section-bg rounded-[32px] p-8 md:p-12 border border-border shadow-sm"
          >
            <h3 className="font-poppins font-bold text-2xl text-text-primary mb-2">Send Us a Message</h3>
            <p className="text-text-secondary text-sm mb-8 leading-relaxed">
              Fill out the form below, and one of our travel advisors will contact you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-poppins font-bold text-text-secondary uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-primary transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-poppins font-bold text-text-secondary uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-primary transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-poppins font-bold text-text-secondary uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone (optional)"
                  className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-primary transition-colors duration-200"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-poppins font-bold text-text-secondary uppercase tracking-wider">Your Message</label>
                <textarea
                  name="msg"
                  required
                  rows={5}
                  value={formData.msg}
                  onChange={handleChange}
                  placeholder="Tell us about your dream vacation plans..."
                  className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-primary transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-poppins font-semibold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 transition-all duration-300 disabled:opacity-50"
              >
                {isSending ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <FiSend />
                  </>
                )}
              </button>

              {/* Success State */}
              <AnimatePresence>
                {isSent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-green-50 text-green-700 font-medium text-sm rounded-xl border border-green-200 text-center"
                  >
                    Message sent successfully! One of our travel experts will contact you soon.
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

          {/* Right: Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Contact Details Cards */}
            <div className="flex flex-col gap-6">
              
              {/* Card 1: Address */}
              <div className="flex items-start gap-4 p-5 bg-section-bg border border-border rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm">
                  <MdLocationOn className="text-primary text-2xl" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-text-primary text-base mb-1">Our Headquarters</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    100 Luxury Avenue, Suite 500, Beverly Hills, CA 90210
                  </p>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className="flex items-start gap-4 p-5 bg-section-bg border border-border rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm">
                  <MdPhone className="text-secondary text-2xl" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-text-primary text-base mb-1">Direct Call</h4>
                  <a href="tel:+13105550199" className="text-text-secondary hover:text-primary transition-colors text-sm leading-relaxed block">
                    +1 (310) 555-0199
                  </a>
                  <a href="tel:+13105550198" className="text-text-secondary hover:text-primary transition-colors text-sm leading-relaxed block">
                    +1 (310) 555-0198 (FAX)
                  </a>
                </div>
              </div>

              {/* Card 3: Email */}
              <div className="flex items-start gap-4 p-5 bg-section-bg border border-border rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm">
                  <MdEmail className="text-accent text-2xl" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-text-primary text-base mb-1">Email Inquiry</h4>
                  <a href="mailto:concierge@tourest.luxury" className="text-text-secondary hover:text-primary transition-colors text-sm leading-relaxed block">
                    concierge@tourest.luxury
                  </a>
                  <a href="mailto:info@tourest.luxury" className="text-text-secondary hover:text-primary transition-colors text-sm leading-relaxed block">
                    info@tourest.luxury
                  </a>
                </div>
              </div>

            </div>

            {/* Google Map Embed */}
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-sm">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2343169372583!2d-118.40291418478466!3d34.0763442805987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc07b8b26117%3A0x1d3a436573c0f498!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1620138945638!5m2!1sen!2sus"
                className="w-full h-full border-none"
                allowFullScreen=""
                loading="lazy"
              />
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

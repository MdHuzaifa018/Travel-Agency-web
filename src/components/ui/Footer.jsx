import { Link } from 'react-router-dom';
import { RiCompassDiscoverFill, RiFacebookFill, RiTwitterFill, RiInstagramFill, RiYoutubeFill, RiLinkedinFill, RiGithubFill, RiWhatsappFill } from 'react-icons/ri';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-section-bg border-t border-border pt-24 pb-12 font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 self-start">
              <RiCompassDiscoverFill className="text-3xl text-primary" />
              <span className="font-poppins font-bold text-2xl tracking-wide text-text-primary">
                TOUREST<span className="text-secondary font-black">.</span>
              </span>
            </Link>
            <p className="text-text-secondary leading-relaxed">
              Crafting bespoke journeys and ultra-luxury travel experiences tailored to your highest expectations. Discover the world in supreme comfort and elegance.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm" aria-label="Facebook">
                <RiFacebookFill size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm" aria-label="Instagram">
                <RiInstagramFill size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm" aria-label="Twitter">
                <RiTwitterFill size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm" aria-label="YouTube">
                <RiYoutubeFill size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm" aria-label="LinkedIn">
                <RiLinkedinFill size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-text-primary text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/" className="text-text-secondary hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-secondary hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-text-secondary hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-text-secondary hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-text-secondary hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block">
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Travel Categories */}
          <div>
            <h4 className="font-poppins font-semibold text-text-primary text-lg mb-6 tracking-wide">Premium Experiences</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/packages" className="text-text-secondary hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block">
                  Luxury Beach Vacations
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-text-secondary hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block">
                  Wilderness Safari Guides
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-text-secondary hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block">
                  Alpine Skiing & Climbing
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-text-secondary hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block">
                  Historical Heritage Tours
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-text-secondary hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block">
                  Private Island Retreats
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-text-primary text-lg mb-6 tracking-wide">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-text-secondary">
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-primary text-xl mt-1 shrink-0" />
                <span>100 Luxury Avenue, Suite 500, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="text-primary text-lg shrink-0" />
                <a href="tel:+13105550199" className="hover:text-primary transition-all duration-250">+1 (310) 555-0199</a>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-primary text-lg shrink-0" />
                <a href="mailto:concierge@tourest.luxury" className="hover:text-primary transition-all duration-250">concierge@tourest.luxury</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Divider */}
        <div className="h-[1px] bg-border w-full mb-8" />

        {/* Footer Bottom Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-text-secondary text-sm">
          <p>© {currentYear} TOUREST Luxury Travel Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Settings</a>
          </div>
        </div>

        {/* Developer Credit Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-text-secondary/60 text-xs font-medium">
          <p className="hover:text-text-secondary text-primary transition-colors duration-200">
            Designed & Developed by{' '}
            <a 
              href="https://api.whatsapp.com/send?phone=918434890116" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-secondary hover:text-primary font-semibold transition-all duration-200"
            >
              Md Huzaif Sheikh
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=918434890116" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary text-text-secondary/70 transition-all duration-200"
              aria-label="WhatsApp Chat"
              title="WhatsApp Chat"
            >
              <RiWhatsappFill size={18} />
            </a>
            <a 
              href="https://github.com/MdHuzaifa018" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary text-text-secondary/70 transition-all duration-200"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <RiGithubFill size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/huzaif-sheikh-6443a6330" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary text-text-secondary/70 transition-all duration-200"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <RiLinkedinFill size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoFooter from "@/assets/logo-footer.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={logoFooter} 
              alt="Keparo Enterprises Ltd" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm opacity-90">
              15+ years of excellence in construction and specialized machine hire services in Zambia.
            </p>
            <p className="text-xs opacity-75">TPIN: 1001591067</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/clients" className="hover:text-accent transition-colors">Clients</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-accent transition-colors">Construction</li>
              <li className="hover:text-accent transition-colors">Steel Fabrication</li>
              <li className="hover:text-accent transition-colors">Machine Hire</li>
              <li className="hover:text-accent transition-colors">Container Conversions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>+260 967 674 611</div>
                  <div>+260 960 923 998</div>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:keparo.enterprises@gmail.com" className="hover:text-accent transition-colors">
                  keparo.enterprises@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  Plot 18 Musenga, Off Kitwe Road<br />
                  Chingola, Zambia
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {currentYear} Keparo Enterprises Ltd. All rights reserved.</p>
          <p className="mt-2">
            Designed by{" "}
            <a 
              href="https://techversesolutions.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline transition-all duration-200"
            >
              Tech Verse Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Clients", path: "/clients" },
    { name: "HSE", path: "/hse" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect for navigation bar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Top Bar with Contact Info - always visible */}
      <div className="block bg-gradient-to-r from-accent via-accent to-accent/90 text-white">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
              <div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <MapPin size={14} />
                <span className="hidden sm:inline">Plot 18 Musenga, Off Kitwe Road, Chingola, Zambia</span>
                <span className="sm:hidden text-xs">Plot 18 Musenga, Chingola</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2 flex-1 sm:flex-initial justify-between sm:justify-start">
                <Phone size={14} className="flex-shrink-0" />
                <div className="flex flex-col sm:flex-row sm:gap-3">
                  <a href="tel:+260967674611" className="hover:opacity-80 transition-opacity text-xs sm:text-sm">
                    +260 967 674 611 <span className="hidden md:inline text-xs opacity-75">(Operations)</span>
                  </a>
                  <a href="tel:+260960923998" className="hover:opacity-80 transition-opacity text-xs sm:text-sm">
                    +260 960 923 998 <span className="hidden md:inline text-xs opacity-75">(Office)</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Mail size={14} />
              <a href="mailto:keparo.enterprises@gmail.com" className="hover:opacity-80 transition-opacity text-xs md:text-sm">
                keparo.enterprises@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-md" 
          : "bg-transparent border-b border-transparent"
      }`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="Keparo Enterprises Ltd" 
                className="h-12 sm:h-14 md:h-16 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "text-white bg-primary shadow-md"
                      : isScrolled
                      ? "text-foreground hover:text-primary hover:bg-primary/5"
                      : "text-white hover:text-white/80 hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Button asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-md hover:shadow-lg transition-all duration-300">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 transition-colors rounded-lg ${
                isScrolled
                  ? "text-foreground hover:text-primary hover:bg-gray-100"
                  : "text-white hover:text-white/80 hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen opacity-100 mt-4 bg-white" : "max-h-0 opacity-0"
          }`}>
            <div className={`flex flex-col space-y-2 pb-4 pt-4 ${
              isScrolled ? "border-t border-gray-100" : "border-t border-gray-100"
            }`}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "text-white bg-primary shadow-md"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 w-full mt-2 shadow-md">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

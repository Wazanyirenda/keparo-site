import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Bar with Contact Info */}
      <div className="bg-accent text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span className="hidden sm:inline">Chingola, Zambia</span>
                <span className="sm:hidden">Chingola</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:+260XXXXXXXXX" className="hover:underline">
                  +260 XXX XXX XXX
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Mail size={14} />
              <a href="mailto:info@keparo.com" className="hover:underline">
                info@keparo.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <div className="font-bold text-xl text-foreground">
                  Keparo Enterprises
                </div>
                <div className="text-xs text-muted-foreground">
                  Construction & Fabrication
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-2 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="bg-primary hover:bg-primary/90 w-full mt-2">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

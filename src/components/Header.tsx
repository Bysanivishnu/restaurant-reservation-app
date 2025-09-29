import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-amber-800' : 'text-white'
          }`}>
            BVV
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'menu', 'gallery', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-colors duration-300 hover:text-amber-500 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className={`hidden lg:flex items-center space-x-4 text-sm ${
            isScrolled ? 'text-gray-600' : 'text-white'
          }`}>
            <div className="flex items-center space-x-1">
              <Phone size={16} />
              <span>9876543215</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={16} />
              <span>Downtown Plaza</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-2">
              {['home', 'about', 'menu', 'gallery', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize font-medium text-gray-800 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
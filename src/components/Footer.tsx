import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">BVV</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Where culinary artistry meets Mediterranean tradition. 
              Creating unforgettable dining experiences since 1999.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="https://x.com/?lang=en" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} />
                <span>9876543215</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} />
                <span>info@bellavista.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin size={18} className="mt-1" />
                <div>
                  <p>123 Downtown Plaza</p>
                  <p>Metropolitan City, MC 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span>5-10 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span>5-11 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>4-9 PM</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-amber-900 bg-opacity-30 rounded-lg">
              <p className="text-amber-300 font-medium text-sm">
                Reservations recommended
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 BVV Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
        }}
      />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Rating Stars */}
        <div className="flex justify-center items-center space-x-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
          ))}
          <span className="ml-3 text-sm font-medium">4.9 (2,847 reviews)</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          BVV
          <span className="block text-3xl md:text-4xl font-light text-amber-300 mt-2">
            Fine Dining Experience
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
          Where culinary artistry meets Mediterranean tradition. 
          Experience exceptional flavors in an atmosphere of refined elegance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('menu')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>View Our Menu</span>
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Make Reservation
          </button>
        </div>

        {/* Hours */}
        <div className="mt-12 text-sm md:text-base">
          <p className="text-amber-200 font-medium">Open Today</p>
          <p>5:00 PM - 11:00 PM</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
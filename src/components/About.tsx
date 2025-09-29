import React from 'react';
import { Award, Users, Clock, Utensils } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Awards Won', value: '15+' },
    { icon: Users, label: 'Happy Customers', value: '50K+' },
    { icon: Clock, label: 'Years Experience', value: '25' },
    { icon: Utensils, label: 'Signature Dishes', value: '40+' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-amber-600 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For over two decades, Bella Vista has been a cornerstone of fine dining, 
                bringing together the rich traditions of Mediterranean cuisine with modern 
                culinary innovation. Founded by Chef Marco Antonelli in 1999, our restaurant 
                has grown from a small family establishment to a celebrated destination.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every dish tells a story of passion, craftsmanship, and dedication to 
                excellence. We source only the finest ingredients, many from our own 
                organic garden, to create unforgettable dining experiences that celebrate 
                the art of cuisine.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                    <stat.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chef preparing food"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant interior"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh ingredients"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Signature dish"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
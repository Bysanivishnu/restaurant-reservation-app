import React, { useState } from 'react';
import { Leaf, Star, X, AlertTriangle } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [showFullMenu, setShowFullMenu] = useState(false);

  const categories = [
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'mains', name: 'Main Courses', icon: '🍽️' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🍷' }
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Truffle Arancini',
        description: 'Crispy risotto balls with black truffle, served with saffron aioli',
        price: '₹18',
        vegetarian: true,
        popular: true
      },
      {
        name: 'Burrata Caprese',
        description: 'Fresh burrata with heirloom tomatoes, basil oil, and aged balsamic',
        price: '₹16',
        vegetarian: true
      },
      {
        name: 'Tuna Tartare',
        description: 'Yellowfin tuna with avocado, citrus, and crispy wonton chips',
        price: '₹22'
      },
      {
        name: 'Charcuterie Board',
        description: 'Selection of artisanal meats, aged cheeses, and housemade preserves',
        price: '₹24'
      }
    ],
    mains: [
      {
        name: 'Osso Buco Milanese',
        description: 'Braised veal shank with saffron risotto and gremolata',
        price: '₹42',
        popular: true
      },
      {
        name: 'Branzino al Sale',
        description: 'Mediterranean sea bass baked in sea salt crust with herbs',
        price: '₹38'
      },
      {
        name: 'Ribeye Fiorentina',
        description: '32oz dry-aged ribeye with roasted bone marrow and vegetables',
        price: '₹68'
      },
      {
        name: 'Wild Mushroom Risotto',
        description: 'Creamy arborio rice with porcini, truffle oil, and parmesan',
        price: '₹28',
        vegetarian: true
      }
    ],
    desserts: [
      {
        name: 'Tiramisu Deconstructed',
        description: 'Coffee-soaked ladyfingers, mascarpone mousse, and cocoa soil',
        price: '₹14',
        popular: true
      },
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center and vanilla gelato',
        price: '₹12'
      },
      {
        name: 'Panna Cotta',
        description: 'Vanilla bean panna cotta with seasonal berry compote',
        price: '₹11',
        vegetarian: true
      },
      {
        name: 'Cannoli Siciliani',
        description: 'Traditional Sicilian cannoli with ricotta and pistachio',
        price: '₹13',
        vegetarian: true
      }
    ],
    beverages: [
      {
        name: 'BVV Negroni',
        description: 'House gin, Campari, sweet vermouth with orange twist',
        price: '₹16'
      },
      {
        name: 'Wine Pairing Menu',
        description: 'Curated wine selections to complement your meal',
        price: '₹45'
      },
      {
        name: 'Espresso Martini',
        description: 'Premium vodka, fresh espresso, and coffee liqueur',
        price: '₹15'
      },
      {
        name: 'San Pellegrino',
        description: 'Sparkling mineral water with fresh lemon',
        price: '₹8',
        vegetarian: true
      }
    ]
  };

  const fullMenuItems = {
    appetizers: [
      {
        name: 'Truffle Arancini',
        description: 'Crispy risotto balls with black truffle, served with saffron aioli',
        price: '₹18',
        vegetarian: true,
        popular: true,
        ingredients: 'Arborio rice, black truffle, saffron, eggs, breadcrumbs, parmesan',
        allergens: ['Gluten', 'Eggs', 'Dairy'],
        calories: 320
      },
      {
        name: 'Burrata Caprese',
        description: 'Fresh burrata with heirloom tomatoes, basil oil, and aged balsamic',
        price: '₹16',
        vegetarian: true,
        ingredients: 'Burrata cheese, heirloom tomatoes, fresh basil, extra virgin olive oil, aged balsamic',
        allergens: ['Dairy'],
        calories: 280
      },
      {
        name: 'Tuna Tartare',
        description: 'Yellowfin tuna with avocado, citrus, and crispy wonton chips',
        price: '₹22',
        ingredients: 'Yellowfin tuna, avocado, lime, orange, wonton wrappers, sesame oil',
        allergens: ['Fish', 'Gluten', 'Sesame'],
        calories: 240
      },
      {
        name: 'Charcuterie Board',
        description: 'Selection of artisanal meats, aged cheeses, and housemade preserves',
        price: '₹24',
        ingredients: 'Prosciutto, salami, aged cheddar, brie, fig jam, olives, crackers',
        allergens: ['Dairy', 'Gluten'],
        calories: 450
      },
      {
        name: 'Oysters Rockefeller',
        description: 'Fresh oysters with spinach, herbs, and parmesan gratinée',
        price: '₹26',
        ingredients: 'Fresh oysters, spinach, shallots, herbs, parmesan, butter',
        allergens: ['Shellfish', 'Dairy'],
        calories: 180
      },
      {
        name: 'Foie Gras Terrine',
        description: 'House-made foie gras with brioche toast and cherry compote',
        price: '₹32',
        ingredients: 'Foie gras, brioche, cherries, port wine, butter',
        allergens: ['Gluten', 'Eggs', 'Dairy'],
        calories: 420
      }
    ],
    mains: [
      {
        name: 'Osso Buco Milanese',
        description: 'Braised veal shank with saffron risotto and gremolata',
        price: '₹42',
        popular: true,
        ingredients: 'Veal shank, arborio rice, saffron, lemon zest, parsley, garlic',
        allergens: ['Dairy'],
        calories: 680
      },
      {
        name: 'Branzino al Sale',
        description: 'Mediterranean sea bass baked in sea salt crust with herbs',
        price: '₹38',
        ingredients: 'Whole sea bass, sea salt, herbs, lemon, olive oil',
        allergens: ['Fish'],
        calories: 420
      },
      {
        name: 'Ribeye Fiorentina',
        description: '32oz dry-aged ribeye with roasted bone marrow and vegetables',
        price: '₹68',
        ingredients: 'Dry-aged ribeye, bone marrow, seasonal vegetables, rosemary',
        allergens: [],
        calories: 920
      },
      {
        name: 'Wild Mushroom Risotto',
        description: 'Creamy arborio rice with porcini, truffle oil, and parmesan',
        price: '₹28',
        vegetarian: true,
        ingredients: 'Arborio rice, porcini mushrooms, truffle oil, parmesan, white wine',
        allergens: ['Dairy'],
        calories: 520
      },
      {
        name: 'Lobster Thermidor',
        description: 'Maine lobster with cognac cream sauce and gruyère gratinée',
        price: '₹54',
        ingredients: 'Maine lobster, cognac, cream, gruyère cheese, mustard',
        allergens: ['Shellfish', 'Dairy'],
        calories: 580
      },
      {
        name: 'Duck Confit',
        description: 'Slow-cooked duck leg with cherry gastrique and potato gratin',
        price: '₹36',
        ingredients: 'Duck leg, cherries, potatoes, cream, thyme',
        allergens: ['Dairy'],
        calories: 640
      }
    ],
    desserts: [
      {
        name: 'Tiramisu Deconstructed',
        description: 'Coffee-soaked ladyfingers, mascarpone mousse, and cocoa soil',
        price: '₹14',
        popular: true,
        vegetarian: true,
        ingredients: 'Ladyfingers, mascarpone, espresso, cocoa, marsala wine',
        allergens: ['Gluten', 'Eggs', 'Dairy'],
        calories: 380
      },
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center and vanilla gelato',
        price: '₹12',
        vegetarian: true,
        ingredients: 'Dark chocolate, butter, eggs, flour, vanilla gelato',
        allergens: ['Gluten', 'Eggs', 'Dairy'],
        calories: 450
      },
      {
        name: 'Panna Cotta',
        description: 'Vanilla bean panna cotta with seasonal berry compote',
        price: '₹11',
        vegetarian: true,
        ingredients: 'Cream, vanilla beans, gelatin, seasonal berries, sugar',
        allergens: ['Dairy'],
        calories: 320
      },
      {
        name: 'Cannoli Siciliani',
        description: 'Traditional Sicilian cannoli with ricotta and pistachio',
        price: '₹13',
        vegetarian: true,
        ingredients: 'Cannoli shells, ricotta, pistachios, powdered sugar',
        allergens: ['Gluten', 'Dairy', 'Nuts'],
        calories: 290
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard with caramelized sugar crust',
        price: '₹13',
        vegetarian: true,
        ingredients: 'Cream, egg yolks, vanilla, sugar',
        allergens: ['Eggs', 'Dairy'],
        calories: 340
      },
      {
        name: 'Gelato Trio',
        description: 'Three scoops of artisanal gelato: pistachio, stracciatella, and limoncello',
        price: '₹15',
        vegetarian: true,
        ingredients: 'Milk, cream, pistachios, chocolate chips, limoncello',
        allergens: ['Dairy', 'Nuts'],
        calories: 280
      }
    ],
    beverages: [
      {
        name: 'BVV Negroni',
        description: 'House gin, Campari, sweet vermouth with orange twist',
        price: '₹16',
        ingredients: 'Gin, Campari, sweet vermouth, orange peel',
        allergens: [],
        calories: 180
      },
      {
        name: 'Wine Pairing Menu',
        description: 'Curated wine selections to complement your meal',
        price: '₹45',
        ingredients: 'Various premium wines selected by our sommelier',
        allergens: ['Sulfites'],
        calories: 600
      },
      {
        name: 'Espresso Martini',
        description: 'Premium vodka, fresh espresso, and coffee liqueur',
        price: '₹15',
        ingredients: 'Vodka, espresso, coffee liqueur, simple syrup',
        allergens: [],
        calories: 220
      },
      {
        name: 'San Pellegrino',
        description: 'Sparkling mineral water with fresh lemon',
        price: '₹8',
        vegetarian: true,
        ingredients: 'Sparkling mineral water, fresh lemon',
        allergens: [],
        calories: 0
      },
      {
        name: 'Limoncello',
        description: 'Traditional Italian lemon liqueur, house-made',
        price: '₹12',
        vegetarian: true,
        ingredients: 'Lemon zest, grain alcohol, sugar, water',
        allergens: [],
        calories: 160
      },
      {
        name: 'Italian Coffee Selection',
        description: 'Espresso, cappuccino, or macchiato with biscotti',
        price: '₹9',
        vegetarian: true,
        ingredients: 'Italian coffee beans, milk, sugar, almond biscotti',
        allergens: ['Dairy', 'Gluten', 'Nuts'],
        calories: 120
      }
    ]
  };

  const allergenColors = {
    'Gluten': 'bg-red-100 text-red-800',
    'Dairy': 'bg-blue-100 text-blue-800',
    'Eggs': 'bg-yellow-100 text-yellow-800',
    'Fish': 'bg-cyan-100 text-cyan-800',
    'Shellfish': 'bg-purple-100 text-purple-800',
    'Nuts': 'bg-orange-100 text-orange-800',
    'Sesame': 'bg-green-100 text-green-800',
    'Sulfites': 'bg-pink-100 text-pink-800'
  };

  return (
    <>
      <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes, made with the finest ingredients 
            and inspired by traditional Mediterranean flavors.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 m-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  {item.vegetarian && <Leaf className="w-4 h-4 text-green-600" />}
                  {item.popular && <Star className="w-4 h-4 fill-current text-yellow-500" />}
                </div>
                <span className="text-xl font-bold text-amber-600">{item.price}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            All dishes can be customized to accommodate dietary restrictions and preferences.
          </p>
          <button 
            onClick={() => setShowFullMenu(true)}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            View Full Menu & Allergen Info
          </button>
        </div>
      </div>
      </section>

      {/* Full Menu Modal */}
      {showFullMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Complete Menu</h2>
                <p className="text-gray-600 mt-1">Detailed ingredients and allergen information</p>
              </div>
              <button
                onClick={() => setShowFullMenu(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X size={32} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Allergen Legend */}
              <div className="mb-8 p-4 bg-amber-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <h3 className="font-semibold text-gray-800">Allergen Information</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(allergenColors).map(([allergen, colorClass]) => (
                    <span key={allergen} className={`px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}>
                      {allergen}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Please inform your server of any allergies or dietary restrictions.
                </p>
              </div>

              {/* Full Menu Categories */}
              {Object.entries(fullMenuItems).map(([categoryKey, items]) => {
                const category = categories.find(cat => cat.id === categoryKey);
                return (
                  <div key={categoryKey} className="mb-12">
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="text-2xl">{category?.icon}</span>
                      <h3 className="text-2xl font-bold text-gray-800">{category?.name}</h3>
                    </div>
                    
                    <div className="grid gap-6">
                      {items.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center space-x-2">
                              <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
                              {item.vegetarian && <Leaf className="w-4 h-4 text-green-600" />}
                              {item.popular && <Star className="w-4 h-4 fill-current text-yellow-500" />}
                            </div>
                            <div className="text-right">
                              <span className="text-xl font-bold text-amber-600">{item.price}</span>
                              <div className="text-sm text-gray-500">{item.calories} cal</div>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{item.description}</p>
                          
                          <div className="space-y-3">
                            <div>
                              <span className="text-sm font-medium text-gray-700">Ingredients: </span>
                              <span className="text-sm text-gray-600">{item.ingredients}</span>
                            </div>
                            
                            {item.allergens && item.allergens.length > 0 && (
                              <div>
                                <span className="text-sm font-medium text-gray-700">Contains: </span>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {item.allergens.map((allergen) => (
                                    <span 
                                      key={allergen} 
                                      className={`px-2 py-1 rounded-full text-xs font-medium ${allergenColors[allergen as keyof typeof allergenColors]}`}
                                    >
                                      {allergen}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Additional Information */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Information</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Dietary Options</h4>
                    <ul className="space-y-1">
                      <li>• Gluten-free alternatives available</li>
                      <li>• Vegan modifications possible</li>
                      <li>• Low-sodium preparations available</li>
                      <li>• Keto-friendly options available</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Kitchen Notes</h4>
                    <ul className="space-y-1">
                      <li>• All dishes prepared fresh to order</li>
                      <li>• Cooking times may vary (15-25 minutes)</li>
                      <li>• Seasonal ingredients may vary</li>
                      <li>• Prices subject to change</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  For special dietary requirements, please speak with our chef.
                </p>
                <button
                  onClick={() => setShowFullMenu(false)}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
                >
                  Close Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
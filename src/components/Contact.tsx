import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const GOOGLE_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxOfmE_f9kyg0tDwJTYOjG0wz3ZUQRU_oqsQq0QAebtSJ518SmFCvNCf4WIebxyTEajwA/exec";
  const SECRET = "replace_this_with_a_random_secret_string";

  const payload = { ...formData, secret: SECRET };

  try {
    // Primary attempt
    const response = await fetch(GOOGLE_WEBAPP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.status === "success") {
      alert("Thank you! Your reservation has been saved.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        message: ""
      });
    } else {
      alert("Error: " + (result.message || "Unknown error"));
    }
  } catch (err) {
    console.error("Submit error:", err);

    // Fallback for CORS
    try {
      await fetch(GOOGLE_WEBAPP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      alert("Submitted — check the Google Sheet to confirm.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        message: ""
      });
    } catch (innerErr) {
      console.error("Fallback submit failed:", innerErr);
      alert("Failed to submit. Please try again later.");
    }
  }
};


  const submitReservation = async () => {
    try {
      // Replace with your actual Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxOfmE_f9kyg0tDwJTYOjG0wz3ZUQRU_oqsQq0QAebtSJ518SmFCvNCf4WIebxyTEajwA/exec";
      const SECRET = "replace_this_with_a_random_secret_string";
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        alert("Thank you! Your reservation request has been submitted successfully. We'll contact you within 24 hours to confirm your reservation.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          message: ''
        });
      } else {
        alert("Something went wrong. Please try again or call us directly at 9876543215.");
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("Error submitting reservation. Please try again or call us directly at 9876543215.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to host you for an unforgettable dining experience. 
            Make a reservation or contact us with any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Location */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Location</h3>
              </div>
              <p className="text-gray-600 mb-2">123 Downtown Plaza</p>
              <p className="text-gray-600 mb-2">Metropolitan City, MC 12345</p>
              <p className="text-gray-600">Valet parking available</p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              </div>
              <p className="text-gray-600 mb-2">Reservations: 9876543215</p>
              <p className="text-gray-600">Events: 9876543216</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              </div>
              <p className="text-gray-600 mb-2">info@bvv.com</p>
              <p className="text-gray-600">events@bvv.com</p>
              <p className="text-gray-600 mb-2">info@bvv.com</p>
              <p className="text-gray-600">events@bvv.com</p>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>5:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span>5:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>4:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Make a Reservation</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="9876543210"
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    >
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select time</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="5:30 PM">5:30 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="9:30 PM">9:30 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Dietary restrictions, celebrations, special seating requests..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <Send size={20} />
                  <span>Send Reservation Request</span>
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Required fields. We'll contact you within 24 hours to confirm your reservation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
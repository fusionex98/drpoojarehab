'use client';

import React, { useState } from 'react';

export default function Contact({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, phone: formData.phone, message: formData.message }),
      });

      if (res.ok) {
        setShowToast(true);
        setFormData({ name: '', phone: '', message: '' });
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex bg-black/40 backdrop-blur-sm transition-opacity duration-700 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      {/* Main Sliding Panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full h-full bg-[#d8ece7] shadow-2xl overflow-y-auto transform transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] flex flex-col md:flex-row ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 relative order-1 md:order-2">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-6 text-[#115e59] text-2xl font-bold hover:text-[#0d4c47] transition"
          >
            ✕
          </button>

          {/* Form */}
          <h2 className="text-3xl font-bold text-[#115e59] mb-6 mt-10 md:mt-4">Contact Us</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            We're here to help! Please reach out with any questions, feedback, or inquiries. Fill out the form below and our team will get back to you soon.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg border-2 border-[#115e59] bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c47]"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg border-2 border-[#115e59] bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c47]"
              />
            </div>

            {/* Enquiry */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">Enquiry</label>
              <textarea
                name="message"
                placeholder="Write your enquiry here..."
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg border-2 border-[#115e59] bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c47]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#115e59] text-white px-6 py-3 rounded-lg hover:bg-[#0d4c47] transition w-full disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Toast Notification */}
          {showToast && (
            <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out">
              ✓ Message sent successfully!
            </div>
          )}
        </div>

        {/* Map Section */}
        <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1">
          {/* Google Map */}
          <iframe
            src="https://www.google.com/maps?q=Saraswati%20bungalow%2091/95%20Dr%20Babasaheb%20Ambedkar%20Rd%20Borivali%20West%20Mumbai%20400091&output=embed"
            className="w-full h-[250px] sm:h-[300px] md:h-[70%] border-none"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          {/* Address Section */}
          <div className="bg-[#115e59] text-white p-6 md:h-[30%] flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-2">Our Location</h3>
            <p className="text-base leading-relaxed">
              Saraswati bungalow, 91/95, Dr Babasaheb Ambedkar Rd, above
              Gandharva Banquet, next to Shinde shoes, Gorai 1, Borivali West,
              Mumbai, Maharashtra 400091
            </p>
            <p className="mt-2 font-semibold">Phone:</p>
            <p>+91 98700 82657</p>
          </div>
        </div>
      </div>
    </div>
  );
}

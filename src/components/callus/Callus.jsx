import React, { useState,useRef,useEffect } from 'react';
import '../../App.css';
import callusImage from '../../assets/callus.jpg';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

function Callus() {
  const [showButtons, setShowButtons] = useState(false);
  const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);
  
    useEffect(() => {
      const node = sectionRef.current;
      const observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold: 0.3 }
      );
  
      if (node) {
        observer.observe(node);
      }
  
      return () => {
        if (node) {
          observer.unobserve(node);
        }
      };
    }, []);

  // Replace these with your actual contact info
  const phoneNumber = 'tel:8260126077';
  const whatsappURL = 'https://wa.me/918260126077';

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center justify-center"
      style={{ backgroundImage: `url(${callusImage})` }}
    >
      {/* Overlay with low opacity and strong inset shadow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(0,0,0,0.45)',
          boxShadow: 'inset 0 0 80px 40px rgba(0,0,0,0.85)',
          zIndex: 1,
        }}
      ></div>
      <div
        ref={sectionRef}
        className={`absolute inset-0 flex flex-col items-center justify-center px-4 text-center ${inView ? 'animate-fade-up' : 'opacity-0'}`}
        style={{ zIndex: 2 }}
      >
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-8xl font-extrabold mb-4 mainfont drop-shadow-lg">
          Ready to <span className="text-red-600">Begin</span>?
        </h2>

        {/* Subheading */}
        <p className="text-red-300 text-xl md:text-2xl mb-6 subfont font-medium">
          Call us today and take the first step!
        </p>

        {/* CTA */}
        <button
          onClick={() => setShowButtons(!showButtons)}
          className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold subfont shadow-md hover:bg-red-700 transition-all duration-300"
        >
          Call Us
        </button>

        {/* Reveal buttons */}
        {showButtons && (
          <div className="flex gap-6 mt-6 animate-fadeInUp">
            {/* WhatsApp Button */}
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-full font-medium shadow-lg hover:bg-green-700 transition duration-300"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp
            </a>

            {/* Phone Call Button */}
            <a
              href={phoneNumber}
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full font-medium shadow-lg hover:bg-red-700 transition duration-300"
            >
              <FaPhoneAlt className="text-xl" />
              Call Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Callus;

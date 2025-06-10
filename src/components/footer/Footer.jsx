import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // Replace with your actual logo path

function Footer() {
  return (
    <footer className="bg-black text-white pt-12 px-6 md:px-16 pb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

        {/* Left Section - Logo and About */}
        <div>
          <img src={logo} alt="Shape Up Logo" className="w-32 mb-4" />
          <p className="text-gray-400 subfont">
            Shape Up Fitness is your go-to destination for a healthier lifestyle.
            With elite trainers, modern gear, and a community-driven vibe — we’re here
            to sculpt the strongest version of you!
          </p>
        </div>

        {/* Middle Section - Links & Socials */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-2">About Us</h3>
            <ul className="text-gray-300 space-y-1 subfont">
              <li><a href="#about" className="hover:text-white transition">Who we are</a></li>
              <li><a href="#programs" className="hover:text-white transition">Our Programs</a></li>
              <li><a href="#trainers" className="hover:text-white transition">Trainers</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-2">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600 transition">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600 transition">
                <FaFacebookF />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600 transition">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Location & Contact */}
        <div>
          <h3 className="text-xl font-semibold text-red-600 mb-4">Location</h3>
          <p className="text-gray-400 flex items-center gap-2 mb-2">
            <FaMapMarkerAlt className="text-red-500" /> SHAPE UP FITNESS ZONE, Bhubaneswar
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.303769830139!2d85.86663899999999!3d20.2876898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190b109d1c4279%3A0x182aea9073dc051a!2sSHAPE%20UP%20FITNESS%20ZONE!5e0!3m2!1sen!2sin!4v1749452955438!5m2!1sen!2sin"
            width="100%"
            height="200"
            className="rounded-lg border-2 border-red-600"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shape Up Location"
          ></iframe>

          <div className="mt-4 space-y-2 text-gray-400">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-500" /> +91 99999 99999
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-red-500" /> info@shapeupfit.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-red-700 pt-4 text-center text-sm text-gray-400">
        Copyrights © 2025 <span className="text-white font-semibold">Shape Up Fitness</span>.
        All Rights Reserved | Developed By{' '}
        <a
          href="https://sourceserviceandsolution.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline font-semibold"
        >
          Source Service and Solution
        </a>
      </div>
    </footer>
  );
}

export default Footer;

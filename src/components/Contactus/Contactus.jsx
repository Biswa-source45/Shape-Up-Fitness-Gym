import React from 'react';
import '../../App.css';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import ContactButtons from '../contactButtons/ContactButton.jsx';
import Callus from '../callus/Callus.jsx';
import contactBg from '../../assets/aboutpage.jpg';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

function Contactus() {
  return (
    <div className="bg-black text-white">
      <Header />

      {/* Banner */}
      <section
        className="relative w-full h-[70vh] bg-center flex flex-col items-center justify-center text-center fade-up-once px-4"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20" />
        <h1 className="relative z-10 text-4xl sm:text-6xl lg:text-7xl font-bold subfont text-white drop-shadow-lg">
          GET IN <span className="text-red-600 mainfont">TOUCH</span>
        </h1>
        <p className="relative z-10 text-base sm:text-lg md:text-xl text-red-400 mt-4 max-w-2xl">
          Your fitness journey starts with a conversation — let's connect!
        </p>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-12 fade-up-once">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black p-8 rounded-xl neon-glow">
            <h2 className="text-3xl font-bold text-red-500 mainfont mb-6">Contact Information</h2>
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-center gap-4">
                <FaPhone className="text-red-500 text-xl" />
                +91 9876543210
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-red-500 text-xl" />
                shapeupfitness@gym.com
              </li>
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-red-500 text-xl" />
                Near XYZ Park, Bhubaneswar, Odisha 751001
              </li>
            </ul>
            <div className="flex gap-6 mt-8 text-red-500">
              <FaInstagram className="hover:scale-125 transition-transform duration-300 cursor-pointer text-2xl" />
              <FaFacebook className="hover:scale-125 transition-transform duration-300 cursor-pointer text-2xl" />
              <FaWhatsapp className="hover:scale-125 transition-transform duration-300 cursor-pointer text-2xl" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold text-red-500 mainfont mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-zinc-800 text-white border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-zinc-800 text-white border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-zinc-800 text-white border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Callus />
      <Footer />
      <ContactButtons />
    </div>
  );
}

export default Contactus;

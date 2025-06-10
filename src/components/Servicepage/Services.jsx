import React from 'react';
import '../../App.css';
import Header from '../header/Header.jsx';
import serviceImage from '../../assets/service-banner.jpg';
import serviceIcon from '../../assets/logo.png';
import Callus from '../callus/Callus.jsx';
import Footer from '../footer/Footer.jsx';
import ContactButtons from '../contactButtons/ContactButton.jsx';

function Services() {
  const serviceData = [
    {
      title: 'Personal Training',
      desc: 'One-on-one sessions with certified trainers focused on your goals and pace.',
      img: serviceIcon,
    },
    {
      title: 'Strength Training',
      desc: 'State-of-the-art strength equipment for building muscle and power.',
      img: serviceIcon,
    },
    {
      title: 'Cardio Zone',
      desc: 'A dedicated section with treadmills, cycles, rowers and more for your endurance.',
      img: serviceIcon,
    },
    {
      title: 'Group Classes',
      desc: 'From Zumba and yoga to spinning and circuit — sweat together and grow stronger.',
      img: serviceIcon,
    },
    {
      title: 'Recovery & Spa',
      desc: 'On-site massage, steam, and recovery therapy to keep you energized and injury-free.',
      img: serviceIcon,
    },
    {
      title: 'Nutrition Guidance',
      desc: 'Custom diet plans and food consultation available with our certified nutritionists.',
      img: serviceIcon,
    },
  ];

  return (
    <div className="bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative w-full h-[70vh] bg-center flex flex-col items-center justify-center text-center fade-up-once px-4"
        style={{ backgroundImage: `url(${serviceImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      >
        <div className="absolute inset-0 bg-opacity-60" />
        <h1 className="relative z-10 text-4xl sm:text-6xl lg:text-8xl font-bold subfont text-white drop-shadow-lg">
          OUR <span className="text-red-600 mainfont font-extrabold">SERVICES</span>
        </h1>
        <p className="relative z-10 text-base sm:text-lg md:text-xl text-red-500 mt-4 max-w-2xl">
          Explore the ultimate fitness experience with modern equipment, guided programs, and holistic care.
        </p>
      </section>

      {/* Service Grid Section */}
      <section className="py-20 px-4 sm:px-12 fade-up-once">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {serviceData.map((service, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black p-6 rounded-xl shadow-xl neon-glow hover:scale-105 transition-transform duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4 border border-zinc-700"
              />
              <h3 className="text-xl font-bold text-red-500 mb-2 mainfont">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Callus />
      <Footer />
      <ContactButtons />
    </div>
  );
}

export default Services;

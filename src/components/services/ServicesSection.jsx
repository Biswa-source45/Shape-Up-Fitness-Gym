import React from 'react';
import { motion as Motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Cardiogym from '../../assets/cardiogym.jpg';
import Yogagym from '../../assets/yogagym.jpg';
import Zumbagym from '../../assets/zumbagym.jpg';
import Aerobicgym from '../../assets/aerobicgym.jpg';
import Weightlossgym from '../../assets/weightlossgym.jpg';
import Weightliftgym from '../../assets/weightliftgym.jpg';

const services = [
  {
    name: 'Cardio',
    img: Cardiogym,
    desc: 'Boost your heart health and burn calories with our intensive cardio sessions.',
  },
  {
    name: 'Yoga',
    img: Yogagym,
    desc: 'Find your balance and flexibility with our calming yoga classes.',
  },
  {
    name: 'Zumba',
    img: Zumbagym,
    desc: 'Dance your way to fitness with energetic Zumba sessions.',
  },
  {
    name: 'Aerobics',
    img: Aerobicgym,
    desc: 'Fun, rhythmic workouts to improve endurance and coordination.',
  },
  {
    name: 'Fat Loss',
    img: Weightlossgym,
    desc: 'Targeted programs to help you shed unwanted fat efficiently.',
  },
  {
    name: 'Weight Training',
    img: Weightliftgym,
    desc: 'Build strength and muscle with expert-guided weight training.',
  },
];

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-black py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <Motion.h2
          className="text-3xl md:text-5xl font-extrabold mainfont uppercase text-white mb-10 text-center"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </Motion.h2>

        {/* Services Cards */}
        <div className="flex overflow-x-auto scroll-smooth space-x-6 pb-6 custom-scrollbar">
          {services.map((service, index) => (
            <Motion.div
              key={service.name}
              className="relative min-w-[260px] h-[400px] rounded-2xl overflow-hidden shadow-lg group flex-shrink-0 bg-black border-2 border-gray-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-full object-cover"
              />

              {/* Hover Overlay */}
              <Motion.div
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex flex-col justify-center items-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <Motion.p
                  className="text-white text-lg font-semibold subfont px-4 text-center py-39"
                  initial={{ y: 30, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {service.desc}
                </Motion.p>
              </Motion.div>

              {/* Service Name */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-3 text-center">
                <span className="text-red-500 text-xl font-bold subfont uppercase tracking-wide">
                  {service.name}
                </span>
              </div>
            </Motion.div>
          ))}

          {/* Show More Button */}
          <Motion.button
            className="min-w-[180px] h-[400px] rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 flex flex-col items-center justify-center text-white font-bold text-xl subfont uppercase shadow-lg hover:from-red-700 hover:to-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/services')}
          >
            Show More
            <span className="mt-2 text-3xl">→</span>
          </Motion.button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

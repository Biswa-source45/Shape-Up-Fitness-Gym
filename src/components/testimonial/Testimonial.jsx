import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../../App.css';

const testimonials = [
  {
    name: 'Rahul Sen',
    feedback: 'Shape Up changed my life. The trainers are amazing and I have seen real transformation in just a few months. Highly recommended!',
    rating: 5,
    date: 'May 12, 2025',
  },
  {
    name: 'Ankita Mishra',
    feedback: 'Fantastic experience, great equipment, supportive staff, and an environment that constantly motivates you to do better!',
    rating: 4,
    date: 'May 15, 2025',
  },
  {
    name: 'Priya Reddy',
    feedback: 'A well-maintained gym with a motivational environment and helpful trainers that care about your progress.',
    rating: 4.5,
    date: 'May 18, 2025',
  },
  {
    name: 'Sameer Khan',
    feedback: 'Awesome place for serious training and real results. Shape Up never disappoints!',
    rating: 5,
    date: 'May 19, 2025',
  },
  {
    name: 'Deepa Verma',
    feedback: 'The bootcamp classes are high-energy and fun, with a perfect mix of cardio and strength training.',
    rating: 4,
    date: 'May 20, 2025',
  },
  {
    name: 'Ajay Rao',
    feedback: 'Trainers are very supportive and professional. The transformation plans are very structured.',
    rating: 4.5,
    date: 'May 21, 2025',
  },
  {
    name: 'Sneha Nanda',
    feedback: 'Perfect vibe, perfect community, and the perfect place to be your best self.',
    rating: 5,
    date: 'May 22, 2025',
  },
];

function Testimonial() {
  const [selected, setSelected] = useState(null);

return (
    <section className="w-full bg-black py-2">
        <h2 className="text-4xl md:text-5xl font-bold text-center mainfont text-white mb-10">
            Our Happy Clients' <span className="text-red-600">Feedback</span>
        </h2>

        {/* Marquee Container */}
        <div className="overflow-hidden relative  p-4">
            <div className="flex animate-marquee w-max space-x-6">
                {[...testimonials, ...testimonials].map((t, idx) => (
                    <div
                        key={idx}
                        className="w-[320px] min-h-[150px] bg-gradient-to-br from-[#111] to-[#330000] border-2 border-red-400 shadow-red-300 text-white rounded-xl px-5 py-7 shadow-lg cursor-pointer hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
                        style={{
                            boxShadow:
                                '0 2px 24px 0 rgba(255, 0, 0, 0.25), 0 0px 8px 2px rgba(255,0,0,0.18)',
                        }}
                        onClick={() => setSelected(t)}
                    >
                        <h4 className="text-lg font-semibold text-red-500 mb-2">{t.name}</h4>
                        <p className="text-sm text-gray-300 mb-3 subfont break-words whitespace-pre-line">
                            "{t.feedback}"
                        </p>
                        <div className="flex items-center space-x-1 mb-2">
                            {[...Array(Math.floor(t.rating))].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400" />
                            ))}
                            {t.rating % 1 !== 0 && (
                                <FaStar className="text-yellow-400 opacity-70" />
                            )}
                        </div>
                        <p className="text-xs text-gray-400">{t.date}</p>
                    </div>
                ))}
            </div>
        </div>
        {selected && (
            <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
                <div
                    className="bg-gradient-to-br from-[#1a1a1a] to-[#330000] text-white rounded-xl p-6 w-[90%] max-w-md relative animate-scaleIn border border-red-600"
                    style={{
                        boxShadow:
                            '0 4px 32px 0 rgba(255, 0, 0, 0.22), 0 0px 12px 2px rgba(255,0,0,0.15)',
                    }}
                >
                    <button
                        className="absolute top-2 right-3 text-red-500 text-xl hover:text-white"
                        onClick={() => setSelected(null)}
                    >
                        &times;
                    </button>
                    <h4 className="text-xl text-red-500 font-bold mb-2">{selected.name}</h4>
                    <p className="text-lg mb-4 subfont text-gray-300">"{selected.feedback}"</p>
                    <div className="flex mb-2">
                        {[...Array(Math.floor(selected.rating))].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400" />
                        ))}
                        {selected.rating % 1 !== 0 && (
                            <FaStar className="text-yellow-400 opacity-70" />
                        )}
                    </div>
                    <p className="text-sm text-gray-400">{selected.date}</p>
                </div>
            </div>
        )}
    </section>
);
}

export default Testimonial;

import React, { useState } from 'react';
import '../../App.css';
import plan1 from '../../assets/plan1.jpg';
import plan2 from '../../assets/plan2.jpg';
import plan3 from '../../assets/plan3.jpg';
import plan4 from '../../assets/plan4.jpg';
import weightliftgym from '../../assets/weightliftgym.jpg';
import cardiogym from '../../assets/trainer5.jpg';
import useInView from '../../hooks/useInView';

const galleryImages = [
  plan1,
  plan2,
  plan3,
  plan4,
  weightliftgym,
  cardiogym,
];

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [ref, inView] = useInView();

  const closeModal = () => setSelectedImg(null);

  return (
    <section ref={ref} className="bg-black py-16 px-6">
      <h2 className={`text-4xl md:text-5xl text-white text-center font-extrabold mainfont uppercase mb-12 transition-all duration-700 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        Gallery
      </h2>

      <div className="max-w-7xl mx-auto grid gap-4 grid-cols-2 md:grid-cols-3">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-xl cursor-pointer transform transition-transform duration-300 hover:scale-[1.03] ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 120}ms`, animationFillMode: 'both' }}
            onClick={() => setSelectedImg(src)}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover max-h-72 transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal View */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-red-500 transition duration-300 z-50"
          >
            ×
          </button>

          <img
            src={selectedImg}
            alt="Selected"
            className="max-w-full max-h-[90vh] rounded-xl border-4 border-red-500 shadow-2xl animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;

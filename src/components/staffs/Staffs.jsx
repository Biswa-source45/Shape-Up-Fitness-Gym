import React from 'react';
import trainer1 from '../../assets/trainer1.jpg';
import trainer2 from '../../assets/trainer2.jpg';
import trainer3 from '../../assets/trainer3.jpg';
import trainer5 from '../../assets/trainer5.jpg';
import useInView from '../../hooks/useInView';
import '../../App.css'; // Ensure animations are loaded

const staffMembers = [
  {
    name: 'Rahul Verma',
    role: 'Senior Trainer',
    experience: '10+ years of fitness coaching',
    img: trainer1,
  },
  {
    name: 'Anjali Singh',
    role: 'Yoga Expert',
    experience: '8 years in yoga and wellness',
    img: trainer3,
  },
  {
    name: 'Amit Raj',
    role: 'Zumba Instructor',
    experience: 'Certified with 6 years experience',
    img: trainer2,
  },
  {
    name: 'Karan Mehta',
    role: 'Strength Coach',
    experience: '7 years in bodybuilding',
    img: trainer5,
  },
];

function Staffs() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="bg-black py-16 px-6 min-h-screen">
      <h2
        className={`text-4xl md:text-5xl text-white text-center font-extrabold mainfont uppercase mb-12 transition-all duration-700 ${
          inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        Meet Our Trainers
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
        {staffMembers.map((staff, index) => (
          <div
            key={index}
            className={`bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 min-h-[420px] transition-all duration-500 ${
              inView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 120}ms`, animationFillMode: 'both' }}
          >
            <div className="overflow-hidden bg-neutral-800">
              <img
                src={staff.img}
                alt={staff.name}
                decoding="async"
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl text-red-500 font-bold subfont uppercase">
                {staff.name}
              </h3>
              <p className="text-white font-medium">{staff.role}</p>
              <p className="text-gray-400 text-sm mt-1">{staff.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Staffs;

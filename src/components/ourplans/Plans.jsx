import React from 'react';
import '../../App.css';
import plan1 from '../../assets/plan1.jpg';
import plan2 from '../../assets/plan2.jpg';
import plan3 from '../../assets/plan3.jpg';
import plan4 from '../../assets/plan4.jpg';
import useInView from '../../hooks/useInView';

const plans = [
  { name: 'Gym Plans', image: plan1 },
  { name: 'Premeum Plans', image: plan2 },
  { name: 'Group Workouts', image: plan3 },
  { name: 'Personal Training', image: plan4 },
];

function Plans() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="bg-black py-16">
      <h2
        className={`text-4xl md:text-5xl text-center text-white mainfont font-extrabold mb-12 uppercase transition-all duration-700
          ${inView ? 'animate-fade-up' : 'opacity-0'}
        `}
      >
        Choose Our Plans
      </h2>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-6 px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-full sm:w-[45%] lg:w-[23%] bg-zinc-900 border-2 border-gray-500 rounded-xl overflow-hidden
              transition-transform transform hover:scale-[1.03] shadow-xl group relative
              ${inView ? 'animate-zoom-in' : 'opacity-0'}`}
            style={{
              animationDelay: `${index * 120}ms`,
              animationFillMode: 'both',
            }}
          >
            <div className="overflow-hidden">
              <img
                src={plan.image}
                alt={plan.name}
                className="w-full h-70 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            <div className="p-4 flex flex-col items-center justify-between space-y-4">
              <h3 className="text-xl font-bold text-white subfont uppercase">{plan.name}</h3>

              <button className="bg-gradient-to-br from-red-600 to-orange-500 text-white px-6 py-2 rounded-full font-semibold uppercase tracking-wider transition-transform duration-300 transform group-hover:scale-110 hover:from-red-700 hover:to-orange-600">
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Plans;

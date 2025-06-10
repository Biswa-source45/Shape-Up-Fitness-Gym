import React from 'react';
import useInView from '../../hooks/useInView';
import { FaDumbbell, FaMedal, FaAppleAlt, FaUserCheck, FaHeartbeat } from 'react-icons/fa';

const features = [
  {
    icon: <FaUserCheck className="text-4xl text-red-600" />,
    title: 'Certified Trainers',
    description: 'Our professional trainers are certified to guide and support your transformation safely and effectively.',
  },
  {
    icon: <FaAppleAlt className="text-4xl text-red-600" />,
    title: 'Personalized Diets',
    description: 'Get personalized diet plans and supplement recommendations based on your goals and body type.',
  },
  {
    icon: <FaDumbbell className="text-4xl text-red-600" />,
    title: 'Modern Equipment',
    description: 'Train with state-of-the-art equipment designed for all levels of fitness.',
  },
  {
    icon: <FaMedal className="text-4xl text-red-600" />,
    title: 'Monthly Competitions',
    description: 'Participate in regular fitness competitions and win exciting prizes.',
  },
  {
    icon: <FaHeartbeat className="text-4xl text-red-600" />,
    title: 'Comprehensive Assessments',
    description: 'Track your progress with body assessments and performance analysis.',
  },
  {
    icon: <FaUserCheck className="text-4xl text-red-600" />,
    title: 'Community Support',
    description: 'Join a supportive community of fitness enthusiasts to stay motivated and inspired.',
  },
];

function Whyus() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="bg-black text-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-6xl font-extrabold mainfont text-center mb-12 transition-all duration-700 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          Why Choose Shape Up?
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-zinc-900 rounded-xl p-6 shadow-md border border-red-600 transform transition-all duration-500 hover:scale-[1.05] hover:shadow-lg
                ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both',
              }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold subfont mb-2">{feature.title}</h3>
              <p className="mainfont text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Whyus;

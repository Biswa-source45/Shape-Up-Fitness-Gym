import React, { useEffect, useRef, useState } from 'react';
import aboutsub from '../../assets/aboutsub.png';
import CountUp from 'react-countup';
import '../../App.css';

function Welcome() {
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

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${aboutsub})` }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row">
        <div
          className={`md:w-3/5 w-full p-4 rounded-xl transition-all duration-700 ${
            inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-7xl font-extrabold subfont uppercase mb-4">
            Welcome to Shape Up Fitness
          </h2>

          {/* Address */}
          <p className="mainfont text-red-600 px-2 py-2 inline-block text-3xl font-extrabold mb-4 rounded-md">
            Rd Number 12, Jagannath Nagar, Rasulgarh, Bhubaneswar
          </p>

          {/* Quote */}
          <p className="text-lg mainfont text-gray-200 mb-6">
            Where motivation meets results. Commit to be fit — become the strongest version of yourself.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-full subfont font-semibold shadow-md hover:bg-red-700 transition duration-300">
              Join Now
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-full subfont font-semibold hover:bg-white hover:text-black transition duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className={`w-full py-5 bg-black mt-3 transition-all duration-700 ${
          inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={4000} duration={1} enableScrollSpy={true} />
            </h3>
            <p className="mainfont mt-2">Monthly Visitors</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={60} duration={1} enableScrollSpy={true} />+
            </h3>
            <p className="mainfont mt-2">Equipment</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={6000} duration={1} enableScrollSpy={true} />+
            </h3>
            <p className="mainfont mt-2">Satisfied Members</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={100} duration={1} enableScrollSpy={true} />%
            </h3>
            <p className="mainfont mt-2">Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;

import React from 'react';
import '../../App.css';
import Header from '../header/Header.jsx';
import demoImage from '../../assets/aboutsub.png'; 
import aboutimage from '../../assets/aboutpage.jpg';
import Callus from '../callus/Callus.jsx';
import Footer from '../footer/Footer.jsx';
import ContactButtons from '../contactButtons/ContactButton.jsx';

function About() {
  return (
    <div className="bg-black text-white">
      <Header />

    <section
  className="relative w-full h-[70vh] bg-center flex flex-col items-center justify-center text-center fade-up-once px-4"
  style={{ backgroundImage: `url(${aboutimage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
>
  <div className="absolute inset-0 bg-opacity-60" />
  <h1 className="relative z-10 text-4xl sm:text-6xl lg:text-8xl font-bold subfont text-white drop-shadow-lg">
    WELCOME TO <span className='text-red-600 mainfont font-extrabold'>SHAPE UP</span> FITNESS
  </h1>
  <p className="relative z-10 text-base sm:text-lg md:text-xl text-red-400 mt-4 max-w-2xl">
    Where motivation meets results. Commit to be fit — become the strongest version of yourself.
  </p>
</section>


    {/* Mission Section */}
      <section className="py-16 px-4 sm:px-12 fade-up-once">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <img src={demoImage} alt="Our Goal" className="rounded-xl shadow-xl" />
          <div>
            <h2 className=" mainfont text-3xl font-semibold mb-4 text-red-500">Our Mission</h2>
            <p className="text-zinc-300 leading-relaxed">
              At Shape Up Fitness, we believe in transforming lives through a commitment to physical health, discipline, and mental resilience. Our goal is not just about building bodies, but about building confidence and community.
            </p>
          </div>
        </div>

        {/* Competition + Community */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-red-500 mainfont">Community & Competition</h2>
            <p className="text-zinc-300 leading-relaxed">
              Whether you're a beginner or a pro athlete, you'll find motivation in our strong, supportive fitness community. Participate in monthly challenges, get featured on our leaderboards, and grow with the pack.
            </p>
          </div>
          <img src={demoImage} alt="Community" className="rounded-xl shadow-xl" />
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <img src={demoImage} alt="Facilities" className="rounded-xl shadow-xl" />
          <div>
            <h2 className=" mainfont text-3xl font-semibold mb-4 text-red-500">Smart Facilities</h2>
            <p className="text-zinc-300 leading-relaxed">
              Get access to high-end gym equipment, smart performance tracking, health food cafés, clean locker rooms, and recovery zones — all wrapped in an immersive fitness environment.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-center mt-16">
          {[
            {
              title: 'Expert Trainers',
              desc: 'Certified coaches available every day for personal sessions and group guidance.',
            },
            {
              title: 'Wellness Programs',
              desc: 'Join yoga, Zumba, HIIT, and mindfulness classes to balance body and mind.',
            },
            {
              title: 'Tech-Enabled Gym',
              desc: 'Use our mobile app to schedule sessions, track progress, and connect with mentors.',
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black p-6 rounded-xl neon-glow hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-red-500 mb-3">{card.title}</h3>
              <p className="text-zinc-400">{card.desc}</p>
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

export default About;

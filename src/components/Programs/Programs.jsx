import React from 'react';
import '../../App.css';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import ContactButtons from '../contactButtons/ContactButton.jsx';
import Callus from '../callus/Callus.jsx';
import demoImage from '../../assets/aboutsub.png';
import programBanner from '../../assets/aboutpage.jpg';

function Programs() {
  const programs = [
    {
      title: 'Annual Health Camps',
      description:
        'Shape Up hosts yearly health check-up camps, open to all members and their families. These include BMI analysis, blood pressure, sugar level tests, and doctor consultations.',
      image: demoImage,
    },
    {
      title: 'Festive Celebrations',
      description:
        'Celebrate all major festivals with your fitness family — from Diwali, Holi, to Ganesh Puja. We bring together joy, culture, and wellness in one place.',
      image: demoImage,
    },
    {
      title: 'Fitness Competitions',
      description:
        'From weightlifting to endurance marathons — participate in annual fitness competitions and win exciting prizes. Leaderboards, trophies, and lots of cheers await!',
      image: demoImage,
    },
    {
      title: 'Gym Anniversary Bash',
      description:
        'Every year, Shape Up throws a mega celebration with live music, awards, member recognitions, and fun games to mark our success and community strength.',
      image: demoImage,
    },
    {
      title: 'Picnics & Retreats',
      description:
        'Step outside the gym and bond with your community during organized outings. From local nature trails to beach picnics, it’s about balance and connection.',
      image: demoImage,
    },
    {
      title: 'Dance & Zumba Workshops',
      description:
        'Fun, high-energy dance workshops are regularly hosted to bring rhythm into workouts. Guest choreographers often join us for these electrifying sessions.',
      image: demoImage,
    },
    {
      title: 'Mental Wellness Talks',
      description:
        'We invite psychologists and motivational coaches for monthly sessions on mindfulness, stress management, and emotional well-being.',
      image: demoImage,
    },
    {
      title: 'Transformation Journey Showcase',
      description:
        'Celebrate your progress! Every quarter we feature inspiring transformation stories from our members through social boards and videos.',
      image: demoImage,
    },
  ];

  return (
    <div className="bg-black text-white">
      <Header />

      {/* Banner Section */}
      <section
        className="relative w-full h-[70vh] bg-center flex flex-col items-center justify-center text-center fade-up-once px-4"
        style={{
          backgroundImage: `url(${programBanner})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <h1 className="relative z-10 text-4xl sm:text-6xl lg:text-8xl font-bold subfont text-white drop-shadow-lg">
          OUR <span className="text-red-600 mainfont">PROGRAMS</span>
        </h1>
        <p className="relative z-10 text-base sm:text-lg md:text-xl text-red-400 mt-4 max-w-2xl">
          Not just workouts — it's a lifestyle. Discover the events that make Shape Up more than a gym.
        </p>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-4 sm:px-12 fade-up-once">
        <div className="grid md:grid-cols-2 gap-14">
          {programs.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-xl shadow-xl hover:scale-[1.02] transition duration-300 overflow-hidden"
            >
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl text-red-500 font-bold mb-2 mainfont">{item.title}</h3>
                <p className="text-zinc-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 px-6 fade-up-once">
        <h2 className="text-3xl text-white font-bold mb-4">Ready to be a part of something amazing?</h2>
        <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
          Join Shape Up Fitness and experience events, community, fun, and motivation — all under one roof.
        </p>
        <a
          href="/join"
          className="inline-block bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-full shadow-lg"
        >
          Join Now
        </a>
      </section>

      <Callus />
      <Footer />
      <ContactButtons />
    </div>
  );
}

export default Programs;

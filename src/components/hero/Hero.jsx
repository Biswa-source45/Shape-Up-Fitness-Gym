import React from 'react';
import '../../App.css';

function Hero() {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={"https://res.cloudinary.com/dubf78dr4/video/upload/v1749290083/moyb6xqpnsymttr53sgl.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0  flex items-center justify-center z-0">
        <div className="text-center px-4 opacity-0 translate-y-10 animate-fadeInUp animation-delay-300">
          {/* Main Heading */}
          <h1 className="text-white text-5xl md:text-8xl font-extrabold mainfont mb-4 drop-shadow-lg">
            Unleash the Beast at <span className="text-red-600">Shape Up</span>
          </h1>

          {/* Subtext */}
          <p className="text-red-300 text-lg md:text-xl max-w-xl mx-auto mb-8 subfont">
            Push your limits, sculpt your body, and unleash your inner warrior.
          </p>

          {/* CTA Button */}
          <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold subfont shadow-md hover:bg-red-700 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

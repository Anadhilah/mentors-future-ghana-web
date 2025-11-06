import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const images = [
    '/images/back1.jpg',
    '/images/back2.jpg',
    '/images/back3.jpg',
    '/images/mentorsgh7.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // background switching effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000); // 10 seconds for now
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${images[currentImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Communities,
            <span className="text-yellow-400"> Transforming Lives</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Mentors Foundation Global is dedicated to creating sustainable change through education,
            Youth Entrepreneur Skill Job Training, Climate Change Initiatives, Girls and Women Empowerment,
            Prisons Reform, Youth in Agribusiness and other community development initiatives in Ghana,
            Africa, and the world at large.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 text-yellow-400">10000+</div>
              <div className="text-lg text-white">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 text-yellow-400" >25+</div>
              <div className="text-lg text-white">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 text-yellow-400">100+</div>
              <div className="text-lg text-white">Active Volunteers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

   
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/images/mentorsgh.jpg")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center 25%', 
            zIndex: 0,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Our <span className="text-yellow-400">Foundation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Learn about our journey, mission, and the people behind the positive change in Ghana.
          </p>
        </div>
      </section>

      <About />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default AboutPage;
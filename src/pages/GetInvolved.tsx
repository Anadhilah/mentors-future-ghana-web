import React from 'react';
import Navigation from '@/components/Navigation';
import GetInvolved from '@/components/GetInvolved';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const GetInvolvedPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[slide-in-right_15s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/mentorsgh6.jpg")', // Adjusted opacity
              backgroundSize: 'cover', // Ensures the image covers the entire area
            backgroundPosition: 'center 25%', // Change to 'center top' to bring heads down
            zIndex: 0,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Get <span className="text-yellow-400">Involved</span> {/* Changed to brighter color */}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: '0.3s' }}>
            Join us in creating positive change. Every contribution makes a difference.
          </p>
        </div>
      </section>

      <GetInvolved />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default GetInvolvedPage;
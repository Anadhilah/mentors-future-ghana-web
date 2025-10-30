
import React from 'react';
import Navigation from '@/components/Navigation';
import Programs from '@/components/Programs';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-[10s] ease-in-out"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/images/mentorsgh2.jpg")',
             backgroundSize: 'cover', // Ensures the image covers the entire area
            backgroundPosition: 'center 20%', // Change to 'center top' to bring heads down
            zIndex: 0,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-scale-in">
            Our <span className="text-yellow-400">Programs</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Comprehensive initiatives designed to create lasting positive impact across communities.
          </p>
        </div>
      </section>

      <Programs />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default ProgramsPage;

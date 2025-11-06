
import React from 'react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-[12s] ease-in-out hover:scale-110"
          style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/mentorsgh8.jpg")',
            backgroundSize: 'cover', 
            backgroundPosition: 'center 1%', 
            zIndex: 0,          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-scale-in">
            Contact <span className="text-yellow-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Reach out to us. We'd love to hear from you and answer any questions.
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default ContactPage;


import React from 'react';
import Navigation from '@/components/Navigation';
import News from '@/components/News';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            animationDuration: '6s'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Recent <span className="text-yellow-400">Updates</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: '0.3s' }}>
            Stay updated with our latest initiatives and community impact stories.
          </p>
        </div>
      </section>

      <News />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default NewsPage;

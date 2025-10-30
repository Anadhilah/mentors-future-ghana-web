
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // const handleJoinMission = () => {
  //   scrollToSection('get-involved');
  // };

  // const handleWatchStory = () => {
  //   // For now, scroll to about section
  //   scrollToSection('about');
  // };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/Mentors Foundation Globalrsgh7.jpg")',
            backgroundSize: 'cover', // Ensures the image covers the entire area
            backgroundPosition: 'center 25%', // Change to 'center top' to bring heads down
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
            Mentors Foundation Globalrs Foundation Ghana is dedicated to creating sustainable change through education, 
            Mentors Foundation  International, and community development across Ghana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              onClick={handleJoinMission}
            >
              Join Our Mission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-blue-950 hover:bg-white hover:text-black px-8 py-3"
              onClick={handleWatchStory}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10000+</div>
              <div className="text-lg text-white">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-lg text-white">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-lg text-white">Active Volunteers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Heart, Users, BookOpen, Target, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Impact from '@/components/Impact';
import GetInvolved from '@/components/GetInvolved';
import Testimonials from '@/components/Testimonials';
import News from '@/components/News';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Programs />
      <Impact />
      {/* <GetInvolved /> */}
      <Testimonials />
      {/* <News /> */}
      {/* <Contact /> */}
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = `
    Mentors Foundation Globalrs Foundation LBG, a charitable organization focused on poverty reduction, education, 
    and conflict resolution, Mentors Foundation  International and women empowerment since 2016. Mentors Foundation Globalrs Foundation Ghana 
    partnered with institutions including the Young African Leadership Initiative (YALI-USAID) 
    with the mandate of supplying experienced Professionals from different backgrounds to Mentors Foundation Globalr 
    youths from different African countries in Entrepreneur development in 2017 and 2018. 
    He again partnered with The Electoral Commission, the National Commission for Civic Education, 
    Presbyterian Church of Ghana during the 2020 electioneering period on peace talk. In 2021, 
    the Ministry of Gender, Children and Social Protection came on board to clear and feed 
    the street children with the aim of data collection. In 2022 till date, the Ghana Prison Service, 
    the Ghana Police Service, University of Ghana, Legon, Rutgers University New Jersey USA have 
    all assisted in championing various initiatives with several acknowledgements and awards for 
    the impact in Ghana, Africa and the World.
  `;

  const truncatedText = fullText.split(' ').slice(0, 50).join(' ') + '...';

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Mentors Foundation Globalrs Foundation Ghana</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a nonprofit organization committed to fostering sustainable development 
            and empowering communities across Ghana through education, Mentors Foundation  International, and innovative programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">ABOUT THE ORGANISATION</h3>
            <p className="text-muted-foreground mb-4">
              {isExpanded ? fullText : truncatedText}
              <button 
                onClick={toggleText} 
                className="text-primary underline ml-2"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Community members working together"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center border-none shadow-lg">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To empower communities in Ghana through sustainable development programs 
                that promote education, health, and economic opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-lg">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A Ghana where every community thrives through access to quality education, 
                healthcare, and sustainable economic opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-lg">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Integrity, community partnership, sustainability, innovation, 
                and unwavering commitment to positive social impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
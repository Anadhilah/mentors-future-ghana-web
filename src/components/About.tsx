import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = `
    Mentors Foundation LBG, a charitable organization focused on poverty reduction, education, 
    and conflict resolution, mentorship and women empowerment since 2016. Mentors Foundation Ghana 
    partnered with institutions including the Young African Leadership Initiative (YALI-USAID) 
    with the mandate of supplying experienced Professionals from different backgrounds to mentor 
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Founder</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rev. Bernard Ofori-Attah, Founder & CEO of Mentors Foundation Ghana and sister organizations is a multi- award
             winning Philanthropist and One of few vibrant and dedicated young Ministers of God impacting lives practically with
              the word of God in Ghana and Africa.

          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <p className="text-muted-foreground mb-4">
              Founded with a vision to create lasting change in Ghanaian communities, Mentors Foundation Ghana 
              has been at the forefront of community development for over a decade. We believe that every 
              individual has the potential to create positive change when given the right opportunities and support.
            </p>
            <p className="text-muted-foreground mb-6">
              Through our comprehensive programs in education, healthcare, economic empowerment, and 
              environmental sustainability, we work hand-in-hand with local communities to address 
              their most pressing challenges and build brighter futures.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/images/mentorsgh1.jpg" // Replace with your actual image name
              alt="Mentors Foundation team at an event"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;
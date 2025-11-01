
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import miss from '../assets/miss.jpg';
import agnes from '../assets/agnes.jpg';
import joana from '../assets/joana.jpg';
import doro from '../assets/doro.jpg';
import int from '../assets/int.jpg';
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Being part of the foundation has shown me the true meaning of volunteering. I’ve had the chance to work with amazing people, support different causes, and meet inspiring leaders",
      name: "Amanda Gyan Williams (Mrs)",
      role: "Psychiatric Nurse",
      image: miss
    },
    {
      quote: "Through Mentors Foundation Global, I had the opportunity to lead and participate in impactful programs such as health screenings, mental health education, and international conferences. These experiences taught me the importance of raising awareness on mental health and showed me how such initiatives can transform lives in our communities. Despite challenges like funding and limited resources, I’ve learned resilience and the value of teamwork in creating lasting change.",
      name: "Agnes Amoafo",
      role: "Senior Nurse",
      image: agnes
    },
    {
      quote: "Volunteering with Mentors Foundation Global has given me valuable experience in report and minutes writing, while exposing me to incredible opportunities and places.",
      name: "Joana Twenewaa ",
      role: "Volunteer",
      image: joana
    },
     {
      quote: "Attending the Project 2024 launch was an eye-opening experience. The sessions on mental health, prison reform, and anti-corruption highlighted the real challenges in our society and the incredible work Mentors Foundation Global is doing to address them. I was inspired by the focus on rehabilitation, transparency, and community support, and it reaffirmed my commitment to making a positive impact.",
      name: "Dorothy Addisson",
      role: "Psychologist",
      image: doro
    },
     {
      quote: "Volunteering with Mentors Foundation Global has been an incredible learning experience. From assisting with health screenings at Nsawam Women’s Prison to participating in the Ghana Youth Leaders Award, I gained practical skills, learned the importance of teamwork, and witnessed the impact of community outreach firsthand. It reinforced the need for empathy, education, and continued advocacy for mental health.",
      name: "Joelle Kohlmann",
      role: "International Volunteer",
      image: int
    }
    

  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stories of Impact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from the people whose lives have been transformed by our programs and the 
            volunteers who make our mission possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

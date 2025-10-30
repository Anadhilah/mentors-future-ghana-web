import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import outing from '../assets/outing.jpg';
import dinner from '../assets/dinner.jpg';
import mtn from '../assets/mtn.jpg';
import trokosi from '../assets/trokosi.jpg';
import troko2 from '../assets/troko2.jpg';
import uog from '../assets/uog.avif';
import screen from '../assets/screen.jpg';
import germany from '../assets/germany.jpg';
import high from '../assets/High.jpg';

const News = () => {
const newsItems = [
   {
    title: "Meeting with the Rwanda High Commission",
    excerpt: "Exploring collaborative opportunities for community development",
    content: "A productive meeting with the Rwanda High Commission to discuss potential partnerships and collaborative initiatives focused on community development, youth empowerment, and cultural exchange programs between Ghana and Rwanda.",
    date: "Recently",
    category: "Professional",
    image: high
  },
  {
    title: "Trokosi Research Kick Off Meeting with Rutgers University Team",
    excerpt: "Starting groundbreaking research on Trokosi practice",
    content: "Launched a comprehensive research project in collaboration with Rutgers University to study and address the Trokosi practice in Ghana. The research aims to understand the socio-cultural dynamics, develop intervention strategies, and work towards the complete eradication of this practice while supporting affected communities.",
    date: "July,2025",
    category: "Education",
    image: trokosi
  },
  {
    title: "Inter-Organizational Outing & Get Together",
    excerpt: "Building stronger bonds within our organization",
    content: "A wonderful day of team building, networking, and celebrating our shared mission. The event featured interactive sessions, team-building activities, and opportunities for staff members to connect and share experiences in a relaxed environment.",
    date: "July 1st 2025",
    category: "Fun",
    image: outing
  },
  {
    title: "Proposed MTN Foundation Sponsored Skill Job Training",
    excerpt: "Launching comprehensive job training program",
    content: "Exciting partnership with MTN Foundation to provide extensive skill-based job training from August 2025 to December 2027. This program will offer practical skills training, Mentors Foundation  International, and job placement support to empower youth in our communities with valuable workforce skills.",
    date: "August 2025-December 2027",
    category: "Education",
    image: mtn
  },
  {
    title: "Trokosi Research Data Collection/Focus Group Discussion Stage",
    excerpt: "Advancing our understanding through community engagement",
    content: "Beginning the crucial data collection phase of our Trokosi research project. Through focus group discussions and community engagement, we're gathering valuable insights to better understand and address this practice while ensuring respectful and ethical research practices.",
    date: "September 2025",
    category: "Education",
    image: troko2
  },
  {
    title: "University of Ghana Campus Mental Health Awareness",
    excerpt: "",
    date: "July-August 2025",
    category: "Education / Health",
    image: uog
  },
  {
    title: "Tamale Central Prison Health Screening & Skill Job Training Outreach",
    excerpt: "",
    date: "Aug/September 2025",
    category: "Health",
    image: screen
  },
  {
    title: "Germany Mental Health Conference",
    excerpt: "",
    date: "October 2025",
    category: "Education",
    image: germany
  },
  {
    title: "End of Year Dinner and Awards Night at Peduase Valley Resort Hotel, Aburi-Eastern Region-Ghana",
    excerpt: "",
    date: "December 2025",
    category: "Fun",
    image: dinner
  }
   
];


  return (
    <section id="news" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News & Updates</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest initiatives, success stories, and community impact across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Dialog>
              <DialogTrigger asChild>
                <Card key={index} className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{item.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{item.excerpt}</p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl mb-2">{item.title}</DialogTitle>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </span>
                  </div>
                </DialogHeader>
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <DialogDescription className="text-base leading-relaxed">
                  {item.content}
                </DialogDescription>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;

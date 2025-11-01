import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, Users, UserPlus, ArrowRight } from 'lucide-react';
import education from '/images/skill4.jpg'
import youth from '/images/youth.jpg';
import community from '/images/commu.jpg';
import skills from '/images/skill6.jpg';
import gender from '/images/equal.jpg';
import trokosi from '/images/trokosii.jpg';
import prog from '/images/prog.jpg';

import {
  Dialog,DialogContent, DialogHeader,
  DialogTitle, DialogDescription, DialogFooter,} from "@/components/ui/dialog";



interface ProgramImpact {
  beneficiaries: number;
  locations: string[];
  achievements: string[];
}

interface Program {
  title: string;
  description: string;
  icon: JSX.Element;
  image: string;
  category: string;
  impact: ProgramImpact;
}

const programs: Program[] = [
  {
    title: "Education & Skills Development",
    description: "Providing quality education and vocational training to empower youth with marketable skills.",
    icon: <BookOpen className="h-6 w-6" />,
    image: education,
    category: "Education",
    impact: {
      beneficiaries: 1200,
      locations: ["Greater Accra", "Volta Region"],
      achievements: ["Established 3 vocational training centers", "90% graduation rate"]
    }
  },
  {
    title: "Youth Mental Health Support",
    description: "Supporting youth mental health through counseling and community programs.",
    icon: <Heart className="h-6 w-6" />,
    image: youth,
    category: "Health",
    impact: {
      beneficiaries: 800,
      locations: ["Central Region", "Western Region"],
      achievements: ["Weekly counseling sessions", "Mental health awareness workshops"]
    }
  },
  {
    title: "Community Development",
    description: "Building stronger communities through local initiatives and leadership development.",
    icon: <Users className="h-6 w-6" />,
    image: community,
    category: "Community",
    impact: {
      beneficiaries: 2000,
      locations: ["Volta Region", "Eastern Region"],
      achievements: ["Community center construction", "Local leadership training"]
    }
  },
  {
    title: "Gender Equality & Empowerment",
    description: "Promoting gender equality and creating opportunities for women's economic empowerment.",
    icon: <UserPlus className="h-6 w-6" />,
    image: gender,
    category: "Empowerment",
    impact: {
      beneficiaries: 1500,
      locations: ["Ashanti Region", "Northern Region"],
      achievements: ["Skills training programs", "Micro-enterprise support"]
    }
  },
  {
    title: "Skills & Entrepreneurship",
    description: "Providing vocational training and entrepreneurship programs to create sustainable employment opportunities.",
    icon: <BookOpen className="h-6 w-6" />,
    image: skills,
    category: "Skills",
    impact: {
      beneficiaries: 300,
      locations: ["Greater Accra"],
      achievements: ["Job placement program", "Entrepreneurship training"]
    }
  },
  {
    title: "Trokosi Liberation & Support",
    description: "Working to end the Trokosi practice and provide comprehensive support for affected individuals.",
    icon: <Heart className="h-6 w-6" />,
    image: trokosi,
    category: "Rights",
    impact: {
      beneficiaries: 100,
      locations: ["Volta Region"],
      achievements: ["Advocacy campaigns", "Support services for survivors"]
    }
  }
];

const Programs = () => {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  return (
    <section className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Programs & Initiatives</h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
          We run comprehensive programs designed to address the most critical needs of 
          Ghanaian communities and create sustainable positive impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map(program => (
          <Card key={program.title} className="group hover:shadow-xl transition-all duration-300 border-2 border-border/50 hover:border-primary/50 overflow-hidden">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <Badge 
                className="absolute top-4 right-4" 
                variant="secondary"
              >
                {program.category}
              </Badge>
            </div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  {program.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
              </div>
              <p className="text-muted-foreground">
                {program.description}
              </p>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                onClick={() => setActiveDialog(program.title)}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {activeDialog && programs.map(program => (
        program.title === activeDialog && (
          <Dialog key={program.title} open={true} onOpenChange={() => setActiveDialog(null)}>
            <DialogContent className="max-w-3xl w-[95vw] sm:w-[85vw] md:w-auto">
              <DialogHeader>
                <div className="relative aspect-[16/9] sm:aspect-[21/9] -mt-6 -mx-6 mb-4 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge
                    className="absolute top-4 left-4"
                    variant="secondary"
                  >
                    {program.category}
                  </Badge>
                </div>
                <DialogTitle className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    {program.icon}
                  </div>
                  {program.title}
                </DialogTitle>
                <DialogDescription className="mt-2">
                  {program.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <h4 className="font-medium mb-1">Impact Locations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.impact.locations.map(location => (
                        <Badge key={location} variant="secondary">
                          {location}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Beneficiaries:</h4>
                    <p className="text-muted-foreground">
                      {program.impact.beneficiaries.toLocaleString()}+ people served
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {program.impact.achievements.map(achievement => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <DialogFooter className="mt-6">
                  <Button onClick={() => setActiveDialog(null)}>Close</Button>
                </DialogFooter>
              </div>
            </DialogContent>
          </Dialog>
        )
      ))}
    </section>
  );
};

export default Programs;
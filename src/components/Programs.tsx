
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, Users, Leaf, ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Education & Mentorship",
      description: "Providing quality education, scholarships, and mentorship programs to empower young minds and build future leaders.",
      features: ["Scholarship Programs", "Tutoring Services", "Leadership Training", "Career Guidance"],
      color: "bg-blue-500"
    },
    {
      icon: Heart,
      title: "Healthcare Initiatives",
      description: "Improving access to healthcare services and promoting health awareness in underserved communities.",
      features: ["Health Screenings", "Medical Outreach", "Health Education", "Emergency Care Support"],
      color: "bg-red-500"
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Building stronger communities through infrastructure development and capacity building programs.",
      features: ["Skills Training", "Infrastructure Projects", "Community Centers", "Local Partnerships"],
      color: "bg-green-500"
    },
    {
      icon: Leaf,
      title: "Environmental Sustainability",
      description: "Promoting environmental conservation and sustainable practices for a greener future.",
      features: ["Tree Planting", "Waste Management", "Clean Energy Projects", "Environmental Education"],
      color: "bg-emerald-500"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs & Initiatives</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We run comprehensive programs designed to address the most critical needs of 
            Ghanaian communities and create sustainable positive impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-none shadow-md">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-full ${program.color} flex items-center justify-center`}>
                    <program.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {program.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground">{program.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;

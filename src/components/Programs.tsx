
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, Users, Leaf, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

type Achievement = {
  title: string;
  description: string;
};

type ProgramImpact = {
  introduction: string;
  achievements: Achievement[];
  conclusion: string;
};

type ProgramsImpactType = {
  [key: string]: ProgramImpact;
};



const Programs = () => {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);
  const [showPartnershipDialog, setShowPartnershipDialog] = useState(false);

  const partnershipInfo = {
    title: "WHY PARTNER WITH US",
    introduction: "Partnering with Mentors Foundation can significantly advance mutual benefit in several ways:",
    benefits: [
      {
        title: "Increased Visibility",
        description: "The partnership initiative can provide a platform to showcase our works, potentially leading to increased recognition and visibility within various communities and beyond."
      },
      {
        title: "Networking Opportunities",
        description: "It will create the chance to connect with like-minded individuals, potential collaborators, and industry leaders, which can lead to new partnerships and opportunities."
      },
      {
        title: "Financial Support",
        description: "Your Financial support will further our impactful works."
      },
      {
        title: "Career Advancement",
        description: "The recognition and accolades that come with the partnership can enhance his professional reputation, potentially leading to new career opportunities or advancement within our organizations."
      },
      {
        title: "Inspiration and Motivation",
        description: "The partnership can inspire and motivate us to continue making a positive impact in various communities in Africa driving innovation and growth."
      }
    ],
    conclusion: "Moreover, Partnership opportunities bring individua organizations that embody the spirit of selflessness, innovation, and resilience, which aligns with each organizations' culture of \"an inspirational life\" and creating an inspired life for every partner. This recognition can open doors to new possibilities and reinforce each other's commitment to his work."
  };

  const programsImpact: ProgramsImpactType = {
    "Education & Mentorship": {
      introduction: "Since its inception, our Education & Mentorship program has been transforming lives through quality education and guidance.",
      achievements: [
        {
          title: "Scholarship Success",
          description: "Awarded over 200 scholarships to promising students, with 85% of recipients successfully completing their education and securing meaningful employment."
        },
        {
          title: "Mentorship Network",
          description: "Established a network of 150+ professional mentors who have guided more than 1,000 students in career development and personal growth."
        },
        {
          title: "Educational Resources",
          description: "Distributed educational materials and resources to 50+ schools, benefiting over 15,000 students in underserved communities."
        },
        {
          title: "Leadership Development",
          description: "Conducted leadership training programs for 500+ young individuals, with many participants now leading community initiatives."
        }
      ],
      conclusion: "Our education and mentorship initiatives continue to create lasting impact, fostering a new generation of leaders and change-makers in Ghana."
    } as ProgramImpact,
    "Healthcare Initiatives": {
      introduction: "Mentors Foundation efforts in mental health education have significantly impacted Africa, particularly Ghana Since 2016.",
      achievements: [
        {
          title: "Mental Health Education in Tertiary Institutions",
          description: "Through his partnership with the University of Ghana, over 30,000 students have benefited from mental health education, medical screening, and treatment since 2023."
        },
        {
          title: "Youth Empowerment",
          description: "Mentors Foundation Ghana has reached over 10,000 youth across Africa through virtual and in-person education, in collaboration with the Africa Law Students Association, focusing on mental health awareness and youth entrepreneurship mentorship partnering with YALI West Africa."
        },
        {
          title: "Prison Reform",
          description: "The organization has provided mental health education and skills job training to over 4,000 prison inmates and officers in Ghana, promoting rehabilitation and reintegration into society."
        },
        {
          title: "Peace Advocacy and Community Support",
          description: "Since 2016, Mentors Foundation Ghana's peace advocacy initiatives, \"Operation Feed the Street and Orphans,\" have supported over 100,000 beneficiaries, demonstrating the organization's commitment to community development and humanitarian assistance."
        }
      ],
      conclusion: "By promoting mental health education and providing support services, the organization aims to reduce stigma around mental health issues, equip individuals with coping mechanisms, and foster a more compassionate society. This aligns with the growing recognition of mental health's importance in Africa, where 1 in 7 adolescents struggle with mental health conditions. Integrating mental health education into school curricula can have long-term benefits, including better academic performance, social outcomes, and reduced risky behaviors."
    } as ProgramImpact,
    "Community Development": {
      introduction: "Our Community Development program has been instrumental in building stronger, more resilient communities across Ghana.",
      achievements: [
        {
          title: "Skills Development",
          description: "Trained over 2,000 individuals in various vocational skills, leading to a 60% increase in employment rates among participants."
        },
        {
          title: "Infrastructure Projects",
          description: "Completed 25 community infrastructure projects including community centers, water systems, and solar installations, benefiting over 50,000 people."
        },
        {
          title: "Local Business Support",
          description: "Provided business development support to 300+ local entrepreneurs, resulting in the creation of 1,000+ new jobs."
        },
        {
          title: "Community Partnerships",
          description: "Established partnerships with 30+ local organizations and government agencies, strengthening community support networks."
        }
      ],
      conclusion: "Through strategic partnerships and community-led initiatives, we continue to create sustainable development solutions that empower communities to thrive."
    } as ProgramImpact,
    "Environmental Sustainability": {
      introduction: "Our Environmental Sustainability program is dedicated to creating a greener, more sustainable future for Ghana.",
      achievements: [
        {
          title: "Tree Planting Initiative",
          description: "Successfully planted over 50,000 trees across Ghana, contributing to local climate action and biodiversity conservation."
        },
        {
          title: "Waste Management",
          description: "Implemented recycling programs in 100+ communities, processing over 1,000 tons of waste and creating green jobs."
        },
        {
          title: "Renewable Energy",
          description: "Installed solar power systems in 20 rural communities, providing clean energy access to over 5,000 households."
        },
        {
          title: "Environmental Education",
          description: "Conducted environmental awareness programs reaching 25,000+ students and community members."
        }
      ],
      conclusion: "Our environmental initiatives continue to make significant strides in promoting sustainable practices and creating positive environmental impact across Ghana."
    } as ProgramImpact
  };

  // Move handleLearnMore inside the Programs component
  const handleLearnMore = (programTitle: string) => {
    setActiveDialog(programTitle);
  };

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
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => handleLearnMore(program.title)}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={activeDialog !== null} onOpenChange={(open) => !open && setActiveDialog(null)}>
          {activeDialog && (
            <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  {activeDialog === "Healthcare Initiatives" && <Heart className="h-6 w-6 text-red-500" />}
                  {activeDialog === "Education & Mentorship" && <BookOpen className="h-6 w-6 text-blue-500" />}
                  {activeDialog === "Community Development" && <Users className="h-6 w-6 text-green-500" />}
                  {activeDialog === "Environmental Sustainability" && <Leaf className="h-6 w-6 text-emerald-500" />}
                  {activeDialog}
                </DialogTitle>
                <DialogDescription>
                  {programsImpact[activeDialog as keyof typeof programsImpact].introduction}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 space-y-6">
                {programsImpact[activeDialog as keyof typeof programsImpact].achievements.map((achievement, index) => (
                  <div key={index} className="bg-muted/50 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2 text-primary">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                ))}
                <div className="mt-6 border-t pt-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {programsImpact[activeDialog as keyof typeof programsImpact].conclusion}
                  </p>
                </div>
              </div>
              <DialogFooter className="mt-6">
                <Button onClick={() => setActiveDialog(null)}>Close</Button>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>

        <div className="text-center mt-12 space-y-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => setShowPartnershipDialog(true)}
          >
            Why Partner With Us
            <Users className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Partnership Dialog */}
        <Dialog open={showPartnershipDialog} onOpenChange={setShowPartnershipDialog}>
          <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-2xl">
                <Users className="h-6 w-6 text-primary" />
                {partnershipInfo.title}
              </DialogTitle>
              <DialogDescription className="text-base">
                {partnershipInfo.introduction}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6 space-y-4">
              {partnershipInfo.benefits.map((benefit, index) => (
                <div key={index} className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
              <div className="mt-6 border-t pt-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {partnershipInfo.conclusion}
                </p>
              </div>
            </div>
            <DialogFooter className="mt-6">
              <Button onClick={() => setShowPartnershipDialog(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Programs;

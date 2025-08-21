
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Impact = () => {
  const stats = [
    { number: "500+", label: "Lives Directly Impacted", description: "Individuals who have benefited from our programs" },
    { number: "25+", label: "Communities Served", description: "Rural and urban communities across Ghana" },
    { number: "100+", label: "Active Volunteers", description: "Dedicated individuals making a difference" },
    { number: "50+", label: "Scholarships Awarded", description: "Students supported through education programs" },
    { number: "15", label: "Healthcare Outreaches", description: "Medical camps and health screenings conducted" },
    { number: "10,000+", label: "Trees Planted", description: "Contributing to environmental sustainability" }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Every number represents a life touched, a community strengthened, and a step toward a better Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 text-center">
              <CardContent className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-primary-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Creating Lasting Change</h3>
            <p className="text-lg text-primary-foreground/80">
              Our impact goes beyond numbers. We measure success by the smiles on children's faces when they 
              receive an education, the relief in families when they access healthcare, and the pride in 
              communities as they become self-sufficient and thriving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;

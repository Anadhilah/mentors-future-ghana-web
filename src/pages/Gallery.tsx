import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Import all images
import outing from '../assets/outing.jpg';
import dinner from '../assets/dinner.jpg';
import germany from '../assets/germany.jpg';
import int from '../assets/int.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: '/images/mentorsgh.jpg', caption: 'Community Engagement Program' },
    { src: '/images/mentorsgh1.jpg', caption: 'Youth Development Workshop' },
    { src: '/images/mentorsgh2.jpg', caption: 'Educational Outreach' },
    { src: '/images/mentorsgh5.jpg', caption: 'Skills Training Session' },
    { src: '/images/mentorsgh6.jpg', caption: 'Team Building Event' },
    { src: '/images/mentorsgh7.jpg', caption: 'Community Service Day' },
    { src: '/images/mentorsgh8.jpg', caption: 'Leadership Workshop' },
    { src: '/images/mentorsgh9.jpg', caption: 'Volunteer Program' },
    { src: outing, caption: 'Team Outing' },
    { src: dinner, caption: 'Annual Dinner' },
    { src: germany, caption: 'International Partnership' },
    { src: int, caption: 'Global Initiative Meeting' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Our Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing moments of impact, transformation, and community engagement across our journey.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((image, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Card 
                className="overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-[4/3]">
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4 py-2 text-lg font-medium">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0">
            <div className="relative w-full h-full">
              {selectedImage && (
                <img 
                  src={selectedImage} 
                  alt="Gallery preview" 
                  className="w-full h-full object-contain"
                />
              )}
              <Button
                className="absolute top-4 right-4"
                variant="secondary"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import all images
import outing from '../assets/outing.jpg';
import dinner from '../assets/dinner.jpg';
import germany from '../assets/germany.jpg';
import int from '../assets/int.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const images = [
    { src: '/images/Mentors Foundation Globalrsgh.jpg', caption: 'Community Engagement Program' },
    { src: '/images/Mentors Foundation Globalrsgh1.jpg', caption: 'Youth Development Workshop' },
    { src: '/images/Mentors Foundation Globalrsgh2.jpg', caption: 'Educational Outreach' },
    { src: '/images/Mentors Foundation Globalrsgh5.jpg', caption: 'Skills Training Session' },
    { src: '/images/Mentors Foundation Globalrsgh6.jpg', caption: 'Team Building Event' },
    { src: '/images/Mentors Foundation Globalrsgh7.jpg', caption: 'Community Service Day' },
    { src: '/images/Mentors Foundation Globalrsgh8.jpg', caption: 'Leadership Workshop' },
    { src: '/images/Mentors Foundation Globalrsgh9.jpg', caption: 'Volunteer Program' },
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
    <section className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 hover:bg-secondary"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div className="flex items-center gap-2">
            <ImageIcon className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Photo Gallery</span>
          </div>
        </div>

        {/* Gallery Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Capturing moments of impact, transformation, and community engagement across our journey.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((image, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -5 }}
            >
              <Card 
                className="overflow-hidden cursor-pointer bg-card border-2 border-border/50 hover:border-primary/50 transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-[4/3]">
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                    <p className="text-white text-center px-6 py-2 text-lg font-medium">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 overflow-hidden rounded-lg border-2 border-border/50">
            <div className="relative w-full h-full bg-black/95">
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-10">
                <Button
                  variant="secondary"
                  onClick={() => setSelectedImage(null)}
                  className="hover:bg-white/20"
                >
                  Close
                </Button>
              </div>
              {selectedImage && (
                <motion.img 
                  src={selectedImage} 
                  alt="Gallery preview" 
                  className="w-full h-full object-contain p-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Bottom Navigation */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            variant="outline"
            className="hover:bg-primary hover:text-white transition-colors"
            onClick={() => navigate('/')}
          >
            Return to Homepage
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
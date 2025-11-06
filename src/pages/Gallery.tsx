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

import init from '/images/glob.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();
  const [category, setCategory] = useState<'all' | 'events' | 'community' | 'education' | 'videos'>('all');

  const images = [
     { src: '/images/orphan.mp4', caption: 'Mentors Foundation Nigeria orphanage Donation.', category: 'video', type: 'video' },
    { src: '/images/mentorsgh.jpg', caption: 'International Program- Rwanda High Commission.', category: 'community' },
     { src: '/images/teamMeet.mp4', caption: 'Team Project Meeting at Mentors Foundation Office-Accra Ghana.', category: 'video', type: 'video' },
    { src: '/images/mentorsgh1.jpg', caption: 'International Conference- Africa Prosperity Network Invitation.', category: 'education' },
     { src: '/images/niger.mp4', caption: 'Mentors Foundation and Ghana High Commission Nigeria-Abuja Mental Health Counseling sessions with Diplomats.', category: 'video', type: 'video' },
    { src: '/images/learn.jpg', caption: '⁠Mentors Foundation Yearly Project Official Launch.', category: 'education' },
     { src: '/images/climate.mp4', caption: 'Mentors Foundation and and PACC Policy EELL Learning Institute Climate Change  Project in Ontario-Canada.', category: 'video', type: 'video' },
    { src: '/images/skill3.jpg', caption: 'Northern Ghana Team Skills Training & Development.', category: 'education' },
     { src: '/images/jersey.mp4', caption: 'Troski Research by Mentors Foundation, University of Ghana and Rutgers University New Jersey-USA Project', category: 'video', type: 'video' },
    { src: '/images/team.jpg', caption: 'Operation Feed and Cloth 1000 Street Children.', category: 'events' },
    { src: '/images/out.jpg', caption: '⁠Operation Feed and Cloth 1000 Street Children.', category: 'community' },
    { src: '/images/canada.jpg', caption: 'Global Climate Change Conference-Vaughan Ontario Canada. ', category: 'education' },
    { src: '/images/mentorsgh9.jpg', caption: 'Nsawam Prisons Medical Outreach .', category: 'community' },
    { src: outing, caption: 'Team Outing', category: 'events' },
    { src: dinner, caption: 'Climate change conference- Canada', category: 'events' },
    { src: '/images/lead.jpg', caption: 'Global Climate Change Conference', category: 'events' },
    { src: init, caption: '⁠International Mental Health outreach-Ghana High Commission-Nigeria, Abuja', category: 'events' },
    { src: '/images/femalePrison.mp4', caption: 'Mentors Foundation and Ghana Prisons Service-Nsawam Female Prisons Agric Project', category: 'video', type: 'video' },
    { src: '/images/mentalHealth.mp4', caption: 'Mentors Foundation and Ghana Mental Health Authority Maternal Health Policy Draft at La Palm Royal Beach Hotel', category: 'video', type: 'video' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

 const filteredImages = images.filter((img) => {
    if (category === 'all') return true;
    if (category === 'videos') return img.type === 'videos';
    return img.category === category;
  });

  return (
    <section className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Top Navigation */}
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
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Capturing moments of impact, transformation, and community engagement across our journey.
          </motion.p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['all', 'events', 'community', 'education', 'video'].map((cat) => (
              <Button
                key={cat}
                variant={category === cat ? "default" : "outline"}
                onClick={() => setCategory(cat as any)}
                className="capitalize"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredImages.map((image, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -5 }}
            >
              <Card 
                className="overflow-hidden cursor-pointer border-2 border-border/50 hover:border-primary/50 transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-[4/3]">
                  {image.type === 'video' ? (
                    <video
                      src={image.src}
                      className="w-full h-full object-cover"
                      controls
                    />
                  ) : (
                    <img 
                      src={image.src} 
                      alt={image.caption}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                    <div className="text-center">
                      <p className="text-white px-6 text-lg font-medium">
                        {image.caption}
                      </p>
                      <span className="text-primary-foreground/80 text-sm capitalize">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Fullscreen Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="w-[100vw] h-[100vh] p-0 overflow-hidden rounded-none border-none">
            <div className="relative w-full h-full bg-black flex items-center justify-center">
              <div className="absolute top-4 left-4 z-10">
                <Button
                  variant="secondary"
                  onClick={() => setSelectedImage(null)}
                  className="hover:bg-white/20"
                >
                  Close
                </Button>
              </div>

              {selectedImage && selectedImage.endsWith('.mp4') ? (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <video
                    ref={(video) => {
                      if (video) {
                        video.onloadedmetadata = () => {
                          const ratio = video.videoWidth / video.videoHeight;
                          video.classList.toggle('object-cover', ratio > 1.2);   // landscape
                          video.classList.toggle('object-contain', ratio <= 1.2); // portrait
                        };
                      }
                    }}
                    src={selectedImage}
                    controls
                    autoPlay
                    className="w-full h-full transition-all duration-500"
                  />
                </motion.div>
              ) : (
                selectedImage && (
                  <motion.img 
                    src={selectedImage} 
                    alt="Gallery preview" 
                    className="w-full h-full object-contain p-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )
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

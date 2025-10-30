
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X } from 'lucide-react';
import logo from '../../src/assets/logo.jpg';


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleVolunteer = () => {
    if (location.pathname === '/get-involved') {
      const element = document.getElementById('get-involved');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/get-involved');
    }
  };

  const handleDonate = () => {
    if (location.pathname === '/get-involved') {
      const element = document.getElementById('get-involved');
      if (element) {
        const donateSection = element.querySelector('[data-section="donate"]');
        if (donateSection) {
          donateSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate('/get-involved');
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Mentors Foundation Logo"
              className="h-14 w-auto rounded-md"


            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link 
              to="/programs"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Programs
            </Link>
            <Link 
              to="/get-involved"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Get Involved
            </Link>
            <Link 
              to="/news"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              News
            </Link>
            <Link 
              to="/gallery"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Gallery
            </Link>
            <Link 
              to="/contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={handleVolunteer}>
              Volunteer
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={handleDonate}>
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/"
                className="text-sm font-medium text-foreground hover:text-primary text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about"
                className="text-sm font-medium text-foreground hover:text-primary text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/programs"
                className="text-sm font-medium text-foreground hover:text-primary text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              <Link 
                to="/get-involved"
                className="text-sm font-medium text-foreground hover:text-primary text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Involved
              </Link>
              <Link 
                to="/news"
                className="text-sm font-medium text-foreground hover:text-primary text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link 
                to="/contact"
                className="text-sm font-medium text-foreground hover:text-primary text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/gallery"
                className="text-sm font-medium text-foreground hover:text-primary text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" onClick={handleVolunteer}>
                  Volunteer
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={handleDonate}>
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

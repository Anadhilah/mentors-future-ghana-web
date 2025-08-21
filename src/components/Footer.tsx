import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div
              className="flex items-center space-x-2 mb-4 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Mentors Foundation</span>
                <span className="text-xs text-gray-400">Ghana</span>
              </div> */}
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Changing lifes, Transforming generations
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/16kGZZ9vtJ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-600 text-gray-300 rounded-md hover:text-white hover:bg-primary transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://t.co/redirect?url=https%3A%2F%2Fx.com%2FBernardOFO28946&t=1&cn=bG9naW5fbm90aWZpY2F0aW9uX2VtYWls&sig=13225b7cb391d319e4493d4b132200c45e7ff948&iid=3b8a1904377e4017ac5d3b57235d122d&uid=1957763849828073472&nid=296+1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-600 text-gray-300 rounded-md hover:text-white hover:bg-primary transition"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/bernardoforiatta?igsh=MW1zZnhqazEyY3o4Zg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-600 text-gray-300 rounded-md hover:text-white hover:bg-primary transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="http://linkedin.com/in/bernard-ofori-atta-mentors-foundation-ghana-a55b2233
"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-600 text-gray-300 rounded-md hover:text-white hover:bg-primary transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('programs')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Our Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('get-involved')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Get Involved
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('news')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  News & Updates
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-gray-300 text-sm">Accra, Ghana</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300 text-sm">
                  +233 24 057 4814 <br />
                  +233 59 325 2660
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-300 text-sm">
                  mentorsnbp@gmail.com <br />
                  oforiattabenard@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mentors Foundation Ghana. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button
                onClick={() => alert('Privacy Policy page coming soon!')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => alert('Terms of Service page coming soon!')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

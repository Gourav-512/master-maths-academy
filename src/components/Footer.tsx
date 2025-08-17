import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Master Maths Academy</h3>
            <p className="text-white/80 leading-relaxed">
              Shaping minds and building futures through quality education and personalized attention.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Courses', 'Admissions', 'Results', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-200 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Courses</h4>
            <ul className="space-y-2">
              {[
                '1st to 8th Std',
                '9th & 10th Std',
                '11th & 12th Science',
                'Competitive Exams',
                'Doubt Sessions'
              ].map((course, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-200 inline-block"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-secondary-light flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  Behind Gadave Petrol Pump, in front of Varda Apartment, Miraj
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary-light" />
                <a href="tel:9011913559" className="text-white/80 hover:text-white transition-colors">
                  9011913559
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary-light" />
                <a href="mailto:info@mastermathsacademy.com" className="text-white/80 hover:text-white transition-colors">
                  info@mastermathsacademy.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/80 text-sm mb-4 md:mb-0">
            © 2024 Master Maths Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <span>Designed with</span>
            <Heart className="w-4 h-4 text-secondary-light animate-pulse" />
            <span>for Master Maths Academy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
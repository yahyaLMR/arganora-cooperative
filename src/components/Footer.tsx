import { Facebook, Instagram, Mail, MapPin, Phone, Heart, ExternalLink } from "lucide-react";
import TikTokIcon from "@/components/ui/tiktok-icon";
import logo from "../assets/Minimalist_Logo_with__arganora__in_Warm_Tones-removebg-preview.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Benefits", href: "#benefits" },
    { name: "Contact", href: "#contact" },
  ];

  const products = [
    "Culinary Argan Oil",
    "Argan Hair Oil",
    "Argan Cream",
    "Gift Sets",
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://web.facebook.com/profile.php?id=61582379466077", 
      label: "Facebook",
      color: "hover:bg-blue-500"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/cooperativearganora/", 
      label: "Instagram",
      color: "hover:bg-pink-500"
    },
    { 
      icon: TikTokIcon, 
      href: "https://www.tiktok.com/@arganora20?is_from_webapp=1&sender_device=pc", 
      label: "TikTok",
      color: "hover:bg-gray-800"
    },
    { 
      icon: Mail, 
      href: "mailto:cooperativearganora@gmail.com", 
      label: "Email",
      color: "hover:bg-red-500"
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground to-foreground/95 text-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-background/10">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <img 
              src={logo} 
              width={140} 
              alt="Arganora Logo" 
              className="mb-6 brightness-0 invert opacity-90"
            />
            <p className="text-background/80 mb-6 leading-relaxed">
              Authentic Moroccan argan oil, handcrafted with tradition and care by our women's cooperative.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <span>Essaouira, Morocco</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="tel:+212688142336" className="hover:text-background transition-colors">
                  +212 688 142 336
                </a>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="mailto:cooperativearganora@gmail.com" className="hover:text-background transition-colors">
                  cooperativearganora@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-background">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-primary hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-300 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-background">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index} className="text-background/80 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-2 flex-shrink-0"></span>
                  <span>{product}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social & Developer */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-background">Connect With Us</h4>
            <div className="flex flex-wrap gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center ${social.color} hover:scale-110 transition-all duration-300 group border border-background/10`}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            
            {/* Developer Credit */}
            <div className="bg-background/5 border border-background/10 rounded-xl p-4">
              <h5 className="font-semibold text-sm mb-2 text-background flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-400" />
                Website Developer
              </h5>
              <p className="text-background/80 text-sm mb-2">Yahya Lmouri</p>
              <a 
                href="https://github.com/yahyaLMR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors text-sm flex items-center gap-2 group"
              >
                <ExternalLink className="w-3 h-3" />
                <span className="group-hover:underline">View Portfolio</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-background/60 text-sm">
              &copy; {currentYear} Arganora Cooperative. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <span>•</span>
              <a 
                href="https://github.com/yahyaLMR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                Built by Yahya Lmouri
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

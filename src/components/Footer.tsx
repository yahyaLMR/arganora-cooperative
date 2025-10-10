import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Arganora</h3>
            <p className="text-background/80">
              Authentic Moroccan argan oil, handcrafted with tradition and care.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#products" className="hover:text-background transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#benefits" className="hover:text-background transition-colors">Benefits</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-background/80">
              <li>Culinary Argan Oil</li>
              <li>Argan Hair Oil</li>
              <li>Argan Cream</li>
              <li>Gift Sets</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <div className="border-t border-background/20 pt-4">
              <h5 className="font-medium mb-2 text-sm">Contact the Developer</h5>
              <p className="text-background/80 text-sm mb-2">Yahya Lmouri</p>
              <a target="_blank" href="https://github.com/yahyaLMR" className="text-background/80 hover:text-background transition-colors text-sm flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>
            &copy; {new Date().getFullYear()} Arganora Cooperative. All rights reserved to{" "}
            <a target="_blank" href="https://github.com/yahyaLMR">yahya lmouri</a>.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

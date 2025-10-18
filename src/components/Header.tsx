import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/Minimalist_Logo_with__arganora__in_Warm_Tones-removebg-preview.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <img src={logo} width={80} alt="Arganora Logo" />
          {/* <h1 className="text-2xl font-heading font-bold text-gradient">
            Arganora</h1> */}
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("products")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("benefits")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Desktop Shop Button */}
          <div className="hidden md:block">
            <Button variant="default" size="sm">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection("products")} 
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("benefits")} 
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
              <div className="pt-4">
                <Button variant="default" size="sm" className="w-full">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

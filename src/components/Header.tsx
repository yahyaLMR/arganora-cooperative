import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/Minimalist_Logo_with__arganora__in_Warm_Tones-removebg-preview.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: "products", label: "Products" },
    { id: "about", label: "About" },
    { id: "benefits", label: "Benefits" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="z-50 fixed w-full top-0 bg-foreground text-background py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="mailto:cooperativearganora@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>cooperativearganora@gmail.com</span>
              </a>
              <a href="tel:+212688142336" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+212 688 142 336</span>
              </a>
            </div>
            <p className="text-background/80">Free Shipping on Orders Over $50</p>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed top-0 md:top-[35px] w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border md:top-0' 
            : 'bg-background/80 backdrop-blur-sm border-b border-border/50'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={logo} 
                width={isScrolled ? 70 : 90} 
                alt="Arganora Logo" 
                className="transition-all duration-300"
              />
            </div>
          
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Shop Now
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
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
            <div className="lg:hidden pb-6 border-t border-border animate-fade-up">
              <div className="flex flex-col space-y-1 mt-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-foreground hover:text-primary hover:bg-muted transition-all py-3 px-4 rounded-lg font-medium"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-4 px-4">
                  <Button variant="default" size="lg" className="w-full bg-gradient-to-r from-primary to-accent">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-10 md:h-[80px]"></div>
    </>
  );
};

export default Header;

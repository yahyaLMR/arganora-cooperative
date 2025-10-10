import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* <img src="/public/Minimalist_Logo_with__arganora__in_Warm_Tones-removebg-preview.png" width={90} alt="Arganora Logo" /> */}
          <h1 className="text-2xl font-heading font-bold text-gradient">
            Arganora</h1>
          
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

          <Button variant="default" size="sm">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Shop Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

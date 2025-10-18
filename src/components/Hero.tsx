import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-argan.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{marginTop:"50px"}} className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Traditional Moroccan woman producing argan oil" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent md:bg-gradient-to-r md:from-background/90 md:via-background/60 md:to-transparent lg:from-background/85 lg:via-background/50 lg:to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-up">
          
          <p className="text-primary font-medium mb-4">From Our Arganora Cooperative to You</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Pure Moroccan
            <span className="block text-gradient">Argan Oil</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            Handcrafted with tradition and care by our women's cooperative. 
            Experience the authentic luxury of Morocco's liquid gold.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={scrollToProducts} className="text-lg">
              Discover Our Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

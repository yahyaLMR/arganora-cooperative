import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-argan.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Traditional Moroccan woman producing argan oil" 
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left text-white">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">From Our Arganora Cooperative to You</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-6 leading-[1.1]">
              Pure Moroccan
              <span className="block mt-2">
                <span className="text-gradient">Argan Oil</span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
              Handcrafted with tradition and care by our women's cooperative. 
              Experience the authentic luxury of Morocco's liquid gold.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={scrollToProducts} 
                className="text-lg bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Discover Our Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-lg border-white/30 text-black hover:bg-white/10 hover:text-white backdrop-blur-sm"
              >
                Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-primary" />
                  <p className="text-2xl font-bold text-white">20+</p>
                </div>
                <p className="text-sm text-white/70">Years Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 mb-1">
                  <Leaf className="w-5 h-5 text-primary" />
                  <p className="text-2xl font-bold text-white">100%</p>
                </div>
                <p className="text-sm text-white/70">Organic & Pure</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <p className="text-2xl font-bold text-white">50+</p>
                </div>
                <p className="text-sm text-white/70">Women Artisans</p>
              </div>
            </div>
          </div>

          {/* Image Showcase */}
          <div className="hidden lg:block animate-slide-in-right">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/30 rounded-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent/30 rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm rounded-3xl p-2 border border-white/20">
                <img 
                  src={heroImage} 
                  alt="Argan oil products" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

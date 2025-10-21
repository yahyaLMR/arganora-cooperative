import { Users, Leaf, Award, Globe, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-argan.jpg";
import logo from "../assets/Minimalist_Logo_with__arganora__in_Warm_Tones-removebg-preview.png"

const stats = [
  { icon: Users, value: "50+", label: "Women Artisans", color: "text-primary" },
  { icon: Leaf, value: "100%", label: "Organic & Pure", color: "text-secondary" },
  { icon: Award, value: "20+", label: "Years Experience", color: "text-accent" },
  { icon: Globe, value: "Global", label: "Ethical Sourcing", color: "text-primary" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="animate-slide-in-left space-y-8">
            <div>
              <img 
                src={logo}
                width={180} 
                height={90}
                alt="Arganora Logo" 
                className="mb-6 opacity-90"
              />
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight mb-6">
                Empowering Women Through <span className="text-gradient">Tradition</span>
              </h2>
            </div>
            
            {/* Story Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Arganora is more than a cooperative—it's a <strong className="text-foreground">community of skilled
                Moroccan women</strong> preserving centuries-old traditions while building
                sustainable livelihoods for their families.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every bottle of our argan oil represents hours of careful,
                handcrafted work. From harvesting the precious argan nuts to the
                traditional cold-pressing method, we maintain <strong className="text-foreground">authentic practices</strong>
                that ensure the highest quality.
              </p>

              {/* Quote */}
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-primary rounded-lg p-6 my-8">
                <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
                <p className="text-foreground italic text-lg mb-2">
                  "Our hands carry the wisdom of generations, turning nature's gift into liquid gold."
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  — Fatima, Master Artisan
                </p>
              </div>

              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Join Our Mission
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-primary/30 rounded-xl p-6 hover-lift transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <stat.icon className={`w-8 h-8 ${stat.color} mb-3 relative z-10`} />
                  <div className="text-3xl font-heading font-bold text-foreground mb-1 relative z-10">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium relative z-10">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div
            className="relative animate-slide-in-right"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Decorative Frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-3xl transform rotate-3"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent/20 rounded-3xl transform -rotate-3"></div>
            
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                className="w-full h-full object-cover" 
                src={heroImage} 
                alt="Traditional argan oil production"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-effect rounded-2xl p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">100% Natural Process</p>
                    <p className="text-sm text-muted-foreground">Handcrafted with Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Sparkles, Heart, Shield, Leaf, Zap, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: Heart,
    title: "Nourishes Deeply",
    description: "Rich in vitamin E and fatty acids that penetrate deep into skin and hair",
    color: "from-red-500/20 to-pink-500/20",
    iconColor: "text-red-500"
  },
  {
    icon: Sparkles,
    title: "Natural Beauty",
    description: "Pure organic ingredients with no harsh chemicals or additives",
    color: "from-yellow-500/20 to-amber-500/20",
    iconColor: "text-yellow-600"
  },
  {
    icon: Shield,
    title: "Protects & Repairs",
    description: "Antioxidants help protect against environmental damage and aging",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-600"
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description: "Eco-friendly production methods that preserve Morocco's argan forests",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-600"
  }
];

const additionalBenefits = [
  { icon: Zap, text: "Fast Absorbing" },
  { icon: Star, text: "Non-Greasy Formula" },
  { icon: Heart, text: "Suitable for All Skin Types" },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-up">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 px-4 py-1">
            Why Argan Oil
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Nature's <span className="text-gradient">Liquid Gold</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Discover the remarkable benefits that have made argan oil a treasured secret for centuries,
            backed by both traditional wisdom and modern science
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-card border-2 border-border hover:border-primary/30 p-8 hover-lift transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Additional Benefits Bar */}
        <div className="max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <div className="text-center md:text-left">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">
                  Additional Benefits
                </p>
                <p className="text-foreground font-heading font-bold text-lg">
                  Even More Reasons to Love Argan Oil
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {additionalBenefits.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl border border-primary/10">
            <Sparkles className="w-12 h-12 text-primary" />
            <p className="text-lg md:text-xl font-heading font-semibold text-foreground max-w-2xl">
              Experience the transformative power of pure Moroccan argan oil in every drop
            </p>
            <div className="flex gap-2 text-sm text-muted-foreground">
              <span>✓ Dermatologically Tested</span>
              <span>•</span>
              <span>✓ Cruelty Free</span>
              <span>•</span>
              <span>✓ Vegan Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

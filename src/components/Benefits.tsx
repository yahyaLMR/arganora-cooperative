import { Sparkles, Heart, Shield, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Nourishes Deeply",
    description: "Rich in vitamin E and fatty acids that penetrate deep into skin and hair"
  },
  {
    icon: Sparkles,
    title: "Natural Beauty",
    description: "Pure organic ingredients with no harsh chemicals or additives"
  },
  {
    icon: Shield,
    title: "Protects & Repairs",
    description: "Antioxidants help protect against environmental damage and aging"
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description: "Eco-friendly production methods that preserve Morocco's argan forests"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-medium mb-2">Why Argan Oil</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Nature's Liquid Gold
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the remarkable benefits that have made argan oil a treasured secret for centuries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-2xl bg-card hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

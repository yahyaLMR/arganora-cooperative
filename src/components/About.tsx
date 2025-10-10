import { Users, Leaf, Award, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Women Artisans" },
  { icon: Leaf, value: "100%", label: "Organic & Pure" },
  { icon: Award, value: "20+", label: "Years Experience" },
  { icon: Globe, value: "15+", label: "Countries Shipped" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up space-y-6">
            <div className="mb-8">
              <img 
                src="/Minimalist_Logo_with__arganora__in_Warm_Tones-removebg-preview.png" 
                width={200} 
                height={100}
                alt="Arganora Logo" 
                className="mb-6"
              />
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Our Story
              </p>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold leading-tight mb-6">
                Empowering Women Through Tradition
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Arganora is more than a cooperative—it's a community of skilled
                Moroccan women preserving centuries-old traditions while building
                sustainable livelihoods.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every bottle of our argan oil represents hours of careful,
                handcrafted work. From harvesting the precious argan nuts to the
                traditional cold-pressing method, we maintain authentic practices
                that ensure the highest quality.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-card border border-border rounded-lg hover:shadow-md transition-shadow duration-300"
                >
                  <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden shadow-lg">
              <img 
                className="w-full h-full object-cover rounded-2xl" 
                src="/hero-argan.jpg" 
                alt="Traditional argan oil production"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

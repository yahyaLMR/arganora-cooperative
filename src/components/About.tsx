import { Users, Leaf, Award, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Women Artisans" },
  { icon: Leaf, value: "100%", label: "Organic & Pure" },
  { icon: Award, value: "20+", label: "Years Experience" },
  { icon: Globe, value: "15+", label: "Countries Shipped" },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="text-primary font-medium mb-2">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Empowering Women Through Tradition
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Arganora is more than a cooperative—it's a community of skilled
              Moroccan women preserving centuries-old traditions while building
              sustainable livelihoods.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Every bottle of our argan oil represents hours of careful,
              handcrafted work. From harvesting the precious argan nuts to the
              traditional cold-pressing method, we maintain authentic practices
              that ensure the highest quality.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-muted/50 rounded-lg"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-heading font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
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
            <div className="aspect-[4/5] bg-gradient-to-br  from-primary/20 to-accent/20 rounded-2xl">
              <img className="rounded-md" src="/src/assets/hero-argan.jpg" alt="" style={{
                height:'100%',
                objectFit:'cover',
                
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

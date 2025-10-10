import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="text-primary font-medium mb-2">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Join Our Journey
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Subscribe to our newsletter for exclusive offers, beauty tips, and stories from our cooperative.
            </p>
            
            <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>contact@arganora.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+212 600 000 000</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Agadir, Morocco</span>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

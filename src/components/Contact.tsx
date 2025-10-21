import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Send, Globe, MessageCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log({ name, email, message });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "cooperativearganora@gmail.com",
      href: "mailto:cooperativearganora@gmail.com",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+212 688 142 336",
      href: "tel:+212688142336",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Essaouira, Morocco",
      href: "https://maps.google.com/?q=Essaouira,Morocco",
      color: "text-red-600"
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.arganora.com",
      href: "#",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 px-4 py-1">
            Get in Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Join Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Have questions? Want to become a partner? We'd love to hear from you.
            Reach out and let's create something beautiful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="bg-card border-2 border-border rounded-3xl p-8 md:p-10 hover:border-primary/20 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold">Send us a message</h3>
                  <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Your Name
                  </label>
                  <Input 
                    id="name"
                    type="text" 
                    placeholder="Enter your full name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 border-2 focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 border-2 focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Your Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us what you're interested in..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-32 border-2 focus:border-primary transition-colors resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-right space-y-6">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.icon === Globe || item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === Globe || item.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="group bg-card border-2 border-border hover:border-primary/30 rounded-2xl p-6 hover-lift transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 ${item.color} bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors" style={{fontSize:'14px'}} >
                    {item.value}
                  </p>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20 rounded-3xl p-8">
              <div className="text-center mb-6">
                <div className="inline-flex p-3 bg-primary/20 rounded-2xl mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">Stay Connected</h3>
                <p className="text-muted-foreground">
                  Subscribe for exclusive offers, beauty tips, and stories from our cooperative
                </p>
              </div>

              <form className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 h-12 bg-background border-2 focus:border-primary"
                  required
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Operating Hours */}
            <div className="bg-card border-2 border-border rounded-2xl p-6">
              <h4 className="font-heading font-bold text-lg mb-4">Operating Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium text-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplets, Sparkles, Heart, ShoppingCart, Check } from "lucide-react";
import edibleOil from "@/assets/edible-oil.jpg";
import hairOil from "@/assets/hair-oil.jpg";
import arganCream from "@/assets/argan-cream.jpg";

const products = [
  {
    title: "Culinary Argan Oil",
    description: "Cold-pressed edible argan oil, perfect for salads and traditional Moroccan dishes. Rich in vitamins and antioxidants.",
    image: edibleOil,
    icon: Heart,
    price: "$24.99",
    badge: "Best Seller",
    benefits: ["100% Pure & Organic", "Rich Nutty Flavor", "Heart Healthy"]
  },
  {
    title: "Argan Hair Oil",
    description: "Nourishing hair treatment that restores shine, repairs damage, and promotes healthy hair growth.",
    image: hairOil,
    icon: Sparkles,
    price: "$29.99",
    badge: "Popular",
    benefits: ["Repairs Damage", "Adds Shine", "Strengthens Hair"]
  },
  {
    title: "Argan Cream",
    description: "Luxurious moisturizing cream enriched with pure argan oil. Perfect for face and body hydration.",
    image: arganCream,
    icon: Droplets,
    price: "$34.99",
    badge: "New",
    benefits: ["Deep Hydration", "Anti-Aging", "Natural Ingredients"]
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 px-4 py-1">
            Our Collection
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Premium Argan <span className="text-gradient">Products</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Each product is carefully crafted using traditional methods passed down through generations, 
            ensuring the highest quality and authenticity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-2 border-transparent hover:border-primary/20 hover:shadow-2xl transition-all duration-500 animate-scale-in hover-lift bg-card/50 backdrop-blur-sm" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white shadow-lg">
                    {product.badge}
                  </Badge>
                </div>

                {/* Quick View on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="lg" 
                    className="bg-white text-foreground hover:bg-white/90 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>

              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <product.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                        {product.title}
                      </CardTitle>
                      <p className="text-2xl font-bold text-primary mt-1">{product.price}</p>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Benefits List */}
                <div className="space-y-2">
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 mr-3">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 group/btn"
                  size="lg"
                >
                  Learn More
                  <Sparkles className="w-4 h-4 ml-2 group-hover/btn:rotate-12 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-muted-foreground mb-6 text-lg">
            Looking for something specific? We offer custom blends and bulk orders
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 hover:border-primary hover:text-primary transition-all"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Us for Custom Orders
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;

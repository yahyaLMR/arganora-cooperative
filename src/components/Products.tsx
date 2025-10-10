import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Sparkles, Heart } from "lucide-react";
import edibleOil from "@/assets/edible-oil.jpg";
import hairOil from "@/assets/hair-oil.jpg";
import arganCream from "@/assets/argan-cream.jpg";

const products = [
  {
    title: "Culinary Argan Oil",
    description: "Cold-pressed edible argan oil, perfect for salads and traditional Moroccan dishes. Rich in vitamins and antioxidants.",
    image: edibleOil,
    icon: Heart,
    benefits: ["100% Pure & Organic", "Rich Nutty Flavor", "Heart Healthy"]
  },
  {
    title: "Argan Hair Oil",
    description: "Nourishing hair treatment that restores shine, repairs damage, and promotes healthy hair growth.",
    image: hairOil,
    icon: Sparkles,
    benefits: ["Repairs Damage", "Adds Shine", "Strengthens Hair"]
  },
  {
    title: "Argan Cream",
    description: "Luxurious moisturizing cream enriched with pure argan oil. Perfect for face and body hydration.",
    image: arganCream,
    icon: Droplets,
    benefits: ["Deep Hydration", "Anti-Aging", "Natural Ingredients"]
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-medium mb-2">Our Collection</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Premium Argan Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each product is carefully crafted using traditional methods passed down through generations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <product.icon className="w-5 h-5 text-primary" />
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

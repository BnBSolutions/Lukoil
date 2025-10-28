import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Droplet, Award, Shield, Zap, CheckCircle2, ChevronRight } from "lucide-react";
import lubricantsImage from "@/assets/lubricants.jpg";

const Lubricants = () => {
  const products = [
    {
      name: "LUKOIL Genesis",
      type: "Fully Synthetic",
      description: "Ultimate protection for modern engines",
      features: ["Extended drain intervals", "Superior wear protection", "Extreme temperature performance"]
    },
    {
      name: "LUKOIL Luxe",
      type: "Synthetic Blend",
      description: "Advanced protection for everyday driving",
      features: ["Enhanced fuel economy", "Thermal stability", "Excellent cold-start protection"]
    },
    {
      name: "LUKOIL Standard",
      type: "Conventional",
      description: "Reliable protection for all vehicles",
      features: ["Proven performance", "Engine cleanliness", "Affordable quality"]
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "OEM Approved",
      description: "Meets major manufacturer specifications"
    },
    {
      icon: Shield,
      title: "Engine Protection",
      description: "Advanced additives prevent wear and deposits"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized viscosity for maximum efficiency"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${lubricantsImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
              PREMIUM QUALITY
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
              LUKOIL Lubricants
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Engineered for exceptional performance and protection
            </p>
            <Button variant="hero" size="xl" className="group">
              Find at Your Station
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose LUKOIL Lubricants</h2>
            <p className="text-xl text-muted-foreground">Superior protection backed by decades of expertise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Product Line</h2>
            <p className="text-xl text-muted-foreground">Premium oils for every vehicle</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
                <div className="flex items-start justify-between mb-4">
                  <Droplet className="h-12 w-12 text-primary" />
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {product.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">Learn More</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Available at All LUKOIL Stations</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Visit your nearest location to purchase premium LUKOIL lubricants
          </p>
          <Button variant="hero" size="xl">
            Find Your Station
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lubricants;

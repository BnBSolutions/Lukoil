import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Navigation, Clock, Fuel, Store } from "lucide-react";

const PetrolStations = () => {
  const features = [
    {
      icon: Fuel,
      title: "Premium Fuel",
      description: "High-quality gasoline and diesel"
    },
    {
      icon: Store,
      title: "Convenience Store",
      description: "Snacks, beverages, and essentials"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Many locations open around the clock"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your LUKOIL Station
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Over 200 convenient locations across New York, New Jersey, and Pennsylvania
            </p>
            
            <div className="flex gap-4 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Enter your ZIP code or city" 
                  className="pl-10 h-14 bg-card text-foreground border-2"
                />
              </div>
              <Button variant="hero" size="lg" className="h-14 px-8">
                <Navigation className="h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Station Features</h2>
            <p className="text-xl text-muted-foreground">What you'll find at our locations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-muted rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Stations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <div className="text-muted-foreground">States</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Daily Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Download Our App</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find stations, check prices, and earn rewards with the LUKOIL mobile app
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="default" size="lg">Download on iOS</Button>
            <Button variant="secondary" size="lg">Download on Android</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PetrolStations;

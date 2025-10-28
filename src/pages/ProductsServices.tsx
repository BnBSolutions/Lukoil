import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Fuel, Coffee, Car, CreditCard, Smartphone, ShoppingBag, Waves, Wind } from "lucide-react";

const ProductsServices = () => {
  const fuelTypes = [
    {
      icon: Fuel,
      name: "Premium Gasoline",
      description: "High-octane fuel for performance vehicles",
    },
    {
      icon: Fuel,
      name: "Regular Gasoline",
      description: "Quality fuel for everyday driving",
    },
    {
      icon: Fuel,
      name: "Diesel",
      description: "Clean diesel for trucks and commercial vehicles",
    },
  ];

  const services = [
    {
      icon: Coffee,
      title: "Convenience Store",
      description: "Snacks, beverages, and essential items"
    },
    {
      icon: Car,
      title: "Car Wash",
      description: "Automated wash at select locations"
    },
    {
      icon: CreditCard,
      title: "ATM Services",
      description: "24/7 cash access"
    },
    {
      icon: Smartphone,
      title: "Mobile Payment",
      description: "Pay with your phone, earn rewards"
    },
    {
      icon: ShoppingBag,
      title: "Grab & Go",
      description: "Fresh food and ready-to-eat meals"
    },
    {
      icon: Waves,
      title: "Windshield Service",
      description: "Complimentary windshield cleaning"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Products & Services
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Everything you need, all in one convenient location
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Fuel Products</h2>
            <p className="text-xl text-muted-foreground">Premium quality fuel for every vehicle</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {fuelTypes.map((fuel, index) => (
              <Card key={index} className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <fuel.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{fuel.name}</h3>
                <p className="text-muted-foreground text-center">{fuel.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Station Services</h2>
            <p className="text-xl text-muted-foreground">Convenient amenities at most locations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 bg-gradient-primary text-primary-foreground text-center">
              <Wind className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Top Tier Detergent Gasoline</h2>
              <p className="text-xl text-primary-foreground/90 mb-6">
                Our fuel contains additives that help keep your engine clean and running efficiently
              </p>
              <ul className="text-left max-w-md mx-auto space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Reduces carbon deposits
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Improves fuel economy
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Maximizes engine performance
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Lowers emissions
                </li>
              </ul>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsServices;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, CreditCard, Droplet, MapPin, ChevronRight } from "lucide-react";
import fleetImage from "@/assets/fleet-services.jpg";
import lubricantsImage from "@/assets/lubricants.jpg";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Petrol Stations",
      description: "Over 200 convenient locations across NJ, NY & PA",
      color: "primary",
    },
    {
      icon: Droplet,
      title: "Lubricants",
      description: "Premium quality oils and lubricants for your vehicle",
      color: "accent",
    },
    {
      icon: CreditCard,
      title: "Payment Options",
      description: "Multiple payment methods including mobile pay",
      color: "secondary",
    },
    {
      icon: Truck,
      title: "Fuel Delivery",
      description: "Commercial fuel delivery services available",
      color: "primary",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Products & Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for your vehicle and fleet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-2xl group shadow-card hover:shadow-elegant transition-all duration-300">
            <img 
              src={fleetImage} 
              alt="Fleet Services" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-dark opacity-60"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-primary-foreground">
              <h3 className="text-3xl font-bold mb-3">Fleet Services</h3>
              <p className="text-lg mb-4 text-primary-foreground/90">
                Save up to 10¢/gallon with our fleet card program
              </p>
              <Button variant="hero" className="w-fit group">
                Learn More
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl group shadow-card hover:shadow-elegant transition-all duration-300">
            <img 
              src={lubricantsImage} 
              alt="Lubricants" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-dark opacity-60"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-primary-foreground">
              <h3 className="text-3xl font-bold mb-3">Premium Lubricants</h3>
              <p className="text-lg mb-4 text-primary-foreground/90">
                High-quality motor oils engineered for performance
              </p>
              <Button variant="hero" className="w-fit group">
                Shop Now
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

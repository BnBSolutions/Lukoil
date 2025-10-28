import { Button } from "@/components/ui/button";
import { MapPin, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-station.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
          Always Moving Forward
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
          Premium fuel and service across New York, New Jersey, and Pennsylvania
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" className="group">
            <MapPin className="h-5 w-5" />
            Find Your Station
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" size="xl">
            Join Club LUKOIL
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl md:text-5xl font-bold text-accent">200+</div>
            <div className="text-primary-foreground/80 mt-2">Stations</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-4xl md:text-5xl font-bold text-accent">3</div>
            <div className="text-primary-foreground/80 mt-2">States</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-4xl md:text-5xl font-bold text-accent">24/7</div>
            <div className="text-primary-foreground/80 mt-2">Service</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronRight className="h-8 w-8 text-primary-foreground rotate-90" />
      </div>
    </section>
  );
};

export default Hero;

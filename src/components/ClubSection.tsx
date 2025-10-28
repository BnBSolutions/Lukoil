import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Gift, Star, ChevronRight } from "lucide-react";

const ClubSection = () => {
  const benefits = [
    {
      icon: Smartphone,
      title: "Mobile Payments",
      description: "Pay with your phone and save up to 10¢/gallon",
    },
    {
      icon: Gift,
      title: "Exclusive Rewards",
      description: "Earn points on every purchase and redeem for prizes",
    },
    {
      icon: Star,
      title: "VIP Perks",
      description: "Special offers and promotions for members only",
    },
  ];

  return (
    <section id="club" className="py-20 bg-gradient-dark text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
            EXCLUSIVE MEMBERSHIP
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Club LUKOIL
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Start saving today with our free loyalty program
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/10 backdrop-blur-sm border-2 border-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-accent w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-primary-foreground/70">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl" className="group">
            Sign Up Now - It's Free
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-primary-foreground/60 mt-4">
            No fees. No commitments. Just savings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClubSection;

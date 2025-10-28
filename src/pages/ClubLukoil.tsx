import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Smartphone, Gift, Star, DollarSign, TrendingUp, Award, CheckCircle2, ChevronRight } from "lucide-react";

const ClubLukoil = () => {
  const tiers = [
    {
      name: "Gold Member",
      savings: "Up to 5¢/gallon",
      color: "accent"
    },
    {
      name: "Platinum Member",
      savings: "Up to 10¢/gallon",
      color: "primary"
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Instant Savings",
      description: "Save up to 10¢ per gallon on every fill-up"
    },
    {
      icon: Gift,
      title: "Bonus Rewards",
      description: "Earn points on purchases and redeem for prizes"
    },
    {
      icon: Star,
      title: "Exclusive Offers",
      description: "Members-only promotions and special deals"
    },
    {
      icon: TrendingUp,
      title: "Tier Upgrades",
      description: "Unlock higher savings as you fuel more"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Pay with your phone and track your savings"
    },
    {
      icon: Award,
      title: "Birthday Bonus",
      description: "Special rewards during your birthday month"
    },
  ];

  const features = [
    "No enrollment fees",
    "No annual membership costs",
    "Link multiple vehicles",
    "Family account sharing",
    "Real-time savings tracker",
    "Exclusive member events"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-dark text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
              FREE TO JOIN
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Club LUKOIL
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of members saving on every gallon
            </p>
            
            <Card className="p-8 bg-card/10 backdrop-blur-sm border-2 border-primary-foreground/20 max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4">Sign Up Today</h3>
              <div className="space-y-3">
                <Input placeholder="Full Name" className="bg-background/50 border-primary-foreground/20" />
                <Input placeholder="Email Address" type="email" className="bg-background/50 border-primary-foreground/20" />
                <Input placeholder="Phone Number" type="tel" className="bg-background/50 border-primary-foreground/20" />
                <Button variant="hero" size="lg" className="w-full group">
                  Join Now - It's Free
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/60 mt-4">
                Start saving immediately. No commitments required.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Membership Tiers</h2>
            <p className="text-xl text-muted-foreground">The more you fuel, the more you save</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            {tiers.map((tier, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-primary mb-4">{tier.savings}</div>
                <p className="text-muted-foreground">Automatic enrollment based on monthly fuel purchases</p>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Member Benefits</h2>
            <p className="text-xl text-muted-foreground">More than just fuel savings</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Join Club LUKOIL?</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-muted">
              <h3 className="text-2xl font-bold mb-4">Download the App</h3>
              <p className="text-muted-foreground mb-6">
                Track your savings, find stations, and pay with your phone
              </p>
              <div className="space-y-3">
                <Button variant="default" size="lg" className="w-full">
                  Download on iOS
                </Button>
                <Button variant="secondary" size="lg" className="w-full">
                  Download on Android
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClubLukoil;

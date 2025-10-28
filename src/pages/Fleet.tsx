import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Truck, DollarSign, BarChart3, Shield, CheckCircle2, ChevronRight } from "lucide-react";
import fleetImage from "@/assets/fleet-services.jpg";

const Fleet = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Save Up to 10¢/Gallon",
      description: "Competitive rebates based on your monthly fuel volume"
    },
    {
      icon: BarChart3,
      title: "Detailed Reporting",
      description: "Track fuel expenses and vehicle performance with online tools"
    },
    {
      icon: Shield,
      title: "Fraud Protection",
      description: "Advanced security features to protect your fleet"
    },
    {
      icon: Truck,
      title: "Nationwide Acceptance",
      description: "Use your card at thousands of locations"
    },
  ];

  const features = [
    "No enrollment or annual fees",
    "Customizable spending controls",
    "24/7 customer support",
    "Detailed transaction reports",
    "Driver ID and odometer prompts",
    "Exception-based reporting"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fleetImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Fleet Card Program
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Manage your fleet like a pro with our comprehensive fuel card program
            </p>
            <Button variant="hero" size="xl" className="group">
              Apply Now
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Fleet Card Benefits</h2>
            <p className="text-xl text-muted-foreground">Everything you need to manage your fleet efficiently</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
              <h3 className="text-3xl font-bold mb-6">Program Features</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-primary text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 text-primary-foreground/90">
                Join thousands of businesses saving money on fuel with LUKOIL Fleet Cards
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Fast application process
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Cards shipped within 5-7 days
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Dedicated account manager
                </li>
              </ul>
              <Button variant="secondary" size="lg" className="w-full">
                Contact Sales Team
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our fleet specialists are ready to help you find the perfect solution
          </p>
          <Button variant="default" size="xl">
            Call 1-800-LUKOIL
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fleet;

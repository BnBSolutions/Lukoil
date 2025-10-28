import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Truck, Fuel, BarChart3, Users, HeadphonesIcon, CheckCircle2, ChevronRight } from "lucide-react";

const ForBusiness = () => {
  const solutions = [
    {
      icon: Truck,
      title: "Fleet Services",
      description: "Comprehensive fuel card programs with competitive rebates up to 10¢/gallon",
      features: ["Volume-based pricing", "Detailed reporting", "Fraud protection"]
    },
    {
      icon: Building2,
      title: "Commercial Accounts",
      description: "Tailored solutions for businesses of all sizes",
      features: ["Flexible payment terms", "Dedicated account manager", "Custom billing"]
    },
    {
      icon: Fuel,
      title: "Bulk Fuel Delivery",
      description: "On-site fuel delivery for construction, agriculture, and more",
      features: ["Scheduled deliveries", "Emergency service", "Tank monitoring"]
    },
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: "Cost Management",
      description: "Track and control fuel expenses with detailed analytics"
    },
    {
      icon: Users,
      title: "Team Support",
      description: "Dedicated business specialists available 24/7"
    },
    {
      icon: HeadphonesIcon,
      title: "Priority Service",
      description: "Fast response times and premium customer support"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
              BUSINESS SOLUTIONS
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fuel Your Business Forward
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Comprehensive fuel solutions designed for commercial success
            </p>
            <Button variant="hero" size="xl" className="group">
              Request a Quote
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Business Solutions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to keep your business moving</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 bg-gradient-primary text-primary-foreground">
              <h2 className="text-3xl font-bold mb-4 text-center">Why Choose LUKOIL for Business?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 text-center">
                Join thousands of companies that trust LUKOIL for their fuel needs
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Over 200 Locations</h4>
                    <p className="text-primary-foreground/80 text-sm">Convenient access across NY, NJ & PA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Competitive Pricing</h4>
                    <p className="text-primary-foreground/80 text-sm">Volume discounts and rebate programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">24/7 Support</h4>
                    <p className="text-primary-foreground/80 text-sm">Always here when you need us</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Advanced Tools</h4>
                    <p className="text-primary-foreground/80 text-sm">Online management and reporting</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button variant="secondary" size="xl">
                  Contact Business Team
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our business specialists are ready to create a custom solution for your company
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="xl">
              Call 1-800-LUKOIL
            </Button>
            <Button variant="outline" size="xl">
              Request Information
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForBusiness;

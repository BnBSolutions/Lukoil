import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Heart, Users, Recycle, Sun, Droplets, TreePine, CheckCircle2 } from "lucide-react";

const Responsibility = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: "Environmental Protection",
      description: "Committed to reducing our carbon footprint and protecting the environment",
      points: [
        "Advanced vapor recovery systems",
        "Spill prevention programs",
        "Energy-efficient operations",
        "Sustainable fuel alternatives"
      ]
    },
    {
      icon: Heart,
      title: "Community Engagement",
      description: "Supporting the communities where we operate",
      points: [
        "Local charity partnerships",
        "Educational programs",
        "Emergency response support",
        "Job creation and training"
      ]
    },
    {
      icon: Users,
      title: "Safety & Compliance",
      description: "Maintaining the highest safety standards for employees and customers",
      points: [
        "Regular safety training",
        "Equipment inspections",
        "Regulatory compliance",
        "Emergency preparedness"
      ]
    },
  ];

  const environmental = [
    {
      icon: Recycle,
      title: "Waste Reduction",
      description: "Comprehensive recycling and waste management programs"
    },
    {
      icon: Sun,
      title: "Energy Efficiency",
      description: "LED lighting and energy-efficient equipment at all locations"
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Advanced systems to minimize water usage and prevent contamination"
    },
    {
      icon: TreePine,
      title: "Green Spaces",
      description: "Landscaping and environmental beautification initiatives"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
              OUR COMMITMENT
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Corporate Responsibility
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Building a sustainable future for our communities and environment
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Initiatives</h2>
            <p className="text-xl text-muted-foreground">Making a positive impact every day</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <initiative.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{initiative.title}</h3>
                <p className="text-muted-foreground mb-6">{initiative.description}</p>
                <div className="space-y-2">
                  {initiative.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Environmental Stewardship</h2>
            <p className="text-xl text-muted-foreground">Leading the way in sustainable operations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmental.map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 bg-gradient-primary text-primary-foreground text-center">
              <Heart className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Community Support</h2>
              <p className="text-xl text-primary-foreground/90 mb-6">
                We're proud to support local organizations and causes in the communities we serve
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">$500K+</div>
                  <div className="text-primary-foreground/80">Annual Community Investment</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-primary-foreground/80">Partner Organizations</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">1000+</div>
                  <div className="text-primary-foreground/80">Lives Impacted</div>
                </div>
              </div>
              <Button variant="secondary" size="lg">
                Learn About Our Programs
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Safety First</h2>
            <p className="text-xl text-muted-foreground mb-8">
              The safety of our employees, customers, and communities is our top priority
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Employee Safety</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Comprehensive safety training
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Regular equipment maintenance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Emergency response protocols
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Customer Safety</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Well-lit, secure facilities
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Regular safety inspections
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    24/7 monitoring systems
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Responsibility;

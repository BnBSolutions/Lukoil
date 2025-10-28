import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Building2, MapPin, Users, TrendingUp, Award, Globe } from "lucide-react";

const CompanyAbout = () => {
  const stats = [
    { icon: MapPin, value: "200+", label: "Stations" },
    { icon: Users, value: "500+", label: "Employees" },
    { icon: TrendingUp, value: "25+", label: "Years of Service" },
    { icon: Globe, value: "3", label: "States" },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality",
      description: "Premium products and services you can trust"
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority"
    },
    {
      icon: Building2,
      title: "Integrity",
      description: "Operating with transparency and honesty"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About LUKOIL North America
            </h1>
            <p className="text-xl text-primary-foreground/80">
              A trusted energy partner in the Northeast United States
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                LUKOIL North America has been serving customers in New York, New Jersey, and Pennsylvania for over 25 years. As part of one of the world's largest publicly traded oil and gas companies, we bring global expertise to local communities.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our network of over 200 retail stations provides premium fuel products, convenience items, and exceptional customer service. We're committed to meeting the energy needs of our communities while maintaining the highest standards of quality and environmental responsibility.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-20">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground">What drives us every day</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Mission</h2>
            <Card className="p-12 bg-gradient-primary text-primary-foreground text-center">
              <p className="text-2xl leading-relaxed">
                To provide reliable, high-quality energy products and services while building lasting relationships with our customers, supporting our communities, and protecting the environment for future generations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompanyAbout;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const CompanyContacts = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: "1-800-LUKOIL",
      subtext: "Mon-Fri, 8am-6pm EST"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@lukoil.com",
      subtext: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Locations",
      details: "NY, NJ & PA",
      subtext: "Over 200 stations"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We're here to help. Reach out anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-lg font-medium text-primary mb-1">{method.details}</p>
                <p className="text-sm text-muted-foreground">{method.subtext}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
              </div>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                  <Input type="tel" placeholder="(555) 123-4567" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="How can we help?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..." 
                    rows={6}
                  />
                </div>
                
                <Button variant="default" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">How do I find the nearest LUKOIL station?</h3>
                <p className="text-muted-foreground">Use our station locator tool or download our mobile app to find the nearest location with real-time directions.</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">How do I join Club LUKOIL?</h3>
                <p className="text-muted-foreground">You can sign up online, through our mobile app, or at any LUKOIL station. Membership is free and takes just minutes.</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">What are your customer service hours?</h3>
                <p className="text-muted-foreground">Our customer service team is available Monday through Friday, 8am to 6pm EST. For urgent matters, please call 1-800-LUKOIL.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompanyContacts;

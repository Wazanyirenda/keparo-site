import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+260 967 674 611 (Operations)", "+260 960 923 998 (Office)"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["keparo.enterprises@gmail.com"],
      link: "mailto:keparo.enterprises@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Plot 18 Musenga, Off Kitwe Road", "Chingola, Zambia", "P.O. Box 11014"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 8:00 AM - 12:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl animate-fade-in">
            Let's discuss how we can help with your project
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Get a Quote</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+260 XXX XXX XXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Please describe your project requirements..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {info.link ? (
                              <a href={info.link} className="hover:text-primary transition-colors">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Visit Our Location</h2>
            <Card className="overflow-hidden shadow-medium">
              <div className="bg-gradient-hero h-96 flex items-center justify-center text-white">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Plot 18 Musenga, Off Kitwe Road</p>
                  <p className="text-lg">Chingola, Zambia</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

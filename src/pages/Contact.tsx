import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Linkedin,
  Facebook,
  Instagram,
  MessageSquare,
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const infoCards = [
    {
      icon: MapPin,
      title: "Head Office",
      lines: ["Plot No. 12345, Industrial Area, Lusaka, Zambia", "Mon–Fri, 8:00 AM – 5:00 PM"],
    },
    {
      icon: Phone,
      title: "Phone & Email",
      lines: ["+260 967 674 611", "info@keparoservices.com"],
    },
    {
      icon: Globe,
      title: "Connect Online",
      lines: ["www.keparo.co.zm"],
    },
  ];

  const whyClients = [
    { icon: Clock, title: "Fast Response Times", text: "Quick turnaround on all inquiries and project communications" },
    { icon: MessageSquare, title: "Transparent Communication", text: "Clear, honest updates throughout every project phase" },
    { icon: Users, title: "Experienced Professionals", text: "Skilled team with years of industry expertise" },
    { icon: Globe, title: "Nationwide Coverage", text: "Serving clients across Zambia with reliable service" },
  ];

  return (
    <div className="min-h-screen pb-0">

      {/* Hero Section */}
      <section className="relative w-full min-h-[420px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 container mx-auto px-4 text-center animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch with Keparo Enterprises Ltd</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            We’re ready to discuss your next project, answer your questions, or provide a custom quote.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white animate-fadeIn">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground max-w-4xl mx-auto">
            At Keparo Enterprises Ltd, we’re committed to providing timely and reliable support for all your project needs.
            Whether you’re planning a large‑scale build or need specialized fabrication, our team is ready to assist.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-4 bg-muted/40 animate-fadeIn">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {infoCards.map((item, idx) => (
              <Card key={idx} className="shadow-soft hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-center font-semibold mb-2">{item.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground text-center">
                    {item.lines.map((line, i) => <p key={i}>{line}</p>)}
                    {item.title === "Connect Online" && (
                      <div className="flex items-center justify-center gap-3 pt-2">
                        <Linkedin className="w-4 h-4" />
                        <Facebook className="w-4 h-4" />
                        <Instagram className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white animate-fadeIn">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Send Us a Message</h2>
          <p className="text-center text-sm text-muted-foreground mb-8">Fill out the form below, and our team will get back to you promptly.</p>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="+260 123 456 789" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Select value={formData.subject} onValueChange={(v) => setFormData((p) => ({ ...p, subject: v }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inquiry">Inquiry</SelectItem>
                          <SelectItem value="quote">Request a Quote</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} required placeholder="Write your message here..." />
                  </div>
                  <div className="flex justify-center">
                    <Button type="submit" className="px-8">Submit Message</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-16 bg-muted animate-fadeIn">
        <div className="container mx-auto px-4 max-w-6xl relative">
          {/* Google Map */}
          <Card className="overflow-hidden shadow-medium">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456!2d28.2916!3d-15.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940e123456789ab%3A0xabcdef1234567890!2sIndustrial%20Area%2C%20Lusaka%2C%20Zambia!5e0!3m2!1sen!2szm!4v1700000000000!5m2!1sen!2szm"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-80 md:h-96"
            />
          </Card>

          {/* Floating info card */}
          <Card className="absolute left-4 bottom-4 shadow-strong max-w-xs w-full sm:w-auto sm:left-6 sm:bottom-6 md:left-8 md:bottom-8">
            <CardContent className="p-4">
              <div className="text-sm font-semibold mb-1">Keparo Enterprises Ltd</div>
              <div className="text-xs text-muted-foreground mb-3">
                Plot No. 12345, Industrial Area, Lusaka, Zambia
              </div>
              <Button
                size="sm"
                variant="outline"
                className="bg-white w-full sm:w-auto"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/dir/?api=1&destination=Keparo+Enterprises+Ltd+Lusaka+Zambia",
                    "_blank"
                  )
                }
              >
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Clients Trust */}
      <section className="py-16 bg-white animate-fadeIn">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Clients Trust Keparo</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
            {whyClients.map((f, i) => (
              <div key={i} className="animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7" />
                </div>
                <div className="font-semibold mb-1">{f.title}</div>
                <div className="text-xs text-muted-foreground max-w-xs mx-auto">{f.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;

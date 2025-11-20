// Full compiled Contact page with animated pin on map
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
    subject: "inquiry",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "inquiry", message: "" });
  };

  const handleChange = (e) => {
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
      lines: ["+260 123 456 789", "info@keparo.co.zm"],
    },
    {
      icon: Globe,
      title: "Connect Online",
      lines: ["www.keparo.co.zm"],
    },
  ];

  const whyClients = [
    {
      icon: Clock,
      title: "Fast Response Times",
      text: "Quick turnaround on all inquiries and project communications",
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      text: "Clear, honest updates throughout every project phase",
    },
    {
      icon: Users,
      title: "Experienced Professionals",
      text: "Skilled team with years of industry expertise",
    },
    {
      icon: Globe,
      title: "Nationwide Coverage",
      text: "Serving clients across Zambia with reliable service",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-0">
      {/* Hero */}
      <section className="relative w-full min-h-[420px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch with Keparo Enterprises Ltd</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            We're ready to discuss your next project, answer your questions, or provide a custom quote.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground max-w-4xl mx-auto">
            At Keparo Enterprises Ltd, we're committed to providing timely and reliable support for all your project needs.
            Whether you're planning a large-scale build or need specialized fabrication, our team is ready to assist.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-4 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {infoCards.map((item, idx) => (
              <Card key={idx} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-center font-semibold mb-2">{item.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground text-center">
                    {item.lines.map((l, i) => (
                      <p key={i}>{l}</p>
                    ))}
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

      {/* Send Us a Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Send Us a Message</h2>
          <p className="text-center text-sm text-muted-foreground mb-8">
            Fill out the form below, and our team will get back to you promptly.
          </p>

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
                    <Textarea id="message" name="message" rows={6} required placeholder="Write your message here..." value={formData.message} onChange={handleChange} />
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

      {/* Modern Map with Pin Drop Animation */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto">
            {/* Left descriptive text */}
            <div className="md:w-1/3 text-center md:text-left space-y-4">
              <h3 className="text-2xl font-bold">Our Location</h3>
              <p className="text-muted-foreground">
                Visit our head office in Lusaka's Industrial Area. We are ready to discuss your next project and provide professional guidance.
              </p>
              <p className="text-muted-foreground">Open Monday to Friday, 8:00 AM – 5:00 PM</p>
              <p className="font-semibold">Plot No. 12345, Industrial Area, Lusaka, Zambia</p>
            </div>

            {/* Map with animated pin */}
            <div className="md:w-2/3 relative rounded-2xl overflow-hidden shadow-lg h-[320px]">
              <iframe
                title="Keparo Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=-15.4167,28.3225&z=15&hl=en&output=embed"
              ></iframe>

              {/* Pin overlay */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-full animate-drop">
                <MapPin className="w-8 h-8 text-red-600 drop-shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Trust */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Clients Trust Keparo</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
            {whyClients.map((f, i) => (
              <div key={i}>
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

      {/* CTA */}
      <section className="py-14 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to start your project or request a quote?</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="px-6">Request a Quote</Button>
            <Button className="px-6 bg-white text-foreground hover:bg-white/90" variant="secondary">Call Us Now</Button>
          </div>
        </div>
      </section>

      {/* CSS for Pin Drop Animation */}
      <style>
        {`
          @keyframes drop {
            0% { transform: translate(-50%, -200%) scale(0.5); opacity: 0; }
            60% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1); }
          }
          .animate-drop {
            animation: drop 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;

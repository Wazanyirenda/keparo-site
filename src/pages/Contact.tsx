<<<<<<< HEAD
// Full compiled Contact page with animated pin on map
=======
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
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

<<<<<<< HEAD
  const handleSubmit = (e) => {
=======
  const handleSubmit = (e: React.FormEvent) => {
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "inquiry", message: "" });
  };

<<<<<<< HEAD
  const handleChange = (e) => {
=======
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const infoCards = [
    {
      icon: MapPin,
      title: "Head Office",
<<<<<<< HEAD
      lines: ["Plot No. 12345, Industrial Area, Lusaka, Zambia", "Mon–Fri, 8:00 AM – 5:00 PM"],
=======
      lines: [
        "Plot No. 12345, Industrial Area, Lusaka, Zambia",
        "Mon–Fri, 8:00 AM – 5:00 PM",
      ],
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
    },
    {
      icon: Phone,
      title: "Phone & Email",
<<<<<<< HEAD
      lines: ["+260 123 456 789", "info@keparo.co.zm"],
=======
      lines: [
        "+260 123 456 789",
        "info@keparo.co.zm",
      ],
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
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
<<<<<<< HEAD
    <div className="min-h-screen pt-24 pb-0">
      {/* Hero */}
      <section className="relative w-full min-h-[420px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
=======
    <div className="min-h-screen pb-0">
      {/* Hero */}
      <section className="relative w-full min-h-[420px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch with Keparo Enterprises Ltd</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
<<<<<<< HEAD
            We're ready to discuss your next project, answer your questions, or provide a custom quote.
=======
            We’re ready to discuss your next project, answer your questions, or provide a custom quote.
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground max-w-4xl mx-auto">
<<<<<<< HEAD
            At Keparo Enterprises Ltd, we're committed to providing timely and reliable support for all your project needs.
            Whether you're planning a large-scale build or need specialized fabrication, our team is ready to assist.
=======
            At Keparo Enterprises Ltd, we’re committed to providing timely and reliable support for all your project needs.
            Whether you’re planning a large‑scale build or need specialized fabrication, our team is ready to assist.
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
          </p>
        </div>
      </section>

<<<<<<< HEAD
      {/* Info Cards */}
=======
      {/* Three Info Cards */}
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
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
<<<<<<< HEAD
          <p className="text-center text-sm text-muted-foreground mb-8">
            Fill out the form below, and our team will get back to you promptly.
          </p>

=======
          <p className="text-center text-sm text-muted-foreground mb-8">Fill out the form below, and our team will get back to you promptly.</p>
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
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
<<<<<<< HEAD

=======
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
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
<<<<<<< HEAD

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea id="message" name="message" rows={6} required placeholder="Write your message here..." value={formData.message} onChange={handleChange} />
                  </div>

=======
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} required placeholder="Write your message here..." />
                  </div>
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
                  <div className="flex justify-center">
                    <Button type="submit" className="px-8">Submit Message</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Map */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <Card className="overflow-hidden shadow-medium">
                <div className="h-80 md:h-96 bg-gray-300/60 flex items-center justify-center">
                  <div className="text-center text-foreground/70">
                    <MapPin className="w-10 h-10 mx-auto mb-2" />
                    <div className="font-semibold">Interactive Map</div>
                    <div className="text-sm">Keparo Enterprises Ltd Location</div>
                  </div>
                </div>
              </Card>
              <Card className="absolute left-4 bottom-4 shadow-strong">
                <CardContent className="p-4">
                  <div className="text-sm font-semibold mb-1">Keparo Enterprises Ltd</div>
                  <div className="text-xs text-muted-foreground mb-3">Plot No. 12345, Industrial Area, Lusaka, Zambia</div>
                  <Button size="sm" variant="outline" className="bg-white">Get Directions</Button>
                </CardContent>
              </Card>
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
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

<<<<<<< HEAD
      {/* CTA */}
=======
      {/* CTA Banner */}
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
      <section className="py-14 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to start your project or request a quote?</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="px-6">Request a Quote</Button>
            <Button className="px-6 bg-white text-foreground hover:bg-white/90" variant="secondary">Call Us Now</Button>
          </div>
        </div>
      </section>
<<<<<<< HEAD

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
=======
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
    </div>
  );
};

export default Contact;

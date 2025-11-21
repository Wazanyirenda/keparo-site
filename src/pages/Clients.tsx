import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, ChevronRight } from "lucide-react";
import heroImage from "@/assets/our clients 2.jpg";
import heroConstructionImage from "@/assets/hero-construction.jpg";
import warehouseImage from "@/assets/corridor.png";
import machineryImage from "@/assets/mibula.png";
import cumminsLogo from "@/assets/Cummins logo.png";
import corridorLogo from "@/assets/corridor logistics logo.jpeg";
import mimbulaLogo from "@/assets/mimbula-logo.png";
import kansanshiLogo from "@/assets/FQM logo.png";
import MoxicoLogo from "@/assets/moxico-logo.webp";
import bafokengLogo from "@/assets/bafokeng_zambia_logo.png";
import wbhiLogo from "@/assets/WBHO logo.png";
import lubambeLogo from "@/assets/Lubambe_Logo.png";
import lusangaLogo from "@/assets/lusanga group logo.png";
import lemmerLogo from "@/assets/Lemmer Hydraulics logo.png";
import ansultechLogo from "@/assets/Ansultech Fire Systems logo.png";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const navigate = useNavigate();
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: introRef, inView: introInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: clientsGridRef, inView: clientsGridInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: partnershipsRef, inView: partnershipsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const clients = [
    { logo: cumminsLogo, name: "Cummins Zambia", sector: "Power & Energy" },
    { logo: kansanshiLogo, name: "Kansanshi Mining FQMO", sector: "Mining" },
    { logo: mimbulaLogo, name: "Mimbula Minerals Ltd", sector: "Mining" },
    { logo: MoxicoLogo, name: "Moxico Resources PLC", sector: "Mining" },
    { logo: bafokengLogo, name: "Bafokeng Hydraulics", sector: "Engineering" },
    { logo: wbhiLogo, name: "WBHO", sector: "Construction" },
    { logo: undefined, name: "Musa Superior Products", sector:  "Manufacturing" },
    { logo: lubambeLogo, name: "Lubambe Copper Mine", sector: "Mining" },
    { logo: lusangaLogo, name: "Lusanga Group", sector: "Industrial" },
    { logo: lemmerLogo, name: "Lemmer Hydraulics", sector: "Engineering" },
    { logo: ansultechLogo, name: "Ansultech Fire Systems", sector: "Safety Systems" },
    { logo: corridorLogo, name: "Corridor Logistics", sector: "Logistics" },
  ];

  const testimonials = [
    {
      company: "Cummins Zambia",
      text: "Keparo Enterprises delivered exceptional quality on our facility renovation. Their professionalism and attention to detail were outstanding.",
      author: "Operations Manager",
    },
    {
      company: "Corridor Logistics",
      text: "The warehouse construction was completed ahead of schedule without compromising on quality. Highly recommend their services.",
      author: "Project Director",
    },
    {
      company: "Mimbula Minerals",
      text: "Their expertise in industrial construction and commitment to safety made them the perfect partner for our workshop project.",
      author: "Site Manager",
    },
  ];

  return (
    <div className="min-h-screen pb-0">
      {/* Hero */}
      <section ref={heroRef} className="relative w-full min-h-[420px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-black/75" />
        <div className={`relative z-10 container mx-auto px-4 text-center ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Clients & Partners</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            We partner with leading organizations across Zambia to deliver exceptional construction and engineering solutions.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section ref={introRef} className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className={`text-center text-muted-foreground max-w-4xl mx-auto ${introInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Our success is built on strong partnerships. We value trust, communication, and excellence in every project we deliver. Over 15 years, Keparo has become a preferred partner for leaders in mining, manufacturing, and infrastructure development throughout Zambia.
          </p>
        </div>
      </section>

      {/* Trusted by Leaders */}
      <section ref={clientsGridRef} className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className={`text-2xl md:text-3xl font-bold text-center mb-10 ${clientsGridInView ? 'animate-fade-in-up' : 'opacity-0'}`}>Trusted By Industry Leaders</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <Card key={index} className={`shadow-soft ${clientsGridInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.05}s` }}>
                <CardContent className="p-6 text-center">
                  {client.logo ? (
                    <img src={client.logo} alt={client.name} className="h-10 object-contain mx-auto mb-3" />
                  ) : (
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-light rounded-full mb-3">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  <div className="font-semibold">{client.name}</div>
                  <div className="text-xs text-muted-foreground">{client.sector}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships That Deliver */}
      {/* <section ref={partnershipsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className={`text-2xl md:text-3xl font-bold text-center mb-12 ${partnershipsInView ? 'animate-fade-in-up' : 'opacity-0'}`}>Partnerships That Deliver</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <div className={`rounded-lg overflow-hidden shadow-strong ${partnershipsInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <img src={machineryImage} alt="Workshop Facility Development" className="w-full h-full object-cover" />
            </div>
            <div className={partnershipsInView ? 'animate-slide-in-right' : 'opacity-0'}>
              <div className="text-sm text-muted-foreground font-semibold mb-2">MIMBULA MINERALS</div>
              <h3 className="text-xl font-bold mb-3">Workshop Facility Development</h3>
              <p className="text-muted-foreground mb-4">
                Delivered a comprehensive workshop facility for Mimbula Minerals, including specialized equipment installation and safety systems integration.
              </p>
              <Button variant="link" className="p-0 text-primary">View Project <ChevronRight className="ml-1 w-4 h-4" /></Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className={`order-2 md:order-1 ${partnershipsInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="text-sm text-muted-foreground font-semibold mb-2">CORRIDOR LOGISTICS</div>
              <h3 className="text-xl font-bold mb-3">Warehouse Complex</h3>
              <p className="text-muted-foreground mb-4">
                Constructed a state-of-the-art logistics warehouse featuring advanced storage systems and efficient loading dock configurations.
              </p>
              <Button variant="link" className="p-0 text-primary">View Project <ChevronRight className="ml-1 w-4 h-4" /></Button>
            </div>
            <div className={`rounded-lg overflow-hidden shadow-strong order-1 md:order-2 ${partnershipsInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <img src={warehouseImage} alt="Warehouse Complex" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className={`text-2xl md:text-3xl font-bold text-center mb-12 ${testimonialsInView ? 'animate-fade-in-up' : 'opacity-0'}`}>What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`shadow-medium ${testimonialsInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="p-8">
                  <div className="text-4xl text-primary mb-4">"</div>
                  <p className="text-muted-foreground mb-6 italic">{testimonial.text}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.company}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="relative w-full min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroConstructionImage})` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Proud to build Zambia's future together with our clients</h3>
          <Button className="bg-[#4e4dcb] hover:bg-[#4c5f6a]/90">View Our Projects</Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Build Something Together</h3>
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">Interested in working with us? Contact our team to discuss your next project.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
            
            >Services</Button>
            <Button variant="secondary" className="bg-primary-light text-primary hover:bg-primary/10">Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
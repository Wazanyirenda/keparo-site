import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Wrench, Boxes, HardHat, Check } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import fabricationImage from "@/assets/fabrication.jpg";
import warehouseImage from "@/assets/warehouse.jpg";
import containerImage from "@/assets/container-conversion.jpg";

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: "Construction",
      description: "Comprehensive construction solutions from concept to completion",
    },
    {
      icon: Wrench,
      title: "Steel Fabrication",
      description: "Advanced fabrication with plasma & fiber laser cutting technology",
    },
    {
      icon: Boxes,
      title: "Container Conversions",
      description: "Transform containers into offices, homes, and storage solutions",
    },
    {
      icon: HardHat,
      title: "Machine Hire",
      description: "Wide range of plant and access equipment for your projects",
    },
  ];

  const highlights = [
    "15+ Years of Industry Excellence",
    "TPIN Registered & Certified",
    "Professional Team of Experts",
    "Quality Assured Delivery",
    "Health & Safety Focused",
    "Environmental Commitment",
  ];

  const projects = [
    { image: fabricationImage, title: "Steel Fabrication Workshop", location: "Kitwe" },
    { image: warehouseImage, title: "Corridor Logistics Warehouse", location: "Kasumbalesa" },
    { image: containerImage, title: "Container Office Conversions", location: "Chingola" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Building Excellence in Zambia
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            15+ years of trusted construction, fabrication, and specialized machine hire services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg">
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 text-lg">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex flex-col items-center">
                <Check className="w-6 h-6 mb-2" />
                <p className="text-sm font-medium">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions for all your construction and industrial needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcasing our commitment to quality and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-medium transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get in touch with our team for professional consultation and competitive quotes
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

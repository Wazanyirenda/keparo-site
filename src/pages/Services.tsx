import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Wrench, Zap, Warehouse, Truck, Container, Home, Package, Cog, Clock, Users, Leaf, Target, Award, Shield } from "lucide-react";
import constructionImage from "@/assets/Niru group warehouse development.jpg";
import fabricationImage from "@/assets/steel fabrication.jpg";
import machineHireImage from "@/assets/machine hire.jpeg";
import modularBuildingsImage from "@/assets/modular buildings.jpeg";
import conversionsImage from "@/assets/container.jpg";
import servicesImage from "@/assets/services bg.png";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ServiceDetail from "@/components/ServiceDetail";
import { Service } from "@/types/service";
import { servicesData } from "@/data/services";

export const ServicesPage = (): JSX.Element => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const whyChooseFeatures = [
  {
    id: 1,
    icon: Clock,
    title: "15+ Years Experience",
    description: "Extensive industry experience with proven track record of successful projects.",
    color: "bg-indigo-600"
  },
  {
    id: 2,
    icon: Target,
    title: "On-Time, On-Budget",
    description: "Reliable project management ensuring timely completion and cost control.",
    color: "bg-indigo-600"
  },
  {
    id: 3,
    icon: Users,
    title: "Skilled Team",
    description: "Expert engineers and skilled workers with extensive capabilities.",
    color: "bg-indigo-600"
  },
  {
    id: 4,
    icon: Leaf,
    title: "Environmental Responsibility",
    description: "Sustainable practices and environmental commitment in all implementations.",
    color: "bg-indigo-600"
  },
  {
    id: 5,
    icon: Award,
    title: "Client-Focused Approach",
    description: "Flexible solutions tailored to meet specific client requirements and timely delivery.",
    color: "bg-indigo-600"
  },
  {
    id: 6,
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality processes ensuring exceptional workmanship standards.",
    color: "bg-indigo-600"
  },
];

const iconMap: { [key: string]: React.ElementType } = {
    "building-2": Building2,
    wrench: Wrench,
    zap: Zap,
    warehouse: Warehouse,
    truck: Truck,
    container: Container,
    home: Home,
    package: Package,
    cog: Cog,
  };

const navigate = useNavigate();

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: coreServicesRef, inView: coreServicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: constructionRef, inView: constructionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: fabricationRef, inView: fabricationInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: containerRef, inView: containerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: whyChooseRef, inView: whyChooseInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center h-[400px] px-8 md:px-16 w-full"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(53, 53, 54, 0.6) 0%, rgba(116, 106, 106, 0.6) 100%), url(${servicesImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`relative z-10 flex flex-col items-center gap-4 max-w-4xl text-center ${
            heroInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-white/90">
            Delivering construction, fabrication, modular and machinery solutions across Zambia.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="flex flex-col items-center px-8 md:px-16 py-16 w-full bg-gray-50">
        <div className="max-w-4xl text-center"> 
          <p className="text-base text-gray-700 leading-relaxed">
            With over 15 years of industry experience, Keparo Enterprises Ltd provides comprehensive construction, fabrication, and machinery solutions across Zambia. Our skilled team delivers innovative, reliable, and cost-effective solutions tailored to every project requirement with professionalism.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="flex flex-col items-center px-8 md:px-16 py-16 w-full bg-white">
        <div ref={coreServicesRef} className="max-w-screen-xl w-full flex flex-col gap-12">
          <div
            className={`flex flex-col gap-4 items-center text-center ${
              coreServicesInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Core Services</h2>
            <p className="text-gray-600">
              Comprehensive solutions for all your construction and fabrication needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card
                  key={service.id}
                  className={`flex flex-col gap-6 p-6 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-shadow ${
                    coreServicesInView ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center`}>
                    {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  <Button
                    onClick={() => {
                      setSelectedService(service);
                      setIsDialogOpen(true);
                    }}
                    variant="link"
                    className="p-0 h-auto text-primary hover:text-primary/80 justify-start w-fit font-semibold"
                  >
                    Read More →
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Construction Excellence */}
      <section className="flex flex-col items-center px-8 md:px-16 py-16 w-full bg-gray-50">
        <div ref={constructionRef} className="max-w-screen-xl w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`w-full h-80 rounded-lg overflow-hidden ${
                constructionInView ? "animate-slide-in-left" : "opacity-0"
              }`}
            >
              <img
                src={constructionImage}
                alt="Construction"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`flex flex-col gap-6 ${
                constructionInView ? "animate-slide-in-right" : "opacity-0"
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-900">Construction Excellence</h2>
              <p className="text-gray-700 leading-relaxed">
                Our construction team specializes in everything from residential homes to large commercial structures. With our experienced team and proven project management methodologies, we deliver quality results on time and within budget.
              </p>
              <Button 
              onClick={() =>navigate('/portfolio')}
              className="w-fit bg-gray-800 hover:bg-gray-900 text-white px-6 py-2.5 rounded-lg">
                See more Construction projects
              </Button>
            </div>
          </div>
        </div>
      </section>
 
      {/* Precision Fabrication */}
      <section className="flex flex-col items-center px-8 md:px-16 py-16 w-full bg-white">
        <div ref={fabricationRef} className="max-w-screen-xl w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`flex flex-col gap-6 ${
                fabricationInView ? "animate-slide-in-left" : "opacity-0"
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-900">Precision Fabrication</h2>
              <p className="text-gray-700 leading-relaxed">
                Our state-of-the-art fabrication facility combines traditional craftsmanship with modern technology. From structural steel to custom metalwork, we deliver excellence for every project requirement.
              </p>
              <Button 
              onClick={() =>navigate('/portfolio')}
              className="w-fit bg-gray-800 hover:bg-gray-900 text-white px-6 py-2.5 rounded-lg">
                See Fabrication Projects
              </Button>
            </div>
            <div
              className={`w-full h-80 rounded-lg overflow-hidden ${
                fabricationInView ? "animate-slide-in-right" : "opacity-0"
              }`}
            >
              <img
                src={fabricationImage}
                alt="Fabrication"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Container Solutions */}
      <section className="flex flex-col items-center px-8 md:px-16 py-16 w-full bg-gray-50">
        <div ref={containerRef} className="max-w-screen-xl w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`w-full h-80 rounded-lg overflow-hidden ${
                containerInView ? "animate-slide-in-left" : "opacity-0"
              }`}
            >
              <img
                src={conversionsImage}
                alt="Container Conversions"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`flex flex-col gap-6 ${
                containerInView ? "animate-slide-in-right" : "opacity-0"
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-900">Innovative Container Solutions</h2>
              <p className="text-gray-700 leading-relaxed">
                Transform shipping containers into functional spaces including offices, homes, and storage facilities. Our innovative conversion solutions deliver sustainable buildings with exceptional durability and cost-effectiveness.
              </p>
              <Button 
              onClick={() =>navigate('/portfolio')}
              className="w-fit bg-gray-800 hover:bg-gray-900 text-white px-6 py-2.5 rounded-lg">
                Explore Container Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="flex flex-col items-center px-8 md:px-16 py-16 w-full bg-white">
        <div ref={whyChooseRef} className="max-w-screen-xl w-full flex flex-col gap-12">
          <div
            className={`flex flex-col gap-4 items-center text-center ${
              whyChooseInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Keparo Enterprises Ltd</h2>
            <p className="text-gray-600">
              Your trusted partner for exceptional construction and fabrication solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className={`flex flex-col gap-4 items-center text-center p-6 ${
                  whyChooseInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center bg-[#E0E7Fe]/90`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="flex flex-col items-center px-8 md:px-16 py-16 w-full bg-indigo-600">
        <div className="max-w-screen-xl w-full flex flex-col gap-4 items-center text-center">
          <h2 className="text-3xl font-bold text-white">
            Over 15 Years of Successful Projects Across Zambia
          </h2>
          <p className="text-white/90 max-w-3xl">
            Trusted by clients countrywide for delivering exceptional construction and fabrication.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center px-8 md:px-16 py-16 w-full bg-white">
        <div className="max-w-screen-xl w-full flex flex-col gap-8 items-center text-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to explore how our services can support your next project?
            </h2>
            <p className="text-gray-600">
              Let's discuss your requirements and create the perfect solution for your needs.
            </p>
          </div>
          <div className="flex gap-4">
            <Button 
            onClick={()=>navigate("/contact")}
            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2.5 rounded-lg">
              Get A Quote
            </Button>
            <Button 
            onClick={()=>navigate("/contact")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl p-0 border-0">
          {selectedService && <ServiceDetail service={selectedService} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServicesPage;
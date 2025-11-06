import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Leaf, Award, Users, Handshake, Cog, Home, CheckCircle, AlertTriangle } from "lucide-react";
import {
  Shield,
  Heart,
  Leaf,
  Award,
  Users,
  Handshake,
  Cog,
  Home,
  CheckCircle,
} from "lucide-react";
import safetyImage from "@/assets/safety.jpg";
import { useNavigate } from "react-router-dom";

const HSE = () => {
  const navigate = useNavigate();

  const hseCorePillars = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Absolute zero tolerance approach to accidents and unsafe practices across all projects. We prioritize the safety of our team, clients, and the public above all else.",
      description:
        "Absolute zero tolerance approach to accidents and unsafe practices across all projects. We prioritize the safety of our team, clients, and the public above all else.",
    },
    {
      icon: Heart,
      title: "Health & Wellbeing",
      description: "Comprehensive health programs and wellness initiatives to ensure our personnel remain healthy, safe, and productive throughout their careers with us.",
      description:
        "Comprehensive health programs and wellness initiatives to ensure our personnel remain healthy, safe, and productive throughout their careers with us.",
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Commitment to sustainable practices, waste reduction, and environmental protection in all our construction and operational activities.",
      description:
        "Commitment to sustainable practices, waste reduction, and environmental protection in all our construction and operational activities.",
    },
    {
      icon: Award,
      title: "Compliance & Training",
      description: "Full compliance with all regulations and international standards, supported by comprehensive training programs for all personnel.",
      description:
        "Full compliance with all regulations and international standards, supported by comprehensive training programs for all personnel.",
    },
  ];

  const whyHseCentral = [
    {
      icon: Users,
      title: "Protecting Our People",
      description: "Every team member is valuable. We ensure their safety through rigorous training, proper equipment, and a culture of accountability.",
      description:
        "Every team member is valuable. We ensure their safety through rigorous training, proper equipment, and a culture of accountability.",
    },
    {
      icon: Handshake,
      title: "Upholding Client Trust",
      description: "Clients trust us to deliver projects safely and responsibly. Our HSE record demonstrates our commitment to their confidence.",
      description:
        "Clients trust us to deliver projects safely and responsibly. Our HSE record demonstrates our commitment to their confidence.",
    },
    {
      icon: Cog,
      title: "Ensuring Efficiency",
      description: "Safe operations are efficient operations. Proper safety protocols reduce downtime, improve productivity, and ensure project timelines.",
      description:
        "Safe operations are efficient operations. Proper safety protocols reduce downtime, improve productivity, and ensure project timelines.",
    },
    {
      icon: Leaf,
      title: "Reducing Environmental Impact",
      description: "Sustainable practices protect the environment while meeting regulatory requirements and reducing long-term operational costs.",
      description:
        "Sustainable practices protect the environment while meeting regulatory requirements and reducing long-term operational costs.",
    },
    {
      icon: CheckCircle,
      title: "Guaranteeing Compliance",
      description: "We maintain full compliance with Zambian regulations and international standards, ensuring projects proceed without regulatory delays.",
      description:
        "We maintain full compliance with Zambian regulations and international standards, ensuring projects proceed without regulatory delays.",
    },
    {
      icon: Home,
      title: "Building Community Trust",
      description: "Our commitment to safety and environmental responsibility builds trust with local communities and stakeholders.",
      description:
        "Our commitment to safety and environmental responsibility builds trust with local communities and stakeholders.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${safetyImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Health, Safety & Environment
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Building responsibility, ensuring safety, living with integrity.
          </p>
        </div>
      </section>

      {/* Introduction Text Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground max-w-4xl mx-auto text-lg">
            At Keparo Enterprises, we believe that no project is worth compromising the health and safety of our team, clients, or the environment. Our comprehensive HSE policies are integrated into every aspect of our operations, ensuring that we deliver excellence while maintaining the highest standards of safety and environmental responsibility.
            At Keparo Enterprises, we believe that no project is worth
            compromising the health and safety of our team, clients, or the
            environment. Our comprehensive HSE policies are integrated into
            every aspect of our operations, ensuring that we deliver excellence
            while maintaining the highest standards of safety and environmental
            responsibility.
          </p>
        </div>
      </section>

      {/* Our HSE Core Pillars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Our HSE Core Pillars
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {hseCorePillars.map((pillar, index) => (
              <Card key={index} className="border-none shadow-medium">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
                    <pillar.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm">{pillar.description}</p>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Commitments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Featured Commitments
          </h2>
          
          {/* Block 1: Workplace Safety */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16 max-w-6xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-strong">
              <img
                src={safetyImage}
                alt="Workplace Safety & Risk Management"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Workplace Safety & Risk Management
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Comprehensive safety protocols, rigorous risk assessments, and continuous monitoring ensure that every project site maintains the highest safety standards. Our proactive approach to identifying and mitigating risks protects our team and ensures project success.
              </p>
              <Button 
                className="bg-primary text-white hover:bg-primary/90"
                onClick={() => navigate("/services")}
              >
                Learn More About Safety
              </Button>
            </div>
          </div>


          {/* Block 1: Workplace Safety */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16 max-w-6xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-strong">
              <img
                src={safetyImage}
                alt="Workplace Safety & Risk Management"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Workplace Safety & Risk Management
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Comprehensive safety protocols, rigorous risk assessments, and
                continuous monitoring ensure that every project site maintains
                the highest safety standards. Our proactive approach to
                identifying and mitigating risks protects our team and ensures
                project success.
              </p>
              <Button
                className="bg-primary text-white hover:bg-primary/90"
                onClick={() => navigate("/services")}
              >
                Learn More About Safety
              </Button>
            </div>
          </div>

          {/* Block 2: Environmental Sustainability */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16 max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Environmental Sustainability Initiatives
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                We are committed to sustainable construction practices that minimize environmental impact. From waste reduction and recycling programs to energy-efficient construction methods, we build for a sustainable future.
              </p>
              <Button 
                We are committed to sustainable construction practices that
                minimize environmental impact. From waste reduction and
                recycling programs to energy-efficient construction methods, we
                build for a sustainable future.
              </p>
              <Button
                className="bg-primary text-white hover:bg-primary/90"
                onClick={() => navigate("/services")}
              >
                Explore Our Initiatives
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-strong order-1 md:order-2">
              <img
                src={safetyImage}
                alt="Environmental Sustainability"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Block 3: Training & Certification */}
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-strong">
              <img
                src={safetyImage}
                alt="Training & Certification Programs"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Training & Certification Programs
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Ongoing training and certification programs ensure all personnel are equipped with the latest safety knowledge and best practices. We invest in our team's development to maintain excellence in safety and operational performance.
              </p>
              <Button 
                Ongoing training and certification programs ensure all personnel
                are equipped with the latest safety knowledge and best
                practices. We invest in our team's development to maintain
                excellence in safety and operational performance.
              </p>
              <Button
                className="bg-primary text-white hover:bg-primary/90"
                onClick={() => navigate("/services")}
              >
                View Our Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our HSE Performance Highlights */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our HSE Performance Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">500,000+</div>
              <div className="text-lg opacity-90">Safe Working Hours</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">ISO 45001</div>
              <div className="text-lg opacity-90">Certified</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">Zero</div>
              <div className="text-lg opacity-90">Lost Time Injuries</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Staff Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HSE is Central to Everything We Do */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why HSE is Central to Everything We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {whyHseCentral.map((item, index) => (
              <Card key={index} className="border-none shadow-medium">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Trust Keparo */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-bold mb-8 max-w-4xl mx-auto">
            Our clients trust Keparo because we prioritize safety and sustainability in every project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            Our clients trust Keparo because we prioritize safety and
            sustainability in every project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition"
              onClick={() => navigate("/clients")}
            >
              Client 1
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            <Button
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition"
              onClick={() => navigate("/clients")}
            >
              Client 2
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            <Button
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition"
              onClick={() => navigate("/clients")}
            >
              Client 3
            </Button>
          </div>
        </div>
      </section>

      {/* Partner with a team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-bold mb-8 text-foreground max-w-4xl mx-auto">
            Partner with a team that values safety, quality, and sustainability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
            <Button
              className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg"
              onClick={() => navigate("/contact")}
            >
              Contact Our Team
            </Button>
            <Button 
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg"
              onClick={() => navigate("/portfolio")}
            >
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* New Section with Image and Text Overlay */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/Iframe.png"
              alt="Keparo Image"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                Your Text Here
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HSE;

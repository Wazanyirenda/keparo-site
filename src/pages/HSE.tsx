<<<<<<< HEAD
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import AOS from "aos";
import "aos/dist/aos.css";
import "@/index.css"; // Ensure parallax CSS is included
=======
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Leaf, Award, Users, Handshake, Cog, Home, CheckCircle, AlertTriangle } from "lucide-react";
import safetyImage from "@/assets/safety.jpg";
import { useNavigate } from "react-router-dom";
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c

const HSE = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

=======
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
  const hseCorePillars = [
    {
      icon: Shield,
      title: "Safety First",
<<<<<<< HEAD
      description:
        "Absolute zero tolerance approach to accidents and unsafe practices across all projects. We prioritize the safety of our team, clients, and the public above all else.",
=======
      description: "Absolute zero tolerance approach to accidents and unsafe practices across all projects. We prioritize the safety of our team, clients, and the public above all else.",
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
    },
    {
      icon: Heart,
      title: "Health & Wellbeing",
<<<<<<< HEAD
      description:
        "Comprehensive health programs and wellness initiatives to ensure our personnel remain healthy, safe, and productive throughout their careers with us.",
=======
      description: "Comprehensive health programs and wellness initiatives to ensure our personnel remain healthy, safe, and productive throughout their careers with us.",
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
<<<<<<< HEAD
      description:
        "Commitment to sustainable practices, waste reduction, and environmental protection in all our construction and operational activities.",
=======
      description: "Commitment to sustainable practices, waste reduction, and environmental protection in all our construction and operational activities.",
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
    },
    {
      icon: Award,
      title: "Compliance & Training",
<<<<<<< HEAD
      description:
        "Full compliance with all regulations and international standards, supported by comprehensive training programs for all personnel.",
=======
      description: "Full compliance with all regulations and international standards, supported by comprehensive training programs for all personnel.",
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
    },
  ];

  const whyHseCentral = [
    {
      icon: Users,
      title: "Protecting Our People",
<<<<<<< HEAD
      description:
        "Every team member is valuable. We ensure their safety through rigorous training, proper equipment, and a culture of accountability.",
=======
      description: "Every team member is valuable. We ensure their safety through rigorous training, proper equipment, and a culture of accountability.",
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
    },
    {
      icon: Handshake,
      title: "Upholding Client Trust",
<<<<<<< HEAD
      description:
        "Clients trust us to deliver projects safely and responsibly. Our HSE record demonstrates our commitment to their confidence.",
=======
      description: "Clients trust us to deliver projects safely and responsibly. Our HSE record demonstrates our commitment to their confidence.",
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
    },
    {
      icon: Cog,
      title: "Ensuring Efficiency",
<<<<<<< HEAD
      description:
        "Safe operations are efficient operations. Proper safety protocols reduce downtime, improve productivity, and ensure project timelines.",
=======
      description: "Safe operations are efficient operations. Proper safety protocols reduce downtime, improve productivity, and ensure project timelines.",
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
    },
    {
      icon: Leaf,
      title: "Reducing Environmental Impact",
<<<<<<< HEAD
      description:
        "Sustainable practices protect the environment while meeting regulatory requirements and reducing long-term operational costs.",
=======
      description: "Sustainable practices protect the environment while meeting regulatory requirements and reducing long-term operational costs.",
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
    },
    {
      icon: CheckCircle,
      title: "Guaranteeing Compliance",
<<<<<<< HEAD
      description:
        "We maintain full compliance with Zambian regulations and international standards, ensuring projects proceed without regulatory delays.",
=======
      description: "We maintain full compliance with Zambian regulations and international standards, ensuring projects proceed without regulatory delays.",
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
    },
    {
      icon: Home,
      title: "Building Community Trust",
<<<<<<< HEAD
      description:
        "Our commitment to safety and environmental responsibility builds trust with local communities and stakeholders.",
    },
  ];

  const performanceStats = [
    { value: "500,000+", label: "Safe Working Hours" },
    { value: "ISO 45001", label: "Certified" },
    { value: "Zero", label: "Lost Time Injuries" },
    { value: "100%", label: "Staff Trained" },
  ];

  const clients = ["Client 1", "Client 2", "Client 3"];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section
        className="relative w-full min-h-[600px] flex items-center justify-center parallax transform-gpu will-change-transform"
        style={{
          backgroundImage: `url(${safetyImage})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-aos="fade-down"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-aos="fade-down" data-aos-duration="1000">
            Health, Safety & Environment
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="1200">
=======
      description: "Our commitment to safety and environmental responsibility builds trust with local communities and stakeholders.",
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
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
            Building responsibility, ensuring safety, living with integrity.
          </p>
        </div>
      </section>

<<<<<<< HEAD
      {/* Introduction */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground max-w-4xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="100">
=======
      {/* Introduction Text Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground max-w-4xl mx-auto text-lg">
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
            At Keparo Enterprises, we believe that no project is worth compromising the health and safety of our team, clients, or the environment. Our comprehensive HSE policies are integrated into every aspect of our operations, ensuring that we deliver excellence while maintaining the highest standards of safety and environmental responsibility.
          </p>
        </div>
      </section>

<<<<<<< HEAD
      {/* HSE Core Pillars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-aos="fade-up">
=======
      {/* Our HSE Core Pillars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
            Our HSE Core Pillars
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {hseCorePillars.map((pillar, index) => (
<<<<<<< HEAD
              <Card
                key={index}
                className="border-none shadow-medium transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
=======
              <Card key={index} className="border-none shadow-medium">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
                    <pillar.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured Commitments - Creative Alternating Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-aos="fade-up">
            Featured Commitments
          </h2>

          {[
            {
              title: "Workplace Safety & Risk Management",
              text: "Comprehensive safety protocols, rigorous risk assessments, and continuous monitoring ensure that every project site maintains the highest safety standards. Our proactive approach to identifying and mitigating risks protects our team and ensures project success.",
              btnText: "Learn More About Safety",
              btnLink: "/services",
              color: "bg-blue-500",
              icon: Shield,
            },
            {
              title: "Environmental Sustainability Initiatives",
              text: "We are committed to sustainable construction practices that minimize environmental impact. From waste reduction and recycling programs to energy-efficient construction methods, we build for a sustainable future.",
              btnText: "Explore Our Initiatives",
              btnLink: "/services",
              color: "bg-green-500",
              icon: Leaf,
            },
            {
              title: "Training & Certification Programs",
              text: "Ongoing training and certification programs ensure all personnel are equipped with the latest safety knowledge and best practices. We invest in our team's development to maintain excellence in safety and operational performance.",
              btnText: "View Our Programs",
              btnLink: "/services",
              color: "bg-yellow-500",
              icon: Award,
            },
          ].map((block, idx) => (
            <div
              key={idx}
              className="grid md:grid-cols-2 gap-8 items-center mb-16 transform-gpu will-change-transform relative overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:scale-105"
            >
              {/* Image */}
              <div
                className={`relative h-96 md:h-[400px] rounded-xl overflow-hidden ${idx % 2 === 0 ? "order-1" : "order-2"}`}
                data-aos={idx % 2 === 0 ? "zoom-in-left" : "zoom-in-right"}
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(${safetyImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundAttachment: "fixed",
                }}
              >
                <div
                  className={`absolute top-4 left-4 w-16 h-16 rounded-full flex items-center justify-center ${block.color} text-white text-2xl animate-bounce`}
                >
                  <block.icon />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-40 transition-opacity duration-300 rounded-xl"></div>
              </div>

              {/* Text */}
              <div
                className={`p-8 md:p-12 ${idx % 2 === 0 ? "order-2" : "order-1"}`}
                data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay="100"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{block.title}</h3>
                <p className="text-muted-foreground mb-6 text-lg">{block.text}</p>
                <Button
                  className={`${block.color} text-white hover:bg-white hover:text-black transform transition-transform duration-300 hover:scale-105`}
                  onClick={() => navigate(block.btnLink)}
                >
                  {block.btnText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HSE Performance Highlights */}
      <section className="py-16 bg-primary text-white" data-aos="fade-up">
=======
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
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our HSE Performance Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
<<<<<<< HEAD
            {performanceStats.map((stat, i) => (
              <div key={i} className="transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
=======
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
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Why HSE is Central */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-aos="fade-up">
=======
      {/* Why HSE is Central to Everything We Do */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
            Why HSE is Central to Everything We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {whyHseCentral.map((item, index) => (
<<<<<<< HEAD
              <Card
                key={index}
                className="border-none shadow-medium transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
=======
              <Card key={index} className="border-none shadow-medium">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Clients Trust */}
      <section className="py-16 bg-primary text-white" data-aos="fade-up">
=======
      {/* Clients Trust Keparo */}
      <section className="py-16 bg-primary text-white">
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-bold mb-8 max-w-4xl mx-auto">
            Our clients trust Keparo because we prioritize safety and sustainability in every project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
<<<<<<< HEAD
            {clients.map((client, i) => {
              const bgColors = ["bg-blue-500", "bg-green-500", "bg-yellow-500"];
              const hoverTextColors = ["hover:text-blue-500", "hover:text-green-500", "hover:text-yellow-500"];
              return (
                <Button
                  key={i}
                  onClick={() => navigate("/clients")}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className={`${bgColors[i]} text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-white ${hoverTextColors[i]} hover:scale-105`}
                >
                  {client}
                </Button>
              );
            })}
=======
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate("/clients")}
            >
              Client 1
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate("/clients")}
            >
              Client 2
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate("/clients")}
            >
              Client 3
            </Button>
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Partner With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-bold mb-8 text-foreground max-w-4xl mx-auto" data-aos="fade-up">
            Partner with a team that values safety, quality, and sustainability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-primary text-white hover:bg-primary/90 transform transition-transform duration-300 hover:scale-105 px-8 py-6 text-lg"
              onClick={() => navigate("/contact")}
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Contact Our Team
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white transform transition-transform duration-300 hover:scale-105 px-8 py-6 text-lg"
              onClick={() => navigate("/portfolio")}
              data-aos="fade-up"
              data-aos-delay={200}
=======
      {/* Partner with a team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-bold mb-8 text-foreground max-w-4xl mx-auto">
            Partner with a team that values safety, quality, and sustainability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg"
              onClick={() => navigate("/contact")}
            >
              Contact Our Team
            </Button>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg"
              onClick={() => navigate("/portfolio")}
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
            >
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
<<<<<<< HEAD

=======
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
    </div>
  );
};

<<<<<<< HEAD
export default HSE;
=======
export default HSE;
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c

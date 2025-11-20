// Full HSE page with featured commitments updated (each with its own image)
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
  Factory,
  Globe,
  Building,
} from "lucide-react";
import heroImage from "@/assets/Health and Safety.jpg";
import safetyImage1 from "@/assets/Health and Safety Measures.jpg";
import workplaceSafetyImage from "@/assets/Health and Safety Measures.jpg";
import environmentalImage from "@/assets/prefabricated.jpg";
import trainingImage from "@/assets/Training and Certificate.png";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/index.css";

const HSE = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const hseCorePillars = [
    { icon: Shield, title: "Safety First", description: "Absolute zero tolerance approach to accidents and unsafe practices across all projects. We prioritize the safety of our team, clients, and the public above all else." },
    { icon: Heart, title: "Health & Wellbeing", description: "Comprehensive health programs and wellness initiatives to ensure our personnel remain healthy, safe, and productive throughout their careers with us." },
    { icon: Leaf, title: "Environmental Stewardship", description: "Commitment to sustainable practices, waste reduction, and environmental protection in all our construction and operational activities." },
    { icon: Award, title: "Compliance & Training", description: "Full compliance with all regulations and international standards, supported by comprehensive training programs for all personnel." },
  ];

  const whyHseCentral = [
    { icon: Users, title: "Protecting Our People", description: "Every team member is valuable. We ensure their safety through rigorous training, proper equipment, and a culture of accountability." },
    { icon: Handshake, title: "Upholding Client Trust", description: "Clients trust us to deliver projects safely and responsibly. Our HSE record demonstrates our commitment to their confidence." },
    { icon: Cog, title: "Ensuring Efficiency", description: "Safe operations are efficient operations. Proper safety protocols reduce downtime, improve productivity, and ensure project timelines." },
    { icon: Leaf, title: "Reducing Environmental Impact", description: "Sustainable practices protect the environment while meeting regulatory requirements and reducing long-term operational costs." },
    { icon: CheckCircle, title: "Guaranteeing Compliance", description: "We maintain full compliance with Zambian regulations and international standards, ensuring projects proceed without regulatory delays." },
    { icon: Home, title: "Building Community Trust", description: "Our commitment to safety and environmental responsibility builds trust with local communities and stakeholders." },
  ];

  const performanceStats = [
    { value: "500,000+", label: "Safe Working Hours" },
    { value: "ISO 45001", label: "Certified" },
    { value: "Zero", label: "Lost Time Injuries" },
    { value: "100%", label: "Staff Trained" },
  ];

  const clientIcons = [
    { icon: Factory, label: "Industrial Safety Projects" },
    { icon: Globe, label: "Environmental Protection Initiatives" },
    { icon: Building, label: "Construction HSE Compliance" },
  ];

  // =============================
  //  FEATURED COMMITMENT DATA
  // =============================

  const featuredCommitments = [
    {
      title: "Workplace Safety & Risk Management",
      text: "Comprehensive safety protocols, rigorous risk assessments, and continuous monitoring ensure that every project maintains the highest safety standards.",
      btnText: "Learn More About Safety",
      btnLink: "/services",
      image: workplaceSafetyImage,
    },
    {
      title: "Environmental Sustainability Initiatives",
      text: "We are committed to sustainable construction practices that minimize environmental impact while increasing long-term efficiency.",
      btnText: "Explore Our Initiatives",
      btnLink: "/services",
      image: environmentalImage,
    },
    {
      title: "Training & Certification Programs",
      text: "We equip our team with continuous training and certifications to ensure the latest safety standards are always met.",
      btnText: "View Our Programs",
      btnLink: "/services",
      image: trainingImage,
    },
  ];

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section
        className="relative w-full min-h-[600px] flex items-center justify-center parallax"
        style={{ backgroundImage: `url(${heroImage})` }}
        data-aos="fade-down"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Health, Safety & Environment
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Building responsibility, ensuring safety, living with integrity.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground max-w-4xl mx-auto text-lg">
            At Keparo Enterprises, we believe that no project is worth compromising the health and safety of our team, clients, or the environment. Our comprehensive HSE policies ensure safe, responsible, and sustainable operations.
          </p>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Our HSE Core Pillars
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {hseCorePillars.map((pillar, index) => (
              <Card
                key={index}
                className="border-none shadow-medium transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
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

      {/* FEATURED COMMITMENTS (Second block reversed) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Featured Commitments
          </h2>

          {featuredCommitments.map((block, idx) => {
            const isReversed = idx === 1;

            return (
              <div
                key={idx}
                className="grid md:grid-cols-2 gap-8 items-center mb-16 max-w-6xl mx-auto"
              >
                {/* IMAGE */}
                <div
                  className={`
                    relative h-96 rounded-lg overflow-hidden shadow-strong
                    transition-transform duration-500 hover:scale-105 parallax
                    ${isReversed ? "order-2 md:order-2" : "order-1"}
                  `}
                  style={{ backgroundImage: `url(${block.image})` }}
                  data-aos="zoom-in"
                />

                {/* CONTENT */}
                <div
                  className={`${isReversed ? "order-1 md:order-1" : "order-2"}`}
                  data-aos={isReversed ? "fade-right" : "fade-left"}
                  data-aos-delay="100"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {block.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">{block.text}</p>

                  <Button
                    className="bg-primary text-white hover:bg-primary/90 transform transition-transform duration-300 hover:scale-105"
                    onClick={() => navigate(block.btnLink)}
                  >
                    {block.btnText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* The rest remains unchanged... */}
    </div>
  );
};

export default HSE;

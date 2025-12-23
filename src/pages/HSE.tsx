// Full HSE page with InView animations instead of AOS
import React from "react";
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
import heroImage from "@/assets/Health And Safety Measures.jpg";
import workplaceSafetyImage from "@/assets/Health and Safety Measures.jpg";
import environmentalImage from "@/assets/prefabricated.jpg";
import trainingImage from "@/assets/Training and Certificate.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import "@/index.css";

const HSE = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  };

  const hseCorePillars = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Absolute zero tolerance approach to accidents and unsafe practices across all projects.",
    },
    {
      icon: Heart,
      title: "Health & Wellbeing",
      description:
        "Comprehensive health programs ensuring our personnel remain safe and productive.",
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description:
        "Committed to sustainable practices and environmental protection.",
    },
    {
      icon: Award,
      title: "Compliance & Training",
      description:
        "Comprehensive training and compliance with international standards.",
    },
  ];

  const featuredCommitments = [
    {
      title: "Workplace Safety & Risk Management",
      text: "Comprehensive safety protocols and monitoring ensure the highest standards.",
      btnText: "Learn More About Safety",
      btnLink: "/services",
      image: workplaceSafetyImage,
    },
    {
      title: "Environmental Sustainability Initiatives",
      text: "We minimize environmental impact while increasing operational efficiency.",
      btnText: "Explore Our Initiatives",
      btnLink: "/services",
      image: environmentalImage,
    },
    {
      title: "Training & Certification Programs",
      text: "Continuous upskilling ensures adherence to the latest safety standards.",
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
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Health, Safety & Environment
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto"
          >
            Building responsibility, ensuring safety, living with integrity.
          </motion.p>
        </div>
      </section>

      {/* INTRO */}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <section ref={ref} className="py-16 bg-white">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="container mx-auto px-4"
            >
              <p className="text-center text-muted-foreground max-w-4xl mx-auto text-lg">
                At Keparo Enterprises, we believe that no project is worth compromising health, safety, or environmental responsibility.
              </p>
            </motion.div>
          </section>
        )}
      </InView>

      {/* CORE PILLARS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Our HSE Core Pillars
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {hseCorePillars.map((pillar, index) => (
              <InView triggerOnce key={index}>
                {({ inView, ref }) => (
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="border-none shadow-medium hover:-translate-y-2 hover:shadow-xl transition-transform duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
                          <pillar.icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">
                          {pillar.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {pillar.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COMMITMENTS */}
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
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <motion.div
                      ref={ref}
                      className={`
                        relative h-96 rounded-lg overflow-hidden shadow-strong
                        transition-transform duration-500 hover:scale-105 parallax
                        ${isReversed ? "order-2 md:order-2" : "order-1"}
                      `}
                      style={{ backgroundImage: `url(${block.image})` }}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={zoomIn}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                </InView>

                {/* CONTENT */}
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <motion.div
                      ref={ref}
                      className={`${isReversed ? "order-1 md:order-1" : "order-2"}`}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={isReversed ? fadeRight : fadeLeft}
                      transition={{ duration: 0.7 }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                        {block.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 text-lg">
                        {block.text}
                      </p>

                      <Button
                        className="bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-transform duration-300"
                        onClick={() => navigate(block.btnLink)}
                      >
                        {block.btnText}
                      </Button>
                    </motion.div>
                  )}
                </InView>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HSE;

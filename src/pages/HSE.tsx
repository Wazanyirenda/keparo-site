import React, { useEffect, useRef, useState } from "react";
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
import safetyImage1 from "@/assets/our story.jpg";
import safetyImage2 from "@/assets/structural work.jpg";
import safetyImage3 from "@/assets/Training and Certification.png";
import { useNavigate } from "react-router-dom";

/* ===============================
   Reveal on Scroll Hook
================================ */
const useReveal = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

const HSE = () => {
  const navigate = useNavigate();

  /* ===== Individual reveal insertions ===== */
  const hero = useReveal();
  const intro = useReveal();
  const pillars = useReveal();

  const workplaceSafety = useReveal();
  const environmental = useReveal();
  const training = useReveal();

  const performance = useReveal();
  const whyHse = useReveal();
  const partner = useReveal();

  const hseCorePillars = [
    { icon: Shield, title: "Safety First", description: "Zero tolerance to unsafe practices." },
    { icon: Heart, title: "Health & Wellbeing", description: "Protecting physical and mental health." },
    { icon: Leaf, title: "Environmental Stewardship", description: "Responsible and sustainable operations." },
    { icon: Award, title: "Compliance & Training", description: "Adhering to standards and regulations." },
  ];

  const whyHseCentral = [
    { icon: Users, title: "Protecting Our People", description: "Our people always come first." },
    { icon: Handshake, title: "Client Trust", description: "Safety strengthens partnerships." },
    { icon: Cog, title: "Operational Efficiency", description: "Safe work is productive work." },
    { icon: Leaf, title: "Environmental Care", description: "Minimizing long-term impact." },
    { icon: CheckCircle, title: "Full Compliance", description: "Meeting Zambian & global standards." },
    { icon: Home, title: "Community Trust", description: "Responsible corporate citizenship." },
  ];

  return (
    <div className="min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${safetyImage})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div
          ref={hero.ref}
          className={`relative z-10 text-center reveal ${hero.visible ? "show" : ""}`}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Health, Safety & Environment
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Building responsibility, ensuring safety, living with integrity.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 bg-white">
        <div
          ref={intro.ref}
          className={`container mx-auto px-4 text-center reveal ${intro.visible ? "show" : ""}`}
        >
          <p className="max-w-4xl mx-auto text-lg text-muted-foreground">
            At Keparo Enterprises, every project is executed with unwavering
            commitment to safety, health, and environmental responsibility.
          </p>
        </div>
      </section>

      {/* ================= CORE PILLARS ================= */}
      <section className="py-16 bg-white">
        <div
          ref={pillars.ref}
          className={`container mx-auto px-4 reveal ${pillars.visible ? "show" : ""}`}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Our HSE Core Pillars
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hseCorePillars.map((pillar, index) => (
              <Card
                key={index}
                className="border-none shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <pillar.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WORKPLACE SAFETY ================= */}
      <section className="py-16 bg-white">
        <div
          ref={workplaceSafety.ref}
          className={`container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center reveal ${
            workplaceSafety.visible ? "show" : ""
          }`}
        >
          <img src={safetyImage1} className="rounded-lg shadow-strong h-96 w-full object-cover" />
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Workplace Safety & Risk Management
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Proactive risk identification, strict safety controls, and
              continuous monitoring protect our workforce and projects.
            </p>
            <Button onClick={() => navigate("/services")}>Learn More</Button>
          </div>
        </div>
      </section>

      {/* ================= ENVIRONMENT ================= */}
      <section className="py-16 bg-white">
        <div
          ref={environmental.ref}
          className={`container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center reveal ${
            environmental.visible ? "show" : ""
          }`}
        >
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Environmental Sustainability
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              We reduce environmental impact through responsible resource use,
              waste control, and sustainable construction methods.
            </p>
            <Button onClick={() => navigate("/services")}>Explore Initiatives</Button>
          </div>
          <img src={safetyImage2} className="rounded-lg shadow-strong h-96 w-full object-cover" />
        </div>
      </section>

      {/* ================= TRAINING ================= */}
      <section className="py-16 bg-white">
        <div
          ref={training.ref}
          className={`container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center reveal ${
            training.visible ? "show" : ""
          }`}
        >
          <img src={safetyImage3} className="rounded-lg shadow-strong h-96 w-full object-cover" />
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Training & Certification
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Continuous training ensures all personnel remain competent,
              certified, and safety-conscious at all times.
            </p>
            <Button onClick={() => navigate("/services")}>View Programs</Button>
          </div>
        </div>
      </section>

      {/* ================= PERFORMANCE ================= */}
      <section className="py-16 bg-primary text-white">
        <div
          ref={performance.ref}
          className={`container mx-auto text-center reveal ${
            performance.visible ? "show" : ""
          }`}
        >
          <h2 className="text-4xl font-bold mb-10">
            Our HSE Performance Highlights
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-3xl font-bold">
            <div>500k+<br /><span className="text-lg font-normal">Safe Hours</span></div>
            <div>ISO 45001<br /><span className="text-lg font-normal">Certified</span></div>
            <div>Zero<br /><span className="text-lg font-normal">Incidents</span></div>
            <div>100%<br /><span className="text-lg font-normal">Staff Trained</span></div>
          </div>
        </div>
      </section>

      {/* ================= WHY HSE ================= */}
      <section className="py-16 bg-white">
        <div
          ref={whyHse.ref}
          className={`container mx-auto px-4 reveal ${
            whyHse.visible ? "show" : ""
          }`}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Why HSE Is Central to Everything We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {whyHseCentral.map((item, index) => (
              <Card key={index} className="border-none shadow-medium">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-xl">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNER ================= */}
      <section className="py-16 bg-white">
        <div
          ref={partner.ref}
          className={`container mx-auto text-center reveal ${
            partner.visible ? "show" : ""
          }`}
        >
          <h2 className="text-3xl font-bold mb-6">
            Partner with a team that values safety and sustainability
          </h2>
          <div className="flex justify-center gap-4">
            <Button onClick={() => navigate("/contact")}>Contact Us</Button>
            <Button variant="outline" onClick={() => navigate("/portfolio")}>
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* ================= Reveal CSS ================= */}
      <style>
        {`
          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.9s ease-out;
          }
          .reveal.show {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
    </div>
  );
};

export default HSE;

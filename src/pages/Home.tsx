import React from "react";
import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeaderSection } from "@/components/sections/HeaderSection";
import LogoLoopSection from "@/components/sections/LogoLoopSection";
import { MainContentSection } from "@/components/sections/MainContentSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const Home = (): JSX.Element => {
  return (
    <div className="inline-flex flex-col items-start relative w-full">
      <HeaderSection />
      <LogoLoopSection />
      <ServicesSection />
      <MainContentSection />
      <PortfolioSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CallToActionSection />
      
    </div>
  );
};

export default Home;

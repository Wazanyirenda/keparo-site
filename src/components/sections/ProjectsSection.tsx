import React from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import CardSwap, { Card } from '../CardSwap';
import StructuralFabrication from "@/assets/Structural Fabrication.jpeg";
import SteelFabrication from "@/assets/steel fabrication and processing.jpeg";
import Warehouse from "@/assets/Warehouse and cold storage area.jpeg";

export const ProjectsSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <section ref={ref} className={`relative bg-[#f2f2f2] w-full overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">
        <div className="text-center mb-8 md:mb-12 px-4 sm:px-6">
          <div className="inline-block bg-white px-4 py-1 rounded-full text-sm font-semibold text-[#040709] border border-gray-200">
            Why
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#040709] mt-4">
            Why choose Keparo
          </h2>
          <p className="text-base md:text-lg text-[#040709] max-w-3xl mx-auto mt-4">
            We build more than structures. We create lasting industrial solutions that drive Zambia’s economic progress.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-4">
            <div className="text-sm font-semibold text-[#040709]">
              Highlights
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#040709]">
              Our commitment to excellence
            </h3>
            <p className="text-base md:text-lg text-[#040709]">
              Every project reflects our dedication to superior engineering and client satisfaction.
            </p>
            <Button
              onClick={() => navigate("/portfolio")}
              variant="link"
              className="p-0 text-base font-semibold text-[#040709] hover:no-underline"
            >
              Details {'>'}
            </Button>
          </div>
          <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] w-full max-w-md mx-auto lg:max-w-none">
            <CardSwap
              cardDistance={40}
              verticalDistance={50}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <img src={StructuralFabrication} alt="Structural Fabrication" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
               <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black to-transparent rounded-xl">
                  <h3 className="text-white text-lg font-bold">Structural Fabrication</h3>
                </div>
              </Card>
              <Card>
                <img src={SteelFabrication} alt="Steel fabrication and processing" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black to-transparent rounded-xl">
                  <h3 className="text-white text-base sm:text-lg font-bold">Steel Fabrication</h3>
                </div>
              </Card>
              <Card>
                <img src={Warehouse} alt="Warehouse and cold storage area" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black to-transparent rounded-xl">
                  <h3 className="text-white text-base sm:text-lg font-bold">Warehouse and cold storage area</h3>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

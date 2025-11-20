import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import storyImage from "@/assets/our story.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
export const ServicesSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation();
   const navigate = useNavigate();
  return (
    <section ref={ref} className={`flex flex-col items-center gap-20 px-4 py-12 sm:px-8 sm:py-16 md:px-16 md:py-28 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="flex-col max-w-screen-xl items-center gap-12 sm:gap-16 md:gap-20 bg-white flex w-full">
        <div className="flex-col max-w-screen-md items-center gap-6 sm:gap-8 w-full flex">
          <div className="flex flex-col items-center gap-4 w-full">
             <div className="inline-block bg-[#e0e0e0] px-4 py-1 rounded-full text-sm font-semibold text-[#040709] border border-gray-200">
              <p className="mt-[-1.00px] text-sm font-semibold text-[#040709] text-center">
                Our story
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 sm:gap-6 w-full">
              <h2 className="mt-[-1.00px] text-2xl sm:text-3xl md:text-4xl font-bold text-[#040709] text-center">
                Precision engineering for industrial success
              </h2>

              <p className="text-base sm:text-lg text-[#040709] text-center">
                For over 15 years, Keparo has been the backbone of industrial
                development in Zambia. We deliver projects with uncompromising
                quality, integrity, and professional excellence.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Button
             onClick={() => navigate("/about")}
              variant="outline"
              className="h-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] rounded-xl border border-solid border-[#04070926] bg-transparent hover:bg-[#4e4dcb]  w-full sm:w-auto"
            >
              <span className="font-medium hover:text-white text-[#040709] text-base">
                About us
              </span>
            </Button>

            <Button
             onClick={() => navigate("/services")}
              variant="ghost"
              className="h-auto inline-flex items-center justify-center gap-2 rounded-xl bg-transparent hover:bg-transparent p-0 w-full sm:w-auto"
            >
              <span className="font-medium text-[#040709] text-base">
                Learn more
              </span>
              <ChevronRightIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <img
          className="w-full h-[300px] sm:h-[500px] md:h-[738px] object-cover rounded-xl"
          alt="Placeholder image"
          src={storyImage}
        />
      </div>
    </section>
  );
};
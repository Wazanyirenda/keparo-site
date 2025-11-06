import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import whyChooseUsImage from "@/assets/why choose.jpeg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";

const values = [
  { label: "Experience", zIndex: "z-[5]" },
  { label: "Precision", zIndex: "z-[4]" },
  { label: "Reliability", zIndex: "z-[3]" },
  { label: "Innovation", zIndex: "z-[2]" },
  { label: "Quality", zIndex: "z-[1]" },
  { label: "Safety", zIndex: "z-0" },
];

export const ProjectsSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation();
   const navigate = useNavigate();
  return (
    <section ref={ref} className={`flex flex-col items-center gap-20 px-4 py-12 md:px-16 md:py-28 w-full bg-[#f2f2f2] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="flex flex-col max-w-screen-xl items-center gap-20 w-full">
        <header className="flex-col max-w-screen-md items-center gap-4 w-full flex">
          <div className="inline-flex items-center">
            <div className="w-fit mt-[-1.00px] text-sm font-semibold text-[#040709] text-center">
              Why
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 self-stretch w-full">
            <h2 className="self-stretch mt-[-1.00px] text-2xl sm:text-3xl md:text-4xl font-bold text-[#040709] text-center">
              Why choose Keparo
            </h2>

            <p className="self-stretch text-lg text-[#040709] text-center">
              We build more than structures. We create lasting industrial
              solutions that drive Zambia&#39;s economic progress.
            </p>
          </div>
        </header>

        <div className="w-full bg-[#f2f2f2] flex flex-col items-center justify-center self-stretch">
          <div className="z-[1] flex flex-col md:flex-row items-start self-stretch w-full">
            {values.map((value, index) => (
              <div
                key={value.label}
                className={`gap-4 px-8 py-6 flex-1 grow ${
                  index === 0
                    ? "mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] md:mt-[-1.00px] md:mb-[-1.00px] md:ml-[-1.00px]"
                    : "mt-[-1.00px] mb-[-1.00px] md:mt-[-1.00px] md:mb-[-1.00px]"
                } ${value.zIndex} flex flex-col items-center justify-center self-stretch`}
              >
                <div className="text-lg font-bold text-[#040709] text-center self-stretch">
                  {value.label}
                </div>
              </div>
            ))}
          </div>

          <div className="z-0 flex items-start self-stretch w-full">
            <div className="flex flex-col lg:flex-row items-center gap-20 p-12 flex-1 grow">
              <div className="flex-col items-start justify-center gap-8 flex-1 grow flex w-full">
                <div className="gap-4 flex flex-col items-start self-stretch w-full">
                  <div className="inline-flex items-center">
                    <div className="w-fit mt-[-1.00px] text-sm font-semibold text-[#040709]">
                      Highlights
                    </div>
                  </div>

                  <div className="flex-col items-start gap-6 self-stretch w-full flex">
                    <h3 className="mt-[-1.00px] text-3xl font-bold text-[#040709] self-stretch">
                      Our commitment to excellence
                    </h3>

                    <p className="self-stretch text-base text-[#040709]">
                      Every project reflects our dedication to superior
                      engineering and client satisfaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 self-stretch w-full">
                  <Button
                   onClick={() => navigate("/services")}
                    variant="outline"
                    className="h-auto gap-2 px-6 py-2.5 mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] rounded-xl border-[#04070926] font-medium text-[#040709] hover:bg-[#4c5f6a] text-base"
                  >
                    Explore
                  </Button>

                  <Button
                   onClick={() => navigate("/about")}
                    variant="ghost"
                    className="h-auto gap-2 rounded-xl font-medium text-[#040709] hover:bg-[#4e4dcb] text-base"
                  >
                    Details
                    <ChevronRightIcon className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              <div className="flex-1 grow h-[300px] sm:h-[400px] lg:h-[552px] w-full rounded-md overflow-hidden group">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="Placeholder image"
                  src={whyChooseUsImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

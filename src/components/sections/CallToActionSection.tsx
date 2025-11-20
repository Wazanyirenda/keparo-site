import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const CallToActionSection = (): JSX.Element => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={`flex flex-col items-center gap-20 px-4 py-12 md:px-16 md:py-28 w-full bg-[#f2f2f2] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="flex flex-col max-w-screen-xl items-center gap-20 w-full">
        <div className="flex-col max-w-screen-md items-center gap-8 w-full flex">
          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="w-full text-2xl sm:text-3xl md:text-4xl font-bold text-[#040709] text-center">
              Ready to build something great
            </h2>

            <p className="w-full text-lg text-[#040709] text-center">
              Transform your industrial vision into reality with Keparo&#39;s
              expert engineering solutions.
            </p>
          </div>

          <div className="inline-flex flex-col sm:flex-row items-start gap-4 w-full sm:w-auto">
            <Button 
              onClick={() => navigate("/contact")} 
              className="w-full sm:w-auto h-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border-none bg-[linear-gradient(135deg,rgba(81,64,195,1)_0%,rgba(81,64,195,1)_0%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(104deg,rgba(81,64,195,1)_0%,rgba(122,118,99,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:opacity-90">
              <span className="font-medium text-white text-base">
                Get Quote
              </span>
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate("/portfolio")} 
              className="w-full sm:w-auto h-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-solid border-[#04070926] bg-transparent hover:bg-[#04070908]"
            >
              <span className="font-medium text-[#040709] text-base">Our portfolio</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fabric.jpeg";
export const HeaderSection = (): JSX.Element => {
  return (
    <section className="flex flex-col min-h-[600px] md:min-h-[750px] lg:min-h-[900px] items-center justify-center gap-20 px-4 sm:px-8 md:px-12 lg:px-16 py-0 relative w-full bg-[#f2f2f2]">
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="flex flex-col max-w-screen-xl items-center gap-12 md:gap-16 lg:gap-20 relative w-full flex-[0_0_auto] z-10">
        <div className="flex flex-col max-w-screen-md items-center w-full flex-[0_0_auto] gap-6 md:gap-8 relative">
          <div className="flex flex-col items-center gap-6 relative w-full flex-[0_0_auto]">
            <h1 className="relative w-full mt-[-1.00px] text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              Building Zambia&#39;s future with precision
            </h1>

            <p className="relative w-full text-base sm:text-lg text-white text-center">
              Keparo Enterprises delivers industrial solutions across Zambia. We
              transform complex engineering challenges into robust, reliable
              infrastructure with 15 years of proven expertise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 w-full sm:w-auto relative flex-[0_0_auto]">
            <Button
              variant="outline"
              className="h-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 relative flex-[0_0_auto] bg-white rounded-xl border border-solid hover:bg-white/90 w-full sm:w-auto"
            >
              <span className="relative w-fit font-medium text-[#040709] text-base">
                Services
              </span>
            </Button>

            <Button className="h-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 relative flex-[0_0_auto] bg-[#4e4dcb] rounded-xl hover:bg-[#4e4dcb]/90 w-full sm:w-auto">
              <span className="relative w-fit font-medium text-white text-base">
                Get Quote
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

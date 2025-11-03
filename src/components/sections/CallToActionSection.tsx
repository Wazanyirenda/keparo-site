import React from "react";
import { Button } from "@/components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 w-full bg-[#f2f2f2]">
      <div className="flex flex-col max-w-screen-xl items-center gap-20 w-full">
        <div className="flex-col max-w-screen-md items-center gap-8 w-full flex">
          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="w-full text-4xl font-bold text-[#040709] text-center">
              Ready to build something great
            </h2>

            <p className="w-full text-lg text-[#040709] text-center">
              Transform your industrial vision into reality with Keparo&#39;s
              expert engineering solutions.
            </p>
          </div>

          <div className="inline-flex items-start gap-4">
            <Button className="h-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border-none bg-[linear-gradient(135deg,rgba(81,64,195,1)_0%,rgba(122,118,99,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(104deg,rgba(81,64,195,1)_0%,rgba(122,118,99,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:opacity-90">
              <span className="font-medium text-white text-base">
                Get Quote
              </span>
            </Button>

            <Button
              variant="outline"
              className="h-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-solid border-[#04070926] bg-transparent hover:bg-[#04070908]"
            >
              <span className="font-medium text-[#040709] text-base">
                Our projects
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

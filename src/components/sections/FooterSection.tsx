import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center gap-20 px-16 py-12 w-full bg-[#f2f2f2]">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 w-full">
        <div className="flex items-start gap-20 w-full">
          <div className="flex flex-col items-start gap-6 flex-1">
            <div className="w-fit font-bold text-black text-lg">
              Keparo
            </div>
            <p className="self-stretch text-base text-[#040709]">
              Building Zambia&#39;s future with precision
            </p>
          </div>
          <div className="flex items-start gap-20 flex-1">
            <div className="flex flex-col items-start gap-4 flex-1">
              <div className="w-fit font-semibold text-black text-base">
                About
              </div>
              <div className="flex flex-col items-start gap-3 self-stretch w-full">
                <div className="w-fit text-base text-[#040709]">
                  Services
                </div>
                <div className="w-fit text-base text-[#040709]">
                  Portfolio
                </div>
                <div className="w-fit text-base text-[#040709]">
                  Contact
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 flex-1">
              <div className="w-fit font-semibold text-black text-base">
                Social
              </div>
              <div className="flex flex-col items-start gap-3 self-stretch w-full">
                <div className="w-fit text-base text-[#040709]">
                  LinkedIn
                </div>
                <div className="w-fit text-base text-[#040709]">
                  Facebook
                </div>
                <div className="w-fit text-base text-[#040709]">
                  Twitter
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center pt-8 self-stretch w-full border-t border-solid border-[#04070926]">
          <p className="flex-1 text-sm text-[#040709]">
            © 2024 Keparo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

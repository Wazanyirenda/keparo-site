import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonialData = {
  logo: "/logo-5.svg",
  quote:
    "Keparo transformed our industrial vision into a robust reality with exceptional precision.",
  avatar: "/avatar-image.png",
  name: "John Mwila",
  title: "Operations Director, Mimbula Minerals",
  caseStudyLink: "#",
};

const paginationDots = [
  { active: true },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-4 py-12 md:px-16 md:py-28 w-full bg-[#f2f2f2]">
      <div className="flex-col max-w-screen-xl items-start gap-20 flex w-full">
        <div className="flex flex-col lg:flex-row items-start gap-20 w-full">
          <div className="flex-col items-start justify-center gap-2 flex-1 self-stretch flex">
            <div className="items-start pt-0 pb-24 px-0 self-stretch flex flex-col gap-4 w-full">
              <h2 className="mt-[-1.00px] text-2xl sm:text-3xl md:text-4xl font-bold text-[#040709] self-stretch">
                Client voices
              </h2>

              <p className="self-stretch text-lg text-[#040709]">
                What our partners say about our work
              </p>
            </div>
          </div>

          <div className="flex-col items-start gap-12 flex-1 flex">
            <Card className="w-full border-[#04070926]">
              <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col gap-8">
                <div className="flex-col items-start gap-12 w-full flex">
                  <div className="w-[120px] h-12 relative">
                    <img
                      className="absolute top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_58px)] w-[116px] h-[19px]"
                      alt="Logo"
                      src={testimonialData.logo}
                    />
                  </div>

                  <div className="flex-col items-start gap-6 w-full flex">
                    <p className="self-stretch mt-[-1.00px] text-lg text-[#040709]">
                      &#34;{testimonialData.quote}&#34;
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full">
                      <Avatar className="w-14 h-14">
                        <AvatarImage
                          src={testimonialData.avatar}
                          alt="Avatar image"
                          className="object-cover"
                        />
                      </Avatar>

                      <div className="flex flex-col items-start flex-1">
                        <div className="self-stretch mt-[-1.00px] text-base font-semibold text-[#040709]">
                          {testimonialData.name}
                        </div>

                        <div className="self-stretch text-base text-[#040709]">
                          {testimonialData.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="inline-flex items-center justify-center gap-2 h-auto p-0 rounded-xl hover:bg-transparent"
                  asChild
                >
                  <a href={testimonialData.caseStudyLink}>
                    <span className="text-base text-[#040709]">
                      Read case study
                    </span>
                    <ChevronRightIcon className="w-6 h-6" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div className="items-center justify-between w-full flex">
              <div className="items-start gap-2 inline-flex">
                {paginationDots.map((dot, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 bg-[#040709] rounded ${
                      dot.active ? "" : "opacity-20"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={dot.active ? "true" : "false"}
                  />
                ))}
              </div>

              <div className="items-start gap-4 inline-flex">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-auto p-3 bg-[#f2f2f2] rounded-lg border-[#04070926]"
                  aria-label="Previous testimonial"
                >
                  <img
                    className="w-6 h-6"
                    alt="Arrow back"
                    src="/arrow-back.svg"
                  />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-auto p-3 bg-[#f2f2f2] rounded-lg border-[#04070926]"
                  aria-label="Next testimonial"
                >
                  <img
                    className="w-6 h-6"
                    alt="Arrow forward"
                    src="/arrow-forward.svg"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

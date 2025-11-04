import { ChevronRightIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import mimbulaLogo from "@/assets/mimbula-logo.png";
import testimonialAvatar from "@/assets/mimbula avatar.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// NOTE: This implementation uses Font Awesome icon class names (e.g. "fa fa-star").
// Make sure Font Awesome CSS is available (via CDN link in index.html or installing `@fortawesome/fontawesome-free`) so the icons render correctly.

const testimonials = [
  {
    logo: mimbulaLogo,
    quote: "Keparo transformed our industrial vision into a robust reality with exceptional precision.",
    avatar: testimonialAvatar,
    name: "John Mwila",
    title: "Operations Director, Mimbula Minerals",
    caseStudyLink: "#",
    iconClass: "fa fa-building",
  },
  {
    logo: mimbulaLogo,
    quote: "Their fabrication team delivered outstanding accuracy and fast turnaround times.",
    avatar: testimonialAvatar,
    name: "Sarah Banda",
    title: "Project Manager, Zambezi Logistics",
    caseStudyLink: "#",
    iconClass: "fa fa-cog",
  },
  {
    logo: mimbulaLogo,
    quote: "Responsive, professional and on-schedule — highly recommended for industrial works.",
    avatar: testimonialAvatar,
    name: "Peter Lungu",
    title: "Site Engineer, Copper Ridge",
    caseStudyLink: "#",
    iconClass: "fa fa-truck",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation();
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section ref={ref} className={`flex flex-col items-center gap-12 px-4 py-12 md:px-16 md:py-20 w-full bg-[#f2f2f2] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="max-w-screen-xl w-full">
        <div className="flex flex-col lg:flex-row items-start gap-12 w-full">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#040709]">
              Client voices
            </h2>
            <p className="mt-2 text-lg text-[#040709]">What our partners say about our work</p>
          </div>

          <div className="flex-1">
            <Carousel
              setApi={setApi}
              opts={{ align: 'center', loop: true }}
              plugins={[Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: true })]}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((t, idx) => (
                  <CarouselItem key={idx} className="p-2">
                    <Card className="w-full border-[#04070926]">
                      <CardContent className="p-6 flex flex-col gap-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                            {/* FontAwesome icon — requires FontAwesome CSS */}
                            <i className={`${t.iconClass} text-[#040709] text-xl`} aria-hidden="true" />
                          </div>
                          <img src={t.logo} alt="Client logo" className="h-8 object-contain" />
                        </div>

                        <p className="text-lg text-[#040709]">“{t.quote}”</p>

                        <div className="flex items-center gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={t.avatar} alt={`${t.name} avatar`} className="object-cover" />
                          </Avatar>
                          <div>
                            <div className="font-semibold text-[#040709]">{t.name}</div>
                            <div className="text-sm text-[#040709]">{t.title}</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <a href={t.caseStudyLink} className="inline-flex items-center gap-2 text-base text-[#040709]">
                            Read case study
                            <ChevronRightIcon className="w-5 h-5" />
                          </a>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => api?.scrollPrev()}
                              aria-label="Previous testimonial"
                              className="p-2 bg-[#f2f2f2] rounded-lg"
                            >
                              <img src="/arrow-back.svg" alt="Prev" className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => api?.scrollNext()}
                              aria-label="Next testimonial"
                              className="p-2 bg-[#f2f2f2] rounded-lg"
                            >
                              <img src="/arrow-forward.svg" alt="Next" className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Dots */}
            <div className="flex items-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={`w-2 h-2 rounded-full ${current === i ? 'bg-[#040709]' : 'bg-[#040709] opacity-30'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

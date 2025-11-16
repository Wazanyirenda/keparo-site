import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import constructionImage from "@/assets/hero-construction.jpg";
import fabricationImage from "@/assets/Structural Fabrication.jpeg";
import machineHireImage from "@/assets/machine hire.jpeg";
import modularBuildingsImage from "@/assets/modular buildings.jpeg";
import conversionsImage from "@/assets/container.jpeg";
=======
import constructionImage from "@/assets/hero image.jpg";
import fabricationImage from "@/assets/steel fabrication.jpg";
import machineHireImage from "@/assets/machine hire.jpg";
import modularBuildingsImage from "@/assets/prefabricated.jpg";
import conversionsImage from "@/assets/container.jpg";
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c

const heroSlides = [
  {
    image: constructionImage,
    title: "Building Zambia's future with precision",
    description: "Keparo Enterprises delivers industrial solutions across Zambia. We transform complex engineering challenges into robust, reliable infrastructure with 15 years of proven expertise.",
  },
  {
    image: fabricationImage,
    title: "Custom steel structures and precision manufacturing",
    description: "Our advanced fabrication division specializes in custom steel structures and precision manufacturing. We deliver tailored solutions for complex industrial challenges.",
  },
  {
    image: machineHireImage,
    title: "High-performance industrial equipment rental solutions",
    description: "Keparo provides high-performance industrial equipment rental solutions to support your construction and operational needs with expert technical support.",
  },
  {
    image: modularBuildingsImage,
    title: "Flexible, efficient prefabricated structures",
    description: "We deliver flexible, efficient prefabricated structures designed for rapid deployment, ideal for temporary facilities and remote sites.",
  },
  {
    image: conversionsImage,
    title: "Container modifications for specialized applications",
    description: "Keparo transforms standard containers into specialized industrial solutions, combining innovation with practical functionality.",
  },
];

export const HeaderSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number | undefined>(undefined);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const initialIndex = api.selectedScrollSnap();
    setCurrent(initialIndex);

    const handleSelect = () => {
      const newIndex = api.selectedScrollSnap();
      if (newIndex !== current) {
        setAnimationKey((prev) => prev + 1);
        setTimeout(() => {
          setCurrent(newIndex);
        }, 100);
      }
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api, current]);

  const currentSlide = typeof current === "number" ? heroSlides[current] : null;

  return (
     <section className="flex flex-col h-[100vh] items-start justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-0 relative w-full overflow-hidden">
      {/* Background Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 10000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="absolute inset-0 w-full h-full filter brightness-75"
      >
        <CarouselContent className="h-full -ml-0">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 basis-full h-full relative">
              <div
<<<<<<< HEAD
                className="w-full h-full transition-opacity duration-1000"
=======
                className="w-full h-full min-h-screen transition-opacity duration-1000"
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
<<<<<<< HEAD
                  minHeight: "700px",
=======
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
                }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content Overlay - Left Aligned */}
<<<<<<< HEAD
      <div className="relative z-10 flex flex-col items-start justify-center w-full max-w-4xl text-left px-4">
=======
      <div className="relative z-10 flex flex-col items-start justify-center w-full max-w-4xl text-left px-4 lg:mt-20">
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
        <div className="flex flex-col items-start gap-6 md:gap-8 w-full max-w-3xl">
          {/* Main Heading - Staggered Animation */}
          <h1
            key={`title-${animationKey}`}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-slide-in-left"
            style={{
              animationDelay: "0.1s",
              animationFillMode: "both",
            }}
          >
            {currentSlide?.title}
          </h1>

          {/* Descriptive Paragraph - Staggered Animation */}
          <p
            key={`description-${animationKey}`}
            className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl animate-slide-in-left"
            style={{
              animationDelay: "0.3s",
              animationFillMode: "both",
            }}
          >
            {currentSlide?.description}
          </p>

          {/* Call-to-Action Buttons - Staggered Animation */}
          <div
            key={`buttons-${animationKey}`}
<<<<<<< HEAD
            className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mt-2 animate-slide-in-left"
=======
            className="flex flex-row items-start gap-3 sm:gap-4 mt-2 animate-slide-in-left"
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
            style={{
              animationDelay: "0.5s",
              animationFillMode: "both",
            }}
          >
            <Button
              onClick={() => navigate("/services")}
              variant="outline"
              className="h-auto px-6 py-2.5 bg-white rounded-xl border border-solid border-[white]/20 hover:bg-white/90 hover:text-[#000000] font-medium"
            >
              Services
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              className="h-auto px-6 py-2.5 bg-[#4e4dcb] rounded-xl hover:bg-[#4e4dcb]/90 text-white font-medium"
            >
              Get Quote
            </Button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-start gap-2 mt-8 md:mt-12 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-white w-8 h-2"
                  : "bg-white/50 hover:bg-white/75 w-2 h-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
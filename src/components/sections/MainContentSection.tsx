import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import constructionImage from "@/assets/Warehouse and cold storage area.jpeg";
import fabricationImage from "@/assets/Structural Fabrication.jpeg";
import machineHireImage from "@/assets/machine hire.jpeg";
import modularBuildingsImage from "@/assets/modular buildings.jpeg";
import conversionsImage from "@/assets/container.jpeg";

const services = [
  {
    id: 1,
    tagline: "Construction",
    title: "Large-scale industrial and commercial construction projects",
    description: "Delivering robust structures with precision and reliability",
    image: constructionImage,
    size: "large",
    buttons: [
      { text: "Learn more", variant: "outline" as const },
      { text: "View details", variant: "link" as const, hasIcon: true },
    ],
  },
  {
    id: 2,
    title: "Fabrication",
    description: "Custom steel structures and precision manufacturing",
    image: fabricationImage,
    size: "small",
    buttons: [
      { text: "View details", variant: "link" as const, hasIcon: true },
    ],
  },
  {
    id: 3,
    title: "Machine hire",
    description: "High-performance industrial equipment rental solutions",
    image: machineHireImage,
    size: "small",
    buttons: [
      { text: "View details", variant: "link" as const, hasIcon: true },
    ],
  },
  {
    id: 4,
    title: "Modular buildings",
    description:
      "Flexible, efficient prefabricated structures for rapid deployment",
    image: modularBuildingsImage,
    size: "medium",
    buttons: [
      { text: "Explore", variant: "outline" as const },
      { text: "Details", variant: "link" as const, hasIcon: true },
    ],
  },
  {
    id: 5,
    tagline: "Conversions",
    title: "Container modifications for specialized industrial applications",
    description: "Innovative solutions transforming standard containers",
    image: conversionsImage,
    size: "large",
    buttons: [
      { text: "Explore", variant: "outline" as const },
      { text: "Details", variant: "link" as const, hasIcon: true },
    ],
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center w-full bg-[#f2f2f2]">
      <div className="flex flex-col w-full max-w-[90rem] px-4 py-12 md:px-16 md:py-24">
        <header className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex mb-4">
            <h3 className="text-sm font-semibold text-[#040709]">
              Services
            </h3>
          </div>

          <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#040709] mb-4">
              Comprehensive industrial solutions
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#040709]/80 max-w-2xl">
              Tailored engineering services for complex industrial challenges
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
            <Card
              className="flex flex-col items-start justify-between h-[300px] sm:h-[400px] md:h-[512px] p-6 sm:p-8 w-full border-0 rounded-2xl overflow-hidden relative group"
              style={{
                background: `linear-gradient(0deg,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.3) 100%),url(${services[0].image}) center/cover no-repeat`,
              }}
            >
              <CardContent className="flex flex-col h-full">
                <div className="flex flex-col gap-2 mb-4">
                  <span className="text-sm font-semibold text-white/90">
                    {services[0].tagline}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                    {services[0].title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-white/90 mb-auto">
                  {services[0].description}
                </p>
              </CardContent>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Button
                  variant="outline"
                  className="h-10 sm:h-9 px-4 py-2 rounded-lg border border-white/20 bg-transparent hover:bg-white/10 text-white hover:text-white min-w-[100px]"
                >
                  <span className="text-sm font-medium">
                    Learn more
                  </span>
                </Button>

                <Button
                  variant="link"
                  className="h-10 sm:h-9 p-0 text-white hover:text-white/90 flex items-center gap-1"
                >
                  <span className="text-sm font-medium">
                    View details
                  </span>
                  <ChevronRightIcon className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <Card
                className="flex flex-col items-start justify-between p-6 sm:p-8 h-[300px] sm:h-[280px] border-0 rounded-2xl overflow-hidden group relative"
                style={{
                  background: `linear-gradient(0deg,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.3) 100%),url(${services[1].image}) center/cover no-repeat`,
                }}
              >
                <CardContent className="flex flex-col items-start gap-2 self-stretch w-full p-0">
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {services[1].title}
                  </h4>
                  <p className="text-sm sm:text-base text-white/90">
                    {services[1].description}
                  </p>
                </CardContent>

                <div className="mt-auto">
                  <Button
                    variant="link"
                    className="h-9 p-0 text-white hover:text-white/90 flex items-center gap-1"
                  >
                    <span className="text-sm font-medium">
                      View details
                    </span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </Button>
                </div>
              </Card>

              <Card
                className="flex flex-col items-start justify-between p-6 h-[300px] sm:h-[280px] flex-1 self-stretch border-0 rounded-2xl overflow-hidden group relative"
                style={{
                  background: `linear-gradient(0deg,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.3) 100%),url(${services[2].image}) center/cover no-repeat`,
                }}
              >
                <CardContent className="flex flex-col items-start gap-2 self-stretch w-full p-0">
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {services[2].title}
                  </h4>
                  <p className="text-sm sm:text-base text-white/90">
                    {services[2].description}
                  </p>
                </CardContent>

                <div className="mt-auto">
                  <Button
                    variant="link"
                    className="h-9 p-0 text-white hover:text-white/90 flex items-center gap-1"
                  >
                    <span className="text-sm font-medium">
                      View details
                    </span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center w-full gap-4 sm:gap-6 lg:gap-8">
            <Card
              className="flex flex-col items-start justify-between p-6 sm:p-8 w-full h-[300px] sm:h-[400px] md:h-[280px] border-0 rounded-2xl overflow-hidden group relative"
              style={{
                background: `linear-gradient(0deg,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.3) 100%),url(${services[3].image}) center/cover no-repeat`,
              }}
            >
              <CardContent className="flex flex-col items-start gap-2 self-stretch w-full p-0">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {services[3].title}
                </h3>
                <p className="text-sm sm:text-base text-white/90">
                  {services[3].description}
                </p>
              </CardContent>

              <div className="flex items-center gap-4 mt-auto">
                <Button
                  variant="outline"
                  className="h-9 px-4 py-2 rounded-lg border border-white/20 bg-transparent hover:bg-white/10 text-white hover:text-white"
                >
                  <span className="text-sm font-medium">
                    Explore
                  </span>
                </Button>

                <Button
                  variant="link"
                  className="h-9 p-0 text-white hover:text-white/90 flex items-center gap-1"
                >
                  <span className="text-sm font-medium">
                    Details
                  </span>
                  <ChevronRightIcon className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            <Card
              className="flex flex-col items-start justify-between h-[300px] sm:h-[400px] md:h-[512px] p-6 sm:p-8 w-full border-0 rounded-2xl overflow-hidden relative group"
              style={{
                background: `linear-gradient(0deg,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.3) 100%),url(${services[4].image}) center/cover no-repeat`,
              }}
            >
              <CardContent className="flex flex-col items-start gap-6 self-stretch w-full p-0">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-white/90">
                    {services[4].tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {services[4].title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-white/90">
                  {services[4].description}
                </p>
              </CardContent>

              <div className="flex items-center gap-4 mt-auto">
                <Button
                  variant="outline"
                  className="h-9 px-4 py-2 rounded-lg border border-white/20 bg-transparent hover:bg-white/10 text-white hover:text-white"
                >
                  <span className="text-sm font-medium">
                    Explore
                  </span>
                </Button>

                <Button
                  variant="link"
                  className="h-9 p-0 text-white hover:text-white/90 flex items-center gap-1"
                >
                  <span className="text-sm font-medium">
                    Details
                  </span>
                  <ChevronRightIcon className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

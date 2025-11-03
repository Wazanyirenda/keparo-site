import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const portfolioProjects = [
  {
    image: "/placeholder-image-1.png",
    title: "Mimbula minerals workshop",
    description: "Advanced industrial facility design and construction",
    tags: ["Mining", "Infrastructure", "Engineering"],
  },
  {
    image: "/placeholder-image-2.png",
    title: "Corridor logistics warehouse",
    description: "Large-scale logistics infrastructure development",
    tags: ["Logistics", "Construction", "Design"],
  },
  {
    image: "/placeholder-image-3.png",
    title: "Cummins Zambia renovation",
    description: "Industrial facility modernization and upgrade",
    tags: ["Renovation", "Maintenance", "Engineering"],
  },
];

export const PortfolioSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-4 py-12 sm:px-8 sm:py-16 md:px-16 md:py-28 w-full bg-[#f2f2f2]">
      <div className="flex flex-col max-w-screen-xl items-center gap-20 w-full">
        <header className="max-w-screen-md flex flex-col items-center gap-4 w-full">
          <div className="inline-flex items-center self-stretch">
            <p className="w-fit mt-[-1.00px] text-sm font-semibold text-[#040709] text-center">
              Portfolio
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 self-stretch w-full">
            <h2 className="self-stretch mt-[-1.00px] text-2xl sm:text-3xl md:text-4xl font-bold text-[#040709] text-center">
              Recent industrial projects
            </h2>

            <p className="self-stretch text-lg text-[#040709] text-center">
              Showcasing our engineering excellence across Zambia
            </p>
          </div>
        </header>

        <div className="flex flex-col items-center gap-16 self-stretch w-full">
          <div className="flex flex-col items-center gap-16 self-stretch w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 self-stretch w-full">
              {portfolioProjects.map((project, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-start bg-[#f2f2f2] border border-solid border-[#04070926]"
                >
                  <img
                    className="self-stretch w-full h-[200px] sm:h-[228px] object-cover"
                    alt={project.title}
                    src={project.image}
                  />

                  <CardContent className="flex flex-col items-start gap-6 p-6 self-stretch w-full">
                    <div className="flex flex-col items-start gap-4 self-stretch w-full">
                      <div className="flex flex-col items-start gap-2 self-stretch w-full">
                        <h3 className="mt-[-1.00px] text-xl font-bold text-[#040709] self-stretch">
                          {project.title}
                        </h3>

                        <p className="self-stretch text-base text-[#040709]">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-start gap-2 self-stretch w-full">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="inline-flex items-start px-2.5 py-1 rounded-md border border-solid border-[#04070926] h-auto"
                          >
                            <span className="w-fit mt-[-1.00px] text-sm font-semibold text-[#040709]">
                              {tag}
                            </span>
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 self-stretch w-full">
                      <Button
                        variant="ghost"
                        className="inline-flex items-center justify-center gap-2 h-auto p-0 rounded-xl hover:bg-transparent"
                      >
                        <span className="w-fit font-medium text-[#040709] text-base">
                          View project
                        </span>
                        <ChevronRightIcon className="w-6 h-6" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-4">
            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 h-auto mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-xl border border-solid border-[#04070926]"
            >
              <span className="w-fit font-medium text-[#040709] text-base">
                View all projects
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

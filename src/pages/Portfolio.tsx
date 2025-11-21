import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import niruWarehouseImage from "@/assets/Niru group warehouse development.jpg";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ProjectDetail from "@/components/ProjectDetail";
import { Project } from "@/types/project";
import { projectsData } from "@/data/projects";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Construction", "Warehouse", "Industrial", "Residential", "Commercial", "Conversions", "Equipment"];

  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center min-h-[500px] pt-28 pb-16 sm:pt-32 md:pt-20 md:min-h-[400px] px-8 md:px-16 w-full"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(53, 53, 54, 0.6) 0%, rgba(116, 106, 106, 0.6) 100%), url(${niruWarehouseImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`relative z-10 flex flex-col items-center gap-4 max-w-4xl text-center ${
            heroInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Portfolio</h1>
          <p className="text-base sm:text-lg text-white/90">
            Showcasing excellence through completed projects across Zambia
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer transition-colors px-4 py-2 ${
                  selectedCategory === category 
                    ? "bg-indigo-600 text-white border-indigo-600" 
                    : "hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="flex flex-col items-start bg-[#f2f2f2] border border-solid border-[#04070926] overflow-hidden group transition-all duration-300 hover:shadow-lg cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setIsDialogOpen(true);
                }}
              >
                <div className="self-stretch w-full h-[200px] sm:h-[228px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    alt={project.title}
                    src={project.image}
                  />
                </div>

                <CardContent className="flex flex-col items-start gap-6 p-6 self-stretch w-full">
                  <div className="flex flex-col items-start gap-4 self-stretch w-full">
                    <div className="flex flex-col items-start gap-2 self-stretch w-full">
                      <h3 className="mt-[-1.00px] text-xl font-bold text-[#040709] self-stretch">
                        {project.title}
                      </h3>

                      <p className="self-stretch text-base text-[#040709] line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-start gap-2 self-stretch w-full">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
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
                      className="inline-flex items-center justify-center gap-2 h-auto p-0 rounded-xl hover:bg-[transparent]"
                    >
                      <span className="w-fit font-medium text-[#040709] text-base">
                        View case study
                      </span>
                      <ChevronRightIcon className="w-6 h-6" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="opacity-90">Active Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-0">
          {selectedProject && <ProjectDetail project={selectedProject} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Portfolio;

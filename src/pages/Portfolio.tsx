import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import fabricationImage from "@/assets/fabrication.jpg";
import warehouseImage from "@/assets/warehouse.jpg";
import containerImage from "@/assets/container-conversion.jpg";
import machineryImage from "@/assets/machinery.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Mimbula Minerals Workshop & Office",
      year: "2020",
      location: "Mining Site",
      category: "Construction",
      description: "Complete workshop and office facility construction for mining operations including structural steel work and electrical installations.",
      image: fabricationImage,
    },
    {
      title: "Corridor Logistics Kasumbalesa Warehouse",
      year: "2022",
      location: "Kasumbalesa",
      category: "Warehouse",
      description: "Large-scale warehouse facility featuring steel portal frame construction and modern logistics infrastructure.",
      image: warehouseImage,
    },
    {
      title: "3900m² Kitwe Fabrication & Construction",
      year: "2021",
      location: "Kitwe",
      category: "Industrial",
      description: "Massive fabrication facility with advanced machinery installation and comprehensive workshop setup.",
      image: fabricationImage,
    },
    {
      title: "Kasumbalesa Warehouse – Palsana Investments",
      year: "2023",
      location: "Kasumbalesa",
      category: "Warehouse",
      description: "Modern warehouse construction with climate-controlled storage and efficient loading bay systems.",
      image: warehouseImage,
    },
    {
      title: "Lusanga Group Residential Construction",
      year: "2022",
      location: "Various",
      category: "Residential",
      description: "Multiple residential properties featuring steel structures and modern construction techniques.",
      image: warehouseImage,
    },
    {
      title: "Cummins Zambia Renovation",
      year: "2023",
      location: "Lusaka",
      category: "Commercial",
      description: "Complete facility renovation including structural modifications and modern fit-out works.",
      image: fabricationImage,
    },
    {
      title: "Container Office Conversions",
      year: "2020-2024",
      location: "Multiple Sites",
      category: "Conversions",
      description: "Innovative container conversions into functional offices, homes, and storage facilities across Zambia.",
      image: containerImage,
    },
    {
      title: "Machinery Supply & Installation",
      year: "Ongoing",
      location: "Nationwide",
      category: "Equipment",
      description: "Supply and installation of construction and mining machinery for various industrial clients.",
      image: machineryImage,
    },
  ];

  const categories = ["All", "Construction", "Warehouse", "Industrial", "Residential", "Commercial", "Conversions", "Equipment"];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Our Portfolio</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl animate-fade-in">
            Showcasing excellence through completed projects across Zambia
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-medium transition-all group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Badge className="absolute top-4 right-4 bg-accent">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
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
    </div>
  );
};

export default Portfolio;

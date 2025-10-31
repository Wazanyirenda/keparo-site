import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Building2,
  Wrench,
  Zap,
  Warehouse,
  Truck,
  Boxes,
  Home,
  Package,
  Cog,
} from "lucide-react";
import fabricationImage from "@/assets/fabrication.jpg";
import warehouseImage from "@/assets/warehouse.jpg";
import containerImage from "@/assets/container-conversion.jpg";
import machineryImage from "@/assets/machinery.jpg";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Construction",
      description: "Complete construction services from foundation to finish, including residential, commercial, and industrial projects.",
      image: warehouseImage,
    },
    {
      icon: Wrench,
      title: "Structural Fabrication",
      description: "Expert steel fabrication and structural engineering for industrial and commercial applications.",
      image: fabricationImage,
    },
    {
      icon: Zap,
      title: "Plasma & Fiber Laser Cutting",
      description: "Advanced profile cutting technology for precise metal fabrication and custom steel components.",
      image: fabricationImage,
    },
    {
      icon: Warehouse,
      title: "Steel Portal Frames",
      description: "Design and construction of steel portal frame structures for warehouses, factories, and residential properties.",
      image: warehouseImage,
    },
    {
      icon: Truck,
      title: "Machine Hire & Access Equipment",
      description: "Comprehensive range of plant machinery and access equipment for rent with professional operators.",
      image: machineryImage,
    },
    {
      icon: Boxes,
      title: "Container Conversions",
      description: "Transform shipping containers into functional offices, homes, storage units, and custom spaces.",
      image: containerImage,
    },
    {
      icon: Home,
      title: "Prefabricated Buildings",
      description: "Modular building solutions including cold storage facilities and custom prefab structures.",
      image: containerImage,
    },
    {
      icon: Package,
      title: "Flat Pack Structures",
      description: "Official agents for Cube Modular flat pack prefabricated structures for quick deployment.",
      image: containerImage,
    },
    {
      icon: Cog,
      title: "Plant & Machinery Supply",
      description: "Supply of quality construction equipment and machinery for purchase or long-term lease.",
      image: machineryImage,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Our Services</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl animate-fade-in">
            Comprehensive construction and industrial solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-medium transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Keparo Enterprises?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="font-semibold mb-2">Years Experience</div>
                  <p className="text-sm text-muted-foreground">Proven track record of excellence</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="font-semibold mb-2">Quality Assured</div>
                  <p className="text-sm text-muted-foreground">Commitment to superior standards</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="font-semibold mb-2">Support Available</div>
                  <p className="text-sm text-muted-foreground">Always here when you need us</p>
                </CardContent>
              </Card>
            </div>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

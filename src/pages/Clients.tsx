import { Card, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const Clients = () => {
  const clients = [
    { name: "Cummins Zambia", sector: "Power & Energy" },
    { name: "Kansanshi Mining PLC", sector: "Mining" },
    { name: "Mimbula Minerals", sector: "Mining" },
    { name: "Moxico Resources", sector: "Mining" },
    { name: "WBHO Construction", sector: "Construction" },
    { name: "Lubambe Copper Mine", sector: "Mining" },
    { name: "Corridor Logistics", sector: "Logistics" },
    { name: "Palsana Investments", sector: "Investment & Development" },
    { name: "Lusanga Group", sector: "Property Development" },
    { name: "First Quantum Minerals", sector: "Mining" },
    { name: "Chambishi Metals", sector: "Mining & Smelting" },
    { name: "Zambezi Portland Cement", sector: "Manufacturing" },
  ];

  const testimonials = [
    {
      company: "Cummins Zambia",
      text: "Keparo Enterprises delivered exceptional quality on our facility renovation. Their professionalism and attention to detail were outstanding.",
      author: "Operations Manager",
    },
    {
      company: "Corridor Logistics",
      text: "The warehouse construction was completed ahead of schedule without compromising on quality. Highly recommend their services.",
      author: "Project Director",
    },
    {
      company: "Mimbula Minerals",
      text: "Their expertise in industrial construction and commitment to safety made them the perfect partner for our workshop project.",
      author: "Site Manager",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Our Clients</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl animate-fade-in">
            Trusted by leading companies across Zambia
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Companies We Work With</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're proud to serve diverse sectors including mining, construction, logistics, and manufacturing
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-4">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">{client.sector}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-medium">
                <CardContent className="p-8">
                  <div className="text-4xl text-primary mb-4">"</div>
                  <p className="text-muted-foreground mb-6 italic">{testimonial.text}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {["Mining", "Construction", "Logistics", "Manufacturing", "Energy", "Property Development", "Commercial", "Industrial"].map((industry, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-primary-light text-primary font-semibold rounded-full"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Active Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;

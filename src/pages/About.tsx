import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality",
      description: "Delivering excellence in every project through meticulous attention to detail",
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Building trust through transparency, honesty, and ethical business practices",
    },
    {
      icon: Target,
      title: "Safety",
      description: "Zero-tolerance approach to accidents with comprehensive safety protocols",
    },
    {
      icon: Eye,
      title: "Environment",
      description: "Committed to sustainable practices and environmental responsibility",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">About Keparo Enterprises</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl animate-fade-in">
            Building Zambia's future for over 15 years
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
              <p>
                Keparo Enterprises Ltd is a leading Zambian company specializing in construction and specialized machine hire services. Registered under TPIN 1001591067, we have been proudly serving the construction industry for over 15 years.
              </p>
              <p>
                Our expertise spans comprehensive construction solutions, structural fabrication, steel portal frames, container conversions, prefabricated buildings, and the supply of plant and machinery. We serve a diverse range of sectors including mining, logistics, and commercial construction.
              </p>
              <p>
                Based in Chingola, we have successfully delivered numerous projects throughout Zambia, establishing ourselves as a trusted partner for companies seeking quality, professionalism, and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To continue expanding our role as a market leader in the construction and specialized machine hire industry, delivering innovative solutions while maintaining the highest standards of quality and professionalism across all our services.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional construction, fabrication, and machinery services that exceed client expectations through innovation, skilled craftsmanship, safety excellence, and environmental stewardship while contributing to Zambia's industrial development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

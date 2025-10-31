import { Card, CardContent } from "@/components/ui/card";
import { Shield, HardHat, Leaf, AlertTriangle, CheckCircle, Users } from "lucide-react";
import safetyImage from "@/assets/safety.jpg";

const HSE = () => {
  const safetyPolicies = [
    {
      icon: Shield,
      title: "Zero Tolerance Policy",
      description: "Absolute zero tolerance approach to accidents and unsafe practices across all projects.",
    },
    {
      icon: HardHat,
      title: "PPE Requirements",
      description: "Mandatory personal protective equipment for all personnel on site at all times.",
    },
    {
      icon: Users,
      title: "Trained Personnel",
      description: "All staff undergo comprehensive safety training and regular refresher courses.",
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Thorough risk assessments conducted before commencement of any work activities.",
    },
  ];

  const environmentalCommitments = [
    {
      icon: Leaf,
      title: "Waste Reduction",
      description: "Systematic approach to minimizing waste and promoting recycling on all projects.",
    },
    {
      icon: CheckCircle,
      title: "Compliance",
      description: "Full compliance with all Zambian environmental regulations and international standards.",
    },
    {
      icon: Leaf,
      title: "Fuel Efficiency",
      description: "Regular maintenance of equipment to ensure optimal fuel efficiency and reduced emissions.",
    },
    {
      icon: CheckCircle,
      title: "Sustainable Practices",
      description: "Implementation of sustainable construction practices and materials wherever possible.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Health, Safety & Environment
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl animate-fade-in">
            Your safety and environmental responsibility are our top priorities
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Safety</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Keparo Enterprises, we believe that no project is worth compromising the health and safety of our team, clients, or the environment. Our comprehensive HSE policies are integrated into every aspect of our operations.
                </p>
                <p>
                  We maintain the highest standards of safety culture, ensuring that all personnel are properly trained, equipped with appropriate PPE, and empowered to stop work if they identify any safety concerns.
                </p>
                <p>
                  Our zero-tolerance approach to accidents has earned us an excellent safety record and the trust of major clients across Zambia.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-strong">
              <img
                src={safetyImage}
                alt="Safety on construction site"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Policies */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Safety Policies & Procedures</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive safety measures to protect everyone on site
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {safetyPolicies.map((policy, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <policy.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{policy.title}</h3>
                  <p className="text-muted-foreground text-sm">{policy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Requirements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Safety Requirements on Site</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    Mandatory Equipment
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Safety helmets (hard hats)</li>
                    <li>• High-visibility clothing</li>
                    <li>• Steel-toed safety boots</li>
                    <li>• Safety glasses/goggles</li>
                    <li>• Hearing protection (where required)</li>
                    <li>• Gloves appropriate to task</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    Training Requirements
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Induction for all site personnel</li>
                    <li>• Equipment-specific training</li>
                    <li>• First aid certification</li>
                    <li>• Emergency response procedures</li>
                    <li>• Regular safety refresher courses</li>
                    <li>• Toolbox talks and briefings</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Environmental Commitment</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building responsibly for a sustainable future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {environmentalCommitments.map((commitment, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-4">
                    <commitment.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{commitment.title}</h3>
                  <p className="text-muted-foreground text-sm">{commitment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">0</div>
              <div className="text-lg opacity-90">Lost Time Injuries (Target)</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Staff Safety Trained</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Years Safety Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HSE;

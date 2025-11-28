import { Card, CardContent } from "@/components/ui/card";
import { Eye, ShieldCheck, Target, CheckCircle2, Award, Users, Leaf, Gem, Zap } from "lucide-react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import fabricationImg from "@/assets/fabrication.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import safetyImg from "@/assets/safety.jpg";
import mimbulaImg from "@/assets/Mimbula structure.jpg";
import steelFabricationImg from "@/assets/steel fabrication and processing.jpeg";

const About = () => {
  const strengths = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Established for over 15 years with an excellent reputation",
    },
    {
      icon: CheckCircle2,
      title: "High-Quality Delivery",
      description: "Ability to deliver high-quality projects to your specification",
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Dedicated team of professionals who consistently deliver on time and within budget",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Environmentally conscious practices",
    },
    {
      icon: Gem,
      title: "Quality Materials",
      description: "High-quality materials",
    },
    {
      icon: Zap,
      title: "Flexible & Adaptive",
      description: "Flexible and adaptive to client needs",
    },
  ];

  const specializations = [
    "Plasma Profile Cutting",
    "Steel Fabrication & Processing",
    "Warehouse Construction",
    "Prefabricated Buildings",
    "Container Conversions",
  ];

  const stats = [
    { value: 15, label: "Years Experience", suffix: "+" },
    { value: 500, label: "Projects Completed", suffix: "+" },
    { value: 100, label: "Client Satisfaction", suffix: "%" },
  ];

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Animation hooks for different sections
  const { ref: overviewRef, inView: overviewInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: whyChooseRef, inView: whyChooseInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: hseRef, inView: hseInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section with Stats */}
      <section className="relative bg-black text-white pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 lg:pt-16 lg:pb-20 xl:pt-24 xl:pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${mimbulaImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:items-center">
            <div className="animate-fade-in text-center lg:text-left mt-12 sm:mt-16 md:mt-20 lg:mt-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                About Keparo Enterprises
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/80 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Over 15 years of excellence in construction and fabrication, delivering high-quality projects across Zambia.
              </p>
              
              {/* Stats */}
              <div ref={statsRef} className="bg-white backdrop-blur-sm p-6 shadow-lg max-w-lg mx-auto lg:mx-0">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
                        {statsInView ? (
                          <CountUp end={stat.value} duration={3} suffix={stat.suffix} />
                        ) : (
                          `0${stat.suffix}`
                        )}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-center items-center">
              <img 
                src={mimbulaImg} 
                alt="Mimbula Structure" 
                className="rounded-lg shadow-strong w-full max-w-xl object-cover object-center h-[400px] xl:h-[450px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview with Image */}
      <section ref={overviewRef} className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            <div className={`order-2 lg:order-1 ${overviewInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <img 
                src={steelFabricationImg} 
                alt="Steel Fabrication and Processing" 
                className="rounded-lg shadow-medium w-full h-auto max-h-[450px] object-cover"
              />
            </div>
            
            <div className={`order-1 lg:order-2 ${overviewInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Established Excellence in Construction
              </h2>
              <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
                <p>
                  Keparo Enterprises Limited is an established construction and fabrication company based in Chingola, Zambia, with over 15 years of industry experience and an excellent reputation.
                </p>
                <p>
                  We specialize in plasma profile cutting, steel fabrication and processing, warehouses, prefabricated buildings, and container conversions.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                {specializations.map((spec) => (
                  <div key={spec} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section ref={visionRef} className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className={`text-center mb-12 ${visionInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Our Vision & Mission</h2>
              <p className="text-muted-foreground text-base sm:text-lg">Guiding principles that drive our success</p>
            </div>

            {/* Vision and Mission Cards */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
              {/* Vision Card */}
              <div className={`relative group ${visionInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <Card className="relative border-0 shadow-strong bg-gradient-to-br from-primary to-primary/90 text-white overflow-hidden">
                  <CardContent className="p-8 sm:p-10 md:p-12">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                        <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2">Our Vision</h3>
                        <div className="w-16 h-1 bg-white/50 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-white/95 leading-relaxed text-base sm:text-lg">
                      To continue expanding our role as a market leader in the building, construction and specialised machine hire industries.
                    </p>
                  </CardContent>
                  {/* Decorative Elements */}
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full"></div>
                  <div className="absolute -right-5 -top-5 w-24 h-24 bg-white/5 rounded-full"></div>
                </Card>
              </div>

              {/* Mission Card */}
              <div className={`relative group ${visionInView ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <Card className="relative border-0 shadow-strong bg-gradient-to-br from-secondary to-secondary/90 text-white overflow-hidden">
                  <CardContent className="p-8 sm:p-10 md:p-12">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                        <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2">Our Mission</h3>
                        <div className="w-16 h-1 bg-white/50 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-white/95 leading-relaxed text-base sm:text-lg">
                      To be the leading construction and hire company wherever we operate that delivers high-quality, cost-effective projects on budget and on schedule. We employ qualified building engineers and skilled artisans, and support a motivated, talented, flexible and focused team. We value the importance of our relationships and remain fair and true in our dealings with all employees, clients, vendors and partners. Our clients count on our dependability, our safety record, our drive, and our integrity.
                    </p>
                  </CardContent>
                  {/* Decorative Elements */}
                  <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full"></div>
                  <div className="absolute -left-5 -top-5 w-24 h-24 bg-white/5 rounded-full"></div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyChooseRef} className="flex flex-col items-center px-8 md:px-16 py-16 w-full bg-white">
        <div className="max-w-screen-xl w-full flex flex-col gap-12">
          <div className={`flex flex-col gap-4 items-center text-center ${whyChooseInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Keparo Enterprises</h2>
            <p className="text-gray-600">
              Your trusted partner for exceptional construction and fabrication solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col gap-4 items-center text-center p-6 ${whyChooseInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-indigo-600">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health, Safety & Environment */}
      <section ref={hseRef} className="py-16 sm:py-20 bg-black text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${safetyImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center ${hseInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center mb-6 mx-auto">
                <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Our Commitment to Health, Safety & Environment
              </h2>
              <p className="text-white/90 leading-relaxed text-base sm:text-lg mb-8">
                Safety, health and environment are core values of our business. We maintain a comprehensive health and safety management system, provide proper personal protective equipment, and actively encourage safe work practices.
              </p>
              <p className="text-white/90 leading-relaxed text-base sm:text-lg">
                We're committed to preventing environmental pollution, complying with Government Environmental Acts, and conducting our activities according to sustainable development principles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

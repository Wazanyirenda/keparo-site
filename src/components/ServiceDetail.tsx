  import React, { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import { Service } from "@/types/service";
  import { cn } from "@/lib/utils";
  import { CustomCarousel } from "@/components/Carousel";
  import { Award, Building2, CalendarDays, CheckCircle, LucideProps, MapPin, Target, Users } from "lucide-react";

  interface ServiceDetailProps {
    service: Service;
    className?: string;
  }

  const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, className }) => {
    const [IconComponent, setIconComponent] = useState<React.ComponentType<LucideProps> | null>(null);

    useEffect(() => {
      const importIcon = async () => {
        try {
          const { default: icon } = await import(`lucide-react/dist/esm/icons/${service.icon.toLowerCase()}`);
          setIconComponent(() => icon);
        } catch (error) {
          console.error(`Icon not found: ${service.icon}, falling back to Building2`);
          setIconComponent(() => Building2);
        }
      };
      importIcon();
    }, [service.icon]);

    const renderSection = (title: string, items: string[], Icon: React.ComponentType<LucideProps>, grid = false) => (
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Icon className="w-6 h-6 text-primary mr-3" />
          <h3 className="text-2xl font-semibold text-accent">{title}</h3>
        </div>
        {grid ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {items.map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
              <span key={index} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    );

    return (
      <div className={cn("p-6 sm:p-8 max-h-[80vh] overflow-y-auto", className)}>
        {service.category ? (
          <header className="mb-6">
            <span className="bg-yellow-400/80 text-yellow-900 px-4 py-1.5 rounded-full text-sm font-semibold">{service.category}</span>
            <h1 id="modal-title" className="text-4xl font-bold text-accent mt-3 mb-4">{service.title}</h1>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-muted-foreground">
              {service.client && (
                <div className="flex items-center">
                  <Building2 className="w-5 h-5 text-primary mr-2" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">Client</p>
                    <p className="font-medium">{service.client}</p>
                  </div>
                </div>
              )}
              {service.location && (
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">Location</p>
                    <p className="font-medium">{service.location}</p>
                  </div>
                </div>
              )}
              {service.completed && (
                <div className="flex items-center">
                  <CalendarDays className="w-5 h-5 text-primary mr-2" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">Completed</p>
                    <p className="font-medium">{service.completed}</p>
                  </div>
                </div>
              )}
            </div>
          </header>
        ) : (
          <header className="flex items-start mb-6">
            {IconComponent && <IconComponent className="w-12 h-12 text-primary mr-6 flex-shrink-0" />}
            <div>
              <h1 id="modal-title" className="text-3xl font-bold text-accent">{service.title}</h1>
              <p className="text-lg text-muted-foreground mt-1">{service.shortDescription}</p>
            </div>
          </header>
        )}

        {service.images && service.images.length > 0 && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <CustomCarousel
              items={service.images.map((src, i) => (
                <img key={i} src={src} alt={`${service.title} image ${i + 1}`} className="w-full h-64 object-cover" />
              ))}
              autoScroll
              showControls={true}
            />
          </div>
        )}

        {!service.category && (
          <>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-accent">Overview</h3>
              </div>
              <p className="text-muted-foreground whitespace-pre-line">{service.overview}</p>
            </div>

            {renderSection("Key Capabilities", service.capabilities, CheckCircle, true)}
            {renderSection("Sectors Served", service.sectors, Users)}
            {renderSection("Notable Achievements", service.achievements, Award, true)}
          </>
        )}

        <footer className="mt-10 pt-6 border-t border-border text-center">
          <h4 className="text-xl font-semibold text-accent mb-2">Interested in this service?</h4>
          <p className="text-muted-foreground mb-4">Let's discuss how we can help you achieve your goals.</p>
          <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors">
            Contact Us
          </Link>
        </footer>
      </div>
    );
  };

  export default ServiceDetail;

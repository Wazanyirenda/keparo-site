import { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="flex flex-col gap-0 bg-white">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <Badge className="mb-3 bg-primary">{project.category}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {project.title}
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
            {project.client && (
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>{project.client}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 space-y-8">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-sm">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Overview */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Project Overview</h3>
          <p className="text-gray-700 leading-relaxed">{project.detailedDescription}</p>
        </div>

        {/* Challenges */}
        {project.challenges && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Challenges</h3>
            <p className="text-gray-700 leading-relaxed">{project.challenges}</p>
          </div>
        )}

        {/* Solution */}
        {project.solution && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Solution</h3>
            <p className="text-gray-700 leading-relaxed">{project.solution}</p>
          </div>
        )}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Results</h3>
            <ul className="space-y-3">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Additional Images - Only for Equipment, Unnamed, Unnamed 2, and Unnamed 3 projects */}
        {project.images && project.images.length > 1 && (project.id === 8 || project.id === 9 || project.id === 10 || project.id === 11) && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Project Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.images.slice(1).map((image, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 2}`}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Card>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectDetail;


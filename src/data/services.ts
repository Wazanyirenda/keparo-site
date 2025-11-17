import { Service } from "@/types/service";

import constructionImage from "@/assets/Niru group warehouse development.jpg";
import constructionImage2 from "@/assets/constructionImage2.jpg";
import StructImage from "@/assets/structFabrication.jpg";
import StructImage2 from "@/assets/structFabrication2.jpg";
import StructImage3 from "@/assets/structFabrication3.jpg";
import StructImage4 from "@/assets/structFabrication4.jpg";
import fabricationImage from "@/assets/fabrication.jpg";
import machineHireImage from "@/assets/machine hire.jpg";
import modularBuildingsImage from "@/assets/modular buildings.jpeg";
import conversionsImage from "@/assets/container-conversion.jpg";
import warehouseImage from "@/assets/Mimbula structure.jpg";
import plasmaCuttingImage from "@/assets/steel fabrication and processing.jpeg";
import plasmaCuttingImage2 from "@/assets/plasma cut.jpg";
import plasmaCuttingImage3 from "@/assets/our story.jpg";
import steelSupplyImage from "@/assets/steel fabrication.jpg";
import flatpackImage from "@/assets/prefabricated.jpg";
import structuralImage from "@/assets/structural work.jpg";

export const servicesData: Service[] = [
  {
    id: 1,
    icon: "building-2",
    title: "Construction",
    description: "Comprehensive construction services for commercial, industrial, and residential projects.",
    shortDescription: "End-to-end construction solutions delivering quality and precision from the ground up.",
    overview: "Our construction division offers a full spectrum of services, from initial site preparation and civil works to the final handover. We specialize in managing complex projects, ensuring they are completed on time, within budget, and to the highest standards of quality and safety. Our experienced team collaborates closely with clients, architects, and engineers to bring visions to life.",
    capabilities: [
      "Project Management & Supervision",
      "Civil & Earthworks",
      "Structural Steel Erection",
      "Concrete & Foundation Works",
      "Building Finishing & MEP Services",
      "Turnkey Project Delivery",
    ],
    sectors: ["Mining", "Commercial Real Estate", "Industrial", "Residential", "Public Infrastructure"],
    achievements: [
      "Completed over 50 large-scale industrial projects.",
      "Achieved a 98% client satisfaction rate.",
      "Maintained an impeccable safety record with zero major incidents.",
    ],
    images: [constructionImage, warehouseImage, constructionImage2],
    color: "bg-indigo-600",
  },
  {
    id: 2,
    icon: "wrench",
    title: "Structural Fabrication",
    description: "High-quality steel fabrication for diverse structural applications.",
    shortDescription: "Precision structural steel fabrication tailored to your project's exact specifications.",
    overview: "We are leaders in the fabrication of structural steel for a wide range of applications. Our state-of-the-art workshop is equipped with advanced machinery to handle complex designs with precision. From heavy-duty industrial frames to custom architectural steelwork, we deliver durable and reliable products that form the backbone of your structures.",
    capabilities: [
      "Heavy Structural Steel",
      "Platework & Chutes",
      "Conveyor & Gantry Fabrication",
      "Custom Architectural Steel",
      "Pipe Spooling & Supports",
      "On-site Welding & Installation",
    ],
    sectors: ["Mining & Processing", "Energy & Power", "Commercial Construction", "Warehousing"],
    achievements: [
      "Fabricated over 10,000 tons of structural steel.",
      "Certified to ISO 9001 quality standards.",
      "Key supplier for major mining expansion projects.",
    ],
    images: [StructImage, structuralImage, StructImage2, StructImage3, StructImage4],
    color: "bg-indigo-600",
  },
  {
    id: 3,
    icon: "zap",
    title: "Plasma Cutting",
    description: "High-definition plasma cutting for precise and clean steel profiles.",
    shortDescription: "Advanced HD plasma cutting services for intricate shapes and profiles.",
    overview: "Our high-definition plasma cutting services provide exceptional precision and speed for cutting various metals. This technology allows for intricate designs, clean edges, and minimal material waste, making it ideal for producing custom components, brackets, and plates for any industrial or creative application.",
    capabilities: [
      "High-Definition CNC Plasma Cutting",
      "Cuts Mild Steel, Stainless Steel, and Aluminum",
      "Plate Nesting for Material Optimization",
      "Bevel Cutting Capabilities",
      "Fast Turnaround Times",
      "Custom Part Prototyping",
    ],
    sectors: ["Manufacturing", "Automotive", "Signage & Art", "General Engineering"],
    achievements: [
      "Capable of processing over 100 tons of plate per month.",
      "Achieved cutting tolerances within 0.5mm.",
      "Reduced client production costs through efficient nesting.",
    ],
    images: [plasmaCuttingImage, plasmaCuttingImage3,plasmaCuttingImage2],
    color: "bg-indigo-600",
  },
  {
    id: 4,
    icon: "warehouse",
    title: "Steel Portal Frames",
    description: "Design, fabrication, and erection of robust steel portal frames.",
    shortDescription: "Cost-effective and versatile steel portal frames for warehouses and industrial buildings.",
    overview: "We specialize in the complete lifecycle of steel portal frames, from engineering design to fabrication and on-site erection. Our portal frames are the ideal solution for creating large, open-plan spaces for warehouses, workshops, and agricultural buildings, offering strength, durability, and speed of construction.",
    capabilities: [
      "In-house Structural Design & Detailing",
      "Fabrication of Columns, Rafters & Purlins",
      "Supply of Cladding & Roofing Systems",
      "Full Erection & Installation Services",
      "Customizable Bay Sizes & Heights",
      "Integration with Mezzanine Floors",
    ],
    sectors: ["Logistics & Warehousing", "Agriculture", "Manufacturing", "Retail & Commercial"],
    achievements: [
      "Delivered over 100,000 sq. meters of portal frame structures.",
      "Reduced construction time by up to 30% compared to traditional methods.",
      "Engineered frames to withstand extreme weather conditions.",
    ],
    images: [warehouseImage, structuralImage, constructionImage],
    color: "bg-indigo-600",
  },
  {
    id: 5,
    icon: "truck",
    title: "Machine Hire",
    description: "Reliable plant and machine hire for construction and industrial projects.",
    shortDescription: "A modern, well-maintained fleet of heavy machinery and equipment for hire.",
    overview: "Our machine hire division provides access to a wide range of reliable, modern equipment to support your project needs. From earthmoving machinery to cranes and access equipment, our fleet is rigorously maintained to ensure maximum uptime and safety on your site. We offer flexible hire terms with or without certified operators.",
    capabilities: [
      "Excavators, Loaders & Dozers",
      "Mobile & Rough Terrain Cranes",
      "Tipper Trucks & Water Bowsers",
      "Compaction Equipment",
      "Telehandlers & Access Platforms",
      "Flexible Short & Long-Term Hire",
    ],
    sectors: ["Construction", "Mining", "Civil Engineering", "Agriculture", "Logistics"],
    achievements: [
      "Fleet availability consistently above 95%.",
      "Provided full equipment solutions for major infrastructure projects.",
      "Recognized for excellent service and technical support.",
    ],
    images: [machineHireImage, constructionImage, fabricationImage],
    color: "bg-indigo-600",
  },
  {
    id: 6,
    icon: "container",
    title: "Container Conversions",
    description: "Innovative and practical container conversions for various uses.",
    shortDescription: "Custom shipping container modifications for offices, housing, and specialized units.",
    overview: "We transform standard shipping containers into functional and innovative spaces. Our conversions are perfect for site offices, accommodation units, pop-up shops, ablution blocks, and specialized equipment enclosures. We handle all aspects of the conversion, including insulation, electrical, plumbing, and finishing, to deliver a turnkey solution.",
    capabilities: [
      "Site Offices & Boardrooms",
      "Accommodation & Ablution Blocks",
      "Mobile Clinics & Classrooms",
      "Pop-up Retail & Cafe Spaces",
      "Generator & Equipment Housings",
      "Custom Design & Fabrication",
    ],
    sectors: ["Construction Sites", "Events & Hospitality", "Remote Operations", "Education"],
    achievements: [
      "Delivered over 500 converted units across the region.",
      "Developed a rapid-deployment housing solution.",
      "Praised for innovative design and robust build quality.",
    ],
    images: [conversionsImage, modularBuildingsImage, flatpackImage],
    color: "bg-indigo-600",
  },
  {
    id: 7,
    icon: "home",
    title: "Prefabricated Buildings",
    description: "Fast and efficient prefabricated building solutions for various needs.",
    shortDescription: "High-quality prefabricated modular buildings for rapid deployment and flexibility.",
    overview: "Our prefabricated buildings offer a fast, flexible, and high-quality alternative to traditional construction. Manufactured in a controlled factory environment, our modules are delivered to site for rapid assembly, minimizing disruption and accelerating project timelines. Ideal for offices, schools, clinics, and remote camps.",
    capabilities: [
      "Modular Office Complexes",
      "Prefabricated Classrooms & Clinics",
      "Remote Workforce Accommodation",
      "Durable & Weather-Resistant Materials",
      "Full MEP & HVAC Integration",
      "Scalable & Relocatable Designs",
    ],
    sectors: ["Mining Camps", "Education", "Healthcare", "Commercial Offices", "Disaster Relief"],
    achievements: [
      "Reduced on-site construction time by up to 60%.",
      "Provided emergency medical facilities in record time.",
      "Designed multi-story modular office buildings.",
    ],
    images: [modularBuildingsImage, flatpackImage, conversionsImage],
    color: "bg-indigo-600",
  },
  {
    id: 8,
    icon: "package",
    title: "Flat Pack Prefab Structures",
    description: "Cost-effective and easy-to-transport flat pack building solutions.",
    shortDescription: "Versatile flat pack structures ideal for remote or temporary applications.",
    overview: "Our flat pack structures are engineered for efficiency, from transport to assembly. These units can be shipped economically to remote locations and assembled quickly with minimal equipment, making them perfect for exploration camps, temporary housing, and storage facilities where logistics are a challenge.",
    capabilities: [
      "Optimized for Standard Container Shipping",
      "Rapid Assembly with Simple Tools",
      "Insulated Panels for Thermal Comfort",
      "Durable and Low-Maintenance",
      "Stackable and Linkable Designs",
      "Ideal for Temporary & Remote Use",
    ],
    sectors: ["Exploration & Drilling", "Humanitarian Aid", "Temporary Events", "Remote Storage"],
    achievements: [
      "Enabled rapid camp setup in inaccessible areas.",
      "Reduced shipping costs by 75% compared to rigid structures.",
      "Assembly time of under 4 hours per unit with a small team.",
    ],
    images: [flatpackImage, modularBuildingsImage, conversionsImage],
    color: "bg-indigo-600",
  },
  {
    id: 9,
    icon: "cog",
    title: "Steel & Machinery Supply",
    description: "Reliable sourcing and supply of steel products and industrial machinery.",
    shortDescription: "Your trusted partner for high-quality steel materials and industrial equipment.",
    overview: "Leveraging our extensive network of suppliers, we provide a comprehensive procurement and supply service for a wide range of steel products and industrial machinery. We ensure quality, competitive pricing, and timely delivery, helping you keep your projects and operations running smoothly without the hassle of managing multiple suppliers.",
    capabilities: [
      "Structural Steel Sections (Beams, Columns)",
      "Steel Plate & Sheeting",
      "Piping, Tubing & Fittings",
      "Industrial Valves & Pumps",
      "Welding Consumables & Equipment",
      "Logistics & Supply Chain Management",
    ],
    sectors: ["Manufacturing", "Engineering", "Construction", "Mining", "Agriculture"],
    achievements: [
      "Established supply chains with leading global manufacturers.",
      "Consolidated procurement for major projects, saving clients time and money.",
      "Maintained a 99% on-time delivery record.",
    ],
    images: [steelSupplyImage, plasmaCuttingImage, machineHireImage],
    color: "bg-indigo-600",
  },
];

import { Project } from "@/types/project";
import mimbulaImage from "@/assets/Mimbula structure.jpg";
import mimbulaAvatar from "@/assets/mimbula avatar.jpg";
import mimbulaLogo from "@/assets/mimbula-logo.png";
import mibulaImage from "@/assets/mibula.png";
import corridorImage from "@/assets/corridor.png";
import warehouseImage from "@/assets/Warehouse and cold storage area.jpeg";
import niruWarehouseImage from "@/assets/Niru group warehouse development.jpg";
import cumminsImage from "@/assets/cummins.png";
import constructionImage2 from "@/assets/constructionImage2.jpg";
import steelFabImage from "@/assets/steel fabrication and processing.jpeg";
import structFab1 from "@/assets/structFabrication.jpg";
import structFab2 from "@/assets/structFabrication2.jpg";
import structFab3 from "@/assets/structFabrication3.jpg";
import structFab4 from "@/assets/structFabrication4.jpg";
import containerImage from "@/assets/container-conversion.jpg";
import containerJpg from "@/assets/container.jpg";
import containerJpeg from "@/assets/container.jpeg";
import modularBuildingsImage from "@/assets/modular buildings.jpeg";
import machineHireImage from "@/assets/machine hire.jpg";
import fabricationImage from "@/assets/fabrication.jpg";
import steelFabricationImage from "@/assets/steel fabrication.jpg";
import equipmentInstall1 from "@/assets/equipment installation/IMG-20251104-WA0211.jpg";
import equipmentInstall2 from "@/assets/equipment installation/IMG-20251104-WA0215.jpg";
import equipmentInstall3 from "@/assets/equipment installation/IMG-20251104-WA0219.jpg";
import equipmentInstall4 from "@/assets/equipment installation/IMG-20251104-WA0221.jpg";
import fenceJob1 from "@/assets/fence job/IMG-20251104-WA0151.jpg";
import fenceJob2 from "@/assets/fence job/IMG-20251104-WA0153.jpg";
import fenceJob3 from "@/assets/fence job/IMG-20251104-WA0155.jpg";
import fenceJob4 from "@/assets/fence job/IMG-20251104-WA0156.jpg";
import lusangaHouse1 from "@/assets/lusangagrouphouseimages/IMG_0429.jpg";
import lusangaHouse2 from "@/assets/lusangagrouphouseimages/IMG_1697.jpg";
import containerHouse1 from "@/assets/containersconvertedintoahouseinthebushwithshowers_/20170420_144240.jpg";
import containerHouse2 from "@/assets/containersconvertedintoahouseinthebushwithshowers_/20170420_144828.jpg";
import containerHouse3 from "@/assets/containersconvertedintoahouseinthebushwithshowers_/IMG-20170524-WA0030.jpg";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "moxico Resources PLC / Mimbula Minerals Workshop and security office 2020",
    year: "2020",
    location: "Mining Site",
    category: "Construction",
    description: "Complete workshop and office facility construction for mining operations including structural steel work and electrical installations.",
    image: mibulaImage,
    tags: ["Mining", "Infrastructure", "Engineering"],
    detailedDescription: "A comprehensive industrial facility designed and constructed for Mimbula Minerals, featuring state-of-the-art workshop spaces and modern office facilities. This project showcases our expertise in creating functional industrial spaces that meet the demanding requirements of mining operations.",
    client: "moxico Resources PLC",
    challenges: "The project required careful coordination with ongoing mining operations, strict adherence to mining industry safety standards, and the need to complete construction within a tight timeframe to minimize operational disruption.",
    solution: "We implemented a phased construction approach that allowed mining operations to continue uninterrupted. Our team worked closely with Mimbula's safety officers to ensure all construction activities met or exceeded industry safety standards.",
    results: [
      "Completed 2 weeks ahead of schedule",
      "Zero safety incidents during construction",
      "Fully functional workshop capable of handling heavy machinery maintenance",
      "Modern office space for 50+ staff members"
    ],
    images: [mimbulaImage, mimbulaAvatar, structFab1, structFab2]
  },
  {
    id: 2,
    title: "Corridor Logistics Kasumbalesa Warehouse",
    year: "2022",
    location: "Kasumbalesa",
    category: "Warehouse",
    description: "Large-scale warehouse facility featuring steel portal frame construction and modern logistics infrastructure.",
    image: corridorImage,
    tags: ["Logistics", "Construction", "Warehouse"],
    detailedDescription: "A cutting-edge logistics warehouse designed to handle high-volume cross-border trade operations at Kasumbalesa. The facility features advanced loading bay systems, climate-controlled storage areas, and efficient material handling infrastructure.",
    client: "Corridor Logistics",
    challenges: "Building in a border region required navigating complex regulatory requirements, managing material supply chains across borders, and designing for extreme weather variations.",
    solution: "Our team developed a robust supply chain management system and worked with both Zambian and DRC authorities to ensure smooth project execution. The design incorporated advanced climate control systems to protect goods in varying weather conditions.",
    results: [
      "5,000 square meters of warehouse space",
      "Capacity for 2,000+ pallets",
      "24/7 operational capability",
      "Energy-efficient climate control systems"
    ],
    images: [corridorImage, warehouseImage, niruWarehouseImage, structFab3]
  },
  {
    id: 3,
    title: "3900m² Kitwe Fabrication & Construction",
    year: "2021",
    location: "Kitwe",
    category: "Industrial",
    description: "Massive fabrication facility with advanced machinery installation and comprehensive workshop setup.",
    image: steelFabImage,
    tags: ["Industrial", "Fabrication", "Heavy Engineering"],
    detailedDescription: "One of our largest projects, this 3,900 square meter fabrication facility represents the pinnacle of industrial construction. The facility houses state-of-the-art machinery for steel processing, fabrication, and assembly operations.",
    challenges: "The massive scale of the project required careful planning of heavy equipment installation, ensuring structural integrity to support industrial machinery, and coordinating with multiple equipment suppliers.",
    solution: "We designed custom foundation systems capable of supporting heavy machinery loads, implemented a specialized crane system for equipment installation, and developed a comprehensive project timeline that coordinated all stakeholders.",
    results: [
      "3,900m² of production space",
      "Capacity for multiple simultaneous fabrication projects",
      "Advanced plasma cutting capabilities",
      "Full structural steel processing line"
    ],
    images: [steelFabImage, structFab1, structFab4, fabricationImage]
  },
  {
    id: 4,
    title: "Kasumbalesa Warehouse – Palsana Investments",
    year: "2023",
    location: "Kasumbalesa",
    category: "Warehouse",
    description: "Modern warehouse construction with climate-controlled storage and efficient loading bay systems.",
    image: constructionImage2,
    tags: ["Warehouse", "Commercial", "Storage"],
    detailedDescription: "A modern warehousing solution built for Palsana Investments, featuring advanced storage systems, climate control, and optimized logistics flow. The design prioritizes efficiency, security, and environmental sustainability.",
    client: "Palsana Investments",
    challenges: "Creating a cost-effective yet high-performance facility that could handle diverse product types while maintaining optimal storage conditions.",
    solution: "We implemented a modular design approach that allows for future expansion, installed energy-efficient climate control systems, and designed a flexible storage layout that can adapt to changing inventory needs.",
    results: [
      "30% reduction in energy costs compared to traditional warehouses",
      "Flexible storage configuration",
      "Advanced security systems",
      "Rapid loading/unloading capabilities"
    ],
    images: [warehouseImage, niruWarehouseImage, structFab2, corridorImage]
  },
  {
    id: 5,
    title: "Residential construction- Lusanga Group",
    year: "2022",
    location: "Various",
    category: "Residential",
    description: "Multiple residential properties featuring steel structures and modern construction techniques.",
    image: lusangaHouse1,
    tags: ["Residential", "Steel Structure", "Modern Design"],
    detailedDescription: "A portfolio of residential projects for Lusanga Group, demonstrating our versatility in applying industrial construction expertise to residential development. These projects feature modern design elements combined with robust structural engineering.",
    client: "Lusanga Group",
    challenges: "Applying industrial construction techniques to residential projects while maintaining aesthetic appeal and meeting residential building codes.",
    solution: "Our team developed hybrid construction methods that combine the strength and efficiency of steel construction with residential design requirements, creating homes that are both beautiful and exceptionally durable.",
    results: [
      "Multiple homes completed across various locations",
      "Reduced construction time by 40%",
      "Superior structural integrity",
      "Modern, attractive designs"
    ],
    images: [lusangaHouse1, lusangaHouse2, structFab3, structFab1]
  },
  {
    id: 6,
    title: "Cummins Zambia Renovation",
    year: "2023",
    location: "Lusaka",
    category: "Commercial",
    description: "Complete facility renovation including structural modifications and modern fit-out works.",
    image: cumminsImage,
    tags: ["Renovation", "Commercial", "Modernization"],
    detailedDescription: "A comprehensive renovation project for Cummins Zambia, transforming their existing facility into a modern, efficient workspace. The project included structural upgrades, interior fit-out, and installation of modern systems.",
    client: "Cummins Zambia",
    challenges: "Renovating while maintaining partial facility operations, working with existing structural limitations, and coordinating with Cummins' global standards.",
    solution: "We developed a phased renovation plan that allowed critical operations to continue, reinforced existing structures to meet modern standards, and ensured all work aligned with Cummins' international facility requirements.",
    results: [
      "Completed without major operational disruption",
      "Modernized workspace for improved productivity",
      "Upgraded electrical and HVAC systems",
      "Enhanced safety features throughout"
    ],
    images: [cumminsImage, structFab2, fabricationImage, steelFabricationImage]
  },
  {
    id: 7,
    title: "Container Office Conversions",
    year: "2020-2024", 
    location: "Multiple Sites",
    category: "Conversions",
    description: "Innovative container conversions into functional offices, homes, and storage facilities across Zambia.",
    image: containerHouse1,
    tags: ["Container Conversion", "Modular", "Sustainable"],
    detailedDescription: "An ongoing series of innovative container conversion projects, transforming standard shipping containers into functional, attractive spaces. These projects demonstrate our creativity and expertise in modular construction solutions.",
    challenges: "Converting industrial containers into comfortable, functional spaces while managing costs and maintaining structural integrity.",
    solution: "We developed standardized conversion processes that ensure quality and efficiency, implemented effective insulation and climate control systems, and created modular designs that can be customized to client needs.",
    results: [
      "50+ container conversions completed",
      "Offices, homes, and storage facilities delivered",
      "Fast deployment (2-4 weeks per unit)",
      "Sustainable, cost-effective solutions"
    ],
    images: [containerHouse1, containerHouse2, containerHouse3, containerImage, containerJpg, containerJpeg]
  },
  {
    id: 8,
    title: "Machinery Supply & Installation",
    year: "Ongoing",
    location: "Nationwide",
    category: "Equipment",
    description: "Supply and installation of construction and mining machinery for various industrial clients.",
    image: machineHireImage,
    tags: ["Equipment", "Installation", "Support"],
    detailedDescription: "Comprehensive machinery supply and installation services for industrial clients across Zambia. Our services include equipment sourcing, delivery, installation, and training, ensuring clients can maximize their equipment investments.",
    challenges: "Sourcing quality equipment at competitive prices, managing complex logistics across the country, and providing ongoing technical support.",
    solution: "We established partnerships with leading equipment manufacturers, developed robust logistics networks, and built a skilled technical team capable of handling complex installations and providing ongoing support.",
    results: [
      "Equipment supplied to 30+ clients",
      "Zero installation failures",
      "Comprehensive training programs",
      "Ongoing maintenance support"
    ],
    images: [machineHireImage]
  },
  {
    id: 9,
    title: "Steel Fence Installation",
    year: "2024",
    location: "Various",
    category: "Industrial",
    description: "Custom steel fence fabrication and installation projects providing security solutions for industrial and commercial properties.",
    image: fenceJob1,
    tags: ["Steel Fabrication", "Fencing", "Security"],
    detailedDescription: "Professional steel fence fabrication and installation services, delivering robust security solutions for various commercial and industrial facilities. Our team specializes in custom-designed steel fencing that combines security, durability, and aesthetic appeal.",
    challenges: "Designing and installing fences that meet strict security requirements while maintaining visual appeal, working with varied terrain, and ensuring long-term durability in different environmental conditions.",
    solution: "We developed customized fence designs using high-quality steel materials, implemented precise installation techniques, and applied protective coatings to ensure longevity. Our team conducted thorough site assessments to adapt installations to specific terrain and security requirements.",
    results: [
      "Multiple fence installations completed",
      "Enhanced security for client facilities",
      "Durable, weather-resistant steel construction",
      "Custom designs tailored to client needs"
    ],
    images: [fenceJob1, fenceJob2, fenceJob3, fenceJob4]
  },
];


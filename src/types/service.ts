export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  shortDescription: string;
  overview: string;
  capabilities: string[];
  sectors: string[];
  achievements: string[];
  images: string[];
  color: string;
  category?: string;
  client?: string;
  location?: string;
  completed?: string | number;
}

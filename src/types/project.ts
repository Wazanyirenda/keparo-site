export interface Project {
  id: number;
  title: string;
  year: string;
  location: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  detailedDescription: string;
  challenges?: string;
  solution?: string;
  results?: string[];
  images?: string[];
  client?: string;
}


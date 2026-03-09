export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools' | 'Other';
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
}

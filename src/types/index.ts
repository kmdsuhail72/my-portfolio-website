export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Add export {} to make it a module
export {};
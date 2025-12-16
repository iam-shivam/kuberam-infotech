// src/types/index.ts
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Technology {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud';
}

export interface ContactFormData {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
}
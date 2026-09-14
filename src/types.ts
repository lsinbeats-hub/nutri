export interface MethodStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface ExperiencePillar {
  id: string;
  title: string;
  description: string;
  iconName: 'clipboard-list' | 'sparkles' | 'message-circle' | 'compass' | 'book-open' | 'target';
}

export interface SituationItem {
  id: string;
  quote: string;
  context: string;
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
  isPlaceholder: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  tag: string;
  isPlaceholder: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  routine: string;
  objective: string;
  message?: string;
}

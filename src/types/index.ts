export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
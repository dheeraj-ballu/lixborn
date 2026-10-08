export type ProductCategoryType = 'Chemicals & Fertilizers' | 'Polymers';

export interface MgOGrade {
  name: string;
  code: string;
  description: string;
  applications: string[];
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategoryType;
  shortDescription: string;
  fullDescription: string;
  keyApplications: string[];
  grades?: MgOGrade[];
  specifications?: string[];
  isFlagship?: boolean;
  image: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface VisionPillar {
  title: string;
  description: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface TradingStep {
  step: number;
  title: string;
  action: string;
  description: string;
}

export interface SourcingStep {
  step: number;
  title: string;
  description: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface CompanyDetails {
  name: string;
  legalName: string;
  tagline: string;
  subTagline: string;
  incorporatedYear: string;
  foundationYear: string;
  country: string;
  placeholders: {
    registeredOffice: string;
    llpin: string;
    pan: string;
    tan: string;
    email: string;
    phone: string;
    website: string;
    iec?: string;
    gstin?: string;
  };
  journeyTagline: string;
  visionTagline: string;
}

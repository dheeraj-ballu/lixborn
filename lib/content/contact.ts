export const contactHeroData = {
  kicker: 'CONNECT WITH OUR TRADE DESK',
  title: 'Global Sourcing & Commercial Enquiries',
  description:
    'Whether you require technical specifications, commercial quotes, COA documentation, or long-term supply contract discussions, our trading team is at your disposal.',
};

export const enquiryCategories = [
  { value: 'chemicals', label: 'Chemicals & Fertilizers (MgO, Urea, Sulphur, Melamine)' },
  { value: 'polymers', label: 'Polymers (XLPE, Semiconductive, ABS, LDPE)' },
  { value: 'mgo-specialty', label: 'Magnesium Oxide (MgO) Specialized Inquiry' },
  { value: 'sourcing-partnership', label: 'Supplier / Manufacturing Partnership' },
  { value: 'general', label: 'General Corporate / Trade Inquiry' },
];

import { companyData } from './company';

export const companyDetailFields = [
  { label: 'Registered Office', key: 'registeredOffice', value: companyData.placeholders.registeredOffice },
  { label: 'LLPIN', key: 'llpin', value: companyData.placeholders.llpin },
  { label: 'PAN', key: 'pan', value: companyData.placeholders.pan },
  { label: 'TAN', key: 'tan', value: companyData.placeholders.tan },
  { label: 'Email', key: 'email', value: companyData.placeholders.email },
  { label: 'Phone', key: 'phone', value: companyData.placeholders.phone },
  { label: 'Website', key: 'website', value: companyData.placeholders.website },
  { label: 'Country', key: 'country', value: companyData.country },
];

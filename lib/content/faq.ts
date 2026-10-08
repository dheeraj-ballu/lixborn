export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqList: FAQItem[] = [
  {
    id: 'products',
    question: 'What products do we deal in?',
    answer: 'We deal in chemicals, fertilizers, and polymers.',
    category: 'Products & Sourcing',
  },
  {
    id: 'experience',
    question: 'What experience supports our business?',
    answer: 'Although incorporated in 2026, we have extensive experience in the iron and steel industry dating back to 1989.',
    category: 'Company & Heritage',
  },
  {
    id: 'inquiries',
    question: 'How do we handle inquiries?',
    answer: 'We follow a structured five-step process applied to every inquiry.',
    category: 'Process & Operations',
  },
  {
    id: 'trust',
    question: 'Why should clients trust us?',
    answer: 'Clients trust us for our experience, reliable sourcing, quality products, transparent dealings, and commitment to long-term partnerships.',
    category: 'Company & Heritage',
  },
  {
    id: 'quality-standards',
    question: 'Do our products meet international quality standards?',
    answer: 'Yes, we prioritize reliability, global sourcing, and a commitment to quality and service.',
    category: 'Quality Assurance',
  },
  {
    id: 'quotation-process',
    question: 'What is our quotation process like?',
    answer: 'We follow a structured process applied to every inquiry to ensure specific details for a smooth process.',
    category: 'Process & Operations',
  },
  {
    id: 'bulk-orders',
    question: 'Can we fulfill bulk orders and deliver on time?',
    answer: 'Yes, we focus on reliable supply and global sourcing to meet global demand efficiently.',
    category: 'Logistics & Supply',
  },
  {
    id: 'mgo-utilization',
    question: 'How is Magnesium Oxide utilized?',
    answer: 'Magnesium Oxide (MgO) as a high-demand industrial raw material is used in manufacturing applications. For example, it is used in the production of fertilizers, animal feed, chemicals, refractory materials, and other industrial products, depending on the required grade and specification.',
    category: 'Products & Sourcing',
  },
];

import { WhyChooseUsItem } from '../types';

export const homeHeroData = {
  headline: 'Global Sourcing. Industrial Expertise. Reliable Supply.',
  subHeadline: 'Import • Export • Trading • Sourcing • Supply',
  description:
    'A professionally managed international trading company connecting global markets with high-grade industrial raw materials, essential chemicals, fertilizers, and polymers.',
  ctaPrimaryText: 'Explore Our Products',
  ctaPrimaryLink: '/products',
  ctaSecondaryText: 'Contact Sourcing Desk',
  ctaSecondaryLink: '/contact',
  backgroundImage:
    'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80',
};

export const homeIntroData = {
  kicker: 'WHO WE ARE',
  title: 'Bridging International Supply Chains with Decades of Industrial Foundation',
  descriptionParagraph1:
    'Lixbor Auron LLP is an India-based international trading enterprise specializing in the sourcing, trading, and distribution of industrial raw materials, including chemicals, fertilizers, and polymers.',
  descriptionParagraph2:
    'While incorporated in 2026 as a modern trading platform, our business foundation traces back to 1989 in the iron and steel industry, encompassing manufacturing and PAN-India supply. Today, we leverage this rich industrial legacy to build dependable, end-to-end global supply networks.',
  tradingFlow: [
    { label: 'Reliable Manufacturers', step: '01' },
    { label: 'Lixbor Auron LLP', step: '02' },
    { label: 'Industrial Customers', step: '03' },
  ],
};

export const homeDealInData = {
  kicker: 'WHAT WE DEAL IN',
  title: 'Essential Industrial Raw Materials & Commodities',
  subtitle: 'Focused expertise across core industrial sectors, delivering certified quality and consistent supply.',
  categories: [
    {
      id: 'chemicals-fertilizers',
      title: 'Chemicals & Fertilizers',
      description: 'High-grade agricultural nutrients, automotive additives, and industrial process raw materials.',
      highlightProducts: ['Magnesium Oxide (MgO)', 'Urea', 'Granular Sulphur', 'Melamine'],
      href: '/products#chemicals-fertilizers',
      image: 'https://images.unsplash.com/photo-1616886307848-7f6635699c43?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'polymers',
      title: 'Polymers & Engineering Resins',
      description: 'Specialized thermoplastic compounds engineered for electrical cables, automotive, and packaging applications.',
      highlightProducts: ['XLPE Compounds', 'Semiconductive Compounds', 'ABS Resins', 'LDPE Polymer'],
      href: '/products#polymers',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'mgo-specialty',
      title: 'Magnesium Oxide (MgO) Focus',
      description: 'Flagship sourcing program covering Agricultural, Feed Grade, and Technical applications.',
      highlightProducts: ['Agricultural Grade', 'Animal Nutrition Grade', 'Technical Grade'],
      href: '/products#mgo-focus',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    },
  ],
};

export const homeDiscretionData = {
  kicker: 'COMMERCIAL INTEGRITY',
  title: 'Basic Discretion & Ethical Trade Conduct',
  noticeNote: 'Note for client confirmation: This section embodies professional discretion and non-disclosure standards in B2B commodity trading.',
  description:
    'In international bulk trading, confidentiality and commercial discretion are paramount. Lixbor Auron LLP conducts all sourcing and distribution workflows under strict standards of commercial integrity, respecting buyer-supplier confidentiality, non-disclosure protocols, and proprietary specifications.',
  pillars: [
    {
      title: 'Trade Confidentiality',
      description: 'Protecting proprietary pricing, commercial terms, and supplier relationships across all trade transactions.',
    },
    {
      title: 'Verifiable Integrity',
      description: 'Conducting thorough due diligence while maintaining total non-disclosure of sensitive client trade data.',
    },
    {
      title: 'Dependable Partnership',
      description: 'Building long-term, trusted commercial relationships anchored in ethical market conduct.',
    },
  ],
};

export const homeFutureProductsData = {
  kicker: 'EXPANDING HORIZONS',
  headline: 'More Products. More Markets. More Connections.',
  description:
    'Our growth framework is built to continuously evaluate and integrate emerging industrial raw materials into our global distribution matrix, responding dynamically to customer requirements worldwide.',
  stats: [
    { label: 'Foundation Legacy', value: '1989' },
    { label: 'Modern Platform', value: '2026' },
    { label: 'Global Market Reach', value: 'Worldwide' },
    { label: 'Core Categories', value: '3+' },
  ],
};

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    id: '1',
    title: 'Industry Experience',
    subtitle: 'Foundation Since 1989',
    description: 'Deep manufacturing and supply chain expertise built over three decades in the Indian iron and steel sector.',
    iconName: 'Building2',
  },
  {
    id: '2',
    title: 'New-Generation Approach',
    subtitle: 'Established 2026 Platform',
    description: 'Modern, agile trading platform structured specifically for international sourcing and global market dynamics.',
    iconName: 'Zap',
  },
  {
    id: '3',
    title: 'Product Knowledge',
    subtitle: 'Specialized Expertise',
    description: 'In-depth domain expertise in fertilizers, feed-grade materials, polymers, and specialized industrial chemicals.',
    iconName: 'Layers',
  },
  {
    id: '4',
    title: 'Logistics Strength',
    subtitle: 'End-to-End Execution',
    description: 'Seamless coordination of global freight, customs documentation, warehousing, blending, and timely final delivery.',
    iconName: 'Ship',
  },
  {
    id: '5',
    title: 'Global Mindset',
    subtitle: 'International Standards',
    description: 'Operating with global quality benchmarks, transparent contracts, and cross-border commercial reliability.',
    iconName: 'Globe',
  },
  {
    id: '6',
    title: 'Expanding Portfolio',
    subtitle: 'Market Responsive',
    description: 'Continuous portfolio diversification driven by evolving industrial customer demands and new supply channels.',
    iconName: 'TrendingUp',
  },
];

export const homeCTAData = {
  title: 'Ready to Streamline Your Industrial Raw Material Sourcing?',
  description: 'Connect with our trade desk for technical specifications, commercial quotes, or custom sourcing requirements.',
  buttonText: 'Submit Sourcing Inquiry',
  buttonHref: '/contact',
};

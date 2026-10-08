import { ValueItem, VisionPillar, Milestone, TradingStep, SourcingStep } from '../types';

export const whoWeAreHeroData = {
  kicker: 'ABOUT LIXBOR AURON LLP',
  title: 'Global Sourcing. Industrial Expertise. Reliable Supply.',
  description:
    'A professionally managed trading company engaged in international sourcing, trading and distribution of chemicals, fertilizers and polymers.',
  backgroundImage:
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80',
};

export const companyStoryData = {
  kicker: 'OUR HERITAGE & EVOLUTION',
  title: 'From 1989 Industrial Foundations to a 2026 International Trading Platform',
  paragraph1:
    'Lixbor Auron LLP represents a powerful combination of proven industrial heritage and modern global trading capability. Incorporated in 2026 as an international trading entity, our roots extend back to 1989, when our leadership established a strong footprint in the iron and steel industry.',
  paragraph2:
    'Over more than three decades, our group developed extensive experience in industrial manufacturing, quality compliance, logistics management, and nationwide supply across PAN India.',
  paragraph3:
    'Recognizing evolving global supply chain demands, Lixbor Auron LLP was established to extend this foundational discipline into international trading of high-grade industrial raw materials — specializing in Magnesium Oxide, key fertilizers, specialty chemicals, and high-performance polymers.',
};

export const coreValuesData: ValueItem[] = [
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'Uncompromising commercial transparency, honest contracts, and ethical trade practices across all international dealings.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'reliability',
    title: 'Reliability',
    description: 'Consistent product availability, predictable lead times, and steadfast execution of supply commitments.',
    iconName: 'Clock',
  },
  {
    id: 'quality',
    title: 'Quality',
    description: 'Strict adherence to global quality standards, verified manufacturer certification, and stringent pre-shipment inspections.',
    iconName: 'Award',
  },
  {
    id: 'responsiveness',
    title: 'Responsiveness',
    description: 'Agile communication, prompt commercial quoting, and proactive logistics troubleshooting for global procurement managers.',
    iconName: 'Zap',
  },
  {
    id: 'partnership',
    title: 'Partnership',
    description: 'Cultivating sustainable, long-term relationships with both verified manufacturers and industrial end-users.',
    iconName: 'Handshake',
  },
  {
    id: 'growth',
    title: 'Growth',
    description: 'Continuous expanding of market reach, product portfolios, and supply chain capabilities for mutual prosperity.',
    iconName: 'TrendingUp',
  },
];

export const visionData = {
  kicker: 'VISION & STRATEGY',
  title: 'To Be Among the World’s Most Trusted International Trading Companies',
  tagline: 'Build → Expand → Globalize',
  description:
    'Growing from a focused industrial trader into a diversified global organization known for operational excellence and customer reliability.',
  pillars: [
    {
      title: 'Reliable Sourcing',
      description: 'Forging direct partnerships with tier-1 verified global producers to ensure consistent material availability.',
    },
    {
      title: 'Competitive Solutions',
      description: 'Leveraging economies of scale and market insights to deliver cost-effective commercial terms to industrial buyers.',
    },
    {
      title: 'Quality-Focused Supply',
      description: 'Implementing rigorous quality assurance across chemical purities, polymer grades, and physical specifications.',
    },
    {
      title: 'Efficient Logistics',
      description: 'Executing seamless maritime freight, multimodal transport, customs clearing, and storage solutions.',
    },
    {
      title: 'Long-Term Partnerships',
      description: 'Prioritizing enduring client trust and collaborative growth over short-term transactional trades.',
    },
  ],
};

export const physicalTradingModelData: TradingStep[] = [
  {
    step: 1,
    title: 'Buy',
    action: 'Direct Procurement',
    description: 'Sourcing directly from verified global chemical, polymer, and mineral producers at competitive terms.',
  },
  {
    step: 2,
    title: 'Ship',
    action: 'Maritime & Multimodal Freight',
    description: 'Coordinating international vessel chartering, container shipping, port handling, and shipping documentation.',
  },
  {
    step: 3,
    title: 'Store',
    action: 'Strategic Warehousing',
    description: 'Managing secure storage facilities close to key industrial hubs to ensure buffer stock availability.',
  },
  {
    step: 4,
    title: 'Sell',
    action: 'Commercial Distribution',
    description: 'Tailoring customized supply contracts and commercial terms for regional industrial end-users.',
  },
  {
    step: 5,
    title: 'Blend',
    action: 'Value-Add Processing',
    description: 'Offering customized formulation blending, sifting, or packaging modifications when required.',
  },
  {
    step: 6,
    title: 'Deliver',
    action: 'Just-in-Time Delivery',
    description: 'Final door-step delivery to manufacturing facilities, maintaining strict delivery schedules.',
  },
];

export const sourcingProcessData: SourcingStep[] = [
  {
    step: 1,
    title: 'Understand',
    description: 'Deeply analyzing client chemical specifications, purity requirements, application constraints, and delivery schedules.',
  },
  {
    step: 2,
    title: 'Source',
    description: 'Identifying verified international producers and manufacturers capable of meeting stringent quality standards.',
  },
  {
    step: 3,
    title: 'Verify',
    description: 'Conducting lab testing, certificate of analysis (COA) verification, sample validation, and plant audits.',
  },
  {
    step: 4,
    title: 'Execute',
    description: 'Managing international trade finance, freight booking, customs compliance, and port handling seamlessly.',
  },
  {
    step: 5,
    title: 'Develop',
    description: 'Fostering long-term strategic supply relationships, post-delivery technical support, and contract continuity.',
  },
];

export const timelineMilestones: Milestone[] = [
  {
    year: '1989',
    title: 'Industrial Foundations',
    description: 'Initiated operations in the iron and steel industry, establishing manufacturing capabilities and nationwide PAN-India supply networks.',
  },
  {
    year: '2026',
    title: 'Lixbor Auron LLP Platform',
    description: 'Incorporated Lixbor Auron LLP to expand operations into international trading of chemicals, fertilizers, and polymers.',
    highlight: true,
  },
  {
    year: 'Future',
    title: 'Global Ambition',
    description: 'Continuous global expansion — "More Products. More Markets. More Connections." — building a worldwide trading presence.',
  },
];

import { Product, MgOGrade } from '../types';

export const mgoFlagshipGrades: MgOGrade[] = [
  {
    name: 'Agricultural Grade',
    code: 'MgO-AGRI',
    description: 'High-bioavailability magnesium source for soil enrichment, fertilizer formulations, and crop yield optimization.',
    applications: ['Soil Conditioners', 'Blended NPK Fertilizers', 'Magnesium Deficiency Treatment', 'Foliar Formulations'],
  },
  {
    name: 'Animal Nutrition / Feed Grade',
    code: 'MgO-FEED',
    description: 'Purity-certified magnesium oxide formulated for ruminant nutrition, preventing grass tetany and supporting metabolic health.',
    applications: ['Cattle & Ruminant Feed Supplements', 'Mineral Blocks & Premixes', 'Dietary Magnesium Source', 'Livestock Health'],
  },
  {
    name: 'Technical / Industrial Grade',
    code: 'MgO-TECH',
    description: 'High-purity reactive magnesium oxide for chemical processing, hydrometallurgy, water treatment, and construction boards.',
    applications: ['Magnesium Board Manufacturing', 'Wastewater Neutralization', 'Chemical Synthesis', 'Rubber & Plastics Additives'],
  },
];

export const productsData: Product[] = [
  {
    id: 'magnesium-oxide',
    name: 'Magnesium Oxide (MgO)',
    category: 'Chemicals & Fertilizers',
    isFlagship: true,
    shortDescription: 'Core focus product available in specialized grades for agriculture, animal nutrition, and technical applications.',
    fullDescription:
      'Magnesium Oxide (MgO) represents Lixbor Auron LLP’s primary core product focus. We source and distribute high-purity MgO tailored to stringent global specifications across agricultural, animal nutrition, and industrial chemical sectors.',
    keyApplications: [
      'Agriculture & Soil Health',
      'Animal Nutrition & Feed Premixes',
      'Construction Boards & Environmental Treatment',
    ],
    grades: mgoFlagshipGrades,
    specifications: [
      'Available in MgO purities ranging from 85% to 98%+',
      'Custom mesh sizes (Powder, Granular)',
      'Low heavy-metal profiles certified for feed applications',
      'Controlled reactivity (Light Burned / Caustic Calcined)',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'urea',
    name: 'Urea',
    category: 'Chemicals & Fertilizers',
    shortDescription: 'Versatile nitrogen product supplied in technical, prilled, industrial, and automotive (DEF/AdBlue) grades.',
    fullDescription:
      'High-nitrogen chemical compound essential for resin production, industrial chemical synthesis, and automotive exhaust fluid (DEF/AdBlue) manufacturing. Sourced directly from tier-1 chemical producers.',
    keyApplications: [
      'Automotive DEF / AdBlue Production',
      'Urea-Formaldehyde Resins & Adhesives',
      'Industrial Chemical Intermediate',
    ],
    specifications: [
      'Nitrogen Content: 46% min',
      'Grades: Technical / Industrial Grade, Automotive / DEF Grade',
      'Low biuret options for technical & industrial applications',
    ],
    image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'granular-sulphur',
    name: 'Granular Sulphur',
    category: 'Chemicals & Fertilizers',
    shortDescription: 'High-purity elemental sulphur for fertilizer production, sulphuric acid plants, and industrial processing.',
    fullDescription:
      'Bright yellow elemental granular sulphur used extensively in the production of phosphate fertilizers, sulphuric acid manufacturing, rubber vulcanization, and chemical processing.',
    keyApplications: [
      'Sulphuric Acid Manufacturing',
      'Phosphate & Sulphur-Enriched Fertilizers',
      'Rubber Vulcanization & Processing',
      'Chemical & Explosive Manufacturing',
    ],
    specifications: [
      'Purity: 99.5% min elemental sulphur',
      'Form: Bright Yellow Granular (2-6mm)',
      'Low ash and moisture content',
    ],
    image: 'https://images.unsplash.com/photo-1616886307848-7f6635699c43?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'melamine',
    name: 'Melamine',
    category: 'Chemicals & Fertilizers',
    shortDescription: 'Essential organic chemical intermediate for durable resins, laminates, surface coatings, and molding compounds.',
    fullDescription:
      'Melamine is a high-nitrogen heterocyclic compound critical for manufacturing melamine-formaldehyde resins, decorative laminates, wood adhesives, flame retardants, and automotive coatings.',
    keyApplications: [
      'Decorative & Industrial Laminates',
      'Wood Adhesives & Plywood Resins',
      'Surface Coatings & Automotive Finishes',
      'Flame Retardant Plastics',
    ],
    specifications: [
      'Purity: 99.8% min',
      'Appearance: Fine White Powder',
      'Low pH volatility and moisture content',
    ],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'xlpe',
    name: 'XLPE (Cross-Linked Polyethylene)',
    category: 'Polymers',
    shortDescription: 'High-performance cross-linked polyethylene compound for power cable insulation and piping systems.',
    fullDescription:
      'XLPE compounds offer superior electrical insulation, thermal stability, and mechanical strength, making them the industry standard for medium and high-voltage power transmission cables.',
    keyApplications: [
      'Medium & High Voltage Power Cable Insulation',
      'Telecommunication Cable Jackets',
      'Cross-linked PEX Piping Systems',
      'Heavy-Duty Electrical Infrastructure',
    ],
    specifications: [
      'Silane cross-linkable & peroxide cross-linkable options',
      'Excellent dielectric strength & thermal breakdown resistance',
      'Compliant with international IEC cable standards',
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'semiconductive-compounds',
    name: 'Semiconductive Compounds',
    category: 'Polymers',
    shortDescription: 'Specialized conductive polymer compounds for electrical field distribution in power cable systems.',
    fullDescription:
      'Engineered polymer compounds containing conductive carbon black filler, formulated for conductor and insulation shielding in medium and high-voltage power cables to prevent electrical stress concentrations.',
    keyApplications: [
      'Conductor Shielding in MV/HV Power Cables',
      'Insulation Shielding Layers',
      'Stress Control in Cable Accessories & Joints',
      'High-Reliability Electrical Power Systems',
    ],
    specifications: [
      'Strictly controlled volume resistivity',
      'Smooth surface extrusion quality',
      'High compatibility with XLPE insulation layers',
    ],
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'abs',
    name: 'ABS (Acrylonitrile Butadiene Styrene)',
    category: 'Polymers',
    shortDescription: 'Versatile engineering thermoplastic known for high impact resistance, dimensional stability, and aesthetic finish.',
    fullDescription:
      'ABS polymer resin combines the strength and rigidity of acrylonitrile and styrene polymers with the toughness of polybutadiene rubber. Widely used in automotive components, consumer electronics, and appliances.',
    keyApplications: [
      'Automotive Interior & Exterior Trims',
      'Consumer Electronics & Appliance Housings',
      'Pipe Fittings & Architectural Hardware',
      '3D Printing & Industrial Prototyping',
    ],
    specifications: [
      'Injection molding & extrusion grades available',
      'High impact strength and heat resistance',
      'Custom color compounding options',
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'ldpe',
    name: 'LDPE (Low-Density Polyethylene)',
    category: 'Polymers',
    shortDescription: 'Flexible, ductile thermoplastic compound ideal for packaging films, agricultural sheets, and flexible tubing.',
    fullDescription:
      'Low-Density Polyethylene resin offering high clarity, chemical inertness, and flexibility. Essential for heavy-duty industrial film packaging, agricultural mulch films, and squeeze bottles.',
    keyApplications: [
      'Industrial Packaging & Shrink Films',
      'Agricultural & Greenhouse Mulch Films',
      'Flexible Tubing & Cable Jackets',
      'Lamination Resins',
    ],
    specifications: [
      'MFI range tailored for blow film & extrusion',
      'High tensile strength & tear resistance',
      'Food-contact compliant grades available',
    ],
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1000&q=80',
  },
];

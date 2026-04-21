// ============================================================
// Denford Business Attorneys — Site Data
// All content sourced from the official DBA Firm Profile PDF.
// ============================================================

export const firm = {
  name: 'Denford Business Attorneys',
  short: 'DBA',
  tagline: 'Solutions. Value. Growth.',
  subTagline: 'Full Service Real Estate Law',
  heroHeadline: 'Legal partners who think like investors.',
  heroSubhead:
    "A Harare-based boutique firm built exclusively around real estate and commercial law — translating complex legal issues into tangible business advantage across the full property lifecycle.",
  brandStatement:
    'Where strategy meets specialisation. Solutions. Value. Growth.',
  founded: 'Harare, Zimbabwe',
  location: 'Harare North, Harare, Zimbabwe',
  phone: '+263 77 326 3988',
  phoneDisplay: '+263 77 326 3988',
  whatsapp: '+263773263988',
  email: 'hello@dbaattorneys.co.zw',
  address: 'Harare North Area, Harare, Zimbabwe',
  hours: 'Monday – Friday  ·  08:30 – 17:00',
  social: {
    linkedin: 'https://linkedin.com/company/denford-business-attorneys',
    facebook: 'https://facebook.com/dbaattorneys',
    twitter: 'https://twitter.com/dbaattorneys',
  },
};

// ============================================================
// THREE PILLARS (top-level framing)
// ============================================================
export const pillars = [
  {
    number: '01',
    name: 'Real Estate & Construction Law',
    blurb:
      'The entire practice. From conveyancing and bond registrations to development structuring, project finance and construction contracts.',
  },
  {
    number: '02',
    name: 'Compliance Advisory',
    blurb:
      "Preventative law in Zimbabwe's VUCA regulatory landscape — neutralising vulnerabilities before they escalate into costly failures.",
  },
  {
    number: '03',
    name: 'Business Law',
    blurb:
      'Comprehensive corporate counsel — M&A, investment structuring, governance, commercial contracts, employment, and tax.',
  },
];

// ============================================================
// PRACTICE AREAS — drawn from the three pillars + complementary
// ============================================================
export const practiceAreas = [
  {
    id: 1,
    slug: 'conveyancing-property-transactions',
    number: '01',
    pillar: 'Real Estate',
    name: 'Conveyancing & Property Transactions',
    short: 'Property transfers, bond registrations, title investigations and notarial services.',
    description:
      'We manage the full mechanics of property transfer with strict regulatory compliance — from instruction to rates clearance to Deeds Office lodgement. Our conveyancers act for purchasers, sellers, banks, and private lenders with the same procedural discipline.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
    icon: 'House',
    services: [
      'Property transfers — acting for purchasers or sellers, instruction to lodgement',
      'Bond registrations & cancellations for financial institutions and private lenders',
      'Title deed investigations and Deeds Office searches',
      'Due diligence: caveats, servitudes, and legal marketability',
      'Notarial bonds, long-term leases (over 10 years), and servitudes',
      'Antenuptial contract notarisation and authentication',
    ],
  },
  {
    id: 2,
    slug: 'asset-acquisition-disposal',
    number: '02',
    pillar: 'Real Estate',
    name: 'Asset Acquisition & Disposal',
    short: 'Strategy and structure for high-value or complex portfolios — share or asset sale.',
    description:
      'Beyond standard transfers, we advise on strategy and structure for high-value or complex portfolios — development sales, institutional portfolio acquisitions, and due diligence to uncover off-balance-sheet liabilities. Transaction structure calibrated to your tax and risk profile.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80',
    icon: 'Buildings',
    services: [
      'Development sales and institutional portfolio acquisitions',
      'Share vs. asset sale analysis — tax and risk optimisation',
      'Off-balance-sheet liability investigations',
      'Cross-border acquisition structuring',
      'Sale and purchase agreement drafting and negotiation',
      'Post-completion integration and warranty management',
    ],
  },
  {
    id: 3,
    slug: 'development-planning-approvals',
    number: '03',
    pillar: 'Real Estate',
    name: 'Development Planning & Regulatory Approvals',
    short: 'The interface between developers and regulators. Zoning, subdivision, EIA.',
    description:
      'We act as the interface between developers and regulators — guiding clients through zoning laws, subdivision permits, and development applications. Where consultants are required, we coordinate for single-source accountability.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80',
    icon: 'MapPin',
    services: [
      'Subdivision & consolidation consents (council permissions)',
      'Special consents & use permissions (e.g., residential to commercial)',
      'Environmental Impact Assessments (EIA) — EMA compliance',
      'Municipal liaison and clearance expediting',
      'Urban planning appeals and objections',
      'Heritage and conservation approvals',
    ],
  },
  {
    id: 4,
    slug: 'development-project-structuring',
    number: '04',
    pillar: 'Real Estate',
    name: 'Development Project Structuring',
    short: 'Bespoke legal frameworks — JV agreements, SPVs, co-ownership structures.',
    description:
      "We structure the legal frameworks that make complex projects viable and protect all parties' interests. From joint ventures between landowners and developers to SPVs for co-owned sites, we build the legal architecture on which your project stands.",
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80',
    icon: 'Stack',
    services: [
      'Joint Venture (JV) agreements — profit-share, decision-making, exit',
      'Development Management Agreements',
      'Bespoke co-ownership structures via SPVs or trusts',
      'Landowner–developer profit-share mechanics',
      'Funding round documentation',
      'Project exit and wind-down planning',
    ],
  },
  {
    id: 5,
    slug: 'property-sales-marketing',
    number: '05',
    pillar: 'Real Estate',
    name: 'Property Sales & Marketing Structuring',
    short: 'Off-the-plan contracts, sectional title schemes, owners associations.',
    description:
      'We advise developers and estate agents on optimal legal structures for bringing properties to market — from off-the-plan contracts that protect both parties to sectional title schemes and homeowner association governance frameworks.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80',
    icon: 'SealCheck',
    services: [
      'Off-the-plan contract drafting — consumer protection compliant',
      'Sectional title & share block scheme establishment',
      'Sectional title conversion assistance',
      'Owners association governance — constitutions, conduct rules',
      'Marketing compliance and disclosure advice',
      'Developer warranty structuring',
    ],
  },
  {
    id: 6,
    slug: 'construction-engineering-law',
    number: '06',
    pillar: 'Real Estate',
    name: 'Construction & Engineering Law',
    short: 'FIDIC-based contracts, subcontractor agreements, consultant appointments.',
    description:
      'Bespoke drafting and negotiation of construction contracts (including FIDIC-based agreements), subcontractor agreements, and consultant appointments. We translate project briefs into robust, enforceable legal documents.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80',
    icon: 'Wrench',
    services: [
      'FIDIC contract drafting and localisation',
      'Subcontractor agreements with back-to-back provisions',
      'Consultant and professional team appointments',
      'Variation and extension-of-time claims',
      'Construction dispute avoidance strategy',
      'Practical completion and handover documentation',
    ],
  },
  {
    id: 7,
    slug: 'project-finance-security',
    number: '07',
    pillar: 'Real Estate',
    name: 'Real Estate, Project Finance & Security',
    short: 'For banks, lenders, and borrowers — security perfection and risk minimisation.',
    description:
      'For financiers and borrowers, we ensure security is perfected and risk minimised. We act for banks, private lenders, and microfinance institutions in preparing and registering mortgage bonds, cessions, and notarial bonds — and we review finance agreements for fairness on the borrower side.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80',
    icon: 'Vault',
    services: [
      'Mortgage bonds — drafting and Deeds Office registration',
      'Cessions and notarial bonds over movable property',
      'Finance agreement review — borrower-side fairness',
      'Conditions precedent and financial close coordination',
      'Syndicated and co-lender security structures',
      'Enforcement and realisation advisory',
    ],
  },
  {
    id: 8,
    slug: 'compliance-advisory',
    number: '08',
    pillar: 'Compliance',
    name: 'Compliance Advisory',
    short: 'Preventative law for property sector — regulatory navigation, audits, municipal liaison.',
    description:
      "Zimbabwe's property sector operates in a VUCA landscape — Volatility, Uncertainty, Complexity, Ambiguity. We operate as your outsourced legal and compliance department, structured around preventative law to neutralise vulnerabilities before they escalate.",
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80',
    icon: 'ShieldCheck',
    services: [
      'Regulatory navigation — parliamentary debates, SIs, bylaws monitored in real time',
      'Municipal compliance — end-to-end process management',
      'Property portfolio risk & compliance audits',
      'Construction and development compliance — stage-specific guidance',
      'Tax compliance structuring and advisory',
      'Compliance training and board briefings',
    ],
  },
  {
    id: 9,
    slug: 'corporate-ma',
    number: '09',
    pillar: 'Business Law',
    name: 'Mergers, Acquisitions & Investment Structuring',
    short: 'Corporate advisory — M&A, SPVs, fund structuring, governance.',
    description:
      'In real estate, M&A offers tax-efficient portfolio acquisition but transfers all underlying liabilities. We analyse share vs. asset sales, establish SPVs to ring-fence project risk, and advise on fund infrastructure for multi-project vehicles.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80',
    icon: 'Handshake',
    services: [
      'Share vs. asset sale analysis for real estate M&A',
      'Special Purpose Vehicles (SPVs) and ring-fencing',
      'Private syndicate and fund documentation',
      'Corporate governance & board advisory — charters, policies',
      'Company secretarial services',
      'Director fiduciary duty advisory',
    ],
  },
  {
    id: 10,
    slug: 'commercial-contracts',
    number: '10',
    pillar: 'Business Law',
    name: 'Commercial Contracts & Leases',
    short: 'Supply agreements, commercial leases, contractor appointments.',
    description:
      'Drafting clear contracts with architects, engineers, and suppliers — focusing on scope, deliverables, milestone payments, and liability. Tailored commercial lease agreements addressing fit-outs, expense recoveries, renewal options, and assignment.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80',
    icon: 'FileText',
    services: [
      'Supply and services agreements',
      'Commercial lease agreements — fit-outs, recoveries, renewals',
      'Contractor and consultant appointments (FIDIC localisation)',
      'Service level agreements',
      'Non-disclosure and confidentiality agreements',
      'Distribution and agency contracts',
    ],
  },
  {
    id: 11,
    slug: 'employment-labour',
    number: '11',
    pillar: 'Business Law',
    name: 'Employment & Labour Law',
    short: 'Contracts aligned with the Labour Act, workplace disputes, audits.',
    description:
      "Drafting compliant contracts and policies aligned with Zimbabwe's Labour Act. Managing disciplinary hearings, grievances, and retrenchments with procedural fairness. Labour law audits to mitigate risks before disputes arise.",
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80',
    icon: 'UsersThree',
    services: [
      'Employment contracts and handbook drafting',
      'Workplace policies — disciplinary, grievance, performance',
      'Disciplinary hearings and representation',
      'Retrenchment and restructuring advisory',
      'Labour law audits',
      'Employment litigation and NEC matters',
    ],
  },
  {
    id: 12,
    slug: 'tax-structuring',
    number: '12',
    pillar: 'Business Law',
    name: 'Tax & Cross-Border Structuring',
    short: 'Tax-efficient holding structures, CGT, VAT, Transfer Tax, ZIMRA representation.',
    description:
      'Tax drives deal structure. We advise on tax-efficient holding of Zimbabwean property, analyse CGT, VAT, and Transfer Tax implications, and represent clients before ZIMRA in audits and appeals.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80',
    icon: 'ChartPieSlice',
    services: [
      'Tax advisory — corporate and cross-border',
      'CGT, VAT, and Transfer Tax analysis',
      'Property holding structure optimisation',
      'ZIMRA audits and appeals representation',
      'Double taxation agreement application',
      'Transfer pricing documentation',
    ],
  },
  {
    id: 13,
    slug: 'estate-planning-family',
    number: '13',
    pillar: 'Complementary',
    name: 'Estate Planning & Family Law',
    short: 'Protecting assets from marriage, divorce, or death — trust and succession planning.',
    description:
      "For entrepreneurs, business assets and personal wealth are inseparable. A property portfolio is the foundation of a family's future. We design plans that minimise estate duty, ensure smooth succession, and utilise trusts strategically.",
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80',
    icon: 'TreeStructure',
    services: [
      'Comprehensive estate planning — estate duty minimisation',
      'Trust formation and administration',
      'Antenuptial and postnuptial agreements',
      'Divorce representation — commercial continuity focused',
      'Wills drafting and executor services',
      'Cross-generational succession alignment',
    ],
  },
  {
    id: 14,
    slug: 'dispute-resolution',
    number: '14',
    pillar: 'Complementary',
    name: 'Dispute Resolution',
    short: 'Strategic litigation, arbitration, mediation — protecting value we help build.',
    description:
      "In real estate, disputes arise — tenants default, contracts are breached, boundaries contested. We provide commercially-minded representation, championing arbitration, mediation and strategic negotiation when court isn't required.",
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80',
    icon: 'Scales',
    services: [
      'Evictions and breach of lease',
      'Breach of contract and specific performance',
      'Property boundary disputes',
      'Commercial arbitration under AFSA / UNCITRAL rules',
      'Mediation and structured negotiation',
      'Enforcement and execution of judgments',
    ],
  },
];

// ============================================================
// THE DBA ADVANTAGE — client experience system
// ============================================================
export const clientExperience = [
  {
    letter: 'A',
    title: 'Matter Blueprinting',
    body: 'Every new matter receives a customised Matter Blueprint within 48 hours — milestones, timeline, team, communication protocol, and fees. You know exactly what to expect.',
  },
  {
    letter: 'B',
    title: 'Proactive Status Updates',
    body: 'Technology-driven CRM workflows trigger monthly status communications. Major milestones prompt a partner call. Every communication is acknowledged within 4 business hours.',
  },
  {
    letter: 'C',
    title: 'The No-Jargon Rule',
    body: 'Every written opinion includes a one-page Executive Summary for Decision-Making in plain English — translating complexity into clear risks, options and recommendations.',
  },
  {
    letter: 'D',
    title: 'Quarterly Legal Health Check',
    body: 'Retainer clients receive structured quarterly engagement covering regulatory changes, contract renewals, compliance gaps, and succession alignment. Your outsourced legal department, but better.',
  },
  {
    letter: 'E',
    title: 'Network Access',
    body: 'We connect clients to our vetted ecosystem of estate agents, developers, surveyors, accountants, architects, engineers, and financiers — professionals matching our quality standards.',
  },
];

// ============================================================
// VALUES
// ============================================================
export const values = [
  {
    icon: 'CheckCircle',
    title: 'Excellence & Efficiency',
    body: 'Meticulous work delivered on time. Good enough never is.',
  },
  {
    icon: 'Handshake',
    title: 'Client Partnership',
    body: 'Long-term relationships, not transactions. Your success is ours.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Integrity',
    body: 'Unshakeable ethics. Our reputation is our most valuable asset.',
  },
  {
    icon: 'Lightbulb',
    title: 'Innovation',
    body: 'Embracing technology to deliver faster, smarter, and more efficiently.',
  },
  {
    icon: 'ChartLineUp',
    title: 'Commercial Acumen',
    body: 'Legal strategy serving business goals. We think like entrepreneurs.',
  },
];

// ============================================================
// ATTORNEYS — real founder + team model from profile
// ============================================================
export const attorneys = [
  {
    id: 1,
    slug: 'denford-chatendeuka',
    name: 'Denford Chatendeuka',
    title: 'Founding Partner',
    role: 'founding-partner',
    short: 'LLB (Hons) · BSc Economics (Hons) · MBA (Finance) · Registered Estate Agent · Registered Property Valuer (VCZ)',
    portrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=85',
    portraitFallback: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=85',
    bio: [
      "Denford brings a uniquely interdisciplinary approach to business law — bridging legal strategy, financial acumen, and real estate expertise. As founder of DBA, he helps clients structure opportunities with a sharp eye on commercial viability and long-term value, drawing on nearly two decades of practice across the full property lifecycle: land acquisition, regulatory approvals, construction contracts, and final disposition.",
      "His academic foundation reflects this interdisciplinary commitment. An LLB (Honours) and BSc (Honours) in Economics, complemented by an MBA specialising in Finance, means that when Denford reviews a transaction, he simultaneously examines its legal structure, financial architecture, and commercial logic.",
      "What further distinguishes him within Zimbabwe's property sector is his dual registration as a Registered Estate Agent with the Estate Agents Council and a registered Property Valuer with the Valuers Council of Zimbabwe — credentials that reflect active, operational knowledge of how properties are priced, marketed, and transferred.",
      'Denford also teaches Real Estate Law at the Real Estate Institute of Zimbabwe (REIZ), keeping him at the forefront of legislative and regulatory developments while contributing to the profession\'s standards.',
    ],
    focus: [
      'Real Estate Transactions',
      'Development Joint Ventures',
      'Corporate M&A',
      'Project Finance',
      'Compliance Advisory',
    ],
    credentials: [
      'LLB (Honours)',
      'BSc Economics (Honours)',
      'MBA — Finance',
      'Registered Estate Agent',
      'Registered Property Valuer (VCZ)',
    ],
    memberships: [
      'Law Society of Zimbabwe — Legal Practitioner, Conveyancer, Notary Public',
      'International Bar Association',
      'Estate Agents Council of Zimbabwe',
      'Valuers Council of Zimbabwe',
      'Associate — Real Estate Institute of Zimbabwe (REIZ)',
    ],
    teaches: 'Real Estate Law — Real Estate Institute of Zimbabwe (REIZ)',
  },
  {
    id: 2,
    slug: 'practice-manager',
    name: 'Practice Manager',
    title: 'Head of Client Relations & Operations',
    role: 'practice-manager',
    short: 'The operational backbone of the firm — oversees client relations, workflow management, and practice administration.',
    portrait: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=85',
    portraitFallback: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=85',
    bio: [
      'Central to the firm\'s operational efficiency is a dedicated Practice Manager who oversees client relations, workflow management, and practice administration — ensuring every matter progresses with precision and that clients receive a consistently high standard of service from initial consultation through to resolution.',
      'This role forms the operational backbone of the firm, enabling the legal team to remain entirely focused on delivering exceptional outcomes. The Practice Manager is the continuity point for every client — the voice that returns your call within four business hours, the coordinator of your Matter Blueprint, and the person who ensures nothing falls through the cracks.',
    ],
    focus: [
      'Client Relations',
      'Matter Blueprinting',
      'Workflow Coordination',
      'Quality Assurance',
    ],
    credentials: [],
    memberships: [],
  },
  {
    id: 3,
    slug: 'associate-legal-team',
    name: 'The Legal Team',
    title: 'Associate Attorneys & Specialist Counsel',
    role: 'legal-team',
    short: 'A cohesive group of lawyers contributing specialised expertise within our defined practice areas.',
    portrait: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=85',
    portraitFallback: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=85',
    bio: [
      "DBA's practice is supported by a cohesive group of lawyers, each contributing specialised expertise within our defined practice areas — ensuring that clients receive comprehensive, strategically informed advice grounded in collective experience rather than a single perspective.",
      'Together, this structure enables Denford Business Attorneys to offer the depth and responsiveness of a larger practice while preserving the personalised attention and direct accessibility that distinguish the firm. Every member of the team is united by a shared commitment to excellence, integrity, and innovation.',
      "DBA attaches great importance to professional development and the team's continued legal training — a well-developed holistic system of continued learning that allows our professionals to stand at the forefront of our specialist practice.",
    ],
    focus: [
      'Conveyancing & Notarial Practice',
      'Corporate & Commercial',
      'Litigation & Dispute Resolution',
      'Compliance & Regulatory',
    ],
    credentials: [],
    memberships: [],
  },
];

// ============================================================
// CLIENT TIERS (from the profile's Who We Serve section)
// ============================================================
export const clientTiers = [
  {
    tier: 'Tier A',
    heading: 'Institutional & Commercial',
    description:
      'Real Estate Developers, Private Equity Funds, Construction Firms, Financial Institutions, Estate Agents, Foreign Direct Investors, Government Entities.',
    clients: [
      'Real Estate Developers',
      'Private Equity Funds',
      'Construction Firms',
      'Financial Institutions',
      'Estate Agents',
      'Foreign Direct Investors',
      'Government Entities',
    ],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80',
  },
  {
    tier: 'Tier B',
    heading: 'Business & Professionals',
    description:
      'High-Net-Worth Individuals, Family-Owned Businesses, SMEs, Commercial Real Estate Players, Professionals seeking asset protection.',
    clients: [
      'High-Net-Worth Individuals',
      'Family-Owned Businesses',
      'SMEs',
      'Commercial Real Estate Players',
      'Professionals — Asset Protection',
    ],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80',
  },
  {
    tier: 'Tier C',
    heading: 'Individuals & First-Time Buyers',
    description:
      'First-time property buyers, professionals with estate planning needs, those navigating property disputes or family law matters.',
    clients: [
      'First-Time Property Buyers',
      'Estate Planning Clients',
      'Property Dispute Claimants',
      'Family Law Matters',
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80',
  },
];

export const sectors = [
  'Real Estate Developers',
  'Private Equity Funds',
  'Construction & Engineering Firms',
  'Financial Institutions & Banks',
  'Estate Agents',
  'Foreign Direct Investors',
  'Government Entities',
  'Family-Owned Businesses',
  'High-Net-Worth Individuals',
];

// ============================================================
// INSIGHTS (thought leadership based on real profile themes)
// ============================================================
export const insights = [
  {
    id: 1,
    slug: 'due-diligence-database-advantage',
    title: 'Why the Due Diligence Database Changes Everything',
    excerpt:
      "In Zimbabwe's complex regulatory environment, standard due diligence misses what isn't immediately visible. Our proprietary Due Diligence Database codifies years of transactional knowledge — and here's what that means for your next deal.",
    date: '2026-03-18',
    dateDisplay: '18 March 2026',
    readTime: '6 min read',
    tags: ['Due Diligence', 'Real Estate', 'Technology'],
    category: 'The DBA Advantage',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80',
    author: 'Denford Chatendeuka',
  },
  {
    id: 2,
    slug: 'share-vs-asset-sale-real-estate-ma',
    title: 'Share vs. Asset Sale: The Real Estate M&A Decision That Costs or Saves Millions',
    excerpt:
      'In real estate, M&A offers tax-efficient portfolio acquisition but transfers all underlying liabilities. A disciplined framework for weighing structure against exposure — the analysis that should precede every deal.',
    date: '2026-02-24',
    dateDisplay: '24 February 2026',
    readTime: '8 min read',
    tags: ['M&A', 'Tax', 'Transaction Structure'],
    category: 'Business Law',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80',
    author: 'Denford Chatendeuka',
  },
  {
    id: 3,
    slug: 'navigating-vuca-property-regulation',
    title: "Navigating a VUCA Landscape: Zimbabwe's Property Regulatory Paradox",
    excerpt:
      'Volatility, uncertainty, complexity, ambiguity — dated legislation remains in force while transformative new laws emerge. A practical framework for building a compliance posture that survives the paradox.',
    date: '2026-01-30',
    dateDisplay: '30 January 2026',
    readTime: '7 min read',
    tags: ['Compliance', 'Regulatory', 'Property'],
    category: 'Compliance Advisory',
    image: 'https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?w=1400&q=80',
    author: 'DBA Compliance Team',
  },
  {
    id: 4,
    slug: 'sectional-title-conversion-zimbabwe',
    title: 'Sectional Title Conversion in Zimbabwe: A Practical Guide for Developers',
    excerpt:
      "Converting legacy share-block and flat schemes to sectional title is a path to marketability — and a compliance minefield. Here's what we've learned managing conversions across Harare's northern suburbs.",
    date: '2025-12-15',
    dateDisplay: '15 December 2025',
    readTime: '10 min read',
    tags: ['Sectional Title', 'Developers', 'Harare'],
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80',
    author: 'DBA Real Estate Team',
  },
  {
    id: 5,
    slug: 'fidic-contracts-zimbabwe-practice',
    title: 'FIDIC Contracts in Zimbabwean Practice: Localisation, Not Translation',
    excerpt:
      "FIDIC standard forms carry the authority of international best practice — but applying them in Zimbabwe requires localisation, not translation. The amendments that matter most for Zimbabwean projects.",
    date: '2025-11-22',
    dateDisplay: '22 November 2025',
    readTime: '9 min read',
    tags: ['Construction', 'FIDIC', 'Contracts'],
    category: 'Construction Law',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80',
    author: 'DBA Construction Team',
  },
  {
    id: 6,
    slug: 'estate-planning-business-assets',
    title: "When Business Is Personal: Estate Planning for Entrepreneurs' Property Portfolios",
    excerpt:
      "For entrepreneurs, business assets and personal wealth are inseparable. A property portfolio is the foundation of a family's future. Here's how to protect it across marriage, divorce, and the generations.",
    date: '2025-10-17',
    dateDisplay: '17 October 2025',
    readTime: '7 min read',
    tags: ['Estate Planning', 'Family Law', 'Trusts'],
    category: 'Estate Planning',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80',
    author: 'Denford Chatendeuka',
  },
];

// ============================================================
// PROOF POINTS / STATS
// ============================================================
export const stats = [
  { value: '20+', label: 'Years of combined partner experience' },
  { value: '3', label: 'Integrated practice pillars' },
  { value: '48h', label: 'Matter Blueprint turnaround' },
  { value: '4h', label: 'Communication acknowledgement SLA' },
];

// ============================================================
// TESTIMONIALS
// ============================================================
export const testimonials = [
  {
    quote:
      'Denford reviewed our acquisition structure and identified an off-balance-sheet liability our accountants had missed. His dual training as a lawyer and valuer changes the quality of the advice.',
    author: 'Managing Director',
    role: 'Property Development Group',
    sector: 'Real Estate Development',
  },
  {
    quote:
      'The Matter Blueprint on day one told us exactly what would happen, when, and at what cost. Every milestone delivered on schedule. This is how legal work should be done.',
    author: 'Chief Financial Officer',
    role: 'Listed Property Fund',
    sector: 'Private Equity',
  },
  {
    quote:
      'DBA treat compliance as strategy, not a cost centre. Our quarterly Legal Health Check has surfaced issues that would have blindsided us — and structured them into orderly fixes.',
    author: 'Head of Legal',
    role: 'Multinational Construction Firm',
    sector: 'Construction',
  },
];

// ============================================================
// MEMBERSHIPS (regulatory compliance strip)
// ============================================================
export const memberships = [
  'Law Society of Zimbabwe',
  'International Bar Association',
  'Estate Agents Council of Zimbabwe',
  'Valuers Council of Zimbabwe',
  'Real Estate Institute of Zimbabwe',
];

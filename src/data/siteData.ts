import {
  Activity,
  BadgeCheck,
  Clock3,
  Shield,
  ShieldCheck,
  Zap,
  Cable,
  Drill,
  Droplets,
  Flame,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const company = {
  name: 'Jayden’s Smith Group',
  phone: '07469 343232',
  tel: 'tel:07469343232',
  location: 'Leicester, UK',
  experience: '3+ years',
  certifications: ['City & Guilds Qualified', 'Association of Plumbing & Heating Contractors Limited'],
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Electrical Repairs', path: '/electrical-repairs' },
  { label: 'Rewiring', path: '/rewiring' },
  { label: 'Emergency Plumbing', path: '/emergency-plumbing' },
  { label: 'Boiler Repairs', path: '/boiler-repairs' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact', path: '/contact' },
];

export type ServicePageContent = {
  title: string;
  path: string;
  heroTitle: string;
  heroDescription: string;
  overview: string;
  overviewPoints: string[];
  benefits: string[];
  chooseUs: string[];
  ctaTitle: string;
};

export const services: ServicePageContent[] = [
  {
    title: 'Electrical Repairs',
    path: '/electrical-repairs',
    heroTitle: 'Fast electrical repairs from a trusted electrician Leicester homeowners can rely on',
    heroDescription:
      'From fault finding and tripping circuits to emergency electrician Leicester callouts, we deliver safe, tidy, and responsive repairs across homes and local businesses.',
    overview:
      'Our electrical repairs service focuses on restoring power safely and quickly. We diagnose faults, explain the issue clearly, and carry out dependable repairs with minimal disruption.',
    overviewPoints: [
      'Fuse board issues and power loss diagnosed quickly',
      'Sockets, switches, and lighting faults repaired',
      'Safe testing and practical advice on next steps',
    ],
    benefits: [
      'Rapid callout support for urgent electrical faults',
      'Clear communication before any repair begins',
      'City & Guilds qualified workmanship on every visit',
    ],
    chooseUs: [
      '24/7 emergency response in Leicester and nearby areas',
      'Professional, respectful service inside your property',
      'Focused on long-term reliability, not quick temporary fixes',
    ],
    ctaTitle: 'Need an emergency electrician Leicester customers trust?',
  },
  {
    title: 'Rewiring',
    path: '/rewiring',
    heroTitle: 'Safe rewiring Leicester property owners can trust for modern living',
    heroDescription:
      'We provide partial and full rewiring Leicester services for homes, extensions, and renovation projects, with careful planning and tidy installation throughout.',
    overview:
      'If your wiring is outdated, damaged, or no longer fit for purpose, we can upgrade it with a safe and modern solution designed around how you use your property.',
    overviewPoints: [
      'Full rewires and targeted partial rewiring',
      'Consumer unit, cable, and circuit upgrades',
      'Ideal for older homes, extensions, and refurbishments',
    ],
    benefits: [
      'Improves electrical safety and reliability',
      'Supports modern appliances and future upgrades',
      'Reduces issues caused by aging wiring systems',
    ],
    chooseUs: [
      'Straightforward advice on scope, disruption, and timelines',
      'Careful workmanship with a clean finish',
      'Trusted local electrician Leicester clients can call with confidence',
    ],
    ctaTitle: 'Planning rewiring Leicester work or need urgent advice?',
  },
  {
    title: 'Emergency Plumbing',
    path: '/emergency-plumbing',
    heroTitle: 'Emergency plumber Leicester callouts for leaks, bursts, and urgent plumbing faults',
    heroDescription:
      'When plumbing problems cannot wait, we respond quickly to control damage, restore water systems, and keep your home or premises safe and functional.',
    overview:
      'Our emergency plumber Leicester service covers urgent leaks, burst pipes, blocked pipework, overflowing fixtures, and other sudden plumbing issues that need immediate attention.',
    overviewPoints: [
      'Fast leak isolation and pipe repair support',
      'Responsive help for overflow and water damage risks',
      'Practical solutions for homes and small commercial sites',
    ],
    benefits: [
      '24/7 emergency plumber Leicester availability',
      'Helps limit water damage and costly follow-on repairs',
      'Honest recommendations and tidy workmanship',
    ],
    chooseUs: [
      'Reliable local response with emergency focus',
      'Qualified plumbing and heating trade credentials',
      'Clear communication from first call to completion',
    ],
    ctaTitle: 'Need an emergency plumber Leicester right now?',
  },
  {
    title: 'Boiler Repairs',
    path: '/boiler-repairs',
    heroTitle: 'Dependable boiler repair Leicester support when your heating lets you down',
    heroDescription:
      'We troubleshoot boiler faults quickly and provide boiler repair Leicester services aimed at restoring heating and hot water with minimal delay.',
    overview:
      'Whether your boiler has lost pressure, stopped firing, or is making unusual noises, we inspect the fault and deliver a practical repair path as quickly as possible.',
    overviewPoints: [
      'Boiler fault diagnosis and repair guidance',
      'Heating and hot water issues investigated quickly',
      'Responsive support for urgent breakdown situations',
    ],
    benefits: [
      'Fast help when heating or hot water is unavailable',
      'Experienced local service with a practical approach',
      'Trusted support for recurring boiler performance issues',
    ],
    chooseUs: [
      'Strong emergency mindset and fast local response',
      'Professional workmanship backed by trade credentials',
      'Helpful advice to keep your system running reliably',
    ],
    ctaTitle: 'Looking for boiler repair Leicester homeowners recommend?',
  },
];

export const serviceHighlights = [
  {
    title: 'Electrical repairs and emergency callouts',
    text:
      'If you need an electrician Leicester residents can reach quickly, we handle urgent fault finding, tripping electrics, damaged sockets, lighting failures, and rewiring Leicester projects with a calm, safety-first approach.',
    points: ['Emergency electrician Leicester callouts', 'Safe fault diagnosis', 'Repairs for domestic electrics'],
    badge: 'City & Guilds Qualified',
    cta: 'Book Electrical Help',
    path: '/electrical-repairs',
    image: 'bg-gradient-to-br from-brand-navy to-brand-slate',
  },
  {
    title: 'Emergency plumbing and boiler support',
    text:
      'For plumber Leicester and emergency plumber Leicester requests, we respond to leaks, burst pipes, no hot water, and boiler repair Leicester issues with clear communication and fast attendance.',
    points: ['Leak and burst pipe response', 'Boiler and heating issues', 'Trusted local plumber Leicester'],
    badge: 'Association of Plumbing & Heating Contractors Limited',
    cta: 'Get Plumbing Support',
    path: '/emergency-plumbing',
    image: 'bg-gradient-to-br from-slate-100 to-orange-100',
  },
];

export const whyChooseUs: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: '180 Days Guarantee',
    text: 'If something is not right first time, we will return and carry out the follow-up repair for free.',
    icon: Shield,
  },
  { title: '3+ Years of Experience', text: 'Hands-on local experience across urgent and planned works.', icon: Activity },
  { title: '24/7 Availability', text: 'Emergency support when faults cannot wait.', icon: Clock3 },
  { title: 'Fast Response', text: 'Focused on quick attendance in Leicester and surrounding areas.', icon: Zap },
  { title: 'Fully Qualified', text: 'City & Guilds qualified with recognised trade credentials.', icon: BadgeCheck },
  { title: 'Fully Insured', text: 'Professional cover for added peace of mind.', icon: ShieldCheck },
];

const serviceCardIconMap: Record<string, LucideIcon> = {
  'Electrical Repairs': Cable,
  Rewiring: Drill,
  'Emergency Plumbing': Droplets,
  'Boiler Repairs': Flame,
};

const serviceCardDescriptions: Record<string, string> = {
  'Electrical Repairs':
    'From fault finding and tripping circuits to fully operating systems, we deliver safe, tidy, and responsive repairs across homes and local businesses.',
  Rewiring:
    'We provide partial and full rewiring, extensions, and renovation projects within Leicester homes, with careful planning and tidy installation throughout.',
  'Emergency Plumbing':
    services.find((service) => service.title === 'Emergency Plumbing')?.heroDescription ?? '',
  'Boiler Repairs':
    'We troubleshoot boiler faults quickly and provide boiler repairs to restore heating and hot water with minimal delay.',
};

export const serviceCards = services.map(({ title, path }) => ({
  title,
  path,
  description: serviceCardDescriptions[title],
  icon: serviceCardIconMap[title],
}));

export const testimonials = [
  {
    name: 'Rachel M.',
    location: 'Leicester',
    text: 'Fast response on a late-night leak and everything was explained clearly. Professional, tidy, and reassuring from start to finish.',
  },
  {
    name: 'Imran T.',
    location: 'Oadby',
    text: 'Needed an emergency electrician after a power issue. Great communication, quick attendance, and the fault was sorted without any fuss.',
  },
  {
    name: 'Hannah P.',
    location: 'Wigston',
    text: 'Friendly service, quick boiler repair, and fair advice. I would happily recommend Jayden’s Smith Group to family and neighbours.',
  },
];

export const areas = [
  'Leicester',
  'Loughborough',
  'Hinckley',
  'Market Harborough',
  'Melton Mowbray',
  'Coalville',
  'Oadby',
  'Wigston',
];

export const aboutPoints = [
  '24/7 emergency electrician and plumbing support in Leicester',
  'Focused on fast attendance, safe repairs, and dependable communication',
  'Qualified trade service backed by City & Guilds and APHC credentials',
];

export const contactReasons = [
  'Emergency electrical faults',
  'Leaks, bursts, and urgent plumbing callouts',
  'Boiler breakdowns and heating issues',
  'Free quotes for planned repair or rewiring work',
];

export const footerServices = services.map(({ title, path }) => ({ title, path }));

export const heroBadges = ['24/7 Emergency Service', 'Fully Insured', 'City & Guilds Qualified'];

export const topBarItems = ['24/7 Emergency Service', 'Leicester & Surrounding Areas'];

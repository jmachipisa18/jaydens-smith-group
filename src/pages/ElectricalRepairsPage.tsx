import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  BadgeCheck,
  Cable,
  Clock3,
  Lightbulb,
  PhoneCall,
  Search,
  ShieldAlert,
  ShieldCheck,
  SquareDashedBottomCode,
  TabletSmartphone,
  Unplug,
  Wrench,
  Zap,
  Radar,
} from 'lucide-react';
import { EnquiryFormSection } from '../components/EnquiryFormSection';
import { IssueGridSection } from '../components/IssueGridSection';
import { ServiceOverviewCard, ServicePageTemplate } from '../components/ServicePageTemplate';
import { company, services } from '../data/siteData';
import { SectionIntro } from '../components/SectionIntro';

const electricalRepairsContent = services.find((service) => service.path === '/electrical-repairs');

if (!electricalRepairsContent) {
  throw new Error('Electrical Repairs content is missing.');
}

const processSteps = [
  {
    step: '01',
    title: 'Transparent Pricing',
    description: (
      <>
        Call us first. We&apos;ll give you a <strong className="font-extrabold text-brand-navy">FREE ESTIMATED QUOTE</strong>{' '}
        based off of your information
      </>
    ),
    icon: PhoneCall,
  },
  {
    step: '02',
    title: 'Within 1 Hour',
    description: (
      <>
        Once you&apos;ve agreed with our services, one of our engineers will be out to you{' '}
        <strong className="font-extrabold text-brand-navy">WITHIN 1 HOUR</strong>
      </>
    ),
    icon: Search,
  },
  {
    step: '03',
    title: '180-Day FREE REPAIRS',
    description: (
      <>
        If we don&apos;t get it right the first time, we&apos;ll do the follow-up work{' '}
        <strong className="font-extrabold text-brand-navy">FOR FREE</strong>
      </>
    ),
    icon: ShieldCheck,
  },
];

const electricalIssueCards = [
  { title: 'Lighting', icon: Lightbulb },
  { title: 'Fault Finding', icon: Radar },
  { title: 'Power Generators', icon: Zap },
  { title: 'Circuit Breaker Panels', icon: SquareDashedBottomCode },
  { title: 'Surge Protection', icon: ShieldAlert },
  { title: 'Electrical Wire Expansion', icon: Cable },
  { title: 'Device Upgrades', icon: TabletSmartphone },
  { title: 'Electric Panel Upgrades', icon: Unplug },
  { title: 'Troubleshooting', icon: Wrench },
];

function HowWeWorkSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell">
        <SectionIntro
          eyebrow="How We Work"
          title="How We Work"
          description="Our process is quick, simple, and focused on getting electrical issues resolved safely and efficiently with clear communication at every stage."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {processSteps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_24px_60px_rgba(15,39,64,0.12)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-brand-orange" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-white transition duration-300 group-hover:bg-brand-orange">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-4xl font-extrabold leading-none tracking-tight text-brand-orange sm:text-5xl">
                    {item.step}
                  </span>
                </div>
                <h2 className="mt-6 text-2xl font-extrabold text-brand-navy">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-10 rounded-[2rem] bg-brand-cream p-6 sm:p-8">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Fast Local Response
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-center leading-8 text-slate-600">
            If you need urgent help, call <a href={company.tel} className="font-bold text-brand-navy">{company.phone}</a> and we will guide you through the quickest route to a safe repair.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ElectricalRepairsPage() {
  const [selectedService, setSelectedService] = useState('');
  const [prefillTrigger, setPrefillTrigger] = useState(0);

  function handleServiceSelect(serviceTitle: string) {
    setSelectedService(serviceTitle);
    setPrefillTrigger((current) => current + 1);
  }

  return (
    <ServicePageTemplate
      content={electricalRepairsContent!}
      centerHeroContent
      showHeroOverview={false}
      trustCards={[
        {
          text: '24/7 emergency response in Leicester and nearby areas',
          icon: Clock3,
        },
        {
          text: 'Professional, respectful service inside your property',
          icon: BadgeCheck,
        },
        {
          text: 'Focused on long-term reliability, not quick temporary fixes',
          icon: Wrench,
        },
      ]}
      afterHero={
        <>
          <EnquiryFormSection source="Electrical Repairs page hero form" />
          <section className="section-space bg-white">
            <div className="container-shell">
              <div className="mx-auto max-w-4xl">
                <ServiceOverviewCard content={electricalRepairsContent!} />
              </div>
            </div>
          </section>
          <HowWeWorkSection />
          <IssueGridSection
            eyebrow="Common Electrical Services"
            title="Emergency Electrical Services We Provide"
            description="Common electrical issues and urgent services we can help with."
            items={electricalIssueCards}
            onItemSelect={handleServiceSelect}
          />
        </>
      }
      afterContent={
        <EnquiryFormSection
          sectionId="electrical-repairs-form"
          source="Electrical Repairs page"
          prefilledService={selectedService}
          prefillTrigger={prefillTrigger}
        />
      }
    />
  );
}

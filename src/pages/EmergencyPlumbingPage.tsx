import { motion } from 'framer-motion';
import {
  Bath,
  Clock3,
  Droplets,
  DropletOff,
  Gauge,
  Heater,
  PhoneCall,
  Search,
  ShieldCheck,
  ThermometerSnowflake,
  Toilet,
  Waves,
  CookingPot,
  Wrench,
  Workflow,
} from 'lucide-react';
import { EnquiryFormSection } from '../components/EnquiryFormSection';
import { IssueGridSection } from '../components/IssueGridSection';
import { ServiceOverviewCard, ServicePageTemplate } from '../components/ServicePageTemplate';
import { company, services } from '../data/siteData';
import { SectionIntro } from '../components/SectionIntro';

const emergencyPlumbingContent = services.find((service) => service.path === '/emergency-plumbing');

if (!emergencyPlumbingContent) {
  throw new Error('Emergency Plumbing content is missing.');
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

const emergencyIssueCards = [
  { title: 'Blocked Drains', icon: Waves },
  { title: 'Low Water Pressure', icon: Gauge },
  { title: 'Bathroom Repairs', icon: Bath },
  { title: 'Burst Pipes', icon: DropletOff },
  { title: 'Pipe Upgrades', icon: Workflow },
  { title: 'Boiler Repairs', icon: Heater },
  { title: 'No Hot Water', icon: ThermometerSnowflake },
  { title: 'Toilet Install / Upgrade', icon: Toilet },
  { title: 'Kitchen Repairs', icon: CookingPot },
];

function HowWeWorkSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell">
        <SectionIntro
          eyebrow="How We Work"
          title="How We Work"
          description="Our process is quick, simple, and focused on getting urgent plumbing issues resolved safely and efficiently with clear communication at every stage."
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

export function EmergencyPlumbingPage() {
  return (
    <ServicePageTemplate
      content={emergencyPlumbingContent!}
      centerHeroContent
      showHeroOverview={false}
      trustCards={[
        {
          text: 'Reliable local response with emergency focus',
          icon: Clock3,
        },
        {
          text: 'Qualified plumbing and heating trade credentials',
          icon: Wrench,
        },
        {
          text: 'Clear communication from first call to completion',
          icon: Droplets,
        },
      ]}
      afterHero={
        <>
          <section className="section-space bg-white">
            <div className="container-shell">
              <div className="mx-auto max-w-4xl">
                <ServiceOverviewCard content={emergencyPlumbingContent!} />
              </div>
            </div>
          </section>
          <HowWeWorkSection />
          <IssueGridSection
            eyebrow="Common Plumbing Issues"
            title="Emergency Services We Provide"
            description={"Plumbing problem? We've seen it all.\nThere's not a problem you have that we can't solve."}
            items={emergencyIssueCards}
          />
        </>
      }
      afterContent={<EnquiryFormSection source="Emergency Plumbing page" />}
    />
  );
}

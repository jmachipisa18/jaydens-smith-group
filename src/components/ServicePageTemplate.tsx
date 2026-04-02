import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { company, type ServicePageContent } from '../data/siteData';
import { SectionIntro } from './SectionIntro';

type TrustCard = {
  text: string;
  icon: LucideIcon;
};

type Props = {
  content: ServicePageContent;
  afterHero?: ReactNode;
  centerHeroContent?: boolean;
  showHeroOverview?: boolean;
  trustCards?: TrustCard[];
  afterContent?: ReactNode;
};

export function ServiceOverviewCard({ content }: Pick<Props, 'content'>) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/95 p-8 text-brand-navy shadow-[0_30px_80px_rgba(8,22,38,0.35)] sm:p-10"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-brand-orange" />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
        Service Overview
      </p>
      <p className="mt-4 text-lg leading-8 text-slate-600">{content.overview}</p>
      <div className="mt-6 space-y-4">
        {content.overviewPoints.map((point) => (
          <div key={point} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-orange" />
            <span className="text-slate-700">{point}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-4 rounded-3xl bg-brand-cream p-5 sm:grid-cols-2">
        <div>
          <p className="text-3xl font-extrabold">{company.experience}</p>
          <p className="text-sm text-slate-600">Experience across urgent and planned work</p>
        </div>
        <div>
          <p className="text-3xl font-extrabold">24/7</p>
          <p className="text-sm text-slate-600">Emergency callout support</p>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicePageTemplate({
  content,
  afterHero,
  centerHeroContent = false,
  showHeroOverview = true,
  trustCards,
  afterContent,
}: Props) {
  return (
    <div className="overflow-x-clip">
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 bg-hero-grid opacity-90" />
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-brand-orange/12 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/6 blur-3xl" />
        <div
          className={`container-shell relative py-20 lg:py-28 ${
            showHeroOverview ? 'grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center' : ''
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={centerHeroContent ? 'mx-auto flex max-w-4xl flex-col items-center text-center' : 'self-center'}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-orange">
              24/7 Emergency Service
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {content.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">{content.heroDescription}</p>
            <div className={`mt-8 flex flex-col gap-4 sm:flex-row ${centerHeroContent ? 'w-full max-w-lg sm:justify-center' : ''}`}>
              <a href={company.tel} className="primary-button w-full sm:w-auto">
                <PhoneCall className="h-4 w-4" />
                Call Now: {company.phone}
              </a>
              <Link to="/contact#contact-form" className="secondary-button w-full sm:w-auto">
                Get Free Quote
              </Link>
            </div>
            <div className={`mt-8 flex flex-wrap gap-3 ${centerHeroContent ? 'justify-center' : ''}`}>
              {['24/7 Emergency Service', 'Fully Insured', 'Local Leicester Coverage'].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {showHeroOverview ? <ServiceOverviewCard content={content} /> : null}
        </div>
      </section>

      {afterHero}

      <section className="section-space bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-6 shadow-soft lg:p-10">
            <SectionIntro
              eyebrow="Benefits"
              title={`Why people choose ${content.title.toLowerCase()} with us`}
              description="We focus on practical solutions, transparent advice, and the dependable response local customers need when something has gone wrong."
            />
            <div className="mt-8 space-y-4">
              {content.benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-orange" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-brand-orange p-8 text-white shadow-[0_24px_60px_rgba(244,124,32,0.28)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">Trusted Local Support</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight">
              Practical advice, tidy workmanship, and a fast local response
            </h2>
            <p className="mt-6 leading-8 text-orange-50">
              We keep every job clear and straightforward, helping customers feel informed and supported from the
              first call through to completion.
            </p>
            <div className="mt-8 grid gap-4 rounded-[1.5rem] border border-white/20 bg-white/10 p-5 sm:grid-cols-2">
              <div>
                <p className="text-3xl font-extrabold">Local Team</p>
                <p className="mt-1 text-sm text-orange-50">Serving Leicester and surrounding areas</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold">Clear Advice</p>
                <p className="mt-1 text-sm text-orange-50">Straightforward communication on every job</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-navy text-white">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">Trust Section</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {content.title} with trusted local support
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              We combine fast response, professional standards, and dependable workmanship so customers can book with
              confidence.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {(trustCards ?? content.chooseUs.map((item) => ({ text: item, icon: ArrowRight }))).map((item, index) => {
              const Icon = item.icon;

              return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.35 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_20px_50px_rgba(6,16,28,0.28)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <p className="mt-6 font-bold leading-7 text-white">{item.text}</p>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      <section className="section-space py-10 sm:py-12">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-brand-orange px-8 py-10 text-center text-white shadow-[0_26px_60px_rgba(244,124,32,0.28)] sm:px-12 sm:py-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">Emergency Callout</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{content.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-orange-50">
              Call {company.name} for fast help in Leicester and surrounding areas.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={company.tel} className="secondary-button w-full sm:w-auto">
                Call {company.phone}
              </a>
              <Link to="/contact#contact-form" className="secondary-button w-full border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {afterContent}
    </div>
  );
}

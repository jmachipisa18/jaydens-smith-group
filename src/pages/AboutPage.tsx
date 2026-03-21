import { Award, Clock3, ShieldCheck } from 'lucide-react';
import { aboutPoints, company } from '../data/siteData';
import { SectionIntro } from '../components/SectionIntro';

export function AboutPage() {
  return (
    <div className="overflow-x-clip">
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 bg-hero-grid opacity-90" />
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-brand-orange/12 blur-3xl" />
        <div className="container-shell relative py-20 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">About Us</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Local emergency electrician and plumber support with a professional, trustworthy approach
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            {company.name} supports homeowners and local businesses across Leicester with urgent repairs, planned improvements, and a service style focused on clear communication and dependable results.
          </p>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-6 shadow-soft lg:p-10">
            <SectionIntro
              eyebrow="Our Story"
              title="Built around fast response, tidy workmanship, and honest advice"
              description="With more than three years of experience, we have shaped the business around what customers value most during urgent situations: speed, trust, and the confidence that the job will be handled properly."
            />
            <div className="mt-8 space-y-4">
              {aboutPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4 text-slate-700">
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            {[
              { icon: Award, title: 'Qualified', text: company.certifications[0] },
              { icon: ShieldCheck, title: 'Trade Membership', text: company.certifications[1] },
              { icon: Clock3, title: 'Availability', text: '24/7 emergency service across Leicester and surrounding areas' },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,39,64,0.12)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-brand-orange">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 text-2xl font-extrabold text-brand-navy">{item.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-navy text-white">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">Why People Trust Us</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Local service built around reliability and clear communication
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              We aim to make urgent situations feel easier to manage with straightforward advice, dependable trade
              knowledge, and a calm professional approach.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

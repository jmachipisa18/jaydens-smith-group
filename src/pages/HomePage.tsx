import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ChevronRight,
  MapPin,
  PhoneCall,
  Quote,
  Star,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  areas,
  company,
  heroBadges,
  serviceCards,
  testimonials,
  whyChooseUs,
} from '../data/siteData';
import { EnquiryFormSection } from '../components/EnquiryFormSection';
import { SectionIntro } from '../components/SectionIntro';

export function HomePage() {
  return (
    <div className="overflow-x-clip">
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 bg-hero-grid opacity-90" />
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-brand-orange/12 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/6 blur-3xl" />
        <div className="container-shell relative py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-4xl flex-col items-center text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-orange">
              Leicester Emergency Trades
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Leicester&apos;s Trusted 24/7 Emergency Electrician & Plumber
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
              Jayden&apos;s Smith Group delivers fast, dependable support for urgent electrical faults, emergency plumbing issues, boiler breakdowns, and rewiring work across Leicester and surrounding areas.
            </p>
            <div className="mt-8 flex w-full max-w-lg flex-col gap-4 sm:flex-row sm:justify-center">
              <a href={company.tel} className="primary-button w-full sm:w-auto">
                <PhoneCall className="h-4 w-4" />
                Call Now: {company.phone}
              </a>
              <Link to="/contact" className="secondary-button w-full sm:w-auto">
                Get Free Quote
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-5 inline-flex max-w-full items-center gap-4 rounded-[1.5rem] border border-white/12 bg-white/10 px-5 py-3 backdrop-blur">
              <div className="flex shrink-0 items-center gap-1 text-[#f6c453] drop-shadow-[0_0_10px_rgba(246,196,83,0.35)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="hidden h-8 w-px bg-white/15 sm:block" />
              <p className="text-sm font-semibold leading-6 text-white/90 sm:text-base">
                <span className="font-extrabold text-white">25+</span> 5-star reviews
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <EnquiryFormSection />

      <section className="section-space">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Our Services"
            title="Our Services"
            description="Emergency or planned work, we make it easy to find the service you need."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.35 }}
                  className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_24px_60px_rgba(15,39,64,0.14)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-white transition duration-300 group-hover:bg-brand-orange">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold leading-tight text-brand-navy">{service.title}</h3>
                  <p className="mt-4 flex-1 text-[15px] leading-7 text-slate-600">{service.description}</p>
                  <Link
                    to={service.path}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-orange transition duration-300 group-hover:translate-x-1"
                  >
                    Learn more
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-8 rounded-[2rem] bg-white p-6 shadow-soft lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Electrical Services
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                Electrical services we provide
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  'Emergency electrical repairs when faults need fast attention',
                  'Full rewiring for older homes, upgrades, and renovations',
                  'Fuse board work and consumer unit improvements',
                  'Domestic and landlord jobs handled professionally and efficiently',
                ].map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-orange" />
                    <p className="text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
              <Link to="/electrical-repairs" className="primary-button mt-8 w-full sm:min-w-[220px] sm:mx-auto sm:w-fit">
                Book Electrical Help
              </Link>
            </div>

            <div className="rounded-[1.75rem] bg-brand-orange p-8 text-white shadow-[0_24px_60px_rgba(244,124,32,0.28)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">Trusted Local Support</p>
              <h3 className="mt-4 text-3xl font-extrabold leading-tight">
                Electrical support for a wide range of property types and ongoing maintenance needs
              </h3>
              <p className="mt-6 font-bold leading-8 text-white">
                Whether you need urgent fault finding or planned electrical work, we focus on dependable service,
                practical communication, and results you can trust.
              </p>
              <div className="mt-8 grid gap-4 rounded-[1.5rem] border border-white/20 bg-white/10 p-5 sm:grid-cols-2">
                <div>
                  <p className="text-3xl font-extrabold">24/7</p>
                  <p className="mt-1 text-sm text-orange-50">Emergency repairs available</p>
                </div>
                <div>
                  <p className="text-xl font-extrabold sm:text-2xl">Who we work with</p>
                  <ul className="mt-3 space-y-2 text-sm text-orange-50">
                    {[
                      'Domestic homes',
                      'Small businesses and retail units',
                      'HMOs and multi-tenant buildings',
                      'Landlords and rental properties',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/80" />
                        <span className="font-extrabold text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="grid gap-8 rounded-[2rem] bg-white p-6 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div className="rounded-[1.75rem] bg-brand-navy p-8 text-white shadow-[0_24px_60px_rgba(15,39,64,0.26)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">Trusted Plumbing Help</p>
              <h3 className="mt-4 text-3xl font-extrabold leading-tight">
                We fix any urgent leaks, plumbing faults, and planned repairs.
              </h3>
              <p className="mt-6 font-bold leading-8 text-white">
                We approach every plumbing call with quick response, clear communication, and practical solutions
                that help reduce disruption and restore confidence fast.
              </p>
              <div className="mt-8 grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 sm:grid-cols-2">
                <div>
                  <p className="text-3xl font-extrabold">24/7</p>
                  <p className="mt-1 text-sm text-white/75">Emergency plumbing callouts</p>
                </div>
                <div>
                  <p className="text-xl font-extrabold sm:text-2xl">Who we work with</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    {[
                      'Domestic homes',
                      'Small businesses',
                      'Offices and retail shops',
                      'HMOs (houses in multiple occupation)',
                      'Landlords and rental properties',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/80" />
                        <span className="font-extrabold text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Plumbing Services
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                Plumbing services we provide
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  'Emergency plumbing when urgent issues need quick attention',
                  'Leak repairs to help limit water damage and disruption',
                  'Bathroom and kitchen plumbing for repairs, upgrades, and replacements',
                  'Drain clearing and urgent callouts handled with a practical, responsive approach',
                ].map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-orange" />
                    <p className="text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
              <Link to="/emergency-plumbing" className="primary-button mt-8 w-full sm:min-w-[220px] sm:mx-auto sm:w-fit">
                Get Plumbing Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-navy text-white">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">Why Choose Us</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Why Choose Jayden’s Smith Group?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              We&apos;ve built our reputation on fast responses, clear communication, and work done properly.
              Here&apos;s what sets us apart.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06, duration: 0.35 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_20px_50px_rgba(6,16,28,0.28)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/72">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space py-10 sm:py-12">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-brand-orange px-8 py-10 text-white shadow-[0_26px_60px_rgba(244,124,32,0.28)] sm:px-12 sm:py-12">
            <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">
                  Emergency Callout
                </p>
                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                  Emergencies are fast but we&apos;re faster
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-orange-50">
                  Call now for urgent support, fast local response, and professional help when faults cannot wait.
                </p>
              </div>
              <a
                href={company.tel}
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-bold text-brand-navy transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100 sm:min-w-[260px] sm:w-auto"
              >
                Call {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Testimonials"
            title="Trusted by homeowners across Leicester"
            description="These placeholder reviews are styled to feel like familiar Google feedback and help reinforce trust for new enquiries."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,39,64,0.12)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-brand-navy">{testimonial.name}</p>
                        <p className="text-sm text-slate-500">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-1 text-brand-orange">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Google
                  </div>
                </div>
                <p className="mt-6 leading-7 text-slate-600">{testimonial.text}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500">
                  <Quote className="h-4 w-4 text-orange-200" />
                  Verified-style placeholder review
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Areas We Cover"
            title="Local coverage across Leicester and surrounding towns"
            description="We provide emergency response and planned trade services across Leicester and nearby areas, helping customers get fast support from a local team."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <button
                key={area}
                type="button"
                className="group flex min-h-[84px] items-center gap-3 rounded-[1.5rem] border border-slate-200 bg-white p-5 text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_20px_45px_rgba(15,39,64,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-navy text-white transition duration-300 group-hover:bg-brand-orange">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="font-semibold text-brand-navy">{area}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

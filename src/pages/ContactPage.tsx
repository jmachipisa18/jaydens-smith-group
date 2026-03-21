import { MapPinned, Phone, Wrench } from 'lucide-react';
import { areas, company, contactReasons } from '../data/siteData';
import { SectionIntro } from '../components/SectionIntro';

export function ContactPage() {
  return (
    <div className="overflow-x-clip">
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 bg-hero-grid opacity-90" />
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-brand-orange/12 blur-3xl" />
        <div className="container-shell relative py-20 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">Contact</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Call now for emergency electrical or plumbing help in Leicester
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            If you need an emergency electrician Leicester response, an emergency plumber Leicester callout, or advice on boiler and rewiring work, we are ready to help.
          </p>
          <a href={company.tel} className="primary-button mt-8 w-full sm:w-auto">
            <Phone className="h-4 w-4" />
            Call {company.phone}
          </a>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-6">
            {[
              { icon: Phone, title: 'Phone', text: company.phone, href: company.tel },
              { icon: MapPinned, title: 'Location', text: company.location },
              { icon: Wrench, title: 'Typical Enquiries', text: 'Electrical faults, leaks, boiler repairs, rewiring' },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,39,64,0.12)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-brand-orange">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 text-2xl font-extrabold text-brand-navy">{item.title}</h2>
                  {item.href ? (
                    <a href={item.href} className="mt-3 inline-flex text-lg font-semibold text-brand-orange">
                      {item.text}
                    </a>
                  ) : (
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-soft lg:p-10">
            <SectionIntro
              eyebrow="Get In Touch"
              title="Request a callback or free quote"
              description="This contact form is built as production-style UI and ready to connect to your preferred form handling later."
            />
            <form className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-1">
                <span className="mb-2 block text-sm font-semibold text-brand-navy">Name</span>
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100" placeholder="Your name" />
              </label>
              <label className="sm:col-span-1">
                <span className="mb-2 block text-sm font-semibold text-brand-navy">Phone</span>
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100" placeholder="07469 343232" />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-brand-navy">Service Needed</span>
                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100">
                  {contactReasons.map((reason) => (
                    <option key={reason}>{reason}</option>
                  ))}
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-brand-navy">Message</span>
                <textarea
                  className="min-h-36 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
                  placeholder="Tell us what’s happening and where you are based."
                />
              </label>
              <button type="button" className="primary-button sm:col-span-2">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Service Area"
            title="Covering Leicester and nearby locations"
            description="We work across the city and surrounding areas for both emergency callouts and planned work."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div key={area} className="rounded-[1.5rem] border border-slate-200 bg-white py-5 text-center font-semibold text-brand-navy shadow-soft">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

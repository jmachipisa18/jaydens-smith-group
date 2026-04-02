import { ChevronDown, Clock3, Menu, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import jLogo from '../assets/j-logo.svg';
import { ScrollManager } from '../components/ScrollManager';
import { areas, company, footerServices, navLinks, topBarItems } from '../data/siteData';

export function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const emergencyLinks = navLinks.filter(
    (link) => link.path === '/electrical-repairs' || link.path === '/emergency-plumbing',
  );
  const desktopNavLinks = navLinks.filter(
    (link) => link.path !== '/electrical-repairs' && link.path !== '/emergency-plumbing',
  );
  const projectLinks = navLinks.filter((link) => link.path === '/rewiring');
  const standardNavLinks = desktopNavLinks.filter((link) => link.path !== '/rewiring');
  const emergencyActive = emergencyLinks.some((link) => link.path === location.pathname);
  const projectsActive = projectLinks.some((link) => link.path === location.pathname);

  return (
    <div className="min-h-screen bg-brand-cream">
      <ScrollManager />
      <header className="sticky top-0 z-50">
        <div className="border-b border-white/10 bg-brand-navy text-white">
          <div className="container-shell flex min-h-11 items-center justify-between gap-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] sm:text-sm">
            <div className="text-white/80 sm:hidden">24/7 emergency service</div>
            <div className="hidden flex-wrap items-center gap-3 text-white/80 sm:flex">
              {topBarItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 text-white/80">
                <Clock3 className="h-4 w-4" />
                24/7 Callouts
              </span>
              <a href={company.tel} className="inline-flex items-center gap-2 text-white">
                <Phone className="h-4 w-4" />
                {company.phone}
              </a>
            </div>
          </div>
        </div>
        <div className="border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
          <div className="container-shell flex items-center justify-between gap-3 py-3 sm:gap-4 sm:py-4">
            <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 ring-1 ring-slate-200 sm:h-12 sm:w-12">
                <img src={jLogo} alt="Jayden’s Smith Group logo" className="h-full w-full object-contain" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-base font-extrabold text-brand-navy sm:text-lg">{company.name}</p>
                <p className="hidden text-sm text-slate-500 sm:block">Emergency electrician and plumber</p>
              </div>
            </Link>

            <nav className="hidden flex-1 items-center justify-center lg:flex">
              <div className="flex items-center gap-8 xl:gap-10">
                {standardNavLinks.slice(0, 1).map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative text-sm font-semibold ${
                        isActive ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

                <div className="group relative">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition duration-200 ${
                      projectsActive ? 'text-brand-orange' : 'text-brand-navy group-hover:text-brand-orange'
                    }`}
                  >
                    Projects
                    <ChevronDown className="h-4 w-4 transition duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-[0_24px_60px_rgba(15,39,64,0.14)]">
                      {projectLinks.map((link) => (
                        <NavLink
                          key={link.path}
                          to={link.path}
                          className={({ isActive }) =>
                            `block rounded-2xl px-4 py-3 text-sm font-semibold transition duration-200 ${
                              isActive
                                ? 'bg-orange-50 text-brand-orange'
                                : 'text-brand-navy hover:bg-slate-50 hover:text-brand-orange'
                            }`
                          }
                        >
                          {link.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition duration-200 ${
                      emergencyActive ? 'text-brand-orange' : 'text-brand-navy group-hover:text-brand-orange'
                    }`}
                  >
                    EMERGENCY
                    <ChevronDown className="h-4 w-4 transition duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-[0_24px_60px_rgba(15,39,64,0.14)]">
                      {emergencyLinks.map((link) => (
                        <NavLink
                          key={link.path}
                          to={link.path}
                          className={({ isActive }) =>
                            `block rounded-2xl px-4 py-3 text-sm font-semibold transition duration-200 ${
                              isActive
                                ? 'bg-orange-50 text-brand-orange'
                                : 'text-brand-navy hover:bg-slate-50 hover:text-brand-orange'
                            }`
                          }
                        >
                          {link.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>

                {standardNavLinks.slice(1).map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative text-sm font-semibold ${
                        isActive ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a href={company.tel} className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy">
                <Phone className="h-4 w-4 text-brand-orange" />
                {company.phone}
              </a>
              <Link to="/contact#contact-form" className="primary-button">
                Get a Quote
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex rounded-full border border-slate-200 bg-white p-3 text-brand-navy shadow-sm transition duration-200 hover:border-orange-200 hover:text-brand-orange lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
          <AnimatePresence>
            {open ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
              >
                <div className="container-shell flex max-h-[calc(100vh-9rem)] flex-col space-y-1 overflow-y-auto py-4 pb-5">
                  {standardNavLinks.slice(0, 1).map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `rounded-2xl px-4 py-3 text-sm font-semibold ${
                          isActive ? 'bg-orange-50 text-brand-orange' : 'text-brand-navy hover:bg-slate-50'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                  <div className="mt-2 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-2">
                    <p className="px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Projects</p>
                    {projectLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-2xl px-4 py-3 text-sm font-semibold ${
                            isActive ? 'bg-orange-50 text-brand-orange' : 'text-brand-navy hover:bg-white'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                  <div className="mt-2 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-2">
                    <p className="px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Emergency</p>
                    {emergencyLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-2xl px-4 py-3 text-sm font-semibold ${
                            isActive ? 'bg-orange-50 text-brand-orange' : 'text-brand-navy hover:bg-white'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                  {standardNavLinks.slice(1).map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `rounded-2xl px-4 py-3 text-sm font-semibold ${
                          isActive ? 'bg-orange-50 text-brand-orange' : 'text-brand-navy hover:bg-slate-50'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                  <a href={company.tel} className="mt-4 inline-flex items-center gap-2 px-4 text-sm font-bold text-brand-navy">
                    <Phone className="h-4 w-4 text-brand-orange" />
                    {company.phone}
                  </a>
                  <Link to="/contact#contact-form" onClick={() => setOpen(false)} className="primary-button mt-3">
                    Get a Quote
                  </Link>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </header>

      <main className="pb-24 lg:pb-0">
        <Outlet />
      </main>

      <div className="fixed inset-x-4 bottom-4 z-40 lg:hidden">
        <a
          href={company.tel}
          className="primary-button w-full rounded-[1.35rem] shadow-[0_18px_45px_rgba(244,124,32,0.35)]"
        >
          <Phone className="h-4 w-4" />
          Call Now {company.phone}
        </a>
      </div>

      <footer className="bg-brand-navy text-white">
        <div className="border-t border-white/10">
          <div className="container-shell grid gap-10 py-16 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <h3 className="text-2xl font-extrabold">{company.name}</h3>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Trusted emergency electrician and plumber support for homes and businesses across Leicester and the
                surrounding areas, with fast response and dependable service.
              </p>
              <a
                href={company.tel}
                className="mt-6 inline-flex items-center gap-2 text-lg font-bold text-brand-orange hover:text-orange-300"
              >
                <Phone className="h-5 w-5" />
                {company.phone}
              </a>
            </div>
            <div>
              <h4 className="text-lg font-bold">Services</h4>
              <div className="mt-4 space-y-3 text-sm text-white/75">
                {footerServices.map((service) => (
                  <Link key={service.path} to={service.path} className="block hover:text-white">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold">Service Areas</h4>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/75">
                {areas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold">Opening Hours</h4>
              <div className="mt-4 space-y-3 text-sm text-white/75">
                <p>24/7 Emergency Callouts</p>
                <p>Leicester & Surrounding Areas</p>
                <p>{company.certifications[0]}</p>
                <p>{company.certifications[1]}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-shell flex flex-col gap-3 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>{company.name} | Emergency electrician and plumber support in Leicester.</p>
            <a href={company.tel} className="font-semibold text-white hover:text-brand-orange">
              {company.phone}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

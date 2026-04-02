import cityGuildsLogo from '../assets/city-guilds-qualified.png';
import aphcLogo from '../assets/aphc-logo.png';
import { SectionIntro } from './SectionIntro';

const partners = [
  {
    name: 'City & Guilds Qualified',
    logo: cityGuildsLogo,
    alt: 'City & Guilds Qualified logo',
    imageClassName: 'max-h-28 sm:max-h-32',
  },
  {
    name: 'APHC',
    logo: aphcLogo,
    alt: 'APHC logo',
    imageClassName: 'max-h-24 sm:max-h-28',
  },
];

export function PartneredWithSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell">
        <SectionIntro eyebrow="Credentials" title="Partnered With" description="" align="center" />
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex min-h-[220px] items-center justify-center rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className={`h-auto w-auto max-w-full object-contain ${partner.imageClassName}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

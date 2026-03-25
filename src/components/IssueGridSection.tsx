import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { SectionIntro } from './SectionIntro';

type IssueItem = {
  title: string;
  icon: LucideIcon;
};

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  items: IssueItem[];
};

export function IssueGridSection({ eyebrow, title, description, items }: Props) {
  return (
    <section className="section-space bg-white py-12 sm:py-14">
      <div className="container-shell">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} align="center" />
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.35 }}
                className="group flex min-h-[168px] flex-col items-center justify-center rounded-[1.5rem] border border-slate-200 bg-slate-50/60 p-6 text-center shadow-[0_14px_34px_rgba(15,39,64,0.08)] transition duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:bg-white hover:shadow-[0_20px_44px_rgba(15,39,64,0.14)] sm:min-h-[182px] sm:p-7"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-brand-navy text-white transition duration-300 group-hover:scale-105 group-hover:bg-brand-orange">
                  <Icon className="h-8 w-8" />
                </div>
                <p className="mt-4 text-lg font-extrabold leading-7 text-brand-navy transition duration-300 group-hover:text-brand-orange sm:text-xl">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

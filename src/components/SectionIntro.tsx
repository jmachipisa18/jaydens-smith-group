import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  action?: ReactNode;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
}: SectionIntroProps) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className={alignment}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </motion.div>
  );
}

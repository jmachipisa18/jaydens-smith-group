import { FormEvent, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { heroLeadServiceGroups } from '../data/siteData';

type Values = {
  service: string;
  postcode: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const initialValues: Values = {
  service: '',
  postcode: '',
};

export function HeroLeadForm() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});

  function updateField<K extends keyof Values>(field: K, value: Values[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Errors = {};

    if (!values.service) nextErrors.service = 'Choose the service you need.';
    if (!values.postcode.trim()) nextErrors.postcode = 'Enter your postcode.';

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const searchParams = new URLSearchParams({
      service: values.service,
      postcode: values.postcode.trim().toUpperCase(),
    });

    navigate({
      pathname: '/contact',
      search: `?${searchParams.toString()}`,
      hash: '#contact-form',
    });
  }

  return (
    <div className="w-full max-w-2xl rounded-[2rem] border border-white/70 bg-white p-5 text-brand-navy shadow-[0_26px_70px_rgba(8,22,38,0.22)] sm:p-8">
      <div className="max-w-xl text-center sm:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-orange">Get Started</p>
        <h1 className="mt-3 text-[1.95rem] font-extrabold tracking-tight sm:text-4xl">
          Tell us what you need and we&apos;ll get you to the right next step.
        </h1>
      </div>

      <form className="mt-6 grid gap-4 lg:grid-cols-[1.6fr_0.95fr_auto] lg:items-start" onSubmit={handleSubmit} noValidate>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold">I need help with…</span>
          <select
            value={values.service}
            onChange={(event) => updateField('service', event.target.value)}
            className="min-h-[54px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-base outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
          >
            <option value="" disabled>
              I need help with…
            </option>
            {heroLeadServiceGroups.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          {errors.service ? <p className="mt-2 text-sm font-medium text-red-600">{errors.service}</p> : null}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold">Postcode</span>
          <input
            value={values.postcode}
            onChange={(event) => updateField('postcode', event.target.value)}
            autoComplete="postal-code"
            inputMode="text"
            className="min-h-[54px] w-full rounded-2xl border border-slate-200 px-4 py-3.5 text-base uppercase outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
            placeholder="LE1 1AA"
          />
          {errors.postcode ? <p className="mt-2 text-sm font-medium text-red-600">{errors.postcode}</p> : null}
        </label>

        <button type="submit" className="primary-button w-full justify-center self-end px-8 lg:w-auto">
          Get Started
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 rounded-[1.25rem] border border-slate-200/90 bg-white px-4 py-3 text-sm font-semibold text-slate-700 sm:justify-start">
        <span className="inline-flex items-center gap-2">
          <span className="text-lg font-extrabold tracking-tight">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
        </span>
        <div className="flex items-center gap-1 text-[#F4B400]">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg key={index} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 0 0-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 0 0 .95-.69l1.07-3.292Z" />
            </svg>
          ))}
        </div>
        <span className="text-center text-brand-navy">25+ 5 star reviews</span>
      </div>
    </div>
  );
}

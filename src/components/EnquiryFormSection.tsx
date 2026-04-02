import { FormEvent, useEffect, useRef, useState } from 'react';
import {
  enquiryServiceOptions,
  submitFormPayload,
  type SharedEnquiryErrors,
  type SharedEnquiryValues,
  type SubmitState,
  validateSharedEnquiryForm,
} from '../lib/formSubmission';

const initialValues: SharedEnquiryValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  serviceNeeded: '',
  website: '',
};

type Props = {
  source?: string;
  sectionId?: string;
  prefilledService?: string;
  prefillTrigger?: number;
};

export function EnquiryFormSection({
  source = 'Website enquiry form',
  sectionId,
  prefilledService,
  prefillTrigger = 0,
}: Props) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<SharedEnquiryErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>({ status: 'idle' });
  const sectionRef = useRef<HTMLElement | null>(null);
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!prefilledService || prefillTrigger === 0) {
      return;
    }

    setValues((current) => ({
      ...current,
      serviceNeeded: prefilledService,
    }));
    setErrors((current) => ({ ...current, serviceNeeded: undefined }));
    setSubmitState((current) => (current.status === 'error' ? { status: 'idle' } : current));

    const formSection = sectionRef.current;
    if (!formSection) {
      return;
    }

    const offsetTop = formSection.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({
      top: Math.max(offsetTop, 0),
      left: 0,
      behavior: 'smooth',
    });

    const focusTimeout = window.setTimeout(() => {
      const nextEmptyField = [firstNameRef.current, lastNameRef.current, phoneRef.current, emailRef.current].find(
        (field) => field && field.value.trim().length === 0,
      );

      if (!nextEmptyField) {
        return;
      }

      nextEmptyField.focus({ preventScroll: true });
    }, 450);

    return () => window.clearTimeout(focusTimeout);
  }, [prefilledService, prefillTrigger]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateSharedEnquiryForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState({ status: 'error', message: 'Please correct the highlighted fields and try again.' });
      return;
    }

    setSubmitState({ status: 'submitting' });

    try {
      const message = await submitFormPayload({
        formName: 'shared-enquiry',
        source,
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        phone: values.phone.trim(),
        email: values.email.trim(),
        serviceNeeded: values.serviceNeeded,
        website: values.website,
      });

      setValues(initialValues);
      setErrors({});
      setSubmitState({ status: 'success', message });
    } catch (error) {
      setSubmitState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong while sending your enquiry.',
      });
    }
  }

  function updateField<K extends keyof SharedEnquiryValues>(field: K, value: SharedEnquiryValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  return (
    <section ref={sectionRef} id={sectionId} className="section-space bg-white">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft sm:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Emergency Response
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-brand-navy">
              Get fast help backed by our 180-day free repairs guarantee
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Send your enquiry and we&apos;ll help you with urgent electrical or plumbing issues quickly, clearly, and
              professionally.
            </p>
          </div>
          <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit} noValidate>
            <label className="sm:col-span-1">
              <span className="mb-2 block text-sm font-semibold text-brand-navy">First name</span>
              <input
                required
                ref={firstNameRef}
                autoComplete="given-name"
                name="firstName"
                value={values.firstName}
                onChange={(event) => updateField('firstName', event.target.value)}
                className="min-h-[54px] w-full rounded-2xl border border-slate-200 px-4 py-3.5 text-base outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
                placeholder="First name"
              />
              {errors.firstName ? <p className="mt-2 text-sm font-medium text-red-600">{errors.firstName}</p> : null}
            </label>
            <label className="sm:col-span-1">
              <span className="mb-2 block text-sm font-semibold text-brand-navy">Last name</span>
              <input
                required
                ref={lastNameRef}
                autoComplete="family-name"
                name="lastName"
                value={values.lastName}
                onChange={(event) => updateField('lastName', event.target.value)}
                className="min-h-[54px] w-full rounded-2xl border border-slate-200 px-4 py-3.5 text-base outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
                placeholder="Last name"
              />
              {errors.lastName ? <p className="mt-2 text-sm font-medium text-red-600">{errors.lastName}</p> : null}
            </label>
            <label className="sm:col-span-1">
              <span className="mb-2 block text-sm font-semibold text-brand-navy">Phone number</span>
              <input
                required
                ref={phoneRef}
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                value={values.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                className="min-h-[54px] w-full rounded-2xl border border-slate-200 px-4 py-3.5 text-base outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
                placeholder="07469 343232"
              />
              {errors.phone ? <p className="mt-2 text-sm font-medium text-red-600">{errors.phone}</p> : null}
            </label>
            <label className="sm:col-span-1">
              <span className="mb-2 block text-sm font-semibold text-brand-navy">Email address</span>
              <input
                required
                type="email"
                ref={emailRef}
                name="email"
                autoComplete="email"
                inputMode="email"
                value={values.email}
                onChange={(event) => updateField('email', event.target.value)}
                className="min-h-[54px] w-full rounded-2xl border border-slate-200 px-4 py-3.5 text-base outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
                placeholder="you@example.com"
              />
              {errors.email ? <p className="mt-2 text-sm font-medium text-red-600">{errors.email}</p> : null}
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-brand-navy">Service needed</span>
              <select
                required
                name="serviceNeeded"
                value={values.serviceNeeded}
                onChange={(event) => updateField('serviceNeeded', event.target.value)}
                className="min-h-[54px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-base outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {prefilledService && !enquiryServiceOptions.includes(prefilledService as (typeof enquiryServiceOptions)[number]) ? (
                  <option value={prefilledService}>{prefilledService}</option>
                ) : null}
                {enquiryServiceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.serviceNeeded ? <p className="mt-2 text-sm font-medium text-red-600">{errors.serviceNeeded}</p> : null}
            </label>
            <label className="hidden" aria-hidden="true">
              Website
              <input
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={(event) => updateField('website', event.target.value)}
              />
            </label>
            {submitState.status !== 'idle' ? (
              <div
                className={`rounded-2xl px-4 py-3 text-sm font-medium sm:col-span-2 ${
                  submitState.status === 'success'
                    ? 'bg-emerald-50 text-emerald-700'
                    : submitState.status === 'error'
                      ? 'bg-red-50 text-red-700'
                      : 'bg-slate-100 text-slate-700'
                }`}
              >
                {submitState.status === 'submitting' ? 'Sending your enquiry...' : submitState.message}
              </div>
            ) : null}
            <button type="submit" disabled={submitState.status === 'submitting'} className="primary-button w-full sm:col-span-2">
              {submitState.status === 'submitting' ? 'Sending...' : 'Get My Free Quote'}
            </button>
          </form>
          <div className="mt-8 grid gap-4 rounded-3xl bg-brand-cream p-5 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-extrabold">3+</p>
              <p className="text-sm text-slate-600">Years in business</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">24/7</p>
              <p className="text-sm text-slate-600">Service available</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">Free</p>
              <p className="text-sm text-slate-600">Quotes provided</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

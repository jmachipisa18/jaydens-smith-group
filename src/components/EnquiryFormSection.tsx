export function EnquiryFormSection() {
  return (
    <section className="section-space bg-white">
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
          <form className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="sm:col-span-1">
              <span className="mb-2 block text-sm font-semibold text-brand-navy">First name</span>
              <input
                required
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
                placeholder="First name"
              />
            </label>
            <label className="sm:col-span-1">
              <span className="mb-2 block text-sm font-semibold text-brand-navy">Last name</span>
              <input
                required
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
                placeholder="Last name"
              />
            </label>
            <label className="sm:col-span-1">
              <span className="mb-2 block text-sm font-semibold text-brand-navy">Phone number</span>
              <input
                required
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
                placeholder="07469 343232"
              />
            </label>
            <label className="sm:col-span-1">
              <span className="mb-2 block text-sm font-semibold text-brand-navy">Email address</span>
              <input
                required
                type="email"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
                placeholder="you@example.com"
              />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-brand-navy">Service needed</span>
              <select
                required
                defaultValue=""
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-orange-100"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Electrical problem</option>
                <option>Plumbing problem</option>
                <option>Electrical and plumbing problem</option>
                <option>Rewiring</option>
              </select>
            </label>
            <button type="button" className="primary-button w-full sm:col-span-2">
              Get My Free Quote
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

import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="container-shell py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">404</p>
      <h1 className="mt-4 text-4xl font-extrabold text-brand-navy">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you are looking for does not exist.</p>
      <Link to="/" className="primary-button mt-8">
        Back to home
      </Link>
    </div>
  );
}

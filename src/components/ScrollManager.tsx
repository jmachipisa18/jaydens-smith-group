import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const shouldFocusContactForm =
      location.pathname === '/contact' &&
      (location.hash === '#contact-form' ||
        searchParams.has('service') ||
        searchParams.has('postcode'));

    if (shouldFocusContactForm) {
      window.requestAnimationFrame(() => {
        const formElement = document.getElementById('contact-form');

        if (!formElement) {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          return;
        }

        const offsetTop = formElement.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({
          top: Math.max(offsetTop, 0),
          left: 0,
          behavior: 'smooth',
        });
      });

      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.search, location.hash]);

  return null;
}

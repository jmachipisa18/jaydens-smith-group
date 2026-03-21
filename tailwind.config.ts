import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f2740',
          slate: '#1f3f62',
          orange: '#f47c20',
          cream: '#f6f8fb',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 39, 64, 0.08)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top, rgba(244,124,32,0.18), transparent 28%), linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 50%)',
      },
    },
  },
  plugins: [],
} satisfies Config;

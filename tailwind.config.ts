import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#070708',
          800: '#0A0A0C',
          700: '#0F0F12',
          600: '#16161A',
          500: '#1E1E24',
        },
        bone: '#F4F1EA',
        gold: {
          DEFAULT: '#C9A24B',
          soft: '#E4C97E',
          deep: '#8E6F2C',
        },
        ice: '#9FB4C7',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        ultra: '0.35em',
      },
      maxWidth: {
        container: '1480px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.65, 0.05, 0, 1)',
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;

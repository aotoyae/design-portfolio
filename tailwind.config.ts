import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        blue: '#a5cbff',
        red: '#ff2424',
        pink: '#ffafbd',
        lemon: '#fcffd0',
        gray: '#d9d9d9',
        'deep-gray': '#a9a9a9',
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A5D5E',
        secondary: '#D2DBC8',
        accent: '#F8F8EC',
        background: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
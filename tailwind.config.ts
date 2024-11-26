import type { Config } from 'tailwindcss';
import { screens } from './tailwind.screens';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens,
    fontFamily: {
      inter: ['var(--font-inter)', ...fontFamily.serif],
    },
    fontSize: {
      h1: '67px',
      h2: '51px',
      h3: '38px',
      h4: '28px',
      h5: '22px',
      subheading: '18px',
      body: '16px',
      caption: '12px',
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      'shiny-grey': '#E6EFF5',
      'cloudy-grey': '#f5f7fa',
      'rainy-grey': '#B1B1B1',
      'stormy-grey': '#3B3B3B',
      'gloomy-blue': '#8BA3CB',
      'navy-blue': '#343C6A',
      'trusted-blue': '#396AFF',
      'night-charcoal': '#5B5A6F',
      charcoal: '#2B2B2B',
      black: '#000000',

      'rose-red': '#FF4B4A',
      'leaf-green': '#41D4A8',
    },
  },
  plugins: [],
} satisfies Config;

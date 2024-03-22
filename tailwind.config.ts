import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
  ],
  theme: { extend: { fontFamily: { sans: ['var(--font-inter)'] } } },
  daisyui: { themes: ['cmyk'] },
  plugins: [require('daisyui')],
  darkMode: 'class'
} satisfies Config;
export default config;

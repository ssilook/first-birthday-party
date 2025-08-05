// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
        cursive: ['KyoboHand', 'cursive'],
      },
      colors: {
        'light-brown': '#F4E8D7',
        'dark-brown': '#A0522D',
        'light-pink': '#FFF5F7',
        'light-purple': '#F5F5FF',
        'baby-pink': '#FFC0CB',
      },
    },
  },
  plugins: [],
};

export default config;

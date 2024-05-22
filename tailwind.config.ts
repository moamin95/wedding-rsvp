import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#C8AD81',
      },
      backgroundImage: {
        "hero-splash": "url('/duo1.png')",
      },
      backgroundSize: {
        'size-contain': 'contain',
        'size-cover': 'cover',
        '50%': '50%',
      }
    },
  },
  plugins: [],
};
export default config;
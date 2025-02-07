import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        wrenixYellow: '#ffbf18',
        wrenixBlue: '#4f48ec',
        wrenixGray: '#484848',
      },
      fontFamily: {
        'ar-one-sans': ['"Ar One Sans"', 'sans-serif'],
        'inter': "var(--font-inter), sans-serif",
      }
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-banner': "url('/offerBg.png')",
        'menu-one': "url('/temporary/m1.png')",
        'menu-two': "url('/temporary/m2.png')",
        'menu-three': "url('/temporary/m3.png')",
       }
    },
  },
  plugins: [],
};
export default config;

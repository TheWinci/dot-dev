import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-eclips":
          `radial-gradient(ellipse at top, var(--tw-gradient-from), transparent),
          radial-gradient(ellipse at bottom, var(--tw-gradient-to), transparent);`,
        "gradient-eclips2":
          `radial-gradient(ellipse at top, var(--tw-gradient-from), transparent),
          radial-gradient(ellipse at bottom, var(--tw-gradient-from), transparent),
          radial-gradient(ellipse at right, var(--tw-gradient-to), transparent),
          radial-gradient(ellipse at left, var(--tw-gradient-to), transparent);`,
      },
      animation: {
        "spin-slow": 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        metal: "var(--metal)",
        "metal-light": "var(--metal-light)",
        circuit: "var(--circuit)",
      },
      fontFamily: {
        mono: ['var(--font-roboto-mono)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'industrial': 'inset 0 0 10px rgba(0,0,0,0.5)',
        'glow': '0 0 10px var(--primary)',
      },
      borderRadius: {
        'industrial': '2px',
      },
    },
  },
  plugins: [],
} satisfies Config;

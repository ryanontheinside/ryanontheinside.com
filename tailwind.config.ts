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
        muted: "var(--muted)",
        border: "var(--border)",
        "border-hover": "var(--border-hover)",
        surface: "var(--surface)",
        "text-secondary": "var(--text-secondary)",
        // Keep old names as aliases so nothing breaks
        metal: "var(--muted)",
        "metal-light": "var(--border)",
        circuit: "var(--accent)",
      },
      fontFamily: {
        mono: ['var(--font-roboto-mono)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        'industrial': '8px',
      },
    },
  },
  plugins: [],
} satisfies Config;

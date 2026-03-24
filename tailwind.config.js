/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border, 0 0% 90%))",
        ring: "hsl(var(--ring, 0 0% 50%))",
        background: "hsl(var(--background, 0 0% 100%))",
        foreground: "hsl(var(--foreground, 0 0% 10%))",

        card: "hsl(var(--card, 0 0% 100%))",
        "card-foreground": "hsl(var(--card-foreground, 0 0% 10%))",

        popover: "hsl(var(--popover, 0 0% 100%))",
        "popover-foreground": "hsl(var(--popover-foreground, 0 0% 10%))",

        primary: "hsl(var(--primary, 0 0% 2%))",
        "primary-foreground": "hsl(var(--primary-foreground, 0 0% 100%))",

        secondary: "hsl(var(--secondary, 0 0% 95%))",
        "secondary-foreground": "hsl(var(--secondary-foreground, 0 0% 2%))",

        muted: "hsl(var(--muted, 0 0% 92%))",
        "muted-foreground": "hsl(var(--muted-foreground, 0 0% 45%))",

        accent: "hsl(var(--accent, 0 0% 95%))",
        "accent-foreground": "hsl(var(--accent-foreground, 0 0% 2%))",

        destructive: "hsl(var(--destructive, 0 80% 45%))",
        "destructive-foreground": "hsl(var(--destructive-foreground, 0 0% 100%))",

        input: "hsl(var(--input, 0 0% 0%))",
      },
      fontSize: {
        base: ['var(--text-base, 1rem)', { lineHeight: '1.5' }],
        lg: ['var(--text-lg, 1.125rem)', { lineHeight: '1.5' }],
        xl: ['var(--text-xl, 1.25rem)', { lineHeight: '1.5' }],
        '2xl': ['var(--text-2xl, 1.5rem)', { lineHeight: '1.5' }],
      },
      fontWeight: {
        normal: 'var(--font-weight-normal, 400)',
        medium: 'var(--font-weight-medium, 500)',
      },
    },
  },
  plugins: [],
};
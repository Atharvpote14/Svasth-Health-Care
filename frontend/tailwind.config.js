/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        /* Portea design system — extracted EXACT values from portea.com
           (theme-color #3fc1be; tokens --primary:#00979e, --db:#0d2222,
           --mb:#616f6f, --bc:#f25922, --ivory:#faf7f1) */
        primary: {
          /* Portea teal --primary:#00979e */
          DEFAULT: "#00979e",
          50: "#00979e",
          100: "#00979e",
          500: "#00979e",
          600: "#00767c",
          700: "#007a80",
        },
        secondary: {
          /* Same teal family (links / outline buttons / icon accents) */
          DEFAULT: "#00979e",
          50: "#00979e",
          100: "#00979e",
          500: "#00979e",
          600: "#00767c",
          700: "#007a80",
        },
        accent: {
          /* Portea CTA orange --bc:#f25922 (hover #e8470e) */
          DEFAULT: "#f25922",
          100: "#f25922",
          500: "#f25922",
          600: "#e8470e",
        },
        neutral: {
          /* Base white #ffffff, ivory #faf7f1, body text #616f6f,
             headings/dark #0d2222 */
          50: "#FFFFFF",
          100: "#faf7f1",
          200: "#faf7f1",
          300: "#616f6f",
          400: "#616f6f",
          500: "#616f6f",
          600: "#616f6f",
          700: "#616f6f",
          800: "#0d2222",
          900: "#0d2222",
          950: "#0d2222",
        },
        success: {
          500: "#2F855A",
          100: "#E3F2EA",
        },
        warning: {
          500: "#C05621",
          100: "#FBEEDD",
        },
        error: {
          500: "#C0392B",
          100: "#FBEAE8",
        },
        info: {
          500: "#2B6CB0",
          100: "#E3EEF7",
        },
      },
      fontFamily: {
        /* Portea --font-display: "Fraunces","Fraunces-fallback",Georgia,serif
           (600 loaded). Body: Poppins declared but NOT loaded on portea.com —
           falls back to system sans, which is what we mirror. */
        display: ["Fraunces", "Georgia", "serif"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(18,18,16,0.04)",
        sm: "0 1px 3px rgba(18,18,16,0.06), 0 1px 2px rgba(18,18,16,0.04)",
        md: "0 4px 8px rgba(18,18,16,0.06), 0 2px 4px rgba(18,18,16,0.04)",
        lg: "0 10px 20px rgba(18,18,16,0.08), 0 4px 8px rgba(18,18,16,0.04)",
        xl: "0 20px 40px rgba(18,18,16,0.10), 0 8px 16px rgba(18,18,16,0.06)",
      },
      spacing: {
        13: "52px",
      },
      transitionDuration: {
        250: "250ms",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 400ms cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
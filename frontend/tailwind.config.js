/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F7F5",
          100: "#DCEFE9",
          200: "#B8DFD4",
          300: "#8CCAB8",
          400: "#55B096",
          500: "#2E9678",
          600: "#1F7C63",
          700: "#1A6A54",
          800: "#155549",
          900: "#0F433A",
          950: "#0A2E28",
        },
        accent: {
          50: "#FEF7EC",
          100: "#FCECCC",
          200: "#F9D99A",
          300: "#F5C060",
          400: "#F0A63B",
          500: "#E58F1F",
          600: "#C47318",
          700: "#9C5A15",
          800: "#7E4814",
          900: "#683C14",
        },
        neutral: {
          0: "#FFFFFF",
          50: "#FAFAF8",
          100: "#F4F4F1",
          200: "#E7E7E2",
          300: "#D3D3CC",
          400: "#A8A89F",
          500: "#7F7F76",
          600: "#5C5C55",
          700: "#42423D",
          800: "#2E2E2A",
          900: "#1C1C19",
          950: "#121210",
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
        display: ["Lora", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
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
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
        /* --font-display: "Fraunces", Georgia, serif (variable weight axis).
           BUGFIX: this list previously named "Fraunces" directly and so never
           picked up the webfont that next/font downloads into
           --font-fraunces — headings silently fell through to Georgia. The
           var() carries a literal fallback, so any page that does not define
           the custom property (every Pages Router page, which is wrapped by
           pages/_app.jsx rather than app/layout.jsx) resolves to exactly the
           same stack it resolved to before. */
        display: ["var(--font-fraunces, Fraunces)", "Georgia", "serif"],
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
        /* Care-services (Person A) reading pair, loaded in app/layout.jsx.
           IBM Plex Sans holds long clinical prose at 15-17px without the
           startup-generic feel of Inter; IBM Plex Mono supplies the tabular
           figures the availability/price spec rows depend on. Both fall back
           to the previous stack when the custom property is absent. */
        body: [
          "var(--font-plex-sans, ui-sans-serif)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-plex-mono, ui-monospace)",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
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
        /* ---- Care-services motion (additive; names are namespaced so no
           existing utility changes behaviour) ---- */
        "care-rise": {
          from: { opacity: "0", transform: "translate3d(0, 14px, 0)" },
          to: { opacity: "1", transform: "none" },
        },
        /* Line-by-line hero reveal: the text wipes up from under its own
           baseline rather than fading in place, which reads as deliberate
           rather than as a generic entrance. */
        "care-wipe": {
          from: { opacity: "0", transform: "translate3d(0, 105%, 0)" },
          to: { opacity: "1", transform: "none" },
        },
        /* Ambient ring on the live-availability dot. Used once per card. */
        "care-ping": {
          "0%": { transform: "scale(0.9)", opacity: "0.55" },
          "70%": { transform: "scale(2.1)", opacity: "0" },
          "100%": { transform: "scale(2.1)", opacity: "0" },
        },
        "care-draw": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        "care-slide-up": {
          from: { transform: "translate3d(0, 100%, 0)" },
          to: { transform: "none" },
        },
      },
      animation: {
        "fade-in": "fade-in 400ms cubic-bezier(0.4, 0, 0.2, 1)",
        "care-rise": "care-rise 620ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "care-wipe": "care-wipe 720ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "care-ping": "care-ping 2600ms cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "care-draw": "care-draw 520ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "care-slide-up":
          "care-slide-up 420ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

module.exports = config;
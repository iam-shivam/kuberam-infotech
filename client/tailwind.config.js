/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* ================= COLORS ================= */
      colors: {
        navy: {
          900: "#0a1929",
          800: "#112240",
          700: "#233554",
        },
        gold: "#FFD700",
        cyan: "#5CE1E6",
        electric: "#0077FF",
      },

      /* ================= FONTS ================= */
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      /* ================= ANIMATIONS ================= */
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "glow-slow": "glow 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      },

      /* ================= KEYFRAMES ================= */
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },

      /* ================= EFFECTS ================= */
      backdropBlur: {
        xs: "2px",
        xl: "24px",
        "2xl": "40px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "circuit-pattern": "url('/images/circuit-pattern.svg')",
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      animation: {
        'bounce-once': 'bounce-once 0.5s ease',
        'shimmer': 'shimmer 2s infinite linear',
        'gentle-pulse': 'gentle-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'bounce-once': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
      },
    },
  },
  plugins: [],
};


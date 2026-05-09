/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#f97316",
        neutral: "#f3f4f6"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 450ms ease-out both",
        "slide-up": "slideUp 500ms ease-out both"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

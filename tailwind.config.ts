import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#9B87F5",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#7E69AB",
          foreground: "#FFFFFF",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "shine": {
          '0%, 100%': { textShadow: '0 0 10px #fff, 0 0 20px #7E69AB, 0 0 30px #7E69AB' },
          '50%': { textShadow: '0 0 20px #fff, 0 0 40px #7E69AB, 0 0 60px #7E69AB' },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "shine": 'shine 3s infinite alternate',
      },
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'mona-sans': ['Mona Sans', 'sans-serif'],
        'lexend-deca': ['Lexend Deca', 'sans-serif']
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
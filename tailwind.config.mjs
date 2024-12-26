import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      width: "100vw",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1400px",
    },
    fontFamily: {
      primary: "var(--font-montserrat)",
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: "#FB0160",
          hover: "#F703D0",
          secondary: "#FFF7F7",
        },
      },
      backgroundImage: {
        primary: "linear-gradient(102deg, #FB0160 0%, #F703D0 100%)",
      },
      textGradient: {
        primary: "linear-gradient(102deg, #FB0160 0%, #F703D0 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      borderColor: {
        primary: "linear-gradient(102deg, #FB0160 0%, #F703D0 100%)",
      },
    },
  },
  plugins: [tailwindcssAnimate, require("tailwindcss-animate")],
};

// "linear-gradient(102deg, #FB0160 0%, #F703D0 100%)"

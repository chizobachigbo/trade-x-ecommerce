/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        problue: "#3772FF",
        progreen: "#5FAD56",
        proyellow: "#FFD400",
        problack: "#111111",
      },

      fontFamily: {
        lato: ["Lato", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },

  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};

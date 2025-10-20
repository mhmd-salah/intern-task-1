/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#56878b",
        },
        secondary: "#bed7d9",
        // brand: {
        //   50: "#bed7d9",
        //   100: "#56878b",
        // },
      },
    },
  },
  plugins: [],
};

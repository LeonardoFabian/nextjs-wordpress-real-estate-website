// const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js",
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // font-title font-heading font-body
        title: ["Great Vibes", "cursive"],
        heading: ["Signika Negative", "sans-serif"],
        body: ["Biryani", "sans-serif"],
      },
    },
  },
  // darkMode: "class",
  plugins: [],
  // plugins: [nextui()],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Yellowtail: ['"Yellowtail"', "cursive"],
        Space: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

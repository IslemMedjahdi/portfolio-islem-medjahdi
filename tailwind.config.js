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
  plugins: [require("tailwind-scrollbar"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#570DF8",

          secondary: "#F000B8",

          accent: "#37CDBE",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "rgb(249, 250, 251)",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          1: "#F1F1F1",
          2: "#D5D5D5",
          3: "#DDDDDD",
          4: "#BDBDBD",
        },
        dark: {
          1: "#919191",
          2: "#505050",
          3: "#3C3636",
          4: "#1F1F1F",
        },
        red: {
          1: "#DA3D3D",
          2: "#E46868",
          3: "#BD0F0F",
          4: "#7D0C0C",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

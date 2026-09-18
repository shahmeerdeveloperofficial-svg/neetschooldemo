/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        berlin: ["Berlin", "sans-serif"], // Regular Berlin font
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      colors: {
        main: "#d7a51b",
        mainD: "#b88308",
        gold: "#d7a51b",
        goldL: "#fef3c7",
        goldD: "#b88308",
        sec: "#001b44",
        secD: "#00122e",
        navyD: "#001b44",
        navyM: "#0a2558",
        navyL: "#133878",
        light: "#ffffff",
        dark: "#001b44",
        gray: "#52646c",
        grayL: "#e2e8eb",
        grayD: "#334155",
        cream: "#fbfcfd",
        creamD: "#f0f4f6",
      },
    },
  },
  plugins: [],
};

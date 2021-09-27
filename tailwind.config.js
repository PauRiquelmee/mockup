module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      background: "#121212",
      surface: "#1E1E1E",
      error: "#251D51",
      primary: "#4D438E",
      "primary-variant": "#7D6EBF",
      secondary: "#FF9C46 ",
      "secondary-variant": "#FFD54F",
      black: "#000000",
      white: "#FDF6E9",
      gray: "#B1A7B2",
      "top-red": "#D6667A",
      "top-yellow": "#FFD54f",
      "top-green": "#718D69",
    },
    fontFamily: {
      body: ["Baloo Thambi 2"],
    },
  },
  variants: {
    extend: {
      borderRadius: ["hover"],
    },
  },
  plugins: [],
};

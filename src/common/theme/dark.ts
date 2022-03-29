import extendTheme from "./extend-theme";

const darkTheme = extendTheme({
  colorScheme: "dark",
  colors: {
    background: {
      primary: "#000",
      secondary: "#222",
      tertiary: "#000",
    },
    text: {
      primary: "#fff",
    },
  },
});

export default darkTheme;

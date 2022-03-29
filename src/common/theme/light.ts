import extendTheme from "./extend-theme";

const lightTheme = extendTheme({
  colorScheme: "light",
  colors: {
    background: {
      primary: "#fff",
      secondary: "#ddd",
      tertiary: "#fff",
    },
    text: {
      primary: "#000",
    },
  },
});

export default lightTheme;

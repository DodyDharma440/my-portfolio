import extendTheme from "./extend-theme";

const lightTheme = extendTheme({
  colorScheme: "light",
  colors: {
    background: {
      primary: "#F0FBFE",
      secondary: "#f3fbfe",
      tertiary: "#fff",
    },
    text: {
      primary: "#000",
    },
  },
});

export default lightTheme;

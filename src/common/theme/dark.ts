import extendTheme from "./extend-theme";

const darkTheme = extendTheme({
  colorScheme: "dark",
  colors: {
    background: {
      primary: "#1A202C",
      secondary: "#12161e",
      tertiary: "#171923",
    },
    text: {
      primary: "#fff",
    },
  },
});

export default darkTheme;

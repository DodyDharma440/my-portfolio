import { DefaultTheme } from "styled-components";
import colors from "./colors";

const theme: DefaultTheme = {
  colorScheme: "light",
  primaryColor: "",
  secondaryColor: "",
  font: "inter",
  colors: {
    primary: {
      main: "",
      light: "",
      dark: "",
      contrastText: "",
    },
    secondary: {
      main: "",
      light: "",
      dark: "",
      contrastText: "",
    },
    background: {
      primary: "",
      secondary: "",
      tertiary: "",
    },
    text: {
      primary: "",
      secondary: "",
      tertiary: "",
    },
    palettes: colors,
  },
  fonts: {
    poppins: "'Poppins', sans-serif",
    inter: "'Inter', sans-serif",
    dmSans: "'DM Sans', sans-serif",
  },
  fontSize: {
    xs: "0.6rem",
    sm: "0.8rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "1.8rem",
  },
  borderRadius: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "14px",
    xl: "20px",
    full: "9999px",
  },
  breakpoints: {
    xs: "320px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    up: {
      xs: "(max-width: 320px)",
      sm: "(max-width: 576px)",
      md: "(max-width: 768px)",
      lg: "(max-width: 992px)",
      xl: "(max-width: 1200px)",
    },
    down: {
      xs: "(min-width: 320px)",
      sm: "(min-width: 576px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 992px)",
      xl: "(min-width: 1200px)",
    },
  },
  spacing: {
    xs: "8px",
    sm: "10px",
    md: "14px",
    lg: "20px",
    xl: "28px",
  },
};

export default theme;

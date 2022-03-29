import { DefaultTheme } from "styled-components";

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
  },
  fonts: {
    poppins: "'Poppins', sans-serif",
    inter: "'Inter', sans-serif",
    dmSans: "'DM Sans', sans-serif",
  },
  fontSize: {
    xs: "0.2rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "3rem",
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
};

export default theme;

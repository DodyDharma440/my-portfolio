import { Color } from "styled-components";

//template
// color: {
//   main: "#",
//   light: "#",
//   dark: "#",
//   contrastText: "#",
// }

const colors: Record<string, Color & { contrastText: string }> = {
  red: {
    main: "#FF1D1D",
    light: "#ff4a4a",
    dark: "#b21414",
    contrastText: "#fff",
  },
  blue: {
    main: "#5072FB",
    light: "#738efb",
    dark: "#384faf",
    contrastText: "#fff",
  },
  lightBlue: {
    main: "#00b0ff",
    light: "#33bfff",
    dark: "#007bb2",
    contrastText: "#000",
  },
  cyan: {
    main: "#52CFDF",
    light: "#74d8e5",
    dark: "#39909c",
    contrastText: "#000",
  },
  purple: {
    main: "#9c27b0",
    light: "#af52bf",
    dark: "#6d1b7b",
    contrastText: "#eee",
  },
  lightPurple: {
    main: "#a056e7",
    light: "#b377eb",
    dark: "#703ca1",
    contrastText: "#fff",
  },
  yellow: {
    main: "#ffea00",
    light: "#ffee33",
    dark: "#b2a300",
    contrastText: "#000",
  },
  orange: {
    main: "#ff9100",
    light: "#ffa733",
    dark: "#b26500",
    contrastText: "#000",
  },
  green: {
    main: "#00e676",
    light: "#33eb91",
    dark: "#00a152",
    contrastText: "#000",
  },
  teal: {
    main: "#1de9b6",
    light: "#4aedc4",
    dark: "#14a37f",
    contrastText: "#000",
  },
  lightGray: {
    main: "#E4E7EB",
    light: "#e9ebef",
    dark: "#9fa1a4",
    contrastText: "#000",
  },
  white: {
    main: "#FBFCFC",
    light: "#FFFFFF",
    dark: "#e9ebef",
    contrastText: "#000",
  },
  darkGray: {
    main: "#A3B0BC",
    light: "#b5bfc9",
    dark: "#727b83",
    contrastText: "#000",
  },
  dark: {
    main: "#2D3748",
    light: "#575f6c",
    dark: "#1f2632",
    contrastText: "#fff",
  },
  black: {
    main: "#111111",
    light: "#404040",
    dark: "#0b0b0b",
    contrastText: "#fff",
  },
};

export default colors;

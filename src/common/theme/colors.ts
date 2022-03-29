import { Color } from "styled-components";

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
};

export default colors;

import { ColorPaletteKeys } from "styled-components";

type ThemeOption = {
  primary: ColorPaletteKeys;
  secondary: ColorPaletteKeys;
};

export const themeOptions: ThemeOption[] = [
  {
    primary: "blue",
    secondary: "lightBlue",
  },
  {
    primary: "purple",
    secondary: "skyBlue",
  },
  {
    primary: "red",
    secondary: "lightRed",
  },
  {
    primary: "bronze",
    secondary: "lightGray",
  },
  {
    primary: "teal",
    secondary: "lightTeal",
  },
  {
    primary: "orange",
    secondary: "lightGray",
  },
  {
    primary: "indigo",
    secondary: "lightGray",
  },
];

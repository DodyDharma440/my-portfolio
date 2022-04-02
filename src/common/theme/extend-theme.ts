import { DefaultTheme } from "styled-components";
import baseTheme from "./base-theme";
import { DeepPartial } from "common/types/common";
import colors from "./colors";

const generateColor = (
  primary: string,
  secondary: string,
  extendedTheme: DeepPartial<DefaultTheme>
) => {
  return {
    primary: colors[primary],
    secondary: colors[secondary],
    background: {
      ...baseTheme.colors.background,
      ...extendedTheme.colors?.background,
    },
    text: {
      ...baseTheme.colors.text,
      ...extendedTheme.colors?.text,
    },
    palettes: {
      ...baseTheme.colors.palettes,
    },
  };
};

const extendTheme = (extendedTheme: DeepPartial<DefaultTheme>) => {
  const primaryColor = extendedTheme.primaryColor || baseTheme.primaryColor;
  const secondaryColor =
    extendedTheme.secondaryColor || baseTheme.secondaryColor;

  return {
    ...baseTheme,
    ...extendedTheme,
    primaryColor,
    secondaryColor,
    colors: generateColor(primaryColor, secondaryColor, extendedTheme),
    fonts: {
      ...baseTheme.fonts,
      ...extendedTheme.fonts,
    },
    fontSize: {
      ...baseTheme.fontSize,
      ...extendedTheme.fontSize,
    },
    breakpoints: {
      ...baseTheme.breakpoints,
      ...extendedTheme.breakpoints,
      up: {
        ...baseTheme.breakpoints.up,
        ...extendedTheme.breakpoints?.up,
      },
      down: {
        ...baseTheme.breakpoints.down,
        ...extendedTheme.breakpoints?.down,
      },
    },
  } as DefaultTheme;
};

export default extendTheme;

import "styled-components";

declare module "styled-components" {
  interface Color {
    main: string;
    light: string;
    dark: string;
  }

  type ColorPalettes = Record<string, Color & { contrastText: string }>;

  interface Size {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  }

  export type ColorScheme = "light" | "dark";

  export type ColorType = {
    primary: string;
    secondary: string;
  };

  export interface DefaultTheme {
    colorScheme: ColorScheme;
    primaryColor: string;
    secondaryColor: string;
    font: string;
    colors: {
      primary: Color & { contrastText: string };
      secondary: Color & { contrastText: string };
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      palettes: ColorPalettes;
    };
    fonts: Record<string, string>;
    fontSize: Size;
    borderRadius: Size & { full: string };
    breakpoints: Size & {
      up: Size;
      down: Size;
    };
    spacing: Size;
  }

  export interface ThemeSettings
    extends Pick<
      DefaultTheme,
      "colorScheme" | "primaryColor" | "secondaryColor" | "font"
    > {}
}

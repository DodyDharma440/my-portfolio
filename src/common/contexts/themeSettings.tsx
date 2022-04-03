import { createContext } from "react";
import { ColorScheme, ThemeProvider } from "styled-components";
import { useInitTheme } from "common/hooks";

type ThemeSettingsCtxType = {
  colorScheme: ColorScheme;
  primaryColor: string;
  secondaryColor: string;
  toggleColorScheme: (value?: ColorScheme) => void;
  setColorType: (primary: string, secondary: string) => void;
  font: string;
  setFont: (value: string) => void;
};

export const ThemeSettingsContext = createContext<ThemeSettingsCtxType>({
  colorScheme: "light",
  primaryColor: "blue",
  secondaryColor: "lightBlue",
  font: "inter",
  setFont: () => {},
  toggleColorScheme: () => {},
  setColorType: () => {},
});

type ThemeSettingsProviderProps = {
  children: React.ReactNode;
};

export const ThemeSettingsProvider: React.FC<ThemeSettingsProviderProps> = ({
  children,
}) => {
  const {
    colorScheme,
    toggleColorScheme,
    setFont,
    setColorType,
    primaryColor,
    secondaryColor,
    theme,
    font,
  } = useInitTheme();

  return (
    <ThemeSettingsContext.Provider
      value={{
        colorScheme,
        toggleColorScheme,
        primaryColor,
        secondaryColor,
        setColorType,
        font,
        setFont,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeSettingsContext.Provider>
  );
};

export default ThemeSettingsProvider;

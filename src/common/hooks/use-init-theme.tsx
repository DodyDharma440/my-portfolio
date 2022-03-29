import { useCallback, useMemo } from "react";
import extendTheme from "common/theme/extend-theme";
import { ColorScheme, ColorType } from "styled-components";
import { useLocalStorageValue } from "@mantine/hooks";
import darkTheme from "common/theme/dark";
import lightTheme from "common/theme/light";

const useInitTheme = () => {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: "color-scheme",
    defaultValue: "light",
  });
  const [primaryColor, setPrimaryColor] = useLocalStorageValue<
    ColorType["primary"]
  >({
    key: "primary-color",
    defaultValue: "blue",
  });
  const [secondaryColor, setSecondaryColor] = useLocalStorageValue<
    ColorType["primary"]
  >({
    key: "secondary-color",
    defaultValue: "red",
  });
  const [font, setFont] = useLocalStorageValue<string>({
    key: "theme-font",
    defaultValue: "inter",
  });

  const handleSetColorType = useCallback(
    (primary: string, secondary: string) => {
      setPrimaryColor(primary);
      setSecondaryColor(secondary);
    },
    [setPrimaryColor, setSecondaryColor]
  );

  const handleSetFont = useCallback(
    (value: string) => {
      setFont(value);
    },
    [setFont]
  );

  const toggleColorScheme = useCallback(
    (value?: ColorScheme) => {
      setColorScheme((prev) =>
        value ? value : prev === "dark" ? "light" : "dark"
      );
    },
    [setColorScheme]
  );

  const theme = useMemo(() => {
    return extendTheme({
      ...(colorScheme === "dark" ? darkTheme : lightTheme),
      primaryColor,
      secondaryColor,
      font,
    });
  }, [colorScheme, primaryColor, secondaryColor, font]);

  return {
    colorScheme,
    toggleColorScheme,
    font,
    setFont: handleSetFont,
    setColorType: handleSetColorType,
    primaryColor,
    secondaryColor,
    theme,
  };
};

export default useInitTheme;

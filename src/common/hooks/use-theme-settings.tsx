import { useContext } from "react";
import { ThemeSettingsContext } from "common/contexts/themeSettings";

const useThemeSettings = () => {
  const {
    colorScheme,
    toggleColorScheme,
    setColorType,
    primaryColor,
    secondaryColor,
    font,
    setFont,
  } = useContext(ThemeSettingsContext);

  return {
    colorScheme,
    toggleColorScheme,
    setColorType,
    primaryColor,
    secondaryColor,
    font,
    setFont,
  };
};

export default useThemeSettings;

import styled, { ColorScheme } from "styled-components";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { Drawer, Divider, Stack, Icon } from "common/components";
import { useThemeSettings } from "common/hooks";
import colors from "common/theme/colors";

const SettingTitle = styled.p`
  margin-bottom: ${(p) => p.theme.spacing.sm};
  font-size: ${(p) => p.theme.fontSize.sm};
`;

const SettingGroup = styled.div`
  margin-bottom: ${(p) => p.theme.spacing.md};
`;

const InnerDrawer = styled.div`
  padding: ${(p) => p.theme.spacing.sm};
  background: ${(p) => p.theme.colors.background.secondary};
  height: 100%;
`;

type ColorSchemeCardProps = {
  colorScheme: ColorScheme;
};

const ColorSchemeCard = styled.div<ColorSchemeCardProps>`
  border-radius: 6px;
  padding: ${(p) => p.theme.spacing.lg} ${(p) => p.theme.spacing.sm};
  background: ${(p) =>
    p.colorScheme === "dark"
      ? p.theme.colors.palettes.dark.dark
      : p.theme.colors.palettes.white.dark};
  color: ${(p) =>
    p.colorScheme === "dark"
      ? p.theme.colors.palettes.darkGray.dark
      : p.theme.colors.palettes.darkGray.dark};
  cursor: pointer;
  transition: background 0.1s;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${(p) =>
      p.colorScheme === "dark"
        ? p.theme.colors.palettes.dark.main
        : p.theme.colors.palettes.white.main};
  }
`;

const ColorRadioOutline = styled.div<{ isActive: boolean }>`
  padding: 2px;
  background: transparent;
  border-radius: 50%;
  border: 2px solid;
  border-color: ${(p) =>
    p.isActive
      ? p.theme.colorScheme === "dark"
        ? p.theme.colors.palettes.darkGray.dark
        : p.theme.colors.palettes.darkGray.dark
      : "transparent"};
`;

type ColorRadioProps = {
  color: string;
};

const ColorRadio = styled.div<ColorRadioProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: ${(p) => p.color};
`;

const FontRadioOutline = styled.div<{ isActive: boolean }>`
  padding: 2px;
  background: transparent;
  border-radius: 50%;
  border: 1px solid;
  border-color: #000;
  border-color: ${(p) =>
    p.isActive
      ? p.theme.colorScheme === "dark"
        ? p.theme.colors.palettes.darkGray.dark
        : p.theme.colors.palettes.darkGray.dark
      : "transparent"};
`;

const FontRadio = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(p) =>
    p.theme.colorScheme === "dark"
      ? p.theme.colors.palettes.darkGray.dark
      : p.theme.colors.palettes.darkGray.dark};
`;

const FontOption = styled.p<{ family: string }>`
  font-family: ${(p) => p.family};
`;

export type ThemeSettingsProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ThemeSettings: React.FC<ThemeSettingsProps> = ({ isOpen, onClose }) => {
  const {
    toggleColorScheme,
    setColorType,
    setFont,
    primaryColor,
    secondaryColor,
    font,
  } = useThemeSettings();

  const handleChangePrimary = (value: string) => {
    setColorType(value, secondaryColor);
  };

  const handleChangeSecondary = (value: string) => {
    setColorType(primaryColor, value);
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} position="right">
      <InnerDrawer>
        <h4>Pengaturan Tema</h4>
        <Divider />
        <SettingGroup>
          <SettingTitle>Mode Warna</SettingTitle>
          <Stack direction="row" spacing="md">
            <ColorSchemeCard
              colorScheme="light"
              onClick={() => toggleColorScheme("light")}
            >
              <Icon size={28} icon={SunIcon} />
            </ColorSchemeCard>
            <ColorSchemeCard
              colorScheme="dark"
              onClick={() => toggleColorScheme("dark")}
            >
              <Icon size={28} icon={MoonIcon} />
            </ColorSchemeCard>
          </Stack>
        </SettingGroup>
        <SettingGroup>
          <SettingTitle>Warna Primer</SettingTitle>
          <Stack>
            {Object.entries(colors).map((color, index) => {
              return (
                <ColorRadioOutline
                  key={index}
                  isActive={primaryColor === color[0]}
                >
                  <ColorRadio
                    color={color[1].main}
                    onClick={() => handleChangePrimary(color[0])}
                  />
                </ColorRadioOutline>
              );
            })}
          </Stack>
        </SettingGroup>
        <SettingGroup>
          <SettingTitle>Warna Sekunder</SettingTitle>
          <Stack>
            {Object.entries(colors).map((color, index) => {
              return (
                <ColorRadioOutline
                  key={index}
                  isActive={secondaryColor === color[0]}
                >
                  <ColorRadio
                    color={color[1].main}
                    onClick={() => handleChangeSecondary(color[0])}
                  />
                </ColorRadioOutline>
              );
            })}
          </Stack>
        </SettingGroup>
        <SettingGroup>
          <SettingTitle>Jenis Font</SettingTitle>
          <Stack direction="column" align="flex-start">
            <Stack
              style={{ cursor: "pointer" }}
              onClick={() => setFont("inter")}
            >
              <FontRadioOutline isActive={font === "inter"}>
                <FontRadio />
              </FontRadioOutline>
              <FontOption family="'Inter', sans-serif">Inter</FontOption>
            </Stack>
            <Stack
              style={{ cursor: "pointer" }}
              onClick={() => setFont("dmSans")}
            >
              <FontRadioOutline isActive={font === "dmSans"}>
                <FontRadio />
              </FontRadioOutline>
              <FontOption family="'DM Sans', sans-serif">DM Sans</FontOption>
            </Stack>
            <Stack
              style={{ cursor: "pointer" }}
              onClick={() => setFont("poppins")}
            >
              <FontRadioOutline isActive={font === "poppins"}>
                <FontRadio />
              </FontRadioOutline>
              <FontOption family="'Poppins', sans-serif">Poppins</FontOption>
            </Stack>
          </Stack>
        </SettingGroup>
      </InnerDrawer>
    </Drawer>
  );
};

export default ThemeSettings;

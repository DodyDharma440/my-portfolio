import styled, { ColorScheme } from "styled-components";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { Drawer, Divider, Stack, Icon } from "common/components";
import { useThemeSettings } from "common/hooks";
import colors from "common/theme/colors";
import { themeOptions } from "modules/layout/constants";

const SettingTitle = styled.p`
  margin-bottom: ${(p) => p.theme.spacing.sm};
  font-size: ${(p) => p.theme.fontSize.md};
`;

const SettingGroup = styled.div`
  margin-bottom: ${(p) => p.theme.spacing.xl};
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
  border-radius: 20px;
  border: 2px solid;
  border-color: ${(p) =>
    p.isActive ? p.theme.colors.primary.main : "transparent"};
`;

type ColorRadioProps = {
  primary: string;
  secondary: string;
  onClick: () => void;
};

const InnerColorRadio = styled.div<{ color: string }>`
  background: ${(p) => p.theme.colors.palettes[p.color].main};
  width: 50%;
`;

const ColorRadioStyle = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  & div:nth-child(1) {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  & div:nth-last-child(1) {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const FontRadioOutline = styled.div<{ isActive: boolean }>`
  padding: 2px;
  background: transparent;
  border-radius: 50%;
  border: 1px solid;
  border-color: #000;
  border-color: ${(p) =>
    p.isActive ? p.theme.colors.primary.main : "transparent"};
`;

const FontRadio = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(p) => p.theme.colors.primary.main};
`;

const ColorRadio: React.FC<ColorRadioProps> = ({
  primary,
  secondary,
  onClick,
}) => {
  return (
    <ColorRadioStyle onClick={onClick}>
      <InnerColorRadio color={primary} />
      <InnerColorRadio color={secondary} />
    </ColorRadioStyle>
  );
};

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

  const handleChangeColor = (primary: string, secondary: string) => {
    setColorType(primary, secondary);
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
          <SettingTitle>Palette</SettingTitle>
          <Stack>
            {themeOptions.map((opt, index) => {
              const isActive =
                primaryColor === opt.primary &&
                secondaryColor === opt.secondary;

              return (
                <ColorRadioOutline key={index} isActive={isActive}>
                  <ColorRadio
                    primary={opt.primary}
                    secondary={opt.secondary}
                    onClick={() =>
                      handleChangeColor(opt.primary, opt.secondary)
                    }
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
              <p>Inter</p>
            </Stack>
            <Stack
              style={{ cursor: "pointer" }}
              onClick={() => setFont("dmSans")}
            >
              <FontRadioOutline isActive={font === "dmSans"}>
                <FontRadio />
              </FontRadioOutline>
              <p>DM Sans</p>
            </Stack>
            <Stack
              style={{ cursor: "pointer" }}
              onClick={() => setFont("poppins")}
            >
              <FontRadioOutline isActive={font === "poppins"}>
                <FontRadio />
              </FontRadioOutline>
              <p>Poppins</p>
            </Stack>
          </Stack>
        </SettingGroup>
      </InnerDrawer>
    </Drawer>
  );
};

export default ThemeSettings;

import { CogIcon } from "@heroicons/react/outline";
import {
  Button,
  Stack,
  Icon,
  IconButton,
  Container,
  Section,
} from "common/components";
import { useThemeSettings } from "common/hooks";
import colors from "common/theme/colors";

const HomePage = () => {
  const {
    toggleColorScheme,
    setColorType,
    setFont,
    primaryColor,
    secondaryColor,
    font,
  } = useThemeSettings();

  const handleChangePrimary = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColorType(e.target.value, secondaryColor);
  };

  const handleChangeSecondary = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColorType(primaryColor, e.target.value);
  };

  return (
    <Section id="home" style={{ height: "5000px" }}>
      <Container>
        <Stack direction="column" align="flex-start">
          <Button
            color="primary"
            rounded="xl"
            size="xs"
            onClick={() => toggleColorScheme()}
          >
            X Small
          </Button>
          <Button color="primary" onClick={() => toggleColorScheme()}>
            Small
          </Button>
          <Button color="primary" size="md" onClick={() => toggleColorScheme()}>
            Medium
          </Button>
          <Button color="primary" size="lg" onClick={() => toggleColorScheme()}>
            Large
          </Button>
          <Button
            color="primary"
            rounded="full"
            size="xl"
            onClick={() => toggleColorScheme()}
          >
            X Large
          </Button>
          <IconButton color="secondary" onClick={() => toggleColorScheme()}>
            <Icon size={60} icon={CogIcon} />
          </IconButton>

          <label>Primary</label>
          <select onChange={handleChangePrimary} value={primaryColor}>
            {Object.keys(colors).map((color) => {
              return <option value={color}>{color}</option>;
            })}
          </select>

          <label>Secondary</label>
          <select onChange={handleChangeSecondary} value={secondaryColor}>
            {Object.keys(colors).map((color) => {
              return <option value={color}>{color}</option>;
            })}
          </select>

          <select onChange={(e) => setFont(e.target.value)} value={font}>
            <option value="inter">inter</option>
            <option value="dmSans">dm sans</option>
            <option value="poppins">poppins</option>
          </select>
        </Stack>
      </Container>
    </Section>
  );
};

export default HomePage;

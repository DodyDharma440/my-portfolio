import { Button, Stack } from "common/components";
import { useThemeSettings } from "common/hooks";

const HomePage = () => {
  const {
    toggleColorScheme,
    setColorType,
    setFont,
    primaryColor,
    secondaryColor,
    font,
  } = useThemeSettings();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const arrayValue = e.target.value.split("-");
    const primary = arrayValue[0];
    const secondary = arrayValue[1];
    setColorType(primary, secondary);
  };

  return (
    <Stack direction="column" align="flex-start">
      <Button variant="primary" onClick={() => toggleColorScheme()}>
        Primary
      </Button>
      <Button variant="secondary" onClick={() => toggleColorScheme()}>
        Secondary
      </Button>

      <select
        onChange={handleChange}
        value={`${primaryColor}-${secondaryColor}`}
      >
        <option value="red-blue">red - blue</option>
        <option value="blue-red">blue - red</option>
      </select>

      <select onChange={(e) => setFont(e.target.value)} value={font}>
        <option value="inter">inter</option>
        <option value="dmSans">dm sans</option>
        <option value="poppins">poppins</option>
      </select>
    </Stack>
  );
};

export default HomePage;

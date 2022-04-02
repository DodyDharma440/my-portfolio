import styled from "styled-components";

export type DividerProps = {
  mt?: number;
  mb?: number;
};

const Divider = styled.hr<DividerProps>`
  height: 1px;
  background-color: ${(p) =>
    p.theme.colorScheme === "dark"
      ? p.theme.colors.palettes.dark.light
      : p.theme.colors.palettes.white.dark};
  margin-top: ${(p) => p.mt}px;
  margin-bottom: ${(p) => p.mb}px;
  border: 0;
`;

export default Divider;

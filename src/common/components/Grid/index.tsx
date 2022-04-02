import styled, { Size } from "styled-components";

export type GridProps = {
  templateColumns: string;
  justify?: "stretch" | "center" | "start" | "end";
  placeItems?: "stretch" | "center" | "start" | "end";
  align?: "stretch" | "center" | "start" | "end";
  spacing?: keyof Size | string | number;
};

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(p) => p.templateColumns};
  justify-items: ${(p) => p.justify};
  align-items: ${(p) => p.align};
  place-items: ${(p) => p.placeItems};
  grid-gap: ${(p) =>
    typeof p.spacing === "number"
      ? `${p.spacing}px`
      : typeof p.spacing === "string"
      ? p.spacing
      : p.theme.spacing[p.spacing || "xs"]};
`;

Grid.defaultProps = {
  align: "center",
};

export default Grid;

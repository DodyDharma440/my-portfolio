import styled, { Size } from "styled-components";

export type StackProps = {
  direction?: "row" | "column";
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  align?: "center" | "flex-start" | "flex-end" | "start" | "end" | "stretch";
  spacing?: number | keyof Size;
  noWrap?: boolean;
};

const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${(p) => p.direction};
  justify-content: ${(p) => p.justify};
  align-items: ${(p) => p.align};
  gap: ${(p) =>
    typeof p.spacing === "number"
      ? `${p.spacing}px`
      : p.theme.spacing[p.spacing || "xs"]};
  flex-wrap: ${(p) => (p.noWrap ? "nowrap" : "wrap")};
`;

Stack.defaultProps = {
  direction: "row",
  justify: "flex-start",
  align: "center",
};

export default Stack;

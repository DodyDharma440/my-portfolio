import styled from "styled-components";

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
  spacing?: number;
};

const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${(p) => p.direction};
  justify-content: ${(p) => p.justify};
  align-items: ${(p) => p.align};
  gap: ${(p) => p.spacing}px;
`;

Stack.defaultProps = {
  direction: "row",
  justify: "flex-start",
  align: "center",
  spacing: 10,
};

export default Stack;

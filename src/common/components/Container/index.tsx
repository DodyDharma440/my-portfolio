import styled, { Size } from "styled-components";

export type BoxContainerProps = {
  size?: keyof Size;
  align?: "left" | "right" | "center";
};

const BoxContainer = styled.div<BoxContainerProps>`
  max-width: ${(p) => {
    const breakpoints = p.theme.breakpoints as Size;
    return breakpoints[p.size || "xl"];
  }};
  margin-left: ${(p) =>
    ["center", "right"].includes(p.align?.toString() || "center")
      ? "auto"
      : "0px"};
  margin-right: ${(p) =>
    ["center", "left"].includes(p.align?.toString() || "center")
      ? "auto"
      : "0px"};
`;

export default BoxContainer;

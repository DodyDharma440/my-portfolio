import theme from "common/theme/base-theme";
import styled, { Size } from "styled-components";

export type IconButtonProps = {
  color?: "primary" | "secondary" | "transparent";
  size?: keyof Size;
  rounded?: keyof Size | "full";
};

const IconButton = styled.button<IconButtonProps>`
  background-color: ${(p) =>
    p.color !== "transparent"
      ? p.theme.colors[p.color || "primary"].main
      : "transparent"};
  transition: background-color 0.1s;
  color: ${(p) =>
    p.color !== "transparent"
      ? p.theme.colors[p.color || "primary"].contrastText
      : theme.colors.text.primary};
  padding: ${(p) => p.theme.spacing[p.size || "sm"]};
  cursor: pointer;
  border: 0;
  border-radius: ${(p) => p.theme.borderRadius[p.rounded || "sm"]};
  font-size: ${(p) => p.theme.fontSize[p.size || "sm"]};
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(1px);
  }
  &:hover {
    background-color: ${(p) =>
      p.color !== "transparent"
        ? p.theme.colors[p.color || "primary"].dark
        : "transparent"};
  }
`;

IconButton.defaultProps = {
  color: "primary",
};

export default IconButton;

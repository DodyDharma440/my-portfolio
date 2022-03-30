import styled, { Size } from "styled-components";

export type IconButtonProps = {
  color?: "primary" | "secondary";
  size?: keyof Size;
  rounded?: keyof Size | "full";
};

const IconButton = styled.button<IconButtonProps>`
  background-color: ${(p) => p.theme.colors[p.color || "primary"].main};
  transition: background-color 0.1s;
  color: ${(p) => p.theme.colors[p.color || "primary"].contrastText};
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
    background-color: ${(p) => p.theme.colors[p.color || "primary"].dark};
  }
`;

IconButton.defaultProps = {
  color: "primary",
};

export default IconButton;

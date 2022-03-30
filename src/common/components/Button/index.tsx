import styled, { Size, DefaultTheme } from "styled-components";

export type ButtonProps = {
  color?: "primary" | "secondary";
  size?: keyof Size;
  rounded?: keyof Size | "full";
};

const paddingSize = (theme: DefaultTheme, size: keyof Size): string => {
  const sizes = {
    xs: `calc(${theme.spacing.md} - ${theme.spacing.xs}) ${theme.spacing.sm}`,
    sm: `${theme.spacing.xs} ${theme.spacing.md}`,
    md: `${theme.spacing.sm} ${theme.spacing.lg}`,
    lg: `${theme.spacing.md} ${theme.spacing.xl}`,
    xl: `${theme.spacing.lg} calc(${theme.spacing.xl} + ${theme.spacing.xs})`,
  };

  return sizes[size];
};

const Button = styled.button<ButtonProps>`
  background-color: ${(p) => p.theme.colors[p.color || "primary"].main};
  transition: background-color 0.1s;
  color: ${(p) => p.theme.colors[p.color || "primary"].contrastText};
  padding: ${(p) => paddingSize(p.theme, p.size || "sm")};
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

Button.defaultProps = {
  color: "primary",
};

export default Button;

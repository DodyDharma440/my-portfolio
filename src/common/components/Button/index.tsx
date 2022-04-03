import styled, { Size, DefaultTheme } from "styled-components";

export type ButtonProps = {
  color?: "primary" | "secondary";
  variant?: "filled" | "outlined" | "transparent";
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
  background-color: ${(p) => {
    const backgroundColors = {
      transparent: "transparent",
      filled: p.theme.colors[p.color || "primary"].main,
      outlined: "transparent",
    };
    return backgroundColors[p.variant || "filled"];
  }};
  transition: background-color 0.1s;
  color: ${(p) => {
    const textColors = {
      transparent: p.theme.colors.text.primary,
      filled: p.theme.colors[p.color || "primary"].contrastText,
      outlined: p.theme.colors[p.color || "primary"].main,
    };
    return textColors[p.variant || "filled"];
  }};
  padding: ${(p) => paddingSize(p.theme, p.size || "sm")};
  cursor: pointer;
  border: ${(p) => {
    const borders = {
      transparent: 0,
      filled: 0,
      outlined: `1px solid ${p.theme.colors[p.color || "primary"].main}`,
    };
    return borders[p.variant || "filled"];
  }};
  border-radius: ${(p) => p.theme.borderRadius[p.rounded || "sm"]};
  font-size: ${(p) => p.theme.fontSize[p.size || "sm"]};
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(1px);
  }
  &:hover {
    background-color: ${(p) => {
      const backgroundColors = {
        transparent: "transparent",
        filled: p.theme.colors[p.color || "primary"].dark,
        outlined: p.theme.colors[p.color || "primary"].main,
      };

      return backgroundColors[p.variant || "filled"];
    }};
    color: ${(p) => {
      const textColors = {
        transparent: p.theme.colors.text.primary,
        filled: p.theme.colors[p.color || "primary"].contrastText,
        outlined: p.theme.colors[p.color || "primary"].contrastText,
      };

      return textColors[p.variant || "filled"];
    }};
  }
`;

Button.defaultProps = {
  color: "primary",
  variant: "filled",
};

export default Button;

import styled from "styled-components";

export type ButtonProps = {
  variant?: "primary" | "secondary";
};

const Button = styled.button<ButtonProps>`
  background-color: ${(p) => p.theme.colors[p.variant || "primary"].main};
  transition: background-color 0.1s;
  color: ${(p) => p.theme.colors[p.variant || "primary"].contrastText};
  padding: 8px 16px;
  cursor: pointer;
  border: 0;
  border-radius: 6px;
  font-size: ${(p) => p.theme.fontSize.md};
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(2px);
  }
  &:hover {
    background-color: ${(p) => p.theme.colors[p.variant || "primary"].dark};
  }
`;

Button.defaultProps = {
  variant: "primary",
};

export default Button;

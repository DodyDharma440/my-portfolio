import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        font-family: ${(p) => p.theme.fonts[p.theme.font]};
    }
    body {
        font-family: ${(p) => p.theme.fonts[p.theme.font]};
        background-color: ${(p) => p.theme.colors.background.primary};
        color: ${(p) => p.theme.colors.text.primary};
    }
`;

export default GlobalStyle;

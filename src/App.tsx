import React from "react";
import { ThemeSettingsProvider } from "common/contexts/themeSettings";
import GlobalStyle from "common/theme/globals";
import Router from "routes";

const App = () => {
  return (
    <ThemeSettingsProvider>
      <GlobalStyle />
      <Router />
    </ThemeSettingsProvider>
  );
};

export default App;

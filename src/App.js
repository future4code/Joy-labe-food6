import React from "react";
import Routers from "./route/Routers";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;

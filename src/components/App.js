import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, defaultTheme } from "../utils";

import { Classic, Component, Extending, Playing } from "./FreeCodeCamp";
import { Fem } from "./Fem";

import { MyBox } from "./buttons/ButtonsPlaytime";

export const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          padding: "2rem",
        }}
      >
        <button
          style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
          onClick={() => setUseDarkTheme(true)}
        >
          Dark theme
        </button>
        <button
          style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
          onClick={() => setUseDarkTheme(false)}
        >
          Default theme
        </button>
        <hr />
        <Playing />
        <hr />
        <Classic />
        <hr />
        <Component />
        <hr />
        <Extending />
        <hr />
        <Fem />
        <hr />
        <MyBox />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

import React, { useState } from "react";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { ThemeProvider } from "styled-components";

import { typeScale } from "../../utils";

const white = "#fff";
const black = "#000";

const boxStyles = theme("mode", {
  light: css`
    background: ${white};
    color: ${black};
  `,
  dark: css`
    background: ${black};
    color: ${white};
  `,
});

const Box = styled.div`
  ${boxStyles}
`;

export function MyBox() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={{ mode: theme }}>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        change theme
      </button>
      <Box>Hello World</Box>
    </ThemeProvider>
  );
}

export const ButtonPlay = styled.button`
  font-family: ${(props) => props.theme.primaryFont};
  background: ${(props) => (props.primary ? "#337ab7" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#333")};
  font-size: ${typeScale.header5};
  margin: 1em;
  padding: 6px 12px;
  border: ${(props) =>
    props.primary ? "1px solid #2e6da4" : "1px solid #ccc"};
  border-radius: 4px;
  cursor: pointer;
`;

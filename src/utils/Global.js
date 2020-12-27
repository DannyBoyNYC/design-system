import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    font-size: 16px;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 1rem;
    font-family: ${primaryFont}
  }
  main {
    width: 80%;
    margin: 0 auto;
  }
  /* temporary */
  button {
    margin: 12px;
  }
`;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

import { ButtonBase } from "./components/ButtonsClassic";
import { ButtonComponent } from "./components/ButtonsComponent";
import {
  ButtonExtending,
  ButtonExtendingPrimary,
  ButtonExtendingSuccess,
  ButtonExtendingLink,
  ButtonExtendV2,
  // ButtonExtendV2Primary,
  // ButtonExtendV2Success,
} from "./components/ButtonsExtending";

const Classic = () => {
  return (
    <div>
      <h2>The Classname Approach</h2>
      <ButtonBase>Base</ButtonBase>
      <ButtonBase className="primary">Primary</ButtonBase>
      <ButtonBase className="success">Success</ButtonBase>
      <ButtonBase className="link">Link</ButtonBase>
      <ButtonBase className="primary large">Primary Large</ButtonBase>
      <ButtonBase className="disabled primary large">
        Primary Large Disabled
      </ButtonBase>
    </div>
  );
};

const Component = () => {
  return (
    <div>
      <h2>The Component Approach</h2>
      <ButtonComponent>Default</ButtonComponent>
      <ButtonComponent primary={true}>Primary</ButtonComponent>
    </div>
  );
};

const Extending = () => {
  return (
    <div>
      <h2>The Extending Approach</h2>
      <ButtonExtending>Default</ButtonExtending>
      <ButtonExtendingPrimary>Primary</ButtonExtendingPrimary>
      <ButtonExtendingSuccess>Success</ButtonExtendingSuccess>
      <ButtonExtendingLink>Link</ButtonExtendingLink>
      <h2>The Extend V2 Approach</h2>
      <ButtonExtendV2>Default</ButtonExtendV2>
      {/* <ButtonExtendV2Primary>Primary</ButtonExtendV2Primary>
      <ButtonExtendV2Success>Success</ButtonExtendV2Success> */}
    </div>
  );
};

const Fem = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
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
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
        }}
      >
        <h1>Regular</h1>
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <TertiaryButton>Tertiary</TertiaryButton>
        <h1>Disabled</h1>
        <PrimaryButton disabled>disabled</PrimaryButton>
        <SecondaryButton disabled>disabled</SecondaryButton>
        <TertiaryButton disabled>disabled</TertiaryButton>
        <h1>Modifiers</h1>
        <PrimaryButton modifiers="small">small</PrimaryButton>
        <PrimaryButton modifiers={["large"]}>large</PrimaryButton>
        <PrimaryButton modifiers={["small", "warning"]}>
          small warning
        </PrimaryButton>
        <SecondaryButton
          modifiers={["large", "warning", "secondaryButtonWarning"]}
        >
          large secondary warning
        </SecondaryButton>
        <h1>More Modifiers</h1>
        <PrimaryButton modifiers={["error", "primaryButtonError"]}>
          error
        </PrimaryButton>
        <PrimaryButton modifiers={["success", "primaryButtonSuccess"]}>
          success
        </PrimaryButton>
      </div>

      <GlobalStyle />
    </ThemeProvider>
  );
};

const App = () => (
  <>
    <Classic />
    <hr />
    <Component />
    <hr />
    <Extending />
    <hr />
    <Fem />
  </>
);

ReactDOM.render(<App />, document.querySelector("#root"));

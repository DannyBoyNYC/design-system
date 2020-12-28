import React from "react";

import { ButtonBase } from "./buttons/ButtonsClassic";
import { ButtonComponent } from "./buttons/ButtonsComponent";
import {
  ButtonExtending,
  ButtonExtendingPrimary,
  ButtonExtendingSuccess,
  ButtonExtendingLink,
} from "./buttons/ButtonsExtending";

import { ButtonPlay } from "./buttons/ButtonsPlaytime";

export const Classic = () => {
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

export const Component = () => {
  return (
    <div>
      <h2>The Component Props Approach</h2>
      <ButtonComponent>Default</ButtonComponent>
      <ButtonComponent primary={true}>Primary</ButtonComponent>
    </div>
  );
};

export const Extending = () => {
  return (
    <div>
      <h2>The Extending Approach</h2>
      <ButtonExtending>Default</ButtonExtending>
      <ButtonExtendingPrimary>Primary</ButtonExtendingPrimary>
      <ButtonExtendingSuccess>Success</ButtonExtendingSuccess>
      <ButtonExtendingLink>Link</ButtonExtendingLink>
    </div>
  );
};

export const Playing = () => {
  return (
    <div>
      <h2>Playing</h2>
      <ButtonPlay>Default</ButtonPlay>
      <ButtonExtendingPrimary>Primary</ButtonExtendingPrimary>
      <ButtonExtendingSuccess>Success</ButtonExtendingSuccess>
      <ButtonExtendingLink>Link</ButtonExtendingLink>
    </div>
  );
};

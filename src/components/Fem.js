import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./buttons/FemButtons";

export const Fem = () => {
  return (
    <div>
      <h2>Regular</h2>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <TertiaryButton>Tertiary</TertiaryButton>
      <h2>Disabled</h2>
      <PrimaryButton disabled>disabled</PrimaryButton>
      <SecondaryButton disabled>disabled</SecondaryButton>
      <TertiaryButton disabled>disabled</TertiaryButton>
      <h2>Modifiers</h2>
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
      <PrimaryButton modifiers={["error", "primaryButtonError"]}>
        error
      </PrimaryButton>
      <PrimaryButton modifiers={["success", "primaryButtonSuccess"]}>
        success
      </PrimaryButton>
    </div>
  );
};

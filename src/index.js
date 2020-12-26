import React from 'react';
import ReactDOM from 'react-dom';

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons';

import { GlobalStyle } from './utils';

const App = () => (
  <>
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
    <PrimaryButton modifiers={['large']}>large</PrimaryButton>
    <PrimaryButton modifiers={['small', 'warning']}>
      small warning
    </PrimaryButton>
    <SecondaryButton modifiers={['large', 'warning', 'secondaryButtonWarning']}>
      large secondary warning
    </SecondaryButton>
    <h1>More Modifiers</h1>
    <PrimaryButton modifiers={['error', 'primaryButtonError']}>
      error
    </PrimaryButton>
    <PrimaryButton modifiers={['success', 'primaryButtonSuccess']}>
      success
    </PrimaryButton>

    <GlobalStyle />
  </>
);

ReactDOM.render(<App />, document.querySelector('#root'));

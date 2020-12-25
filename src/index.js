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
    <PrimaryButton>hello</PrimaryButton>
    <SecondaryButton>hello</SecondaryButton>
    <TertiaryButton>hello</TertiaryButton>

    <PrimaryButton disabled>hello</PrimaryButton>
    <SecondaryButton disabled>hello</SecondaryButton>
    <TertiaryButton disabled>hello</TertiaryButton>
    <GlobalStyle />
  </>
);

ReactDOM.render(<App />, document.querySelector('#root'));

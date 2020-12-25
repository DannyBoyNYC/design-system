import ReactDOM from 'react-dom';

import { PrimaryButton } from './components/Buttons';
import { SecondaryButton } from './components/Buttons';
import { TertiaryButton } from './components/Buttons';

const App = () => (
  <>
    <PrimaryButton>hello</PrimaryButton>
    <SecondaryButton>hello</SecondaryButton>
    <TertiaryButton>hello</TertiaryButton>
  </>
);

ReactDOM.render(<App />, document.querySelector('#root'));

import './App.css';
import { ReactElement } from 'react';

import { Block1, Block2, Block3, Block4, Block5, Header } from 'components';

const App = (): ReactElement => (
  <div className="App">
    <Header />
    <Block1 />
    <Block2 />
    <Block3 />
    <Block4 />
    <Block5 />
  </div>
);

export default App;

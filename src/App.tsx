import { FC, ReactElement } from 'react';

import { Preview, Skills, Projects, Contacts, Footer, Header } from 'components';

const App: FC = (): ReactElement => (
  <div className="App">
    <Header />
    <Preview />
    <Skills />
    <Projects />
    <Contacts />
    <Footer />
  </div>
);

export default App;

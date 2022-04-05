import { FC, ReactElement } from 'react';

import { Preview, Skills, Projects, Form, Contacts, Header } from 'components';

const App: FC = (): ReactElement => (
  <div>
    <Header />
    <Preview />
    <Skills />
    <Projects />
    <Form />
    <Contacts />
  </div>
);

export default App;

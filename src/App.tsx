import { FC, ReactElement } from 'react';

import { Preview, Skills, Projects, Contacts, Header } from 'components';

const App: FC = (): ReactElement => ( // todo heroku fell. disable Form
  <div>
    <Header />
    <Preview />
    <Skills />
    <Projects />
    {/* <Form /> */}
    <Contacts />
  </div>
);

export default App;

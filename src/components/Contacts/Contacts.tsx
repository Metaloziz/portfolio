import { ReactElement } from 'react';

import { Button, Title } from 'common/components';
import style from 'components/Contacts/Contacts.module.scss';

export const Contacts = (): ReactElement => (
  <div className={`${style.generalBlock}`}>
    <div className={`${style.container} `}>
      <Title value="Contacts title" size="h3" />
      <div className={style.contact}>
        <Title value="contacts" size="h5" />
        <form>
          <input type="text" />
          <input type="text" />
          <textarea />
        </form>
        <Button name="set" />
      </div>
    </div>
  </div>
);

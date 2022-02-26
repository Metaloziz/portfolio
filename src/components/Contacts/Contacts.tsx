import { FC, ReactElement } from 'react';

import style from './Contacts.module.scss';

import { Button, Title } from 'common';

export const Contacts: FC = (): ReactElement => (
  <div className={`${style.generalBlock}`}>
    <div className={`${style.container} `}>
      <Title value="Contacts title" size="h3" />
      <div className={style.contact}>
        <Title value="contact with me" size="h5" />
        <form>
          <input type="text" />
          <input type="text" />
          <textarea />
        </form>
        <Button name="send" />
      </div>
    </div>
  </div>
);

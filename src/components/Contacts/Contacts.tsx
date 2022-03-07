import { FC, ReactElement } from 'react';

import style from './Contacts.module.scss';

import { Button, Title } from 'common';

export const Contacts: FC = (): ReactElement => (
  <div className={`${style.generalBlock}`}>
    <div className={`${style.container} `}>
      <Title value="Contacts" size="h3" />
      <div className={style.contact}>
        <Title value="Say me hello !" size="h5" />
        <div className={style.inputs}>
          <div className={style.divForm}>
            <input type="input" placeholder="Name" name="name" id="name" required />
            <span id="name" className={style.inputLabel}>
              Name
            </span>
          </div>
          <div className={style.divForm}>
            <input
              type="input"
              placeholder="Contact"
              name="contact"
              id="contact"
              required
            />
            <span id="contact" className={style.inputLabel}>
              Your contact
            </span>
          </div>
          <div className={style.divForm}>
            <input
              // style={{ width: '500px' }}
              type="input"
              placeholder="Message"
              name="message"
              id="message"
              defaultValue="Hi ! I want to give you a offer"
            />
            <span id="message" className={style.inputLabel}>
              Message
            </span>
          </div>
        </div>
        <Button name="send" />
      </div>
    </div>
  </div>
);

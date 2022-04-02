import { FC, ReactElement } from 'react';

import { Fade } from 'react-awesome-reveal';

import style from './Contacts.module.scss';

import { Button, Title } from 'common';
import { Slider } from 'common/components/Slider/Slider';

export const Contacts: FC = (): ReactElement => (
  <div id="contacts" className={`${style.generalBlock}`}>
    <div className={`${style.container} `}>
      <Slider>
        <Title value="Contacts" size="h3" />
      </Slider>

      <div className={style.contact}>
        <Title value="Say me hello !" size="h5" />
        <div className={style.inputs}>
          <Fade>
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
          </Fade>
        </div>
        <Button name="send" />
      </div>
    </div>
  </div>
);

import { FC, ReactElement } from 'react';

import { Fade } from 'react-awesome-reveal';

import { Button, Title } from 'common';
import { Slider } from 'common/components/Slider/Slider';
import style from 'components/Form/Form.module.scss';

export const Form: FC = (): ReactElement => (
  <div id="contacts" className={`${style.generalBlock}`}>
    <div className={`${style.container} `}>
      <Slider>
        <Title value="Say me hello !" size="h3" />
      </Slider>
      <div className={style.contact}>
        <div className={style.inputs}>
          <Fade triggerOnce>
            <div className={style.divForm}>
              <input type="input" placeholder="Name" name="name" id="name" required />
              <span id="name" className={style.inputLabel}>
                Your name
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
                defaultValue="Hi ! I have a offer for you "
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

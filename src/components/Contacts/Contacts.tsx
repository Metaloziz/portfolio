import { FC, ReactElement } from 'react';

import { Fade } from 'react-awesome-reveal';

import { Title } from 'common';
import { Slider } from 'common/components/Slider/Slider';
import style from 'components/Contacts/Contacts.module.scss';
import { contactsData } from 'components/Contacts/data/data';

export const Contacts: FC = (): ReactElement => {
  const elements = contactsData.map(({ id, img, url }) => (
    <div key={id} className={style.cube}>
      <Fade triggerOnce>
        <a href={url} target="_blank" rel="noreferrer">
          <div className={style.icon} style={{ backgroundImage: `url(${img})` }} />
        </a>
      </Fade>
    </div>
  ));
  return (
    <div className={style.generalBlock}>
      <div className={style.container}>
        <Slider>
          <Title value="Contacts" size="h3" />
        </Slider>
        <div className={style.cubesBlock}>{elements}</div>
        <Title
          value="You look good and I will gladly continue the conversation :)"
          size="h5"
        />
      </div>
    </div>
  );
};

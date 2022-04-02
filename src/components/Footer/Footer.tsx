/* eslint-disable */
import { FC, ReactElement } from 'react';

import { Fade } from 'react-awesome-reveal';

import style from './Footer.module.scss';
import CODEWARS from './icons/codewars.png';
import GIT from './icons/github.png';
import LINK from './icons/linkedin.png';
import TELEGRAM from './icons/telegram.png';

import { Title } from 'common';
import { Slider } from 'common/components/Slider/Slider';

const arr = [CODEWARS, GIT, LINK, TELEGRAM,TELEGRAM,TELEGRAM,TELEGRAM ];

export const Footer: FC = (): ReactElement => {
  const elements = arr.map(el => (
    <div key={el} className={style.cube}>
      <Fade>
        <div className={style.icon} style={{ backgroundImage: `url(${el})` }} />
      </Fade>
    </div>
  ));
  return (
    <div className={style.generalBlock}>
      <div className={style.container}>
        {/* <Slider> */}
        <Title value="Footer" size="h3" />
        {/* </Slider> */}
        <div className={style.cubesBlock}>{elements}</div>
        <Title  value="© 2022 Copyrights. All Rights Reserved." size="h5" />
      </div>
    </div>
  );
};

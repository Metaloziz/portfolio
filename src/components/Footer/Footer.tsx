import { FC, ReactElement } from 'react';

import style from './Footer.module.scss';
import CODEWARS from './icons/codewars.png';
import GIT from './icons/github.png';
import LINK from './icons/linkedin.png';
import TELEGRAM from './icons/telegram.png';

import { Title } from 'common';

const arr = [CODEWARS, GIT, LINK, TELEGRAM];

export const Footer: FC = (): ReactElement => (
  <div className={style.generalBlock}>
    <div className={style.container}>
      <Title value="Footer" size="h3" />
      <div className={style.cubesBlock}>
        {arr.map(el => (
          <div key={el} className={style.cube}>
            <div className={style.icon} style={{ backgroundImage: `url(${el})` }} />
          </div>
        ))}
      </div>
      <Title value="© 2022 Copyrights. All Rights Reserved." size="h5" />
    </div>
  </div>
);

import { FC, ReactElement } from 'react';

import style from './Footer.module.scss';

import { Title } from 'common';

export const Footer: FC = (): ReactElement => (
  <div className={style.generalBlock}>
    <div className={style.container}>
      <Title value="Footer" size="h3" />
      <div className={style.cubesBlock}>
        <div className={style.cube} />
        <div className={style.cube} />
        <div className={style.cube} />
        <div className={style.cube} />
      </div>
      <Title value="© 2022 Copyrights. All Rights Reserved." size="h5" />
    </div>
  </div>
);

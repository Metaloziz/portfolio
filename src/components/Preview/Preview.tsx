import { FC, ReactElement } from 'react';

import style from './Preview.module.scss';

import { Title } from 'common';

export const Preview: FC = (): ReactElement => (
  <div className={style.generalBlock}>
    <div className={style.container}>
      <div className={style.text}>
        <Title value="let me introduce myself — Andrew, Frontend Developer. " size="h5" />
      </div>
      <div className={style.photo}>photo</div>
    </div>
  </div>
);

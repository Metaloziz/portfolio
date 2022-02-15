import { ReactElement } from 'react';

import commonStyle from '../../common/styles/Container.module.css';

import style from './Block1.module.css';

export const Block1 = (): ReactElement => (
  <div className={style.generalBlock}>
    <div className={commonStyle.container}>
      <div className={style.text}>
        <span>Hi There</span>
        <h1>I am Andrew</h1>
        <p>Frontend Developer.</p>
      </div>
      <div className={style.photo}>photo</div>
    </div>
  </div>
);

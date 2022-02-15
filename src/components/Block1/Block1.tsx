import { ReactElement } from 'react';

import style from './Block1.module.css';

import commonStyle from 'common/styles/common.module.css';

export const Block1 = (): ReactElement => (
  <div className={`${commonStyle.generalBlock}  ${style.generalBlock}`}>
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

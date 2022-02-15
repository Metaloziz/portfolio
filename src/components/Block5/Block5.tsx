import { ReactElement } from 'react';

import commonStyle from '../../common/styles/Container.module.css';

import style from './Block5.module.css';

export const Block5 = (): ReactElement => (
  <div className={`${commonStyle.generalBlock} ${style.generalBlock}`}>
    <div className={`${commonStyle.container} ${style.container}`}>
      <h3>Block 5</h3>
      <div className={style.cubesBlock}>
        <div className={style.cube} />
        <div className={style.cube} />
        <div className={style.cube} />
        <div className={style.cube} />
      </div>
      <span>2022. Все права защищены</span>
    </div>
  </div>
);

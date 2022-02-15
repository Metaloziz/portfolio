import { ReactElement } from 'react';

import style from './Block5.module.css';

import commonStyle from 'common/styles/common.module.css';

export const Block5 = (): ReactElement => (
  <div className={`${commonStyle.generalBlock} ${style.generalBlock}`}>
    <div className={`${commonStyle.container} ${style.container}`}>
      <h3 className={commonStyle.title}>Block 5</h3>
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

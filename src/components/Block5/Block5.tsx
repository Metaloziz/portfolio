import { ReactElement } from 'react';

import style from './Block5.module.css';

import { TitleH3 } from 'common/components';
import commonStyle from 'common/styles/common.module.css';

export const Block5 = (): ReactElement => (
  <div className={`${commonStyle.generalBlock} ${style.generalBlock}`}>
    <div className={`${commonStyle.container} ${style.container}`}>
      <TitleH3 value="Block 5" />
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

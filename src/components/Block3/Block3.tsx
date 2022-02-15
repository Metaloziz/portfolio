import { ReactElement } from 'react';

import style from './Block3.module.css';

import commonStyle from 'common/styles/common.module.css';
import { Block3Item } from 'components/Block3/Block3Item';

export const Block3 = (): ReactElement => (
  <div className={`${commonStyle.generalBlock} ${style.generalBlock}`}>
    <div className={`${commonStyle.container} ${style.container}`}>
      <h3 className={commonStyle.title}>Block_3</h3>
      <div className={style.picturesBlock}>
        <Block3Item />
        <Block3Item />
      </div>
    </div>
  </div>
);

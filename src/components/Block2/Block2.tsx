import { ReactElement } from 'react';

import style from './Block2.module.css';
import { Skill } from './Skill';

import { TitleH3 } from 'common/components';
import commonStyle from 'common/styles/common.module.css';

export const Block2 = (): ReactElement => (
  <div className={`${commonStyle.generalBlock} ${style.generalBlock}`}>
    <div className={`${commonStyle.container} ${style.container}`}>
      <TitleH3 value="Block 2" />
      <div className={style.skills}>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  </div>
);

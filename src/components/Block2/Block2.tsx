import { ReactElement } from 'react';

import style from './Block2.module.css';
import { Skill } from './Skill';

import commonStyle from 'common/styles/common.module.css';

export const Block2 = (): ReactElement => (
  <div className={`${commonStyle.generalBlock} ${style.generalBlock}`}>
    <div className={commonStyle.container}>
      <h3 className={commonStyle.title}> Block 2 skills</h3>
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

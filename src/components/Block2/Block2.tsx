import { ReactElement } from 'react';

import commonStyle from '../../common/styles/Container.module.css';

import style from './Block2.module.css';
import { Skill } from './Skill/Skill';

export const Block2 = (): ReactElement => (
  <div className={style.generalBlock}>
    <div className={commonStyle.container}>
      <h2 className={style.title}> Block 2 skills</h2>
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

import { FC, ReactElement } from 'react';

import { Skill } from './Skill';
import style from './Skills.module.scss';

import { Title } from 'common';

export const Skills: FC = (): ReactElement => (
  <div className={style.generalBlock}>
    <div className={style.container}>
      <Title value="Skills" size="h3" />
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

import { ReactElement } from 'react';

import { Title } from 'common/components';
// import commonStyle from 'common/styles/common.module.css';
import { Skill } from 'components/Skills/Skill';
import style from 'components/Skills/Skills.module.scss';

export const Skills = (): ReactElement => (
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

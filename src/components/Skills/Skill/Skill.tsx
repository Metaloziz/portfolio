import { FC, ReactElement } from 'react';

import style from './Skill.module.scss';

import { Title } from 'common';
import { SkillType } from 'components/Skills/data/data';

export const Skill: FC<SkillType> = ({ img, title }): ReactElement => (
  <div className={style.item}>
    <div className={style.icon} style={img} />

    <Title value={title} size="h5" />
    {/* <span className={style.text}>Lorem ipsum dolor</span> */}
  </div>
);

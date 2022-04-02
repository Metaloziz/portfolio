/* eslint-disable */

import { FC, ReactElement } from 'react';


import { Skill } from './Skill';
import style from './Skills.module.scss';

import { Title } from 'common';
import { arrSkills } from 'components/Skills/data/data';

export const Skills: FC = (): ReactElement => {
  const skills = arrSkills.map(el => (
    <Skill key={el.title} title={el.title} img={el.img} />
  ));
  return (
    <div className={style.generalBlock}>
      <div className={style.container}>
        <Title value="Skills" size="h3" />
        <div className={style.skills}>{skills}</div>
      </div>
    </div>
  );
};

import { FC, ReactElement } from 'react';

import { Fade } from 'react-awesome-reveal';

import { Skill } from './Skill';
import style from './Skills.module.scss';

import { Title } from 'common';
import { Slider } from 'common/components/Slider/Slider';
import { arrSkills } from 'components/Skills/data/data';

export const Skills: FC = (): ReactElement => {
  const skills = arrSkills.map(el => (
    <Fade key={el.title} triggerOnce>
      <Skill key={el.title} title={el.title} img={el.img} />
    </Fade>
  ));
  return (
    <div id="skills" className={style.generalBlock}>
      <div className={style.container}>
        <Slider>
          <Title value="Skills" size="h3" />
        </Slider>
        <div className={style.skills}>{skills}</div>
      </div>
    </div>
  );
};

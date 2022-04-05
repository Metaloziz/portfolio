import { FC, ReactElement } from 'react';

import { Fade } from 'react-awesome-reveal';

import { arrSkills } from './data';
import { Skill } from './Skill';
import style from './Skills.module.scss';

import { Title, Slider } from 'common';

export const Skills: FC = (): ReactElement => {
  const skills = arrSkills.map(({ img, title }) => (
    <Fade key={title} triggerOnce>
      <Skill key={title} title={title} img={img} />
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

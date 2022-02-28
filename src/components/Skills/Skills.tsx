import { FC, ReactElement } from 'react';

import { Skill } from './Skill';
import style from './Skills.module.scss';

import AXIOS from 'assets/images/icons/axios.png';
import CSS from 'assets/images/icons/css.png';
import FORMIK from 'assets/images/icons/formik.png';
import GITHUB from 'assets/images/icons/github.png';
import HTML5 from 'assets/images/icons/html.png';
import JS from 'assets/images/icons/js.png';
import MATERIAL_UI from 'assets/images/icons/material_ui.png';
import REACT from 'assets/images/icons/react.png';
import REDUX from 'assets/images/icons/redux.png';
import REDUX_SAGA from 'assets/images/icons/redux_saga.png';
import SASS from 'assets/images/icons/sass.png';
import STORYBOOK from 'assets/images/icons/storybook.png';
import TS from 'assets/images/icons/typescript.png';
import { Title } from 'common';

type SkillsType = SkillType[];

export type SkillType = {
  title: string;
  img: {
    backgroundImage: string;
  };
};

const arrSkills: SkillsType = [
  { title: 'Java Script', img: { backgroundImage: `url(${JS})` } },
  { title: 'Type Script', img: { backgroundImage: `url(${TS})` } },
  { title: 'REACT', img: { backgroundImage: `url(${REACT})` } },
  { title: 'REDUX', img: { backgroundImage: `url(${REDUX})` } },
  { title: 'HTML 5', img: { backgroundImage: `url(${HTML5})` } },
  { title: 'CSS 3', img: { backgroundImage: `url(${CSS})` } },
  { title: 'REDUX SAGA', img: { backgroundImage: `url(${REDUX_SAGA})` } },
  { title: 'FORMIK', img: { backgroundImage: `url(${FORMIK})` } },
  { title: 'GITHUB', img: { backgroundImage: `url(${GITHUB})` } },
  { title: 'AXIOS', img: { backgroundImage: `url(${AXIOS})` } },
  { title: 'SASS', img: { backgroundImage: `url(${SASS})` } },
  { title: 'STORYBOOK', img: { backgroundImage: `url(${STORYBOOK})` } },
  { title: 'MATERIAL UI', img: { backgroundImage: `url(${MATERIAL_UI})` } },
];

export const Skills: FC = (): ReactElement => (
  <div className={style.generalBlock}>
    <div className={style.container}>
      <Title value='Skills' size='h3' />
      <div className={style.skills}>
        {arrSkills.map(el => (
          <Skill key={el.title} title={el.title} img={el.img} />
        ))}
      </div>
    </div>
  </div>
);

import AXIOS from 'assets/images/icons_skills/axios.png';
import CSS from 'assets/images/icons_skills/css.png';
import FORMIK from 'assets/images/icons_skills/formik.png';
import GITHUB from 'assets/images/icons_skills/github.png';
import HTML5 from 'assets/images/icons_skills/html.png';
import JS from 'assets/images/icons_skills/js.png';
import MATERIAL_UI from 'assets/images/icons_skills/material_ui.png';
import REACT from 'assets/images/icons_skills/react.png';
import REDUX from 'assets/images/icons_skills/redux.png';
import REDUX_SAGA from 'assets/images/icons_skills/redux_saga.png';
import SASS from 'assets/images/icons_skills/sass.png';
import STORYBOOK from 'assets/images/icons_skills/storybook.png';
import TS from 'assets/images/icons_skills/typescript.png';

type SkillsType = SkillType[];

export type SkillType = {
  title: string;
  img: {
    backgroundImage: string;
  };
};

export const arrSkills: SkillsType = [
  { title: 'Java Script', img: { backgroundImage: `url(${JS})` } },
  { title: 'Type Script', img: { backgroundImage: `url(${TS})` } },
  { title: 'REACT', img: { backgroundImage: `url(${REACT})` } },
  { title: 'REDUX', img: { backgroundImage: `url(${REDUX})` } },
  { title: 'HTML5', img: { backgroundImage: `url(${HTML5})` } },
  { title: 'CSS3', img: { backgroundImage: `url(${CSS})` } },
  { title: 'REDUX SAGA', img: { backgroundImage: `url(${REDUX_SAGA})` } },
  { title: 'FORMIK', img: { backgroundImage: `url(${FORMIK})` } },
  { title: 'GITHUB', img: { backgroundImage: `url(${GITHUB})` } },
  { title: 'AXIOS', img: { backgroundImage: `url(${AXIOS})` } },
  { title: 'SASS', img: { backgroundImage: `url(${SASS})` } },
  { title: 'STORYBOOK', img: { backgroundImage: `url(${STORYBOOK})` } },
  { title: 'MATERIAL UI', img: { backgroundImage: `url(${MATERIAL_UI})` } },
];

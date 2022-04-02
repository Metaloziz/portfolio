import { ReactElement } from 'react';

import { Fade } from 'react-awesome-reveal';

import { ProjectItem } from './ProjectItem';
import style from './Projects.module.scss';

import SOCIAL_NETWORK from 'assets/images/images_projects/SN.png';
import TO_DO_LIST from 'assets/images/images_projects/TDL.png';
import { Title } from 'common';
import { Slider } from 'common/components/Slider/Slider';
import { ProjectsType } from 'components/Projects/ProjectItem/ProjectItem';

const ProjectItems: ProjectsType[] = [
  { title: 'Social Network', img: { backgroundImage: `url(${SOCIAL_NETWORK})` } },
  { title: 'To do list', img: { backgroundImage: `url(${TO_DO_LIST})` } },
  { title: 'To do list', img: { backgroundImage: `url(${TO_DO_LIST})` } },
];

export const Projects = (): ReactElement => {
  const projects = ProjectItems.map(el => (
    <Fade key={el.title}>
      <ProjectItem key={el.title} title={el.title} img={el.img} />
    </Fade>
  ));

  return (
    <div id="projects" className={style.generalBlock}>
      <div className={style.container}>
        <Slider>
          <Title value="Projects" size="h3" />
        </Slider>
        <div className={style.picturesBlock}>{projects}</div>
      </div>
    </div>
  );
};

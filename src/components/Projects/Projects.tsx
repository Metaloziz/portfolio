import { ReactElement } from 'react';

import { ProjectItem } from './ProjectItem';
import style from './Projects.module.scss';

import SOCIAL_NETWORK from 'assets/images/images_projects/SN.png';
import TO_DO_LIST from 'assets/images/images_projects/TDL.png';
import { Title } from 'common';
import { ProjectsType } from 'components/Projects/ProjectItem/ProjectItem';

const ProjectItems: ProjectsType[] = [
  { title: 'Social Network', img: { backgroundImage: `url(${SOCIAL_NETWORK})` } },
  { title: 'To do list', img: { backgroundImage: `url(${TO_DO_LIST})` } },
];

export const Projects = (): ReactElement => (
  <div className={style.generalBlock}>
    <div className={style.container}>
      <Title value="Projects" size="h3" />
      <div className={style.picturesBlock}>
        {ProjectItems.map(el => (
          <ProjectItem key={el.title} title={el.title} img={el.img} />
        ))}
      </div>
    </div>
  </div>
);

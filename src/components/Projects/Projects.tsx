import { ReactElement } from 'react';

import { ProjectItemPropsType, ProjectItem } from './ProjectItem';
import style from './Projects.module.scss';

import img1 from 'assets/images/react.png';
import img2 from 'assets/images/redux.jpg';
import { Title } from 'common';

export const Projects = (): ReactElement => {
  const obj1: ProjectItemPropsType = {
    backgroundImage: `url(${img1})`,
  };
  const obj2: ProjectItemPropsType = {
    backgroundImage: `url(${img2})`,
  };

  return (
    <div className={style.generalBlock}>
      <div className={style.container}>
        <Title value="Projects" size="h3" />
        <div className={style.picturesBlock}>
          <ProjectItem styleProps={obj2} />
          <ProjectItem styleProps={obj1} />
        </div>
      </div>
    </div>
  );
};

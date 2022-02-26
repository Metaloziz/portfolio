import { ReactElement } from 'react';

import img1 from 'assets/images/react.png';
import img2 from 'assets/images/redux.jpg';
import { Title } from 'common/components';
// import commonStyle from 'common/styles/common.module.css';
import { ProjectItem, Block3ItemPT } from 'components/Projects/ProjectItem/ProjectItem';
import style from 'components/Projects/Projects.module.scss';

export const Projects = (): ReactElement => {
  const obj1: Block3ItemPT = {
    backgroundImage: `url(${img1})`,
  };
  const obj2: Block3ItemPT = {
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

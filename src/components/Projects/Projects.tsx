import { ReactElement } from 'react';

import { Fade } from 'react-awesome-reveal';

import { ProjectItem } from './ProjectItem';
import style from './Projects.module.scss';

import { Title } from 'common';
import { Slider } from 'common/components/Slider/Slider';
import { projectItems } from 'components/Projects/data/data';

export const Projects = (): ReactElement => {
  const projects = projectItems.map(({ title, img, description }) => (
    <Fade key={title} triggerOnce>
      <ProjectItem key={title} title={title} img={img} description={description} />
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

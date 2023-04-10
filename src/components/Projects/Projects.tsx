import { ReactElement } from 'react';

import { Fade } from 'react-awesome-reveal';

import { projectItems } from './data';
import { ProjectItem } from './ProjectItem';
import style from './Projects.module.scss';

import { Title, Slider } from 'common';

export const Projects = (): ReactElement => {
  const projects = projectItems.map(({ title, img, description, url, git }) => (
    <Fade key={title} triggerOnce>
      {/* <a href={url} target="_blank" rel="noreferrer"> */}
      <ProjectItem
        key={title}
        url={url}
        git={git}
        title={title}
        img={img}
        description={description}
      />
      {/* </a> */}
    </Fade>
  ));

  return (
    <div id="projects" className={style.generalBlock}>
      <div className={style.container}>
        <Slider>
          <Title value="Projects" size="h3" />
        </Slider>
        <div className={style.projectBlock}>{projects}</div>
      </div>
    </div>
  );
};

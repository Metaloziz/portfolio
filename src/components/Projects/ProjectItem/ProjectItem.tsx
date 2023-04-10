import { FC, ReactElement } from 'react';

import { ProjectsType } from '../data';

import style from './ProjectItem.module.scss';

import { Button, Title } from 'common';

export const ProjectItem: FC<ProjectsType> = ({
  img,
  title,
  description,
  url,
  git,
}): ReactElement => (
  <div className={style.itemShadow}>
    <div className={style.item}>
      <div className={style.imageContainer}>
        <div className={style.picture} style={img} />

        <div className={style.buttons}>
          <a href={url} target="_blank" rel="noreferrer">
            <Button name="SITE" />
          </a>
          <a href={git} target="_blank" rel="noreferrer">
            <Button name="GitHub" />
          </a>
        </div>
      </div>

      <div className={style.description}>
        <Title value={title} size="h5" />
        <span className={style.text}>{description}</span>
      </div>
    </div>
  </div>
);

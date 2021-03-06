import { FC, ReactElement } from 'react';

import { ProjectsType } from '../data';

import style from './ProjectItem.module.scss';

import { Button, Title } from 'common';

export const ProjectItem: FC<ProjectsType> = ({
  img,
  title,
  description,
}): ReactElement => (
  <div className={style.itemShadow}>
    <div className={style.item}>
      <div className={style.imageContainer}>
        <div className={style.picture} style={img} />
        <Button name="look" />
      </div>
      <div className={style.description}>
        <Title value={title} size="h5" />
        <span className={style.text}>{description}</span>
      </div>
    </div>
  </div>
);

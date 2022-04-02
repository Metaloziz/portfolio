import { FC, ReactElement } from 'react';

import style from './ProjectItem.module.scss';

import { Button, Title } from 'common';

export type ProjectsType = {
  title: string;
  img: {
    backgroundImage: string;
  };
};

export const ProjectItem: FC<ProjectsType> = ({ img, title }): ReactElement => (
  <div className={style.itemShadow}>
    <div className={style.item}>
      <div className={style.imageContainer}>
        <div className={style.picture} style={img} />
        <Button name="look" />
      </div>
      <div className={style.description}>
        <Title value={title} size="h5" />
        <span className={style.text}>
          Stack: SCSS, JavaScript, TypeScript, React, Redux, Reduxthunk, Redux-form,
          Axios, Reselect; Using TypeScript for best code control; Reusable components
          development; Refactoring, bug fixing, deploying; Organizing correct app
          architecture
        </span>
      </div>
    </div>
  </div>
);

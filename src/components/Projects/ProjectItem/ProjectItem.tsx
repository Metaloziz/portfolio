import { FC, ReactElement } from 'react';

import style from './ProjectItem.module.scss';

import { Button, Title } from 'common';

export type ProjectItemPropsType = {
  backgroundImage: string;
};

type NewType = {
  styleProps: ProjectItemPropsType;
};

export const ProjectItem: FC<NewType> = ({ styleProps }): ReactElement => (
  <div className={style.item}>
    <div className={style.picture} style={styleProps}>
      <Button name="look" />
    </div>
    <div className={style.description}>
      <Title value="title" size="h5" />
      <span className={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet asperiores
        consequuntur delectus doloremque esse eum, id ipsa magnam odio pariatur provident
        ratione voluptatem? Atque et iste maxime pariatur soluta?
      </span>
    </div>
  </div>
);

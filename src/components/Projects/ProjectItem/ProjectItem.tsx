import { ReactElement } from 'react';

import { Button, Title } from 'common/components';
import style from 'components/Projects/ProjectItem/ProjectItem.module.scss';

export type Block3ItemPT = {
  backgroundImage: string;
};

type NewType = {
  styleProps: Block3ItemPT;
};

export const ProjectItem = ({ styleProps }: NewType): ReactElement => (
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

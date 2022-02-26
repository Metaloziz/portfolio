import { FC, ReactElement } from 'react';

import style from './Skill.module.scss';

import { Title } from 'common';

export const Skill: FC = (): ReactElement => (
  <div className={style.item}>
    <div className={style.icon}>icon</div>
    <Title value="title" size="h5" />
    <span className={style.text}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto
      commodi ducimus esse itaque laboriosam saepe tenetur! Consequatur eaque eveniet ipsa
      officiis, omnis saepe tempore. Dolorum in inventore nihil tempore.
    </span>
  </div>
);

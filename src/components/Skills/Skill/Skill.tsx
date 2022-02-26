import { ReactElement } from 'react';

import { Title } from 'common/components';
import style from 'components/Skills/Skill/Skill.module.scss';

export const Skill = (): ReactElement => (
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

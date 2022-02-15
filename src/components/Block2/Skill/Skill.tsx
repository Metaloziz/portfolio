import { ReactElement } from 'react';

import style from './Skill.module.css';

import { TitleH5 } from 'common/components/Title/TitleH5';
import commonStyle from 'common/styles/common.module.css';

export const Skill = (): ReactElement => (
  <div className={style.item}>
    <div className={style.icon}>icon</div>
    <TitleH5 value="title" />
    <span className={commonStyle.text}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto
      commodi ducimus esse itaque laboriosam saepe tenetur! Consequatur eaque eveniet ipsa
      officiis, omnis saepe tempore. Dolorum in inventore nihil tempore.
    </span>
  </div>
);

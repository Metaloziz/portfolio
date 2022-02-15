import { ReactElement } from 'react';

import style from './Skill.module.css';

import { TitleH5 } from 'common/components/Title/TitleH5';

export const Skill = (): ReactElement => (
  <div className={style.item}>
    <div className={style.icon}>icon</div>
    <TitleH5 value="title" />
    <span className={style.text}>
      test test test test test test test test test test test test test test test test test
      test{' '}
    </span>
  </div>
);

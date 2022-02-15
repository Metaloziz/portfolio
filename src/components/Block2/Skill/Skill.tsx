import { ReactElement } from 'react';

import style from './Skill.module.css';

export const Skill = (): ReactElement => (
  <div className={style.item}>
    <div className={style.icon}>icon</div>
    <h3>title</h3>
    <span className={style.text}>
      test test test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test test test
      test{' '}
    </span>
  </div>
);

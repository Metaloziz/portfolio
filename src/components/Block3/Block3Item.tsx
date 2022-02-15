import { ReactElement } from 'react';

import style from 'components/Block3/Block3.module.css';

export const Block3Item = (): ReactElement => (
  <div className={style.item}>
    <div className={style.picture}>picture</div>
    <div className={style.description}>
      <h4>Title</h4>
      <span>description</span>
    </div>
  </div>
);

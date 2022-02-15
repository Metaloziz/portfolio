import { ReactElement } from 'react';

import commonStyle from '../../common/styles/Container.module.css';

import style from './Block3.module.css';

export const Block3 = (): ReactElement => (
  <div className={`${commonStyle.generalBlock} ${style.generalBlock}`}>
    <div className={`${commonStyle.container} ${style.container}`}>
      <h3>Block_3</h3>
      <div className={style.picturesBlock}>
        <div className={style.item}>
          <div className={style.picture}>picture</div>
          <div className={style.description}>
            <h4>Title</h4>
            <span>description</span>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.picture}>picture</div>
          <div className={style.description}>
            <h4>Title</h4>
            <span>description</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

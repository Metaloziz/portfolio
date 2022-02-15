import { ReactElement } from 'react';

import commonStyle from '../../common/styles/Container.module.css';

import style from './Block4.module.css';

export const Block4 = (): ReactElement => (
  <div className={`${commonStyle.generalBlock} ${style.generalBlock}`}>
    <div className={`${commonStyle.container} ${style.container} `}>
      <div className={style.contact}>
        <h3>контакты</h3>
        <form>
          <input type="text" />
          <input type="text" />
          <textarea />
        </form>
        <button type="button">button</button>
      </div>
    </div>
  </div>
);

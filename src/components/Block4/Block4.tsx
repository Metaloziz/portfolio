import { ReactElement } from 'react';

import style from './Block4.module.css';

import { TitleH3 } from 'common/components';
import commonStyle from 'common/styles/common.module.css';

export const Block4 = (): ReactElement => (
  <div className={`${commonStyle.generalBlock} ${style.generalBlock}`}>
    <div className={`${commonStyle.container} ${style.container} `}>
      <TitleH3 value="Block 4" />
      <div className={style.contact}>
        <h4 className={commonStyle.titleH3}>контакты</h4>
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

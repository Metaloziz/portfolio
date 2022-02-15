import { ReactElement } from 'react';

import { TitleH5 } from 'common/components/Title/TitleH5';
import commonStyle from 'common/styles/common.module.css';
import style from 'components/Block3/Block3.module.css';

export const Block3Item = (): ReactElement => (
  <div className={style.item}>
    <div className={style.picture}>picture</div>
    <div className={style.description}>
      <TitleH5 value="title" />
      <span className={commonStyle.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet asperiores
        consequuntur delectus doloremque esse eum, id ipsa magnam odio pariatur provident
        ratione voluptatem? Atque et iste maxime pariatur soluta?
      </span>
    </div>
  </div>
);

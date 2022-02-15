import { ReactElement } from 'react';

import { TitleH5 } from 'common/components/Title/TitleH5';
import commonStyle from 'common/styles/common.module.css';
import style1 from 'components/Block3/Block3.module.css';

export type Block3ItemPT = {
  backgroundImage: string;
};

type NewType = {
  style: Block3ItemPT;
};

export const Block3Item = ({ style }: NewType): ReactElement => (
  <div className={style1.item}>
    <div className={style1.picture} style={style} />
    <div className={style1.description}>
      <TitleH5 value="title" />
      <span className={commonStyle.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet asperiores
        consequuntur delectus doloremque esse eum, id ipsa magnam odio pariatur provident
        ratione voluptatem? Atque et iste maxime pariatur soluta?
      </span>
    </div>
  </div>
);

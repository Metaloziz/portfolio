import { ReactElement } from 'react';

import style from './Block3.module.css';

import img1 from 'assets/images/react.png';
import img2 from 'assets/images/redux.jpg';
import { TitleH3 } from 'common/components';
import commonStyle from 'common/styles/common.module.css';
import { Block3Item, Block3ItemPT } from 'components/Block3/Block3Item';

export const Block3 = (): ReactElement => {
  const obj1: Block3ItemPT = {
    backgroundImage: `url(${img1})`,
  };
  const obj2: Block3ItemPT = {
    backgroundImage: `url(${img2})`,
  };

  return (
    <div className={`${commonStyle.generalBlock} ${style.generalBlock}`}>
      <div className={`${commonStyle.container} ${style.container}`}>
        <TitleH3 value="Block 3" />
        <div className={style.picturesBlock}>
          <Block3Item style={obj2} />
          <Block3Item style={obj1} />
        </div>
      </div>
    </div>
  );
};

import { FC, ReactElement } from 'react';

import commonStyle from 'common/styles/common.module.css';

type TitlePT = {
  value: string;
};

export const TitleH3: FC<TitlePT> = ({ value }): ReactElement => (
  <div>
    <h3 className={commonStyle.titleH3}>{value}</h3>
  </div>
);

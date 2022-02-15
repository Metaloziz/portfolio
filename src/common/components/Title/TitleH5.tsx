import { FC, ReactElement } from 'react';

import commonStyle from 'common/styles/common.module.css';

type TitlePT = {
  value: string;
};

export const TitleH5: FC<TitlePT> = ({ value }): ReactElement => (
  <div>
    <h5 className={commonStyle.titleH5}>{value}</h5>
  </div>
);

import { FC, ReactElement } from 'react';

import commonStyle from './Title.module.scss';

type TitlePT = {
  value: string;
  size: 'h3' | 'h5';
};

export const Title: FC<TitlePT> = ({ value, size }): ReactElement => {
  switch (size) {
    case 'h3':
      return <h3 className={commonStyle.titleH3}>{value}</h3>;
    default:
      return <h5 className={commonStyle.titleH5}>{value}</h5>;
  }
};

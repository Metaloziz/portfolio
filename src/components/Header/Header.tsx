import { FC, ReactElement } from 'react';

import style from './Header.module.scss';
import { Navigation } from './Navigation';

export const Header: FC = (): ReactElement => (
  <div className={style.generalBlock}>
    <Navigation />
  </div>
);

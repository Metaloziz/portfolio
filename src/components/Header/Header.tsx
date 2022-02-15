import { ReactElement } from 'react';

import style from './Header.module.css';

import { Navigation } from 'components/Navigation';

export const Header = (): ReactElement => (
  <div className={style.generalBlock}>
    <Navigation />
  </div>
);

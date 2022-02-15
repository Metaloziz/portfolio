import { ReactElement } from 'react';

import { Navigation } from '../Navigation/Navigation';

import style from './Header.module.css';

export const Header = (): ReactElement => (
  <div className={style.generalBlock}>
    <Navigation />
  </div>
);

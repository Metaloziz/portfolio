import { ReactElement } from 'react';

import style from 'components/Header/Header.module.scss';
import { Navigation } from 'components/Header/Navigation';

export const Header = (): ReactElement => (
  <div className={style.generalBlock}>
    <Navigation />
  </div>
);

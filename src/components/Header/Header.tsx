/* eslint-disable */


import {FC, ReactElement, useState} from 'react';

import style from './Header.module.scss';
import {Navigation} from './Navigation';

export const Header: FC = (): ReactElement => {
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);

  const closeMenu = (): void => {
    setIsActiveMenu(false);
  };


  return (
    <div role="presentation" className={style.generalBlock} onClick={closeMenu}>
      {/*<div className={`${style.blur} ${isActiveMenu ?  style.active: ''}`}/>*/}
      <Navigation isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu}
                  closeMenu={closeMenu}/>
    </div>
  );
};

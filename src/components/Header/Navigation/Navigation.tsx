import { FC, ReactElement } from 'react';

import { links } from './data';
import style from './Navigation.module.scss';

import { Button, LinkComponent } from 'common';

type NavigationPropsType = {
  isActiveMenu: boolean;
  setIsActiveMenu: (value: boolean) => void;
  closeMenu: () => void;
};

export const Navigation: FC<NavigationPropsType> = ({
  isActiveMenu,
  setIsActiveMenu,
  closeMenu,
}): ReactElement => {
  const buttonsLinks = links.map(link => (
    <LinkComponent key={link} idElement={link}>
      <Button name={link} onClick={closeMenu} />
    </LinkComponent>
  ));

  const handleMenu = (): void => {
    setIsActiveMenu(!isActiveMenu);
  };

  const nameMenuButton = isActiveMenu ? 'close' : '≡';

  return (
    <div
      role="presentation"
      className={style.navigationContainer}
      onClick={e => e.stopPropagation()}
    >
      <div className={`${style.handleButton} ${isActiveMenu ? style.active : ''}`}>
        <Button name={nameMenuButton} onClick={handleMenu} />
      </div>
      <div
        role="presentation"
        className={`${style.buttons} ${isActiveMenu ? style.active : ''}`}
      >
        {buttonsLinks}
      </div>
    </div>
  );
};

/* eslint-disable */
import { FC, ReactElement } from 'react';

import style from './Navigation.module.scss';

import { Button } from 'common';
import { LinkComponent } from 'common/components/LinkComponent/LinkComponent';

const links: string[] = ['preview', 'skills', 'projects', 'contacts'];

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

  return (
    <div
      role="presentation"
      className={style.navigationContainer}
      onClick={e => e.stopPropagation()}
    >

      <Button name="open" onClick={handleMenu} />
      <div
        role="presentation"
        className={`${style.buttons} ${isActiveMenu ? style.active : ''}`}
      >
        {buttonsLinks}
      </div>
    </div>
  );
};

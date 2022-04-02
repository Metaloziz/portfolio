import { FC, ReactElement } from 'react';

import style from './Navigation.module.scss';

import { Button } from 'common';
import { LinkComponent } from 'common/components/LinkComponent/LinkComponent';

const links: string[] = ['preview', 'skills', 'projects', 'contacts'];

export const Navigation: FC = (): ReactElement => {
  const buttonsLinks = links.map(link => (
    <LinkComponent key={link} idElement={link}>
      <Button name={link} />
    </LinkComponent>
  ));

  return <div className={style.navigation}>{buttonsLinks}</div>;
};

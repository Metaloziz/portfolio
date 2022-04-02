import { FC, ReactElement } from 'react';

import style from './Navigation.module.scss';

import { Button } from 'common';

export const Navigation: FC = (): ReactElement => (
  <div className={style.navigation}>
    <a href="#preview">
      <Button name="general" />
    </a>
    <a href="#skills">
      <Button name="skills" />
    </a>
    <a href="#projects">
      <Button name="projects" />
    </a>
    <a href="#contacts">
      <Button name="contacts" />
    </a>
  </div>
);

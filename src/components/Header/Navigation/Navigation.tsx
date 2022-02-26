import { FC, ReactElement } from 'react';

import style from './Navigation.module.scss';

import { Button } from 'common';

export const Navigation: FC = (): ReactElement => (
  <div className={style.navigation}>
    <Button name="general" />
    <Button name="skills" />
    <Button name="projects" />
    <Button name="contacts" />
  </div>
);

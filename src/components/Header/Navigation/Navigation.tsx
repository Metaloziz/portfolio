import { ReactElement } from 'react';

import { Button } from 'common/components';
import style from 'components/Header/Navigation/Navigation.module.scss';

export const Navigation = (): ReactElement => (
  <div className={style.navigation}>
    <Button name="general" />
    <Button name="skills" />
    <Button name="projects" />
    <Button name="contacts" />
  </div>
);

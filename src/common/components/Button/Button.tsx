import { FC, ReactElement } from 'react';

import style from 'common/components/Button/Button.module.scss';

type ButtonCommonType = {
  name: string;
};

export const Button: FC<ButtonCommonType> = ({ name }): ReactElement => (
  <button className={style.item} type="button">
    {name}
  </button>
);

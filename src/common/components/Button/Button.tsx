import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactElement } from 'react';

import style from 'common/components/Button/Button.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type ButtonCommonType = DefaultButtonPropsType & {
  name: string;
};

export const Button: FC<ButtonCommonType> = ({ name, ...restProps }): ReactElement => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <button className={style.item} type="button" {...restProps}>
    {name}
  </button>
);

import { ReactElement } from 'react';

import { UseFormRegister } from 'react-hook-form';

import { FormDataType } from 'components/Form/Form';
import style from 'components/Form/Form.module.scss';

type InputComponentType = {
  name: 'name' | 'email' | 'message';
  register: UseFormRegister<FormDataType>;
  required: boolean;
  maxLength: number;
  // eslint-disable-next-line react/require-default-props
  defaultValue?: string;
};

export const InputComponent = ({
  name,
  register,
  required,
  maxLength,
  defaultValue,
}: InputComponentType): ReactElement => (
  <div className={style.divForm}>
    <input
      id={name}
      placeholder={name}
      defaultValue={defaultValue}
      maxLength={maxLength}
      {...register(name, { required, maxLength })}
    />
    <span id={name} className={style.inputLabel}>
      {name}
    </span>
  </div>
);

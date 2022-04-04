import { FC, ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import { getRequest } from 'api/formAPI';
import { Button, Title } from 'common';
import { Slider } from 'common/components/Slider/Slider';
import style from 'components/Form/Form.module.scss';

export type FormDataType = {
  name: string;
  email: string;
  message: string;
};

export const Form: FC = (): ReactElement => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormDataType>();

  const onLoginClick: SubmitHandler<FormDataType> = (e): void => {
    getRequest(e).then(() => {
      console.log('done');
    });
  };

  return (
    <div id="contacts" className={`${style.generalBlock}`}>
      <div className={`${style.container} `}>
        <Slider>
          <Title value="Say me hello !" size="h3" />
        </Slider>

        <div className={style.form}>
          <form onSubmit={handleSubmit(onLoginClick)}>
            <div className={style.inputs}>
              {/* <Fade triggerOnce> */}
              <div className={style.divForm}>
                <label htmlFor="name">
                  <input
                    id="name"
                    placeholder="name"
                    {...register('name', { required: true })}
                  />

                  <span id="name" className={style.inputLabel}>
                    Your name
                  </span>
                </label>
              </div>
              <div className={style.divForm}>
                <input
                  id="email"
                  placeholder="email"
                  {...register('email', { required: true })}
                />

                <span id="email" className={style.inputLabel}>
                  Your email
                </span>
              </div>
              <div className={style.divForm}>
                <input
                  id="message"
                  placeholder="message"
                  {...register('message', { required: true })}
                />
                <span id="message" className={style.inputLabel}>
                  Message
                </span>
              </div>
              {/* </Fade> */}
            </div>
            <Button name="send" type="submit" />
            <div>
              {errors.name?.type === 'required' && 'name is required'}
              {errors.email?.type === 'required' && 'email is required'}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

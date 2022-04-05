import { FC, ReactElement, useState } from 'react';

import { Fade } from 'react-awesome-reveal';
import { SubmitHandler, useForm } from 'react-hook-form';

import style from './Form.module.scss';
import { FormDataType, InputComponent } from './InputComponent';

import { sendMessageCallBack } from 'api';
import { Button, Title, Slider } from 'common';

export const Form: FC = (): ReactElement => {
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormDataType>();

  const sendMessage: SubmitHandler<FormDataType> = (e): void => {
    setIsLoading(true);
    setIsDisable(true);
    sendMessageCallBack(e, setIsLoading);
  };

  const resultMessage =
    (errors.name?.type === 'required' && 'name is required') ||
    (errors.email?.type === 'required' && 'email is required');

  const isDone = !isLoading && isDisable && (
    <div>
      <span className={style.done}>done</span>
    </div>
  );

  return (
    <div id="contacts" className={`${style.generalBlock}`}>
      <div className={`${style.container} `}>
        <Slider>
          <Title value="Say me hello" size="h3" />
        </Slider>

        <form onSubmit={handleSubmit(sendMessage)} className={style.formBlock}>
          <div className={style.inputs}>
            <Fade triggerOnce>
              <InputComponent name="name" register={register} required maxLength={30} />
              <InputComponent name="email" register={register} required maxLength={30} />
              <InputComponent
                name="message"
                register={register}
                required={false}
                maxLength={30}
                defaultValue="would you like an offer"
              />
            </Fade>
          </div>
          <div className={style.resultMessage}>
            {isLoading ? <span className={style.loading}> Loading ... </span> : null}
            <div>
              <span> {resultMessage} </span>
            </div>
            {isDone}
          </div>
          <Button name="send" type="submit" disabled={isDisable} />
        </form>
      </div>
    </div>
  );
};

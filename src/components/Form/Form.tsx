import { FC, ReactElement, useState } from 'react';

import { Fade } from 'react-awesome-reveal';
import { SubmitHandler, useForm } from 'react-hook-form';

import { sendMessageCallBack } from 'api/formAPI';
import { Button, Title } from 'common';
import { Slider } from 'common/components/Slider/Slider';
import style from 'components/Form/Form.module.scss';
import { InputComponent } from 'components/Form/InputComponent/InputComponent';

export type FormDataType = {
  name: string;
  email: string;
  message: string;
};

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

            {!isLoading && isDisable && (
              <div>
                <span className={style.done}> done </span>
              </div>
            )}
          </div>
          <Button name="send" type="submit" disabled={isDisable} />
        </form>
      </div>
    </div>
  );
};

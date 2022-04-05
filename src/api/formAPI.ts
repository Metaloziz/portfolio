import axios from 'axios';

import { FormDataType } from 'components/Form/Form';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_GMAIL_BASE_URL,
});

export const getRequest = (data: FormDataType): Promise<any> =>
  instance.post('/send', data);

type SendMessageCallBackType = (
  data: FormDataType,
  setIsLoading: (value: boolean) => void,
) => void;

export const sendMessageCallBack: SendMessageCallBackType = (
  data,
  setIsLoading,
): void => {
  getRequest(data).then(() => {
    setIsLoading(false);
    console.log('done');
  });
};

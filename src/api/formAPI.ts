import axios from 'axios';

import { FormDataType } from 'components/Form/Form';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_GMAIL_BASE_URL,
});

export const getRequest = (data: FormDataType): Promise<any> =>
  instance.post('/send', data);

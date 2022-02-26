import { ReactElement } from 'react';

// import commonStyle from 'common/styles/common.module.css';
import { Title } from 'common/components';
import style from 'components/Preview/Preview.module.scss';

export const Preview = (): ReactElement => (
  <div className={style.generalBlock}>
    <div className={style.container}>
      <div className={style.text}>
        <Title value="let me introduce myself — Andrew, Frontend Developer. " size="h5" />
      </div>
      <div className={style.photo}>photo</div>
    </div>
  </div>
);

import { ReactElement } from 'react';

import { Title } from 'common/components';
// import commonStyle from 'common/styles/common.module.css';
import style from 'components/Footer/Footer.module.scss';

export const Footer = (): ReactElement => (
  <div className={style.generalBlock}>
    <div className={style.container}>
      <Title value="Footer" size="h3" />
      <div className={style.cubesBlock}>
        <div className={style.cube} />
        <div className={style.cube} />
        <div className={style.cube} />
        <div className={style.cube} />
      </div>
      <span>2022. Все права защищены</span>
    </div>
  </div>
);

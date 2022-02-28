import { FC, ReactElement } from 'react';

import style from './Preview.module.scss';

import img1 from 'assets/images/ava.jpg';
import { Title } from 'common';
import { ProjectItemPropsType } from 'components/Projects/ProjectItem';

export const Preview: FC = (): ReactElement => {
  const obj1: ProjectItemPropsType = {
    backgroundImage: `url(${img1})`,
  };

  return (
    <div className={style.generalBlock}>
      <div className={style.container}>
        <div className={style.photo} style={obj1} />
        <div className={style.text}>
          <Title value="let me introduce myself — Andrew, Frontend Developer" size="h5" />
        </div>
      </div>
    </div>
  );
};

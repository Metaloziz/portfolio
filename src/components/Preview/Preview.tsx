import { FC, ReactElement } from 'react';

import Particles from 'react-tsparticles';

import style from './Preview.module.scss';

import img1 from 'assets/images/ava.jpg';
import { Title } from 'common';

type BackgroundImage = {
  backgroundImage: string;
};

const obj1: BackgroundImage = {
  backgroundImage: `url(${img1})`,
};

const particleParams = {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

export const Preview: FC = (): ReactElement => (
  <div className={style.generalBlock}>
    <Particles className={style.particles} params={particleParams} />
    <div className={style.container}>
      <div className={style.photo} style={obj1} />
      <div className={style.text}>
        <Title value="let me introduce myself — Andrew, Frontend Developer" size="h5" />
      </div>
    </div>
  </div>
);

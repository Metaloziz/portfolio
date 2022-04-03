import { FC, ReactElement } from 'react';

import Tilt from 'react-parallax-tilt';
import Particles from 'react-tsparticles';
import ReactTypingEffect from 'react-typing-effect';

import style from './Preview.module.scss';

import avatar from 'assets/images/avatar/avatar.jpg';
import { particleParams } from 'components/Preview/data/data';

type BackgroundImage = {
  backgroundImage: string;
};

const photoStyle: BackgroundImage = {
  backgroundImage: `url(${avatar})`,
};

export const Preview: FC = (): ReactElement => (
  <div id="preview" className={style.generalBlock}>
    <Particles className={style.particles} params={particleParams} />
    <div className={style.container}>
      <Tilt
        transitionSpeed={10000}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={900}
        scale={1}
        gyroscope
      >
        <div className={style.photo} style={photoStyle} />
      </Tilt>
      <Tilt
        transitionSpeed={10000}
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        perspective={900}
        scale={1}
        gyroscope
      >
        <div className={style.text}>
          <span>Thank you for finding time for me, I am Andrew</span>
          <ReactTypingEffect
            className={style.typeText}
            speed={100}
            text={['Frontend Developer']}
          />
        </div>
      </Tilt>
    </div>
  </div>
);

import { FC, ReactElement } from 'react';

import Tilt from 'react-parallax-tilt';
import Particles from 'react-tsparticles';
import ReactTypingEffect from 'react-typing-effect';

import { particleParams, photoStyle } from './data';
import style from './Preview.module.scss';

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

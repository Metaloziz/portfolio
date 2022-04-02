/* eslint-disable */
import {FC, ReactElement} from 'react';
import Tilt from 'react-parallax-tilt';

import Particles from 'react-tsparticles';
import ReactTypingEffect from 'react-typing-effect';

import style from './Preview.module.scss';

import img1 from 'assets/images/ava.jpg';
import {particleParams} from "components/Preview/data/data";

type BackgroundImage = {
  backgroundImage: string;
};

const obj1: BackgroundImage = {
  backgroundImage: `url(${img1})`,
};

export const Preview: FC = (): ReactElement => (
  <div id={"preview"}  className={style.generalBlock}>

    <div className={style.container}>
      <Tilt transitionSpeed={10000}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={900}
            scale={1.1}
            gyroscope={true}
      >
      <div className={style.photo} style={obj1}/>
      </Tilt>
      <Tilt transitionSpeed={10000}
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            perspective={900}
            scale={1.1}
            gyroscope={true}
      >
      <div className={style.text}>
        <span>Thank you for finding time for me, I am Andrew</span>
        <ReactTypingEffect className={style.typeText} speed={100}
                           text={["Frontend Developer"]}
        />

      </div>
</Tilt>
      <div className={style.particles}>
      {/*<Particles*/}
      {/*  className={style.particles}*/}
      {/*  params={particleParams}*/}
      {/*/>*/}
      </div>
    </div>
  </div>
);

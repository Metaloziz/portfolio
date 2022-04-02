/* eslint-disable */
import {FC, ReactElement} from 'react';

import Particles from 'react-tsparticles';
import ReactTypingEffect from 'react-typing-effect';

import style from './Preview.module.scss';

import img1 from 'assets/images/ava.jpg';
import {Title} from 'common';
import {particleParams} from "components/Preview/data/data";

type BackgroundImage = {
  backgroundImage: string;
};

const obj1: BackgroundImage = {
  backgroundImage: `url(${img1})`,
};


export const Preview: FC = (): ReactElement => (
  <div className={style.generalBlock}>

    <div className={style.container}>
      <div className={style.photo} style={obj1}/>
      <div className={style.text}>
        <span>Thank you for finding time for me, I am Andrew</span>

        <ReactTypingEffect className={style.typeText} speed={100}
                           text={["Frontend Developer"]}
        />
        {/*<Particles*/}
        {/*  className={style.particles}*/}
        {/*  params={particleParams}*/}
        {/*/>*/}

      </div>
    </div>
  </div>
);

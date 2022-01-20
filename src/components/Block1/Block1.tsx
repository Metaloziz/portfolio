import React from "react";
import s from './Block1.module.css'
import commonStyle from '../../common/styles/Container.module.css'


export const Block1 = () => {
    return (
        <div className={s.generalBlock}>
            <div className={commonStyle.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Andrew</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={s.photo}>photo</div>
            </div>
        </div>)
}
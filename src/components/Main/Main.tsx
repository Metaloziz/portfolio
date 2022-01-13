import React from "react";
import s from './Main.module.css'
import commonStyle from '../../common/styles/Container.module.css'


export const Main = () => {
    return (
        <div className={s.mainFirst}>
            <div className={commonStyle.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Andrew</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={s.photo}>
                    main
                </div>
            </div>
        </div>)
}
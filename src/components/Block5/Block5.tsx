import React from "react";
import commonStyle from "../../common/styles/Container.module.css";
import s from './Block5.module.css'

export const Block5 = () => {
    return (

        <div className={s.generalBlock}>
            <div className={`${commonStyle.container} ${s.container}`}>

                <h3>Block 5</h3>
                <div className={s.cubesBlock}>
                    <div className={s.cube}/>
                    <div className={s.cube}/>
                    <div className={s.cube}/>
                    <div className={s.cube}/>
                </div>
                <span>2022. Все права защищены</span>
            </div>
        </div>
    );
};
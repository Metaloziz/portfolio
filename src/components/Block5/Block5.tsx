import React from "react";
import commonStyle from "../../common/styles/Container.module.css";
import s from './Block5.module.css'

export const Block5 = () => {
    return (
        <div className={`${commonStyle.container} ${s.mainBlock}`}>

            <h3>Андрей</h3>
            <div className={s.centralBlock}>
                <div className={s.cube}/>
                <div className={s.cube}/>
                <div className={s.cube}/>
                <div className={s.cube}/>
            </div>
            <span>2022 се права защищены</span>
        </div>
    );
};
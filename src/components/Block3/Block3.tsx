import React from "react";
import commonStyle from "../../common/styles/Container.module.css";
import s from './Block3.module.css'

export const Block3 = () => {
    return <div className={`${commonStyle.container} ${s.mainBlock}`}>
        <div className={s.contentBlock}>

            <h3>Block_3</h3>
            <div className={s.pictures}>
                <div className={s.item}>
                    <div className={s.picture}>picture</div>
                    <div className={s.discription}>
                        <h4>Title</h4>
                        <span>discription</span>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.picture}>picture</div>
                    <div className={s.discription}>
                        <h4>Title</h4>
                        <span>discription</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
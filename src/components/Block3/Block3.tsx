import React from "react";
import commonStyle from "../../common/styles/Container.module.css";
import s from './Block3.module.css'

export const Block3 = () => {
    return <div className={s.generalBlock}>

        <div className={`${commonStyle.container} ${s.container}`}>
            <h3>Block_3</h3>
            <div className={s.picturesBlock}>
                <div className={s.item}>
                    <div className={s.picture}>picture</div>
                    <div className={s.description}>
                        <h4>Title</h4>
                        <span>description</span>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.picture}>picture</div>
                    <div className={s.description}>
                        <h4>Title</h4>
                        <span>description</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
}
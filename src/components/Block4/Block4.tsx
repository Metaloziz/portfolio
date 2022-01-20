import React from "react";
import commonStyle from "../../common/styles/Container.module.css";
import s from './Block4.module.css'

export const Block4 = () => {
    return (<div className={s.generalBlock}>

            <div className={`${commonStyle.container} ${s.container} `}>
                <div className={s.contact}>
                    <h3>контакты</h3>
                    <form>
                        <input type={"text"}/>
                        <input type={"text"}/>
                        <textarea/>
                    </form>
                    <button>button</button>
                </div>
            </div>

        </div>
    );
};
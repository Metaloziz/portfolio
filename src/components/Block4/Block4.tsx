import React from "react";
import commonStyle from "../../common/styles/Container.module.css";
import s from './Block4.module.css'

export const Block4 = () => {
    return (
        <div className={`${commonStyle.container} ${s.mainBlock}`}>

            <div className={s.centralBlock}>


                <h3>контакты</h3>
                <form>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea/>
                    {/*<input type={'submit'}/>*/}
                </form>
                <button>button</button>
            </div>
        </div>
    );
};
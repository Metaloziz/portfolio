import React from 'react';
import s from './Block2.module.css'
import commonStyle from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";


export const Block2 = () => {
    return <div className={s.generalBlock}>
        <div className={commonStyle.container}>
            <h2 className={s.title}> Block 2 skills</h2>
            <div className={s.skills}>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>
        </div>
    </div>
}


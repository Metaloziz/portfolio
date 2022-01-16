import React from 'react';
import s from './Skils.module.css'
import commonStyle from './../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";


export const Skills = () => {
    return<div className={`${commonStyle.container} ${s.container}`}>
        <div className={`${s.skillsBlock} `}>

            <h2 className={s.title}> Block2 title</h2>
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


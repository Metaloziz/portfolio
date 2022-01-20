import s from './Header.module.css'
import {Navigation} from "../Navigation/Navigation";


export const Header = () => {
    return <div className={s.generalBlock}>
        <Navigation/>
    </div>
}
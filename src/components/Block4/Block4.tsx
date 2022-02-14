import commonStyle from "../../common/styles/Container.module.css";
import style from './Block4.module.css'

export const Block4 = () => {
  return (<div className={style.generalBlock}>

      <div className={`${commonStyle.container} ${style.container} `}>
        <div className={style.contact}>
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
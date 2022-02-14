import style from './Navigation.module.css'


export const Navigation = () => {
  return <div className={style.navigation}>
    <a href="/">Главная</a>
    <a href="/">Скилы</a>
    <a href="/">Проекты</a>
    <a href="/">Контакты</a>
  </div>
}
import style from "./HomeSubtitle.module.scss";

export default function HomeSubtitle({children}) {
  return <text className={style.text}>{children}</text>;
}

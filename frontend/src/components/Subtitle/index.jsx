import style from "./Subtitle.module.scss";

export default function Subtitle({children}) {
  return <text className={style.text}>{children}</text>;
}

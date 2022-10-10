import style from "./Subtitle.module.scss";

export default function Subtitle({ children, fontSize }) {
  return (
    <text 
    className={style.text} 
    style={{ fontSize: fontSize }}>
      {children}
    </text>
  );
}

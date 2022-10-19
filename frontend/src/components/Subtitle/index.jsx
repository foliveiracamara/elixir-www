import style from "./Subtitle.module.scss";

export default function Subtitle({ label, fontSize, color, fontFamily}) {
  return (
    <text 
    className={style.text} 
    style={{ fontSize: fontSize, color, fontFamily }}>
      {label}
    </text>
  );
}

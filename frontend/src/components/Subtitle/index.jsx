import style from "./Subtitle.module.scss";

export default function Subtitle({ label, fontSize, color, fontFamily, margin}) {
  return (
    <text 
    className={style.text} 
    style={{ fontSize: fontSize, color, fontFamily, margin }}>
      {label}
    </text>
  );
}

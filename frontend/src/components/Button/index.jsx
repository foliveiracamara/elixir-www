import style from './Button.module.scss';

export default function Button({ label, onClick, backgroundColor, textColor, width, fontFamily, fontSize, marginRight}) {
  return (
    <button 
      className={style.button}
      style={{
          backgroundColor: backgroundColor, 
          color: textColor,
          width: width,
          fontFamily: fontFamily,
          fontSize: fontSize,
          marginRight: marginRight
      }} 
      onClick={onClick}>
      {label}
    </button>
  );
}

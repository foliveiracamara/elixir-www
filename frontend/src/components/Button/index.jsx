import style from './Button.module.scss';

export default function Button({ label, onClick, backgroundColor, textColor, width, fontFamily, fontSize, marginRight, type}) {
  return (
    <button 
      className={style.button}
      style={{
          backgroundColor: backgroundColor, 
          color: textColor,
          width: width,
          fontFamily: fontFamily,
          fontSize: fontSize,
          marginRight: marginRight,
          type: type,
      }} 
      onClick={onClick}>
      {label}
    </button>
  );
}

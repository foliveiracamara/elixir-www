import style from './Button.module.scss';

export default function Button({ children, onClick, backgroundColor, textColor, width }) {
  return (
    <button 
      className={style.button}
      style={{
          backgroundColor: backgroundColor, 
          color: textColor,
          width: width
      }} 
      onClick={onClick}>
      {children}
    </button>
  );
}

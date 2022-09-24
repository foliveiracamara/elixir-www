import style from './WhiteButton.module.scss';

export default function Button({ children, onClick }) {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}

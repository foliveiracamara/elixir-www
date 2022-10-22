import style from './Title.module.scss';

export default function Title({ children, fontSize, fontFamily }) {
  return (
    <h1 
      className={style.title} 
      style={{fontSize: fontSize, fontFamily}}
      >{children}</h1>
  );
}

import style from './Title.module.scss';

export default function Title({ children, fontSize, fontFamily, textAlign }) {
  return (
    <h1 
      className={style.title} 
      style={{fontSize: fontSize, fontFamily, textAlign}}
      >{children}</h1>
  );
}

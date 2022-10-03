import style from './Title.module.scss';

export default function Title({ children, fontSize }) {
  return (
    <h1 
      className={style.title} 
      style={{fontSize: fontSize}}
      >{children}</h1>
  );
}

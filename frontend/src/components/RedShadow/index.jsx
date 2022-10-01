import style from './RedShadow.module.scss';

export default function RedShadow({ top, left, bottom, right }) {
  return (
    <img 
      src={'/images/red-shadow.svg'} 
      className={style.shadow}
      style={{top: top, left: left, bottom: bottom, right: right}} 
    />
  );
}

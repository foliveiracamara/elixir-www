import style from './BlueShadow.module.scss';

export default function BlueShadow({ top, left, bottom, right }) {
  return (
    <img 
      src={'/images/blue-shadow.svg'} 
      className={style.shadow}
      style={{top: top, left: left, bottom: bottom, right: right}} 
    />
  );
}
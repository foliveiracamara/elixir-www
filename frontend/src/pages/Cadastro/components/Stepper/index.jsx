import style from './Stepper.module.scss';

export default function Stepper({display1, display2}) {
  return (
    <div className={style.container} >
      <div className={style.stepper_1} style={{display: display1}}>
        <div className={style.first}></div>
        <div className={style.second}></div>
      </div>
      <div className={style.stepper_2} style={{display: display2}}>
        <div className={style.first}></div>
        <div className={style.second}></div>
      </div>
    </div>
  );
}

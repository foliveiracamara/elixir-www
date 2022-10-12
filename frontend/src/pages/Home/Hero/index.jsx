import Button from '../../../components/Button';
import Header from '../../../components/Header';
import BlueShadow from '../../../components/BlueShadow';
import RedShadow from '../../../components/RedShadow';

import style from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={style.container}>
      <Header textColor={'#FFF'}/>
      <div className={style.content}>
        <div className={style.left_side}>
          <div className={style.text}>
            <span className={style.h2}>conheça, aprenda</span>
            <p className={style.h1}>doe</p>
          </div>
          <div className={style.redirect}>
            <label className={style.label}>
              Você precisa de doação de sangue?
            </label>
            <Button
              children={'Solicite aqui'}
              backgroundColor={'#FF2939'}
              textColor={'#FFF'}
              width={300}
            />
          </div>
        </div>
        <div className={style.right_side}>
          <div className={style.block}></div>
          <img src={'/images/hero-icon.svg'} className={style.icon} />
          <img src={'/images/doctor-hero.svg'} className={style.doctor} />
          <img src={'/images/blood-bag.svg'} className={style.blood_bag} />
          <img src={'/images/pott.svg'} className={style.pott} />
        </div>
      </div>
    </section>
  );
}

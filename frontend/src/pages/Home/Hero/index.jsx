import Button from "../../../components/Button";
import Header from "../../../components/Header";
import Subtitle from "../../../components/Subtitle";

import style from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={style.container}>
      <Header textColor={"#FFF"} />

      <div className={style.content}>
        <div className={style.left_side}>
          <div className={style.text}>
            <span className={style.h2}>Conheça, aprenda</span>
          </div>
          <p className={style.h1}>doe</p>
          <Subtitle
            label="Faça parte da comunidade e salve vidas."
            color="#000"
            fontFamily={"PoppinsNormal"}
            fontSize={20}
          />

          <div className={style.redirect}>
            <label className={style.label}>
              Você precisa de doação de sangue?
            </label>
          </div>

          <Button
            label="Solicite aqui"
            backgroundColor={"#FF2939"}
            textColor={"#FFF"}
            width={250}
            fontFamily={"PoppinsNormal"}
            marginRight={20}
          />
        </div>

        <div className={style.right_side}>
          <div className={style.block}></div>
          <img src={"/images/hero-icon.svg"} className={style.icon} />
          <img src={"/images/doctor-hero.svg"} className={style.doctor} />
          <img src={"/images/blood-bag.svg"} className={style.blood_bag} />
          <img src={"/images/pott.svg"} className={style.pott} />
        </div>
      </div>
    </section>
  );
}

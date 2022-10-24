import { useEffect } from "react";
import FooterComponent from "../../../components/FooterComponent";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import Aos from 'aos';
import 'aos/dist/aos.css';

import style from "./Footer404.module.scss";

export default function Footer404() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className={style.container} data-aos="fade">
        <div className={style.text}>
          <Title 
          fontFamily={"PoppinsBold"}>
            <div className={style.content}>
              Ops. A página que <br /> você acessou não <br />  existe.
              <div className={style.button}>
                <Button
                  label='Voltar ao início'
                  fontFamily={"PoppinsBold"}
                  backgroundColor={'#FF2939'}
                  textColor={'#FFFFFF'}
                />
              </div>
            </div>
          </Title>
        </div>
        <div className={style.girl}>
          <img src={"/images/Girl-404.svg"} />
        </div>
      </div>
        <FooterComponent />
    </div>
  );
}

import { useEffect } from "react";
import FooterComponent from "../../../components/FooterComponent";
import Subtitle from "../../../components/Subtitle";
import Title from "../../../components/Title";
import Aos from 'aos';
import 'aos/dist/aos.css';

import style from "./Footer.module.scss";

export default function Footer() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className={style.container} data-aos="fade">
        <div className={style.text}>
          <Title>
            <div className={style.content}>
              Em breve, estaremos <br /> diponíveis em <br /> seu smartphone:
              <div className={style.subtitle}>
                <Subtitle
                  fontSize={16}
                  label={
                    "I say chap thats suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant."
                  }
                />
              </div>
              <div className={style.App}>
                <img src={"/images/AppStore.png"} />
                <img src={"/images/GooglePlay.png"} />
              </div>
            </div>
          </Title>
        </div>
        <div className={style.Mobile}>
          <img src={"/images/MobileElixir.svg"} />
        </div>
        <div className={style.icons}>
          <img src={"/images/BloodbagFooter.png"} />
        </div>
        <div className={style.JarCross}>
          <img src={"/images/jarCross.png"} />
        </div>
      </div>
        <FooterComponent />
    </div>
  );
}

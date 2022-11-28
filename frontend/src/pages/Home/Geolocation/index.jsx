import { useEffect } from "react";
import RedShadow from "../../../components/RedShadow";
import Title from "../../../components/Title";
import Subtitle from "../../../components/Subtitle";
import Button from "../../../components/Button";
import Aos from "aos";
import "aos/dist/aos.css";

import style from "./Geolocation.module.scss";
import Link from "next/link";
import Mapbox from "../../Dashboard/components/Mapbox";

export default function Geolocation() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className={style.container} data-aos="fade">
      {/* <RedShadow       
        right={700}
        bottom={100}
      /> */}
      {/* <RedShadow 
        right={0}
        bottom={0}
        top={300}
      /> */}
      <div className={style.text}>
        <Title children={"Localizar hemocentros com mapa de geolocalização"} />
        <Subtitle
          label={"Geolocalizar hemocentros com mapa de geolocalização"}
        />
      </div>
      {/* <img src="/images/map-placeholder.svg" className={style.image} /> */}
      <Mapbox></Mapbox>

      <div className={style.redirect}>
        <Title
          fontSize={32}
          children={"Quer saber mais sobre nossa plataforma?"}
        />
        <Link href={"/Faq"}>
          <Button
            label="Acesse nossa FAQ"
            backgroundColor={"#FF2939"}
            textColor={"#FFF"}
            width={400}
            fontFamily="PoppinsBolder"
          />
        </Link>
      </div>
    </section>
  );
}

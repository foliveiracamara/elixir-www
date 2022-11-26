import Button from "../../../components/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { saveAs } from "file-saver";

import style from "./Infos.module.scss";
import { useEffect } from "react";

export default function Infos() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const downloadImage = () => {
    saveAs("/images/Guia-Elixir.jpg");
  };

  return (
    <section className={style.container} data-aos="fade">
      <div className={style.content}>
        <div className={style.text}>
          <h3 className={style.title}>
            Obtenha dicas e informações sobre a doação de sangue
          </h3>
          <Button
            label="Visualize nosso guia"
            width={350}
            backgroundColor={"#1E344F"}
            textColor={"#FFF"}
            fontFamily="PoppinsBolder"
            fontSize={22}
            onClick={downloadImage}
          />
        </div>
        <div className={style.image}>
          <img src="/images/info-doc-svg.svg" className={style.doc} />
        </div>
      </div>
    </section>
  );
}

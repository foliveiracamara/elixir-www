import { useEffect } from "react";
import Patrocinadores from "../../../components/Carousel";
import Title from "../../../components/Title";
import Aos from 'aos';
import 'aos/dist/aos.css';

import style from "./Sponsors.module.scss";

export default function Sponsors() {
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={style.container} data-aos="fade">
      <Title children={"Patrocinadores"} fontSize={40}/>
      <Patrocinadores/>
    </div>
  );
}

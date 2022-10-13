import Patrocinadores from "../../../components/Carousel";
import Title from "../../../components/Title";
import style from "./Sponsors.module.scss";

export default function Sponsors() {
  return (
    <div className={style.container}>
      <Title children={"Patrocinadores"} />
      <Patrocinadores/>
    </div>
  );
}

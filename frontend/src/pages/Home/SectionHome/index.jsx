import BlueCardsList from "../../../components/BlueCardsList";
import Title from "../../../components/Title";
import style from "./style.module.scss";

export default function SectionHome() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <Title>
          Com a <span className={style.h2}>elixir</span>
        </Title>
        <Title children={"você consegue:"} />
      </div>
      <div className={style.ContainerBlueCard}>
        <div>
          <BlueCardsList />
        </div>
      </div>
    </div>
  );
}

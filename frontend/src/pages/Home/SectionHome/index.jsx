import BlueCard from "../../../components/BlueCardsList/BlueCard";
import BlueShadow from "../../../components/BlueShadow";
import Title from "../../../components/Title";
import style from "./style.module.scss";

export default function SectionHome() {
  const listData = [
    {
      imgSource: "/images/paper.svg",
      title: "Monte seu perfil",
      description:
        "is simply dummy text of the printing and typesetting industry. ",
    },
    {
      imgSource: "/images/Ambulance.svg",
      title: "Localizar hemocentros",
      description:
        "is simply dummy text of the printing and typesetting industry. ",
    },
    {
      imgSource: "/images/Masker.svg",
      title: "Seus dados seguros",
      description:
        "is simply dummy text of the printing and typesetting industry. kjshdfchkfsdb lkqbf lhqbhasb  ",
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.text}>
        <Title>
          Com a <span className={style.h2}>elixir</span>
        </Title>
        <Title children={"você consegue:"} />
      </div>
      <div className={style.ContainerBlueCard}>
        {listData.map((card, index) => (
          <div>
            <BlueCard
              key={index}
              imgSource={card.imgSource}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

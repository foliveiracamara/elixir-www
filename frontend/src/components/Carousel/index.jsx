import style from "./Patrocinadores.module.scss";

export default function Patrocinadores() {
  const patrocinadores = [
    {
      image: "/images/Patrocinador1.png",
    },
    {
      image: "/images/Patrocinador2.png",
    },
    {
      image: "/images/Patrocinador3.png",
    },
    {
      image: "/images/Patrocinador4.png",
    },
    {
      image: "/images/Patrocinador5.png",
    },
    {
      image: "/images/Patrocinador6.png",
    },
    {
      image: "/images/Patrocinador7.png",
    },
    {
      image: "/images/Patrocinador8.png",
    },
    {
      image: "/images/Patrocinador9.jpg",
    },
    {
      image: "/images/Patrocinador10.png",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.carousel}>
        {patrocinadores.map((item) => {
          const { image } = item;
          return (
            <div className={style.item}>
              <div className={style.image}>
                <img src={image} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

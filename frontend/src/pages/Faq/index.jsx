import Header from "../../components/Header";
import Title from "../../components/Title";

import style from "./Faq.module.scss";

export default function Faq() {
  return (
    <section className={style.container}>
      <Header textColor={"#FFF"} />
      <div className={style.content}>
        <div className={style.left_side}>
          <div className={style.text}>
            <Title
              children={"Dúvidas e respostas sobre a elixir:"}
              fontFamily={"PoppinsBold"}
              fontSize={40}
              textAlign={"right"}
            />
          </div>
        </div>
        <div className={style.right_side}>
          <div className={style.block}></div>
          <img src={"/images/pott.svg"} className={style.pott} />
          <img src={"/images/blood-bag.svg"} className={style.blood_bag} />
        </div>

          <div className={style.card1}>Pergunta: Content here, content here'<br />,making it look like readable English.</div>
          <div className={style.card2}>Pergunta: Content here, content here',<br />
                                        making it looh.</div>
          <div className={style.card3}>Resposta:  Pergunta: Content here, content here',<br />
                                        making it look like readable English.Content here,<br />
                                        making it look like readable English.</div>
          <div className={style.card4}>Resposta:  Pergunta: Content here, content here',<br />
                                        making it look like. </div>
      </div>
    </section>
  );
}

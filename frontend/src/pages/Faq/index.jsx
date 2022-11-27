import Header from "../../components/Header";
import Title from "../../components/Title";

import style from "./Faq.module.scss";

export default function Faq() {
  return (
    <section className={style.container}>
      <Header textColor={"#FFF"} labelColorFour="red" />
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

        <div className={style.card1}>
          Pergunta: Como funciona a doação de <br /> sangue através da elixir?
        </div>
        <div className={style.card2}>
          Pergunta: E como funciona a aplicação?
        </div>
        <div className={style.card3}>
          Resposta: Nossa aplicação serve para incentivar o usuário de realizar
          doações. Não agendamos horários de doações, apenas informamos locais.
        </div>
        <div className={style.card4}>
          Resposta: Nossa aplicação serve para incentivar o usuário de realizar
          doações. Não agendamos horários de doações, apenas informamos locais.
        </div>
      </div>
    </section>
  );
}

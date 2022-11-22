import Link from "next/link";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Title from "../../components/Title";
import style from "./About.module.scss";

export default function About() {
  return (
    <div className={style.container}>
      <div className={style.rigth_side}>
        <div className={style.block}></div>
        <img src={"/images/doctor-about-page.png"} className={style.doctor} />
      </div>
      <Header textColor="white" />

      <div className={style.content}>
        <Title fontSize={40} children={"Vamos falar sobre a elixir?"} />
        <h3>
          A <span className={style.elixir}>elixir</span> tem como propósito
          trazer informações sobre doação de sangue para seus usuários, captando
          mais doadores para atingir a média estipulada pela ONU de 3% de
          doadores no país, o que equivale a 363 milhões de brasileiros.
          <br />
          <br />
          <br />
          Com a <span className={style.elixir}>elixir</span> você consegue
          buscar por diferentes hemocentros, ser notificado sobre sua próxima
          doação, acessar a lista de receptores que necessitam de transfusão e
          muito mais!{" "}
        </h3>
      </div>

      <div className={style.buttons}>
        <Link href={"/Cadastro"}>
          <Button
            width="30%"
            backgroundColor="#FF2939"
            textColor="white"
            type="submit"
            label="Se interessou? Seja doador(a)"
            fontFamily="PoppinsBolder"
          />
        </Link>
        <div className={style.or}>
          <br />
          ou
          <br />
          <br />
        </div>
        <Link href={"/ReceiverOrder"}>
          <Button
            width="30%"
            backgroundColor="#FF2939"
            textColor="white"
            type="submit"
            label="Precisa de doação? Solicite aqui"
            fontFamily="PoppinsBolder"
          />
        </Link>
      </div>
    </div>
  );
}

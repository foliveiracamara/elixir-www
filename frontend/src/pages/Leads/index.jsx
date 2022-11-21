import Button from "../../components/Button";
import FooterComponent from "../../components/FooterComponent";
import HeaderLeads from "../../components/HeaderLeads";
import Title from "../../components/Title";

import style from "./Leads.module.scss";

export default function Leads() {
  return (
    <section>
      <div className={style.container}>
        <div>
          <HeaderLeads />
        </div>
        <div className={style.content}>
          <div className={style.left_side}>
            <div className={style.text}>
              <Title
                children={"Olá!"}
                fontFamily={"PoppinsBold"}
                fontSize={40}
                textAlign={"left"}
              />
              <Title
                children={"Os leads estão disponíveis."}
                fontFamily={"PoppinsBold"}
                fontSize={40}
                textAlign={"left"}
              />
              <Title
                children={"Faça a exportação:"}
                fontFamily={"PoppinsBold"}
                fontSize={40}
                textAlign={"left"}
              />
              <br /><br /><br />
              <Button className={style.botao}
                label={'Exportar Leads'}
                fontFamily={'PoppinsBold'}
                fontSize={30}
                backgroundColor={'#FF2939'}
                textColor={'#FFF'}
                width={400}
                marginLeft={'10%'}
                />
            </div>
          </div>
          <div className={style.right_side}>
          <div className={style.block}></div>
          <img src={"/images/Mike.svg"} className={style.Mike} />
        </div>
        </div>
      </div>
      
        <FooterComponent />

    </section>
  );
}

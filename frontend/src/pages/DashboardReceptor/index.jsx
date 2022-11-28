import Menu from "../Dashboard/components/Menu";
import style from "./DashboardReceptor.module.scss";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

import LastDonationCard from "./LastDonationCard";
import LastDonationCardd from "./LastDonationCardd";
import Link from "next/link";
import PopUp from "../../components/Modal";
import Mapbox from "../Dashboard/components/Mapbox";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function DashboardReceptor() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.navbar}>
          <div className={style.logo}>
            <img src="/images/elixir-logo.svg" />
            <span className={style.elixir}>elixir</span>
          </div>
          <div className={style.options}>
            <Link href={"/DashboardReceptor"}>
              <li>Início</li>
            </Link>
            <li>Contato</li>
            <Link href={"/"}>
              <li onClick={() => sessionStorage.clear()}>Sair</li>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.agregator}>
          <Menu />

          <div className={style.right_content}>
            <div className={style.top_infos}>
              <div className={style.info_cards}>
                <LastDonationCard
                  text="Próxima doação em"
                  date={"43 dias"} // mudar para algo dinâmico
                  footer="Ver mais >"
                />
                <LastDonationCardd
                  text="Veja a lista de pessoas que necessitam de doação"
                  // date={"43 dias"} // mudar para algo dinâmico
                  footer="Ver mais >"
                />
              </div>
            </div>

            <div className={style.bottom_infos}>
              <div className={style.left_bottom}>
                <div className={style.square}>
                  <span className={style.square_title}>Noticias</span>

                  <div className={style.square_div}>
                    <span className={style.square_description}>
                      Pacientes com varíola dos macacos não devem doar sangue
                      até fim dos sintomas, diz Anvisa.
                    </span>
                    <span className={style.footerDescription}>
                      Fonte: CNN Brasil 20/07/2022 ás 19:48
                      <Link
                        href={
                          "https://www.cnnbrasil.com.br/saude/pacientes-com-variola-dos-macacos-nao-devem-doar-sangue-ate-fim-dos-sintomas-diz-anvisa/#:~:text=A%20seguir-,Pacientes%20com%20var%C3%ADola%20dos%20macacos%20n%C3%A3o%20devem%20doar,fim%20dos%20sintomas%2C%20diz%20Anvisa&text=A%20Ag%C3%AAncia%20Nacional%20de%20Vigil%C3%A2ncia,var%C3%ADola%20dos%20macacos%20no%20Brasil"
                        }
                      >
                        <ExitToAppIcon className={style.goOut} />
                      </Link>
                    </span>
                  </div>

                  <span className={style.squareFooter}>
                    Ver mais notícias {">"}
                  </span>
                </div>
              </div>
            </div>
            <div className={style.mapContaier}>
              <div className={style.mapCenter}>
                <div className={style.label_div}>
                  <label className={style.label}>
                    <PopUp
                      trigger={
                        <span className={style.map_label}>
                          Localizar Hemocentros próximos{" "}
                          <ArrowForwardIcon className={style.map_icon} />
                        </span>
                      }
                      dropClose
                    >
                      <Mapbox></Mapbox>
                    </PopUp>
                  </label>
                </div>
                <img className={style.img} src={"/images/MapDashBoard.png"} />
              </div>
              <div className={style.divContainerBoxes}>
                <div className={style.boxOne}>
                  Verificar estoques sanguíneos de Hemocentros{" "}
                  <span className={style.indicatorBoxes}>{">"}</span>
                </div>
                <div className={style.boxTwo}>
                  Visualizar ou Compartilhar uma Campanha{" "}
                  <span className={style.indicatorBoxes}>{">"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

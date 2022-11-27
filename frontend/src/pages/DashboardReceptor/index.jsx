import Menu from "../Dashboard/components/Menu";
import style from "./DashboardReceptor.module.scss";
import CreateIcon from "@mui/icons-material/Create";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import LastDonationCard from "./LastDonationCard";
import LastDonationCardd from "./LastDonationCardd";
import Link from "next/link";

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
            <Link href={"/"}>
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
                      <ExitToAppIcon className={style.goOut} />
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
                    Localizar Hemocentros próximos {">"}
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

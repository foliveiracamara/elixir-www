import LastDonationCard from "./components/LastDonationCard";
import LastDonationCardd from "./components/LastDonationCardd";
import Menu from "./components/Menu";
import CreateIcon from "@mui/icons-material/Create";

import style from "./Dashboard.module.scss";
import Link from "next/link";

export default function Dashboard() {
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
              <span>
                <Link href={"/DashboardReceptor"}>
                  <span className={style.headerMin}>Início </span>
                </Link>

                <span className={style.headerMax}>{">"} Minhas doações</span>
              </span>
              <div className={style.info_cards}>
                <label className={style.label}>Informações:</label>
                <LastDonationCard
                  text={"Você realizou sua última doação no dia"}
                  date={"10/01/2022"} // mudar para algo dinâmico
                />
                <LastDonationCard
                  text={"Você poderá doar novamente a partir de"}
                  date={"16/02/2022"} // mudar para algo dinâmico
                />
              </div>
            </div>
            <div className={style.bottom_infos}>
              <div className={style.left_bottom}>
                <label className={style.label}>Atualizar Informações:</label>
                <div className={style.square}>
                  <span className={style.square_title}>
                    Atualizar seu checklist para doação
                  </span>
                  <span className={style.square_description}>
                    Atualize as informações para saber se está apto para doar.
                  </span>
                  <CreateIcon className={style.pen} />
                </div>
                <div className={style.square}>
                  <span className={style.square_title}>
                    Atualizar última doação
                  </span>
                  <span className={style.square_date}>12/01/2022</span>
                  <CreateIcon className={style.pen} />
                </div>
              </div>
              <div className={style.right_bottom}>
                <div className={style.label_div}>
                  <label className={style.label}>
                    Últimas doações realizadas:
                  </label>
                </div>
                <div className={style.list_cards}>
                  <LastDonationCardd children={"03/05/2021"} />
                  <LastDonationCardd children={"22/07/2021"} />
                  <LastDonationCardd children={"07/09/2021"} />
                  <LastDonationCardd children={"17/12/2021"} />
                  <LastDonationCardd children={"10/02/2022"} />
                  <LastDonationCardd children={"05/04/2022"} />
                  <LastDonationCardd children={"31/06/2022"} />
                  <LastDonationCardd children={"24/09/2022"} />
                  <LastDonationCardd children={"01/10/2022"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

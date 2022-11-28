import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Receiver from "../components/Receiver";
import Search from "../components/Search";
import Button from "../../../components/Button";
import api from "../../../service/axios";
import Link from "next/link";
import { saveAs } from "file-saver";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import style from "./HelpPeople.module.scss";

export default function Dashboard() {
  const [receiverList, setReceiverList] = useState([]);

  useEffect(() => {
    api
      .get("http://localhost:8080/receptor")
      .then((res) => {
        setReceiverList(res.data);
        console.log(res.data);
        console.log(receiverList);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, []);

  const downloadImage = () => {
    saveAs("http://localhost:8080/doador/download-csv");
  };

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
              <span className={style.pagination}>
                <Link href={"/dashboard/receptor"}>Início</Link> {">"}{" "}
                <b>Lista de receptores</b>
              </span>
              <div className={style.info_cards}>
                <label className={style.label}>
                  Essas pessoas precisam da sua ajuda:{" "}
                </label>
                <Search
                  placeholder={
                    "Pesquise pelo endereço, nome da pessoa ou hospital"
                  }
                />
                <div className={style.btn_div}>
                  {/* <Link href="http://localhost:8080/doador/download-csv"> */}
                  <Button
                    label={"Exportar lista"}
                    width="30%"
                    height={40}
                    backgroundColor={"#FF2939"}
                    textColor={"#FFF"}
                    onClick={downloadImage}
                    fontFamily="PoppinsNormal"
                    icon={<FileDownloadOutlinedIcon />}
                  />

                  {/* </Link> */}
                </div>
              </div>
            </div>
            <div className={style.bottom_infos}>
              {receiverList.length > 0 ? (
                Array.isArray(receiverList) ? (
                  receiverList.map((item) => (
                    <Receiver
                      nome={item.nome}
                      bloodType={item.tipoSanguineo}
                      donationPlace={item.nomeHospital}
                      uf={item.uf}
                      cep={item.cep}
                    />
                  ))
                ) : null
              ) : (
                <Receiver>
                  <span>Nenhuma publicação realizada até agora...</span>
                </Receiver>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

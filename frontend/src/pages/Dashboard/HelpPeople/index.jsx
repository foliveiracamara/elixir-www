import { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Receiver from '../components/Receiver';
import Search from '../components/Search';
import Button from '../../../components/Button';
import api from '../../../service/axios';
import Link from 'next/link';

import style from './HelpPeople.module.scss';

export default function Dashboard() {
  const [receiverList, setReceiverList] = useState([])

  useEffect(() => {
    api.get('http://localhost:8080/receptor')
    .then((res) => {
      setReceiverList(res.data)
    })
    .catch((err) => {
      console.log('error: ', err)
    })
  }, [])

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.navbar}>
          <div className={style.logo}>
            <img src="/images/elixir-logo.svg" />
            <span className={style.elixir}>elixir</span>
          </div>
          <div className={style.options}>
            <span>Início</span>
            <span>Contato</span>
            <span>Sair</span>
          </div>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.agregator}>
          <Menu />
          <div className={style.right_content}>
            <div className={style.top_infos}>
              <span><Link href={'/dashboard/infos'}>Início</Link> {'>'} <b>Lista de receptores</b></span>
              <div className={style.info_cards}>
                <label className={style.label}>Essas pessoas precisam da sua ajuda: </label>
                <Search placeholder={"Pesquise pelo endereço, nome da pessoa ou hospital"} />
                <div className={style.btn_div}>
                <Link href="http://localhost:8080/doador/download-csv">
                  <Button 
                    label={"Exportar"}
                    width={110}
                    height={30}
                    backgroundColor={'#FF2939'}
                    textColor={'#FFF'}
                  />
                  </Link>
                </div>
              </div>
            </div>
            <div className={style.bottom_infos}>
              {receiverList.length > 0 ?
              Array.isArray(receiverList)
              ? receiverList.map(item => (
                <Receiver 
                  nome={item.nome}
                  bloodType={item.tipoSanguineo}
                  donationPlace={item.nomeHospital}
                  uf={item.uf}
                  cep={item.cep}
                />
              )) : null :
              <b>Nenhuma publicação realizada até agora...</b>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

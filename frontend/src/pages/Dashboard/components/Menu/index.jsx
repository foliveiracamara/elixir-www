
import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import api from "../../../../service/axios";
import getAge from "../../../../service/ageFormatter"


import style from './Menu.module.scss';

export default function Menu({
  profileName,
  age,
  bloodType,
  boneMarrowDonor,
  organDonor,
}) {
  const badges = [
    { src: '/images/heart-badge.svg' },
    { src: '/images/lung-badge.svg' },
    { src: '/images/pott-badge.svg' },
    { src: '/images/dna-badge.svg' },
  ];

  const [infoMenu, setInfoMenu] = useState([
    {
      nome: sessionStorage.getItem("nome"),
      tipoSanguineo: sessionStorage.getItem("tipoSanguineo"),
      dtNascimento: sessionStorage.getItem("dtNascimento"),
    },
  ]);

  useEffect(() => {

    // api
    //   .get(`http://localhost:8080/doador/`)
    //   .then((res) => {
    //     console.log(res.data);
    //     setInfoMenu(res.data.reverse());
    //   })
    //   .catch((erro) => {
    //     console.log(erro);
    //   });

  }, []);

  return (
    <div className={style.container}>
      <div className={style.content}>
        {infoMenu.map((menu) => (
          <div className={style.top}>
            <img
              src={
                menu.sexo == 'Feminino'
                  ? '/images/girl-profile-pic.svg'
                  : '/images/man-profile-pic.svg'
              }
              className={style.profile_pic}
            />
            <h3 className={style.name}>{menu.nome}</h3>
            <div className={style.infos}>
              <span>
                Idade: <b>{getAge(menu.dtNascimento)}</b><br/>
              </span>
              <span>
                Tipo sanguíneo: <b>{menu.tipoSanguineo}</b>
              </span>
            </div>
            <div className={style.buttons}>
              <Button
                backgroundColor={'#FF2939'}
                textColor={'#FFF'}
                fontSize={12}
                width={220}
                label={'Editar informações'}
                fontFamily="PoppinsNormal"
              />
              <Button
                backgroundColor={'#FF2939'}
                textColor={'#FFF'}
                fontSize={12}
                width={220}
                label={'Atualizar data de doação'}
                fontFamily="PoppinsNormal"
              />
            </div>
            <hr />
          </div>
        ))}
        <div className={style.line} />
        <div className={style.bottom}>
          <h3 className={style.title}>Minhas insígnias</h3>
          <div className={style.badges}>
            {badges.map((badge) => (
              <img src={badge.src} className={style.badge} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

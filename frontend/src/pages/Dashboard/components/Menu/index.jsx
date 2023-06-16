import { useRef, useState } from "react";
import Button from "../../../../components/Button";
import getAge from "../../../../service/ageFormatter";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import style from "./Menu.module.scss";
import PopUp from "../../../../components/Modal";
import InputControlled, {
  InputControlledMask,
} from "../../../../components/InputControlled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { maskCpf, schema } from "../../../ReceiverOrder/validation";
import { Toast } from "primereact/toast";
import api from "../../../../service/axios";

export default function Menu({
  profileName,
  age,
  bloodType,
  boneMarrowDonor,
  organDonor,
}) {
  const badges = [
    { src: "/images/heart-badge.svg" },
    { src: "/images/lung-badge.svg" },
    { src: "/images/pott-badge.svg" },
    { src: "/images/dna-badge.svg" },
  ];

  const toast = useRef(null);

  const [menu, setMenu] = useState([
    {
      nome: sessionStorage.getItem("nome"),
      sexo: sessionStorage.getItem("sexo"),
      tipoSanguineo: sessionStorage.getItem("tipoSanguineo"),
      dtNascimento: sessionStorage.getItem("dtNascimento"),
    },
  ]);

  const bloodtypes = [
    { label: "A+", value: "A+" },
    { label: "B+", value: "B+" },
    { label: "AB+", value: "AB+" },
    { label: "O+", value: "O+" },
    { label: "A-", value: "A-" },
    { label: "B-", value: "B-" },
    { label: "AB-", value: "AB-" },
    // { label: "O-", value: "O-" },
  ];

  const onChange = (data) => {
    // let dataNova = {
    //   idDoador: sessionStorage.getItem("idDoador"),
    //   nome: data.nome,
    //   cpf: data.cpf,
    //   email: data.email,
    //   senha: data.senha,
    //   sexo: sessionStorage.getItem("sexo"),
    //   tipoSanguineo: sessionStorage.getItem("tipoSanguineo"),
    //   doadorOrgao: "Não",
    //   dtDoacao: "2020-11-24",
    //   dtNascimento: data.dtNascimento,
    //   imagemPessooa: null,
    // };

    // api
    //   .post(
    //     `http://localhost:8080/doador/${data.idDoador}}`,
    //     dataNova
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     toast.current.show({
    //       severity: "success",
    //       summary: "Doação Solicitada com sucesso",
    //       detail: "Seus dados foram registrados com sucesso",
    //       life: 3000,
    //     });

    //     console.log(dataNova);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast.current.show({
    //       severity: "error",
    //       summary: "Doação não foi solicidata",
    //       detail:
    //         "Seu pedido de doação não foi solicitado, entrar em contato com a empresa",
    //       life: 3000,
    //     });

    //     console.log(dataNova);
    //   });
  };

  const {
    formState: { errors },
    control,
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // function clicou() {
  //   alert("foi");
  // }

  return (
    <div className={style.container}>
      <Toast ref={toast} position="bottom-center" />

      <div className={style.content}>
        {menu.map((menu) => (
          <div className={style.top}>
            <img
              src={
                menu.sexo == "F"
                  ? "/images/girl-profile-pic.svg"
                  : "/images/man-profile-pic.svg"
              }
              className={style.profile_pic}
            />
            <h3 className={style.name}>{menu.nome}</h3>
            <div className={style.infos}>
              <span>
                Idade: <b>{getAge(menu.dtNascimento)}</b>
                <br />
              </span>
              <span>
                Tipo sanguíneo: <b>{menu.tipoSanguineo}</b>
              </span>
            </div>
            <div className={style.buttons}>
              <PopUp
                trigger={
                  <Button
                    backgroundColor={"#FF2939"}
                    textColor={"#FFF"}
                    fontSize={12}
                    width={220}
                    height={40}
                    label={"Editar informações"}
                    fontFamily="PoppinsNormal"
                    icon={<KeyboardArrowRightOutlinedIcon />}
                    justifyContent="space-between"
                  />
                }
                // dropClose
              >
                <form onSubmit={handleSubmit(onChange)}>
                  <div className={style.divContainerModal}>
                    <div className={style.titleModal}>Editar Perfil {">"}</div>
                    <img
                      width={100}
                      src={
                        menu.sexo == "F"
                          ? "/images/girl-profile-pic.svg"
                          : "/images/man-profile-pic.svg"
                      }
                      className={style.profile_pic}
                    />

                    <div className={style.Namequestions}>
                      <InputControlled
                        title="Nome Completo:"
                        name="nome"
                        id="nome"
                        placeholder="Maria Luiza Amorim"
                        errors={errors.nome}
                        control={control}
                        defaultValue={sessionStorage.getItem("nome")}
                      />
                    </div>
                    <div className={style.otherQuestions}>
                      <div className={style.inputsModal}>
                        <div className={style.questions}>
                          <InputControlled
                            title="Email"
                            name="email"
                            id="email"
                            placeholder="joaos@gmail.com"
                            errors={errors.email}
                            control={control}
                            width={100}
                            height="40px"
                            defaultValue={sessionStorage.getItem("email")}
                          />
                        </div>
                        <div className={style.questions}>
                          <InputControlledMask
                            title="CPF:"
                            name="cpf"
                            id="cpf"
                            placeholder="405-897-958-60"
                            errors={errors.cpf}
                            control={control}
                            mask={maskCpf}
                            defaultValue={sessionStorage.getItem("cpf")}
                          />
                        </div>
                        <div className={style.questions}>
                          <InputControlled
                            title="Senha"
                            name="senha"
                            id="senha"
                            placeholder="••••••••••"
                            errors={errors.senha}
                            control={control}
                            type="password"
                          />
                        </div>
                      </div>
                      <div className={style.inputsModal}>
                        <div className={style.questionsRigth}>
                          <InputControlled
                            title="Data de Nascimento:"
                            name="dtNascimento"
                            id="dtNascimento"
                            placeholder="04/04/2000"
                            errors={errors.dtNascimento}
                            control={control}
                            type="date"
                            defaultValue={sessionStorage.getItem(
                              "dtNascimento"
                            )}
                          />
                        </div>
                        <div className={style.questionsRigth}>
                          <InputControlled
                            title="Confirme sua senha:"
                            name="confirmeSenha"
                            id="senha"
                            placeholder="••••••••••"
                            errors={errors.senha}
                            control={control}
                          />
                        </div>
                      </div>
                    </div>
                  <div className={style.modalButton}>
                  <Button
                    width="50%"
                    backgroundColor="#FF2939"
                    textColor="white"
                    type="submit"
                    label="Envie seu Pedido"
                    fontFamily="PoppinsBolder"
                  />
                  </div>
                  </div>
                </form>
              </PopUp>
              <Button
                backgroundColor={"#FF2939"}
                textColor={"#FFF"}
                fontSize={12}
                width={220}
                height={40}
                label={"Atualizar data de doação"}
                fontFamily="PoppinsNormal"
                icon={<KeyboardArrowRightOutlinedIcon />}
                justifyContent="space-between"
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

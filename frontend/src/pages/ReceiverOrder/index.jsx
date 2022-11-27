import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Header from "../../components/Header";

import InputControlled, {
  InputControlledMask,
} from "../../components/InputControlled";
import Title from "../../components/Title";
import style from "./ReceiverOrder.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { maskCep, maskCpf, maskTel, schema } from "./validation";
import Subtitle from "../../components/Subtitle";
import DropdownControlled from "../../components/DropdownControlled";
import api from "../../service/axios";
import { Toast } from "primereact/toast";
import React, { useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function ReceiverOrder() {
  const toast = useRef(null);

  const onSubmit = (data) => {
    api
      .post("http://localhost:8080/receptor", data)
      .then((res) => {
        console.log(res);
        toast.current.show({
          severity: "success",
          summary: "Doação Solicitada com sucesso",
          detail: "Seus dados foram registrados com sucesso",
          life: 3000,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.current.show({
          severity: "error",
          summary: "Doação não foi solicidata",
          detail:
            "Seu pedido de doação não foi solicitado, entrar em contato com a empresa",
          life: 3000,
        });
      });

    emailjs
      .send("service_bg5fl7p", "template_rjf470s", this, "HiTQaUGkLFUR5G4Ft")
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  };

  const {
    formState: { errors },
    control,
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

   const bloodtypes = [
    { label: "A+", value: "A+" },
    { label: "B+", value: "B+" },
    { label: "AB+", value: "AB+" },
    { label: "O+", value: "O+" },
    { label: "A-", value: "A-" },
    { label: "B-", value: "B-" },
    { label: "AB-", value: "AB-" },
    { label: "O-", value: "O-" },
  ];

  const others = [
    { label: "Masculino", value: "M" },
    { label: "Feminino", value: "F" },
  ];

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div className={style.container}>
      <Toast ref={toast} position="bottom-center" />
      <div className={style.rigth_side}>
        <div className={style.block}></div>
        <img src={"/images/DoctorOrder.png"} className={style.doctor} />
      </div>
      <Header textColor="white" labelColorThree="red" />

      <div className={style.content}>
        <Title fontSize={35} children={"Você precisa de transfusão?"} />
        <h3>Preencha as informações à seguir para solicitar uma doação:</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.questions}>
          <div className={style.name}>
            <InputControlled
              title="Nome Completo:"
              name="nome"
              id="nome"
              placeholder="Maria Luiza Amorim"
              errors={errors.nome}
              control={control}
            />
          </div>

          <div className={style.contentQuestions}>
            <div className={style.otherQuestions}>
              <div className={style.name}>
                <InputControlledMask
                  title="CPF:"
                  name="cpf"
                  id="cpf"
                  placeholder="405-897-958-60"
                  errors={errors.cpf}
                  control={control}
                  mask={maskCpf}
                />
              </div>
              <div className={style.name}>
                <InputControlled
                  title="Data de Nascimento:"
                  name="dtNascimento"
                  id="dtNascimento"
                  placeholder="04/04/2000"
                  errors={errors.dtNascimento}
                  control={control}
                  type="date"
                />
              </div>
              <div className={style.name}>
                <InputControlledMask
                  title="Telefone:"
                  name="tel"
                  id="tel"
                  placeholder="09999-000"
                  errors={errors.tel}
                  control={control}
                  mask={maskTel}
                />
              </div>
            </div>

            <div className={style.otherQuestionsBlood}>
              <div className={style.name}>
                <DropdownControlled
                  name="tipoSanguineo"
                  title="Tipo Sanguíneo:"
                  control={control}
                  options={bloodtypes}
                  errors={errors.tipoSanguineo}
                />
              </div>
              <div className={style.name}>
                <DropdownControlled
                  name="genero"
                  title="Gênero:"
                  control={control}
                  options={others}
                  errors={errors.genero}
                />
              </div>

              <div className={style.name}>
                <InputControlledMask
                  title="CEP do Hospital:"
                  name="cep"
                  id="cep"
                  placeholder="09540-300"
                  errors={errors.cep}
                  control={control}
                  mask={maskCep}
                />
              </div>
            </div>
          </div>
          <div className={style.name}>
            <InputControlled
              title="Nome do Hospital:"
              name="nomeHospital"
              id="nomeHospital"
              placeholder="Hospital ABC"
              errors={errors.nomeHospital}
              control={control}
            />
          </div>

          <div className={style.textInformations}>
            <h3>
              Somente as informações necessárias irão aparecer na lista de
              receptores na página dos doadores. Essas informações serão
              exlucídas em uma semana após a publicação. Para visualizar essa
              lista, faça
              <Link href={"/Login"}>
                <span> login </span>
              </Link>
              ou
              <Link href={"/Cadastro"}>
                <span> cadastre-se.</span>
              </Link>
            </h3>
            <Button
              width="50%"
              backgroundColor="#FF2939"
              textColor="white"
              type="submit"
              label="Envie seu Pedido"
              fontFamily="PoppinsBolder"
              marginLeft="25%"
            />
            <Subtitle
              margin="2% 0 0 19%"
              fontSize="16px"
              label="Ao enviar, você aceita com os termos da plataforma"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

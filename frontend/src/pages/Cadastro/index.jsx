import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./validation";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InputControlled, { InputControlledMask } from "../../components/InputControlled";
import Title from "../../components/Title";
import api from "../../service/axios";
import style from "./Cadastro.module.scss";
import DropdownControlled from "../../components/DropdownControlled";
import Link from "next/link";
import { Toast } from "primereact/toast";
import { useRouter } from "next/router";
import { maskCep, maskCpf } from "../ReceiverOrder/validation";

export default function Cadastro() {
  const [btnWidth, setBtnWidth] = useState();
  const [page, setPage] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const toast = useRef(null);

  const steps = [
    {
      id: "REGISTER1",
      title: "",
    },
    {
      id: "REGISTER2",
      title: "",
    },
  ];

  function handlePrevius() {
    setCurrentStep((prevState) => prevState - 1);
  }

  function handleNext() {
    setCurrentStep((prevState) => prevState + 1);
  }

  const onSubmit = (data) => {
    let payload = {
      nome: data.nome,
      cpf: data.cpf,
      email: data.email,
      senha: data.senha,
      confirmSenha: data.confirmeSenha,
      sexo: data.sexo,
      tipoSanguineo: "A+",
      doadorOrgao: "Não",
      imagemPessoa: true,
      dtDoacao: "2020-11-24",
      dtNascimento: "2001-11-24",
    };

    console.log(data);

    api
      .post("http://localhost:8080/doador/", payload)
      .then((res) => {
        console.log("cadastrado!", res);

        router.push("/Login");

        toast.current.show({
          severity: "success",
          summary: "Cadastro feito com sucesso!",
          detail: "Você foi redirecionado",
          life: 4000,
        });
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  useEffect(() => {}, [page]);

  const {
    formState: { errors },
    control,
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const others = [
    { label: "Masculino", value: "M" },
    { label: "Feminino", value: "F" },
  ];

  return (
    <section className={style.container}>
      <Header textColor="red" />
      <Toast ref={toast} position="bottom-center" />
      <div className={style.content}>
        <div className={style.left_side}>
          <div className={style.text}>
            <Title
              children={" Faça seu cadastro."}
              fontSize={50}
              fontFamily="PoppinsBold"
            />
          </div>
          <h3>Você já possui uma conta?</h3>

          <Link href={"/Login"}>
            <Button
              label="Entrar"
              backgroundColor={"#FF2939"}
              textColor={"#FFF"}
              width={200}
              fontFamily="PoppinsBold"
            />
          </Link>
        </div>

        <div className={style.middle}>
          <img src="/images/blood-bag.svg" className={style.blood_bag_top} />
          <img src="/images/ImgCadastro.png" className={style.man} />
          <img src="/images/blood-bag.svg" className={style.blood_bag_bottom} />
        </div>

        <div className={style.right_side}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {steps[currentStep].id === "REGISTER1" && (
              <div className={style.forms}>
                <InputControlled
                  title="Nome Completo:"
                  name="nome"
                  id="nome"
                  placeholder="João Silva"
                  errors={errors.nome}
                  control={control}
                />

                <InputControlledMask
                  title="CPF:"
                  name="cpf"
                  id="cpf"
                  placeholder="000.000.000-00"
                  errors={errors.cpf}
                  control={control}
                  mask={maskCpf}
                />

                <DropdownControlled
                  name="sexo"
                  title="Gênero:"
                  control={control}
                  options={others}
                  errors={errors.sexo}
                />

                <div className={style.btn_stepper}>
                  {currentStep < steps.length - 1 && (
                    <div className={style.next} onClick={handleNext}>
                      Prosseguir
                    </div>
                  )}
                  <span className={style.terms}>
                    Ao Cadastrar você aceita os termos e condições da
                    plataforma.
                  </span>

                  <span className={style.ball} onClick={handleNext}>
                    <div className={style.first}></div>
                    <div className={style.second}></div>
                  </span>
                </div>
              </div>
            )}
            {steps[currentStep].id === "REGISTER2" && (
              <div className={style.forms}>
                <InputControlled
                  title="Email:"
                  name="email"
                  id="email"
                  placeholder="joao@gmail.com"
                  errors={errors.email}
                  control={control}
                />

                <InputControlled
                  title="Senha:"
                  name="senha"
                  id="senha"
                  placeholder="••••••••••"
                  errors={errors.senha}
                  control={control}
                />

                <div>
                  <InputControlled
                    title="Confirme sua senha:"
                    name="confirmeSenha"
                    id="senha"
                    placeholder="••••••••••"
                    errors={errors.senha}
                    control={control}
                  />
                </div>

                <div className={style.btn_stepper}>
                  <Button
                    label="Cadastrar"
                    type="submit"
                    backgroundColor={"#FF2939"}
                    textColor={"#FFF"}
                    width={btnWidth}
                    onClick={() => setPage(1)}
                    fontFamily="PoppinsBold"
                  />
                  <span className={style.terms}>
                    Ao Cadastrar você aceita os termos e condições da
                    plataforma.
                  </span>
                  <span className={style.ball} onClick={handlePrevius}>
                    <div className={style.secondTwo}></div>
                    <div className={style.first}></div>
                  </span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./validation";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InputControlled from "../../components/InputControlled";
import Title from "../../components/Title";
import api from "../../service/axios";
import style from "./Cadastro.module.scss";
import DropdownControlled from "../../components/DropdownControlled";
import Link from "next/link";

export default function Cadastro() {
  const [btnWidth, setBtnWidth] = useState();
  const [page, setPage] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

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

  const onSubmit = (e) => {
    api
      .post("http://localhost:8080/doador/", e)
      .then((res) => {
        console.log("cadastrado!", res);
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

                <InputControlled
                  title="CPF:"
                  name="cpf"
                  id="cpf"
                  placeholder="000.000.000-90"
                  errors={errors.cpf}
                  control={control}
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

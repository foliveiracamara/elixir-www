import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./validation";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InputControlled from "../../components/InputControlled";
import Title from "../../components/Title";
import Stepper from "./components/Stepper";
import api from "../../service/axios";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import style from "./Cadastro.module.scss";
import DropdownControlled from "../../components/DropdownControlled";
import Link from "next/link";

export default function Cadastro() {
  const [viewport, setViewport] = useState();
  const [btnWidth, setBtnWidth] = useState();
  const [page, setPage] = useState(0);
  const [tipo, setTipo] = useState("password");

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

  function mudar() {
    if (tipo === "password") {
      setTipo("text");
    } else {
      setTipo("password");
    }
  }

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
            {page == 0 ? (
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
                  <div className={style.next} onClick={() => setPage(1)}>
                    Prosseguir
                  </div>
                  <span className={style.terms}>
                    Ao Cadastrar você aceita os termos e condições da
                    plataforma.
                  </span>
                  <span className={style.ball} onClick={() => setPage(1)}>
                    <Stepper
                      display1={page == 1 ? "none" : ""}
                      display2={page == 0 ? "none" : ""}
                    />
                  </span>
                  {/* <span onClick={() => setPage(0)}>voltar</span> */}
                </div>
              </div>
            ) : (
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
                  type={tipo}
                />
                <span onClick={mudar} className={style.passwordIcon}>
                  {tipo === "password" ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </span>
                <div>
                  <InputControlled
                    title="Confirme sua senha:"
                    name="confirmeSenha"
                    id="senha"
                    placeholder="••••••••••"
                    errors={errors.senha}
                    control={control}
                    type={tipo}
                  />
                  {/* <span onClick={mudar} className={style.passwordIcon}>
                    {tipo === "password" ? (
                      <VisibilityOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </span> */}
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
                  <span className={style.ball} onClick={() => setPage(0)}>
                    <Stepper
                      display1={page == 1 ? "none" : ""}
                      display2={page == 0 ? "none" : ""}
                    />
                  </span>

                  {/* <span onClick={() => setPage(0)}>voltar</span> */}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

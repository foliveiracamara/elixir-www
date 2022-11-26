import { useState, useEffect, useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./validation";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InputControlled from "../../components/InputControlled";
import Title from "../../components/Title";
import api from "../../service/axios";
import { Toast } from "primereact/toast";

import style from "./Login.module.scss";
import Link from "next/link";

export default function Login() {
  const [viewport, setViewport] = useState();
  const [btnWidth, setBtnWidth] = useState();

  useEffect(() => {
    if (typeof window != "undefined") {
      if (window.innerWidth <= 768) {
        setViewport(24);
      } else if (window.innerWidth <= 1024) {
        setViewport(32);
        setBtnWidth(150);
      } else if (window.innerWidth >= 1440) {
        setViewport(56);
      }
    }
  }, []);

  const toast = useRef(null);

  const onSubmit = (e) => {
    api
      .post(`http://localhost:8080/doador/acesso/${e.email}/${e.senha}`, e)
      .then((res) => {
        console.log(res);
        toast.current.show({
          severity: "success",
          summary: "Login feito com sucesso!",
          life: 3000,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.current.show({
          severity: "error",
          summary: "Login não teve sucesso",
          detail:
            "Erro ao realizar o login do usuario",
          life: 3000,
        });
      });
  };

  const {
    formState: { errors },
    control,
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <section className={style.container}>
      <Header textColor="red" />
      <div className={style.content}>
        <Toast ref={toast} position="bottom-center" />
        <div className={style.left_side}>
          <div className={style.text}>
            <Title
              children={"Faça seu login."}
              fontSize={50}
              fontFamily={"PoppinsBold"}
              textAlign={"right"}
            />
            <h3>Você não possui uma conta?</h3>
          </div>
          <Link href={"/Cadastro"}>
            <Button
              label="Cadastre-se"
              fontFamily={"PoppinsBold"}
              backgroundColor={"#FF2939"}
              textColor={"#FFF"}
              marginRight={-68}
              width="70%"
            />
          </Link>
        </div>
        <div className={style.middle}>
          <img src="/images/blood-bag.svg" className={style.blood_bag_top} />
          <img src="/images/login-img.png" className={style.woman} />
          <img src="/images/blood-bag.svg" className={style.blood_bag_bottom} />
        </div>
        <div className={style.right_side}>
          <div className={style.forms}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputControlled
                title="Email"
                name="email"
                id="email"
                placeholder="joaos@gmail.com"
                errors={errors.email}
                control={control}
              />
              <InputControlled
                title="Senha"
                name="senha"
                id="senha"
                placeholder="••••••••••"
                errors={errors.senha}
                control={control}
              />
              <p className={style.markdown}>Esqueceu sua senha?</p>
              <Button
                label="Entrar"
                fontFamily={"PoppinsBold"}
                backgroundColor={"#FF2939"}
                textColor={"#FFF"}
                type="submit"
                width="100%"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { useEffect, useState } from "react";
import WhiteButton from "../Button/index";

import style from "./Header.module.scss";

export default function Header({ textColor }) {
  const [viewport, setViewport] = useState();

  useEffect(() => {
    if (typeof window != "undefined") {
      // console.log(window.innerWidth)
      if (window.innerWidth <= 768) {
        setViewport(24);
      } else if (window.innerWidth <= 1024) {
        setViewport(150);
      } else if (window.innerWidth >= 1440) {
        setViewport(200);
      }
    }
  }, []);
  return (
    <header className={style.container}>
      <div className={style.logo}>
        <Link href={"/"}>
          <img
            src="/images/elixir-logo.svg"
            className={style.img}
            alt="Elixir logo"
          />
        </Link>
        <span className={style.elixir}>elixir</span>
      </div>
      <div className={style.navbar}>
        <ul className={style.options}>
          <Link href={"/"}>
            <li className={style.active}>Início</li>
          </Link>
          <Link href={"/About"}>
            <li>Sobre</li>
          </Link>
          <Link href="/ReceiverOrder">
            <li>Solicite</li>
          </Link>
          <Link href={"/Faq"}>
            <li>FAQ</li>
          </Link>

          <li>Contato</li>
        </ul>
      </div>
      <div className={style.buttons}>
        <span className={style.login} style={{ color: textColor }}>
          <Link href={"/Login"}>Entrar</Link>
        </span>
        <Link href={"/Cadastro"}>
          <WhiteButton
            label="Seja um doador(a)"
            backgroundColor={"#FFF"}
            width={viewport}
            fontFamily={"PoppinsBold"}
          />
        </Link>
      </div>
    </header>
  );
}

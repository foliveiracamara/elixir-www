import Link from "next/link";
import style from "./FooterComponent.module.scss";

export default function FooterComponent() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.footerbar}>
          <ul className={style.options}>
            <Link href={"/"}>
              <li>Início</li>
            </Link>

            <Link href={"/Login"}>
              <li>Entrar</li>
            </Link>

            <Link href={"/Cadastro"}>
              <li>Cadastrar</li>
            </Link>

          <Link href={"/Faq"}>
              <li>FAQ</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={style.logo}>
        <img src="/images/ElixirFooter.png" />
      </div>
      <div className={style.subtitleContainer}>
        <div className={style.optionsSubtitle}>
          <b>Se inscreva para mais notícias:</b>
          <div className={style.containerInput}>
            <input
              type="email"
              className={style.input}
              placeholder=" Insira seu e-mail"
            />
            <button type="button" className={style.btn}>
              Se inscrever
            </button>
          </div>
          <b>elixir@email.com</b>
          <b>Contate o suporte</b>
        </div>
      </div>
    </div>
  );
}

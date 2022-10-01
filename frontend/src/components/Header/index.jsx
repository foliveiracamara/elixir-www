import WhiteButton from '../Button/index';

import style from './Header.module.scss';

export default function Header() {
  return (
    <header className={style.container}>
      <div className={style.logo}>
        <img src='/images/elixir-logo.svg' className={style.img} alt="Elixir logo"/>
        <span className={style.elixir}>elixir</span>
      </div>
      <div className={style.navbar}>
        <ul className={style.options}>
          <li>Início</li>
          <li>Sobre</li>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Contato</li>
        </ul>
      </div>
      <div className={style.buttons}>
        <span className={style.login}>Entrar</span>
        <WhiteButton children={"Seja um doador(a)"} backgroundColor={"#FFF"} />
      </div>
    </header>
  );
}

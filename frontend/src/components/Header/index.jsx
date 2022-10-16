import { useEffect, useState } from 'react';
import WhiteButton from '../Button/index';

import style from './Header.module.scss';

export default function Header({textColor}) {
  const [viewport, setViewport] = useState();

  useEffect(() => {
    if (typeof window != "undefined") {
      console.log(window.innerWidth)
        if (window.innerWidth <= 768) {
            setViewport(24)

        } else if (window.innerWidth <= 1024) {
          setViewport(150)
         
        } else if (window.innerWidth >= 1440) {
          setViewport(56)
        }
    }
}, [])
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
        <span className={style.login} style={{color: textColor}}>Entrar</span>
        <WhiteButton 
          children={"Seja um doador(a)"} 
          backgroundColor={"#FFF"} 
          width={viewport}
        />
      </div>
    </header>
  );
}

import Link from 'next/link';
import { useEffect, useState } from 'react';
import WhiteButton from '../Button/index';

import style from './Header.module.scss';

export default function Header({
  textColor,
  labelColorOne,
  labelColorTwo,
  labelColorThree,
  labelColorFour,
  labelColorFive,
}) {
  const [viewport, setViewport] = useState();

  useEffect(() => {
    if (typeof window != 'undefined') {
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
        <Link href={'/'}>
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
          <Link href={'/'}>
            <li style={{ color: labelColorOne }}>Início</li>
          </Link>
          <Link href={'/About'}>
            <li style={{ color: labelColorTwo }}>Sobre</li>
          </Link>
          <Link href="/ReceiverOrder">
            <li style={{ color: labelColorThree }}>Solicite</li>
          </Link>
          <Link href={'/Faq'}>
            <li style={{ color: labelColorFour }}>FAQ</li>
          </Link>
          <Link href={'mailto:support@elixir319.zendesk.com?subject=Preciso de ajuda!&body=Olá! Você pode me ajudar a resolver um problema?'}>
            <li style={{ color: labelColorFive }}>Contato</li>
          </Link>
        </ul>
      </div>
      <div className={style.buttons}>
        <span className={style.login} style={{ color: textColor }}>
          <Link href={'/Login'}>Entrar</Link>
        </span>
        <Link href={'/Cadastro'}>
          <WhiteButton
            label="Seja um doador(a)"
            backgroundColor={'#FFF'}
            width={viewport}
            fontFamily={'PoppinsBold'}
          />
        </Link>
      </div>
    </header>
  );
}

import Link from 'next/link';
import { useEffect, useState } from 'react';

import style from './HeaderLeads.module.scss';

export default function HeaderLeads({textColor}) {
  const [viewport, setViewport] = useState();

  useEffect(() => {
    if (typeof window != "undefined") {
      // console.log(window.innerWidth)
        if (window.innerWidth <= 768) {
            setViewport(24)

        } else if (window.innerWidth <= 1024) {
          setViewport(150)
         
        } else if (window.innerWidth >= 1440) {
          setViewport(200)
        }
    }
}, [])
  return (
    <header className={style.container }>
      <div className={style.logo}>
        <img src='/images/elixir-logo.svg' className={style.img} alt="Elixir logo"/>
        <span className={style.elixir}>elixir</span>
      </div>
      <div className={style.navbar}>
        <ul className={style.options}>
          <Link href={"/Home"}>
          <li>Início</li>
          </Link>
          <li>Contato</li>
        </ul>
      </div>
    </header>
  );
}

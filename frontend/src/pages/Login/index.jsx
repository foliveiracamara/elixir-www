import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Title from '../../components/Title';

import style from './Login.module.scss';

export default function Login() {
  const [viewport, setViewport] = useState();
  const [btnWidth, setBtnWidth] = useState();

  useEffect(() => {
    if (typeof window != "undefined") {
      console.log(window.innerWidth)
        if (window.innerWidth <= 768) {
            setViewport(24)

        } else if (window.innerWidth <= 1024) {
          setViewport(32)
          setBtnWidth(150) 
        } else if (window.innerWidth >= 1440) {
          setViewport(56)
        }
    }
}, [])

console.log(viewport)

  return (
    <section className={style.container}>
      <Header />
      <div className={style.content}>
        <div className={style.left_side}>
          <div className={style.text}>
            <Title children={'Faça seu login.'} fontSize={viewport} />
            <h3>Você não possui uma conta?</h3>
          </div>
          <Button
            children={'Cadastre-se'}
            backgroundColor={'#FF2939'}
            textColor={'#FFF'}
          />
        </div>
        <div className={style.middle}>
          <img src="/images/blood-bag.svg" className={style.blood_bag_top} />
          <img src="/images/login-img.png" className={style.woman} />
          <img src="/images/blood-bag.svg" className={style.blood_bag_bottom} />
        </div>
        <div className={style.right_side}>
          <Input type={'text'} placeholder={'Email'} />
          <Input type={'password'} placeholder={'••••••••••'} />
          <p className={style.markdown}>Esqueceu sua senha?</p>
          <Button
            children={'Entrar'}
            backgroundColor={'#FF2939'}
            textColor={'#FFF'}
            width={btnWidth}
          />
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schema } from './validation';
import Button from '../../components/Button';
import Header from '../../components/Header';
import InputControlled from '../../components/InputControlled';
import Title from '../../components/Title';
import api from '../../service/axios';

import style from './Login.module.scss';

export default function Login() {
  const [viewport, setViewport] = useState();
  const [btnWidth, setBtnWidth] = useState();

  useEffect(() => {
    if (typeof window != 'undefined') {
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

  const onSubmit = (e) => {
    api
      .post(`http://localhost:8080/doador/acesso/${e.email}/${e.senha}`)
      .catch((err) => {
        console.log('error: ', err);
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
      <Header />
      <div className={style.content}>
        <div className={style.left_side}>
          <div className={style.text}>
            <Title
              children={'Faça seu login.'}
              fontSize={65}
              fontFamily={'PoppinsBold'}
              textAlign={'right'}
            />
            <h3>Você não possui uma conta?</h3>
          </div>
          <Button
            label="Cadastre-se"
            fontFamily={'PoppinsBold'}
            backgroundColor={'#FF2939'}
            textColor={'#FFF'}
            marginRight={-48}
          />
        </div>
        <div className={style.middle}>
          <img src="/images/blood-bag.svg" className={style.blood_bag_top} />
          <img src="/images/login-img.png" className={style.woman} />
          <img src="/images/blood-bag.svg" className={style.blood_bag_bottom} />
        </div>
        <div className={style.right_side}>
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
              fontFamily={'PoppinsBold'}
              backgroundColor={'#FF2939'}
              textColor={'#FFF'}
              type="submit"
              width={btnWidth}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

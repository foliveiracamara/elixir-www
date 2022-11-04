import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Title from '../../components/Title';
import Stepper from './components/Stepper';
import api from '../../service/axios';

import style from './Cadastro.module.scss';

export default function Cadastro() {
  const [viewport, setViewport] = useState();
  const [btnWidth, setBtnWidth] = useState();
  const [page, setPage] = useState(0);
  const { register, handleSubmit } = useForm();

  const mock = {
    nome: 'felipe',
    email: 'felipe@gmail.com',
    cpf: '430.473.090-90',
    senha: '123456',
    sexo: 'masculino',
  };

  const registerUser = (e) => {
    api
      .post('http://localhost:8080/doador', register)
      .then((res) => {
        console.log('cadastrado!', res);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };

  useEffect(() => {
    // registerUser();
  }, [page]);

  return (
    <section className={style.container}>
      <Header />
      <div className={style.content}>
        <div className={style.left_side}>
          <div className={style.text}>
            <Title children={'Faça seu cadastro.'} fontSize={viewport} />
            <h3>Você já possui uma conta?</h3>
          </div>
          <Button
            label="Entrar"
            backgroundColor={'#FF2939'}
            textColor={'#FFF'}
            width={200}
          />
        </div>
        <div className={style.middle}>
          <img src="/images/blood-bag.svg" className={style.blood_bag_top} />
          <img src="/images/login-img.png" className={style.woman} />
          <img src="/images/blood-bag.svg" className={style.blood_bag_bottom} />
        </div>
        <div className={style.right_side}>
          <form onSubmit={handleSubmit(registerUser)}>
            {page == 0 ? (
              <div className={style.forms}>
                <label className={style.label}>Nome completo:</label>
                <Input
                  type={'text'}
                  placeholder={'Ex: João Silva'}
                  name={'nome'} 
                  register={register}
                  onChange={() => console.log(handleSubmit)}
                />

                <label className={style.label}>CPF: </label>
                <Input type={'password'} placeholder={'Ex: 000.000.000-00'} />

                <label className={style.label}>Genêro: </label>
                <Input type={'text'} placeholder={'Selecione'} />
              </div>
            ) : (
              <div className={style.forms}>
                <label className={style.label}>E-mail:</label>
                <Input type={'text'} placeholder={'Email'} />

                <label className={style.label}>Senha: </label>
                <Input type={'password'} placeholder={'••••••••••'} />

                <label className={style.label}>Confirme senha: </label>
                <Input type={'password'} placeholder={'••••••••••'} />
              </div>
            )}
          </form>
          <div className={style.btn_stepper}>
            <Button
              label={page == 0 ? 'Prosseguir' : 'Cadastrar'}
              type={page == 0 ? '' : 'submit'}
              backgroundColor={'#FF2939'}
              textColor={'#FFF'}
              width={btnWidth}
              onClick={() => setPage(1)}
            />
            <Stepper
              display1={page == 1 ? 'none' : ''}
              display2={page == 0 ? 'none' : ''}
            />
            <span style={{ display: 'none' }} className={style.terms}>
              Ao Cadastrar você aceita os termos e condições da plataforma.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

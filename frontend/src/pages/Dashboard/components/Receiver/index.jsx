import style from './Receiver.module.scss';

export default function Receiver({ nome, bloodType, donationPlace, uf, cep }) {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <span>
          <b>Nome doador: </b>
          {nome}
        </span>
        <br />
        <span>
          <b className={style.blood_type}>Tipo Sanguíneo: </b>
          {bloodType}
        </span>
        <br />
        <span>
          <b className={style.donation_place}>Local de doação: </b>
          {donationPlace}
        </span>
        <br />
        <span>
          <b className={style.uf}>UF: </b>
          {uf}
        </span>
        <br />
      </div>
      <div className={style.right}>
        <span>
          <b className={style.cep}>CEP: </b>
          {cep}
        </span>
        <br />
      </div>
    </div>
  );
}

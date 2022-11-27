import style from "./Receiver.module.scss";

export default function Receiver({
  children,
  nome,
  bloodType,
  donationPlace,
  uf,
  cep,
}) {
  return (
    <div className={style.container}>
      {children ? (
        children
      ) : (
        <>
          <div className={style.left}>
            {nome ? (
              <span>
                <b>Nome doador: </b>
                {nome}
              </span>
            ) : null}
            <br />
            {bloodType ? (
              <span>
                <b className={style.blood_type}>Tipo Sanguíneo: </b>
                {bloodType}
              </span>
            ) : null}

            <br />
            {donationPlace ? (
              <span>
                <b className={style.donation_place}>Local de doação: </b>
                {donationPlace}
              </span>
            ) : null}
            <br />
            {uf ? (
              <span>
                <b className={style.uf}>UF: </b>
                {uf}
              </span>
            ) : null}
            <br />
          </div>
          <div className={style.right}>
            {cep ? (
              <span>
                <b className={style.cep}>CEP: </b>
                {cep}
              </span>
            ) : null}
            <br />
          </div>
        </>
      )}
    </div>
  );
}

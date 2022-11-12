import style from './LastDonationCardd.module.scss';

// esse é o last donation card de verdade, mudar o nome do outro
export default function LastDonationCardd({ children }) {
  return (
    <div className={style.card}>{children}</div>
  )
}
import style from './LastDonationCard.module.scss'

export default function LastDonationCard({ text, date }) {
  return (
    <div className={style.card}>
      {text}: 
      <span className={style.date}>{date}</span>
    </div>
  )
}
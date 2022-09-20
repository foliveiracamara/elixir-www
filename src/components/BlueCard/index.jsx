import style from './BlueCard.module.scss';

export default function BlueCard({ imgSource, title, description }) {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <img className={style.img} src={imgSource} />
        <h3 className={style.title}>{title}</h3>
        <span className={style.description}>{description}</span>
      </div>
    </div>
  )
}
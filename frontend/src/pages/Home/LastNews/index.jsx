import ImageCardsList from "../components/ImageCardsList";

import style from './LastNews.module.scss';

export default function LastNews({title}) {
  return (
    <section className={style.container}>
      <h1 className={style.title}>{title}</h1>
      <ImageCardsList />
      <img 
        src={'/images/square-dotted.svg'}
        className={style.image}  
      />
    </section>
  )
}
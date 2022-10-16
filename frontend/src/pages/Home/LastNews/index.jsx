import { useEffect } from "react";
import ImageCardsList from "../components/ImageCardsList";
import Aos from 'aos';
import 'aos/dist/aos.css';

import style from './LastNews.module.scss';

export default function LastNews({title}) {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className={style.container} data-aos="fade">
      <h1 className={style.title}>{title}</h1>
      <ImageCardsList />
      <img 
        src={'/images/square-dotted.svg'}
        className={style.image}  
      />
    </section>
  )
}
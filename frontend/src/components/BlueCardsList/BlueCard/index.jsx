import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import style from './BlueCard.module.scss';


export default function BlueCard({ imgSource, title, description }) {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={style.container} data-aos="fade">
      <div className={style.content}>
        <img className={style.img} src={imgSource} />
        <h3 className={style.title}>{title}</h3>
        <span className={style.description}>{description}</span>
      </div>
    </div>
  )
}
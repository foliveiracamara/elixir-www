import EastIcon from '@mui/icons-material/East';
import Link from 'next/link';

import style from './ImageCard.module.scss';

export default function ImageCard({ imgSource, title, link }) {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <img className={style.img} src={imgSource} />
      </div>
      <div className={style.bottom}>
        <div className={style.dash}></div>
        <div className={style.text}>
          <div className={style.head}>
            <h1 className={style.title}>{title}</h1>
          </div>
          <span className={style.anchor}>
            <Link href={link}>Continue a leitura</Link>
            <EastIcon className={style.arrow} />
          </span>
        </div>
      </div>
    </div>
  );
}

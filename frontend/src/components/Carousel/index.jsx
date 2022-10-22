import { Carousel } from 'primereact/carousel';
import style from './Patrocinadores.module.scss';

export default function Patrocinadores() {
  
  const patrocinadores = [
    {
      image: '/images/Patrocinador1.png',
    },
    {
      image: '/images/Patrocinador2.png',
    },
    {
      image: '/images/Patrocinador3.png',
    },
    {
      image: '/images/Patrocinador4.png',
    },
    {
      image: '/images/Patrocinador5.png',
    },
    {
      image: '/images/Patrocinador6.png',
    },
    {
      image: '/images/Patrocinador7.png',
    },
    {
      image: '/images/Patrocinador8.png',
    },
    {
      image: '/images/Patrocinador9.jpg',
    },
    {
      image: '/images/Patrocinador10.png',
    },
  ];

  const template = (patrocinadores) => {
    return <img width={200} src={patrocinadores.image} />;
  };

  return (
    <div className={style.container} >
      <Carousel
        circular
        autoplayInterval={1000}
        value={patrocinadores}
        numVisible={5}
        numScroll={1}
        itemTemplate={template}
      />
    </div>
  );
}

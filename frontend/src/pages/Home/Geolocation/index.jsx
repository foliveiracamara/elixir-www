import RedShadow from '../../../components/RedShadow';
import Title from '../../../components/Title';
import Subtitle from '../../../components/Subtitle';
import Button from '../../../components/Button';

import style from './Geolocation.module.scss';

export default function Geolocation() {
  return (
    <section className={style.container}>
      {/* <RedShadow       
        right={700}
        bottom={100}
      /> */}
      {/* <RedShadow 
        right={0}
        bottom={0}
        top={300}
      /> */}
      <div className={style.text}>
        <Title 
          children={'Localizar hemocentros com mapa de geolocalização'} 
        />
        <Subtitle
          children={'Geolocalizar hemocentros com mapa de geolocalização'}
        />
      </div>
      <img 
        src="/images/map-placeholder.svg" 
        className={style.image}
      />
      <div className={style.redirect}> 
        <Title 
          fontSize={32} 
          children={"Quer saber mais sobre nossa plataforma?"}
        />
        <Button 
          children={"Acesse nossa FAQ"}
          backgroundColor={"#FF2939"}
          textColor={"#FFF"}  
          width={400}
        />
      </div>
    </section>
  );
}

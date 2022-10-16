import Button from '../../../components/Button';
import style from './Infos.module.scss';

export default function Infos() {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <div className={style.text}>
          <h3 className={style.title}>Obtenha dicas e informações sobre a doação de sangue</h3>
          <Button 
            children={"Visualizar guia"}
            width={300}
            backgroundColor={"#1E344F"}
            textColor={"#FFF"}
          />
        </div>
        <div className={style.image}>
          <img src="/images/info-doc-svg.svg" className={style.doc}/>
        </div>
      </div>
    </section>
  );
}

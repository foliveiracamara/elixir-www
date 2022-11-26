import Title from '../../../../components/Title';
import ImageCard from './ImageCard';

import style from './ImageCardsList.module.scss';

export default function ImageCardsList() {
  const listData = [
    {
      imgSource: '/images/sangue-01.jpeg',
      title: 'Doação de sangue: Pacientes com varíola do macaco não devem doar sangue',
      link: 'https://www.cnnbrasil.com.br/saude/pacientes-com-variola-dos-macacos-nao-devem-doar-sangue-ate-fim-dos-sintomas-diz-anvisa/'
    },
    {
      imgSource: '/images/sangue-caiu.jpeg',
      title: 'Doação de sangue: Doações de sangue caíram 30% em setembro nos bancos',
      link: 'https://www.cnnbrasil.com.br/saude/doacoes-de-sangue-cairam-30-em-setembro-nos-bancos-do-inca/'
    },
    {
      imgSource: '/images/falta-sangue.jpeg',
      title: 'Doação de sangue: SP com estoque de sangue em nível crítico',
      link: 'https://www.cnnbrasil.com.br/nacional/estado-de-sao-paulo-esta-com-estoque-sanguineo-critico-diz-fundacao-pro-sangue/'
    },
  ];

  return (
    <section className={style.container}>
      <div className={style.title}>
        <Title children={'Últimas notícias'} fontSize={56}/>
      </div>
      <div className={style.list}>
        {listData.map((card) => (
          <ImageCard
            key={card.title}
            imgSource={card.imgSource}
            title={card.title}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
}

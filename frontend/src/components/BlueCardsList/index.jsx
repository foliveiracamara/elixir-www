import BlueCard from './BlueCard';
import style from './BlueCardsList.module.scss';

export default function BlueCardsList() {

  const listData = [
    {
      imgSource: '/images/paper.svg',
      title: 'Ajudar o próximo',
      description: 'A partir da nossa lista de receptores, você tem acesso à informações de pessoas que necessitam da sua ajuda com doação sanguínea.',
    },
    {
      imgSource: '/images/Ambulance.svg',
      title: 'Verificar suas doações',
      description: 'É possível visualizar a data da próxima doação, bem como procurar hemocentros próximos e também liberar conquistas.',
    },
    {
      imgSource: '/images/Masker.svg',
      title: 'Entender mais sobre a causa',
      description: 'Aqui você aprende sobre doação sanguínea de forma verdadeira, podendo divulgar informações seguras e claras sobre a necessidade de doar.',
    },
  ];
  
  return (
    <div>
    <div className={style.container}>
      {listData.map((card, index) => (
        <BlueCard
          key={index}
          imgSource={card.imgSource}
          title={card.title}
          description={card.description}
        />
      ))}

    </div>
    </div>
  )
}
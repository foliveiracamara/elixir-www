import BlueCard from './BlueCard';
import style from './CardsList.module.scss';

export default function BlueCardsList() {

  const listData = [
    {
      imgSource: '/images/paper.svg',
      title: 'Monte seu perfil',
      description: 'is simply dummy text of the printing and typesetting industry. ',
    },
    {
      imgSource: '/images/Ambulance.svg',
      title: 'Localizar hemocentros',
      description: 'is simply dummy text of the printing and typesetting industry. ',
    },
    {
      imgSource: '/images/Masker.svg',
      title: 'Seus dados seguros',
      description: 'is simply dummy text of the printing and typesetting industry. kjshdfchkfsdb lkqbf lhqbhasb  ',
    },
  ];
  
  return (
    <section className={style.container}>
      {listData.map((card, index) => (
        <BlueCard
          key={index}
          imgSource={card.imgSource}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  )
}
import ImageCard from './ImageCard';

import style from './ImageCardsList.module.scss';

export default function ImageCardsList() {

  const listData = [
    {
      imgSource: '/images/notebook.png',
      title: 'Doação de sangue: notícia 1'
    },
    {
      imgSource: '/images/dad-with-kid.png',
      title: 'Doação de sangue: notícia 2'
    },
    {
      imgSource: '/images/game.png',
      title: 'Doação de sangue: notícia 3'
    },
  ];
  
  return (
    <section className={style.container}>
      {listData.map((card, index) => (
        <ImageCard
         imgSource={card.imgSource}
         title={card.title}
        />
      ))}
    </section>
  )
}
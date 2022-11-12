import Button from '../../../../components/Button'

import style from './Menu.module.scss'

export default function Menu({ profileName, age, bloodType, boneMarrowDonor, organDonor }) {
  const badges = [
    {src: '/images/heart-badge.svg'},
    {src: '/images/lung-badge.svg'},
    {src: '/images/pott-badge.svg'},
    {src: '/images/dna-badge.svg'}, 
  ]
  
  return (
    <div className={style.container}>
      <div className={style.content}> 
        <div className={style.top}>
          <img src='/images/profile-pic.svg' className={style.profile_pic}/>
          <h3 className={style.name}>Lilian Oliveira</h3>
          <div className={style.infos}>
            <span>Idade: <b>23</b></span>
            <span>Tipo sanguíneo: <b>O+</b></span>
            <span>Doador de medula: <b>Sim</b></span>
            <span>Doador de orgãos: <b>Sim</b></span>
          </div>
          <div className={style.buttons}>
            <Button
              backgroundColor={'#FF2939'}
              textColor={'#FFF'}
              fontSize={14}
              width={220}
              label={'Editar informações'}
            />
            <Button 
              backgroundColor={'#FF2939'}
              textColor={'#FFF'}
              fontSize={14}
              width={220}
              label={'Atualizar data de doação'}
            />
          </div>
          <hr />
        </div>
        <div className={style.bottom}>
          <h3 className={style.title}>Minhas insígnias</h3>
          <div className={style.badges}>
            {badges.map((badge) => (
              <img src={badge.src} className={style.badge}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
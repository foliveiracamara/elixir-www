import style from './Input.module.scss'

export default function Input({ placeholder  }) {
  return (
    <input 
      type='text'
      className={style.input}
      placeholder={placeholder}
    />
  )
}
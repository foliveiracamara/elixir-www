import style from './Input.module.scss'

export default function Input({ placeholder, type  }) {
  return (
    <input 
      type={type}
      className={style.input}
      placeholder={placeholder}
    />
  )
}
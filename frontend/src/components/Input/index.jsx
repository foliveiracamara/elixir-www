import style from './Input.module.scss'

export default function Input({ placeholder, type, name, value, onChange, register,  ... inputProps  }) {
  return (
    <input 
      className={style.input}
      placeholder={placeholder}
      onChange={onChange}
      ref={register}
      { ... inputProps }
    />
  )
}
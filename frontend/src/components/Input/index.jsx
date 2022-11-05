import style from "./Input.module.scss";

export default function Input({
  errors,
  title,
  id,
  ...rest
}) {
  return (
    <div className={style.container}>
      <div>
        <label htmlFor={id}>{title}</label>
      </div>
      <input {...rest} id={id} className={style.input} />
      <div className={style.error}>{errors?.message}</div>
    </div>
  );
}


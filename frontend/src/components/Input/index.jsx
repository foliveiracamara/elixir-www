import style from "./Input.module.scss";
import MaskedInput from "react-text-mask";

export default function Input({
  errors,
  title,
  id,
  icon,
  defaultValue,
  width,
  height,
  ...rest
}) {
  return (
    <div className={style.container}>
      <div>
        <label htmlFor={id}>{title}</label>
      </div>

      <input
        {...rest}
        id={id}
        className={style.input}
        icon={icon}
        defaultValue={defaultValue}
        width={width}
        height={height}
      />

      <div className={style.error}>{errors?.message}</div>
    </div>
  );
}

export function InputMask({
  guide,
  mask,
  errors,
  title,
  id,
  icon,
  defaultValue,
  ...rest
}) {
  return (
    <div className={style.container}>
      <div>
        <label htmlFor={id}>{title}</label>
      </div>

      {/* <input {...rest} id={id} className={style.input} icon={icon} /> */}
      <MaskedInput
        {...rest}
        id={id}
        className={style.input}
        icon={icon}
        mask={mask}
        guide={false}
        defaultValue={defaultValue}
      />

      <div className={style.error}>{errors?.message}</div>
    </div>
  );
}

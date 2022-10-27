import style from "./Select.module.scss";

export default function Select({ name, width, height }) {
  return (
    <select
      className={style.select}
      name={name}
      width={width}
      height={height}
    />
  );
}

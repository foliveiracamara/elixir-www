import style from "./Select.module.scss";

import { Dropdown as PrimeDropdown, } from "primereact/dropdown";

export default function Dropdown({ errors, disabled, options, title, ...rest }) {
  return (
    <div className={style.dropdown_demo}>
      <label>{title}</label>
      <PrimeDropdown
        {...rest}
        className={style.dropdown}
        disabled={disabled}
        options={options || []}
        placeholder="Selecione"
        emptyMessage="Nenhum Item encontrado"
      />

      <div className={style.error}>{errors?.message}</div>
    </div>
  );
}

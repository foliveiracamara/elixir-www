import { Control, Controller } from "react-hook-form";
import Dropdown from "../Dropdown";

const DropdownControlled = ({ defaultValue, name, control, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Dropdown
          {...rest}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
          defaultValue={defaultValue}
        />
      )}
    />
  );
};

export default DropdownControlled;

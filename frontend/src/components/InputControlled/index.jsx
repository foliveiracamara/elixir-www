import { Control, Controller } from "react-hook-form";
import Input from "../Input";

const InputControlled = ({ name, control, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Input
          {...rest}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
        />
      )}
    />
  );
};

export default InputControlled;

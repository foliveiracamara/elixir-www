import { Control, Controller } from "react-hook-form";
import Input, { InputMask } from "../Input";

export const InputControlledMask = ({
  defaultValue,
  mask,
  name,
  control,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <InputMask
          {...rest}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
          mask={mask}
          defaultValue={defaultValue}
        />
      )}
    />
  );
};
const InputControlled = ({ icon, defaultValue, name, control, ...rest }) => {
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
          defaultValue={defaultValue}
          icon={icon}
        />
      )}
    />
  );
};
export default InputControlled;

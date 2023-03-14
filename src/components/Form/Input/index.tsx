import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { StyledInput } from "./style";

interface IInputProps {
  label: string;
  type: "text" | "email" | "password" | "url";
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  classname?: string;
}

export const Input = ({
  label,
  type,
  placeholder,
  register,
  error,
  classname,
}: IInputProps) => {
  return (
    <StyledInput>
      {label && <label htmlFor={register.name}>{label}</label>}
      <input
        type={type}
        className={classname}
        id={register.name}
        placeholder={placeholder}
        {...register}
      />
      {error && <p>{error.message}</p>}
    </StyledInput>
  );
};

import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { StyledInput } from "./style";

interface IInputProps {
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export const Input = ({
  label,
  type,
  placeholder,
  register,
  error,
}: IInputProps) => {
  return (
    <StyledInput>
      {label && <label htmlFor={register.name}>{label}</label>}
      <input
        type={type}
        id={register.name}
        placeholder={placeholder}
        {...register}
      />
      {error && <p>{error.message}</p>}
    </StyledInput>
  );
};

import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { StyledSelect } from "./style";

interface ISelectProps {
  label: string;
  children: React.ReactNode;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export const Select = ({ children, register, label, error }: ISelectProps) => {
  return (
    <StyledSelect>
      {label && <label htmlFor={register.name}>{label}</label>}
      <select id={label} {...register}>
        {children}
      </select>
      {error && <p>{error.message}</p>}
    </StyledSelect>
  );
};

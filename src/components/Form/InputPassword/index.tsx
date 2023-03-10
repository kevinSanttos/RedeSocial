import React, { useState } from "react";
import { StyledInputPassword } from "./style";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface IInputPasswordProps {
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export const InputPassword = ({
  label,
  type,
  placeholder,
  register,
  error,
}: IInputPasswordProps) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <StyledInputPassword>
      {label && <label htmlFor={register.name}>{label}</label>}
      <input
        type={isHidden ? "password" : "text"}
        id={register.name}
        placeholder={placeholder}
        {...register}
      />
      <button type={"button"} onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? <MdVisibilityOff /> : <MdVisibility />}
      </button>
      {error && <p>{error.message}</p>}
    </StyledInputPassword>
  );
};

import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { IUserLogin } from "../../../contexts/UserContext/@types";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";

import { StyledLoginForm } from "./style";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>();
  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<IUserLogin> = (formData) => {
    userLogin(formData);
  };

  return (
    <>
      <StyledLoginForm onSubmit={handleSubmit(submit)}>
        <h3>Login</h3>
        <Input
          label={"Email"}
          type={"email"}
          placeholder={"Digite aqui seu email"}
          register={register("email")}
          error={errors.email}
        />
        <InputPassword
          label={"Senha"}
          type={"password"}
          placeholder={"Digite aqui sua senha"}
          register={register("password")}
          error={errors.password}
        />
        <button className="enter" type="submit">
          Entrar
        </button>
        <div className="divRegister">
          <p>Ainda não possui uma conta?</p>
          <div className="goToRegister">
            <Link to="/register">Cadastre-se</Link>
          </div>
        </div>
      </StyledLoginForm>
      <footer></footer>
    </>
  );
};

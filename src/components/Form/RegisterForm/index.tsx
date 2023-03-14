import { Link } from "react-router-dom";
import { StyledRegisterForm } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  IUserRegister,
  IUserRegisterForm,
} from "../../../contexts/UserContext/@types";
import { Input } from "../Input";
import { Select } from "../Select";
import { InputPassword } from "../InputPassword";

export const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegisterForm>();

  const submit: SubmitHandler<IUserRegisterForm> = (formData) => {
    const { confirmPassword, ...data } = formData;
    userRegister(data);
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit(submit)}>
      <div className="backToLogin">
        <h3>Cadastro</h3>
        <Link to={"/"}>Voltar para o login</Link>
      </div>
      <Input
        label={"Name"}
        type={"text"}
        placeholder={"Digite aqui seu nome"}
        register={register("name")}
        error={errors.name}
      />
      <Input
        label="Seu e-mail"
        type="email"
        placeholder="Digite seu email"
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
      <InputPassword
        label={"Confirmar Senha"}
        type={"password"}
        placeholder={"Digite novamente sua senha"}
        register={register("confirmPassword")}
        error={errors.confirmPassword}
      />
      <Select
        label={"Profissão"}
        register={register("profession")}
        error={errors.profession}
      >
        <option value="">Selecione sua profissão</option>
        <option value="frontEnd">Front-End</option>
        <option value="backEnd">Back-End</option>
        <option value="fullStack">Full-Stack</option>
      </Select>
      <Select label={"Nível"} register={register("level")} error={errors.level}>
        <option value="">Selecione seu nível </option>
        <option value="junior">Júnior</option>
        <option value="pleno">Pleno</option>
        <option value="senior">Sênior</option>
      </Select>
      <Input
        label="Sua foto de perfil"
        type="url"
        placeholder="Coloque o link da sua foto"
        register={register("imgPerfil")}
        error={errors.imgPerfil}
      />
      <Input
        label="Sua foto de capa"
        type="url"
        placeholder="Coloque o link da sua foto de capa"
        register={register("imgCapa")}
        error={errors.imgCapa}
      />
      <button className="registerButton" type="submit">
        Cadastrar
      </button>
    </StyledRegisterForm>
  );
};

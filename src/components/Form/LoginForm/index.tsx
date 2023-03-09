import { Link } from "react-router-dom";
import { StyledLoginForm } from "./style";

export const LoginForm = () => {
  return (
    <StyledLoginForm>
      <h1>Login</h1>
      <div>
        <p>Email</p>
        <input type="email" placeholder="Digite seu email" />
      </div>
      <div>
        <p>Senha</p>
        <input type="password" placeholder="Digite sua senha" />
      </div>
      <button>Entrar</button>
      <p>Ainda não possui uma conta?</p>
      <Link to={"/register"}>Cadastre-se</Link>
    </StyledLoginForm>
  );
};

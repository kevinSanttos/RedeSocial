import { Link } from "react-router-dom";
import { StyledRegisterForm } from "./style";

export const RegisterForm = () => {
  return (
    <StyledRegisterForm>
      <div>
        <h1>Cadastro</h1>
        <Link to={"/"}>Voltar para o login</Link>
      </div>
      <div>
        <p>Nome</p>
        <input type="text" placeholder="Digite seu nome" />
      </div>
      <div>
        <p>Email</p>
        <input type="email" placeholder="Digite seu email" />
      </div>
      <div>
        <p>Senha</p>
        <input type="password" placeholder="Digite sua senha" />
      </div>
      <div>
        <p>Confirmar Senha</p>
        <input type="password" placeholder="Confirme sua senha" />
      </div>
      <div>
        <p>Profissão</p>
        <select name="" id="">
          <option value="">Selecione sua profissão</option>
          <option value="frontEnd">Front-End</option>
          <option value="backEnd">Back-End</option>
          <option value="fullStack">Full-Stack</option>
        </select>
      </div>
      <div>
        <p>Nível</p>
        <select name="" id="">
          <option value="">Selecione seu nível</option>
          <option value="junior">Júnior</option>
          <option value="pleno">Plêno</option>
          <option value="senior">Sênior</option>
        </select>
      </div>
      <button>Cadastrar</button>
    </StyledRegisterForm>
  );
};

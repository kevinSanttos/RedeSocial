import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Form/LoginForm";
import { StyledHeader, StyledMainLoginPage } from "./style";
import { Header } from "../../components/Header";

export const LoginPage = () => {
  return (
    <div>
      <Header link= {'/register'} text= {'Cadastrar'}/>
      <StyledMainLoginPage>
        <LoginForm />
      </StyledMainLoginPage>
    </div>
  );
};

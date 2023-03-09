import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Form/LoginForm";
import { StyledMainLoginPage } from "./style";

export const LoginPage = () => {
  return (
    <div>
      <header>
        <h1>Logo do site</h1>
        <Link to={"/register"}>Cadastrar</Link>
      </header>
      <StyledMainLoginPage>
        <LoginForm />
      </StyledMainLoginPage>
    </div>
  );
};

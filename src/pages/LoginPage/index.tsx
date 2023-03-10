import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Form/LoginForm";
import { StyledHeader, StyledMainLoginPage } from "./style";

export const LoginPage = () => {
  return (
    <div>
      <StyledHeader>
        <nav>
          <h1>Logo do site</h1>
          <Link to={"/register"}>Cadastrar</Link>
        </nav>
      </StyledHeader>
      <StyledMainLoginPage>
        <LoginForm />
      </StyledMainLoginPage>
    </div>
  );
};

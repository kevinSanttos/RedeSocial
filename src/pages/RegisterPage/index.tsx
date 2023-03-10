import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { StyledHeader, StyledMainLoginPage } from "../LoginPage/style";

export const RegisterPage = () => {
  return (
    <div>
      <StyledHeader>
        <nav>
          <h1>Logo do site</h1>
          <Link to={"/"}>Login</Link>
        </nav>
      </StyledHeader>
      <StyledMainLoginPage>
        <RegisterForm />
      </StyledMainLoginPage>
    </div>
  );
};

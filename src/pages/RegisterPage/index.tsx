import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { Header } from "../../components/Header";
import { StyledHeader, StyledMainLoginPage } from "../LoginPage/style";

export const RegisterPage = () => {
  return (
    <div>
       <Header link= {'/'} text= {'Login'}/>
      <StyledMainLoginPage>
        <RegisterForm />
      </StyledMainLoginPage>
    </div>
  );
};

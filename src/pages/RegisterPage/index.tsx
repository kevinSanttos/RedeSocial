import { StyledMainLoginPage } from "../../components/Form/LoginForm/style";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { StyledMainRegisterPage } from "../../components/Form/RegisterForm/style";
import { Header } from "../../components/Header";

export const RegisterPage = () => {
  return (
    <>
      <Header link={"/"} text={"Login"} />
      <StyledMainRegisterPage>
        <RegisterForm />
      </StyledMainRegisterPage>
    </>
  );
};

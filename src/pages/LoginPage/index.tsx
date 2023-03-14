import { LoginForm } from "../../components/Form/LoginForm";
import { StyledMainLoginPage } from "../../components/Form/LoginForm/style";
import { Header } from "../../components/Header";

export const LoginPage = () => {
  return (
    <>
      <Header link={"/register"} text={"Cadastrar"} />
      <StyledMainLoginPage>
        <LoginForm />
      </StyledMainLoginPage>
    </>
  );
};

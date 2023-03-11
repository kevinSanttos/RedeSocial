import { HeaderLogout } from "../../components/HeaderLogout";
import { Main } from "./style";

export const UserPage = () => {
  return (
    <div>
        <HeaderLogout link={"/dashboard"} page={"Retorna ao Feed"}/>
      <Main>
        <div className="fotoCapa">
          <img src="" alt="" />
          <div className="fotoPerfil">
            <img src="../../assets/perfil.jpg" alt="" />
          </div>
        </div>
        <section className="container">

        </section>
      </Main>
    </div>
  );
};
